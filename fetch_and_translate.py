#!/usr/bin/env python3
"""
Anthropic Blog 爬蟲 + 翻譯腳本
自動抓取最新文章，翻譯成繁體中文，保存為 JSON
"""

import requests
import json
import os
import re
from datetime import datetime
from bs4 import BeautifulSoup
import anthropic

client = anthropic.Anthropic(api_key=os.environ.get("CLAUDE_API_KEY"))

OUTPUT_PATH = "public/articles.json"


def fetch_anthropic_blog():
    """爬取 Anthropic Blog 最新文章"""
    try:
        url = "https://www.anthropic.com/news"
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        response = requests.get(url, headers=headers, timeout=15)
        response.encoding = 'utf-8'
        soup = BeautifulSoup(response.content, 'html.parser')
        articles = []
        seen_hrefs = set()

        # 精準選取 /news/ 路徑的文章連結，排除純導覽連結
        for a in soup.select('a[href^="/news/"]'):
            href = a.get('href', '')
            text = a.get_text(strip=True)
            if href not in seen_hrefs and len(href) > 7 and '-' in href and len(text) > 15:
                seen_hrefs.add(href)
                full_url = 'https://www.anthropic.com' + href
                # 清理標題：移除開頭的日期或分類前綴
                clean = re.sub(r'^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d+,\s+\d{4}', '', text).strip()
                clean = re.sub(r'^(Product|Announcements|Policy|Research|News|Update)\s*', '', clean).strip()
                if clean:
                    articles.append({'title': clean, 'url': full_url, 'preview': fetch_preview(full_url)})
            if len(articles) >= 10:
                break
        return articles
    except Exception as e:
        print(f"爬蟲錯誤: {e}")
        return []


def fetch_preview(url):
    """獲取文章預覽文字"""
    try:
        r = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'}, timeout=10)
        r.encoding = 'utf-8'
        soup = BeautifulSoup(r.content, 'html.parser')
        for tag in soup.find_all(['script', 'style', 'nav', 'header', 'footer']):
            tag.decompose()
        body = soup.find('article') or soup.find('main') or soup.find('body')
        return body.get_text(separator=' ', strip=True)[:800] if body else ''
    except:
        return ''


def translate_to_chinese(text, title):
    """使用 Claude API 翻譯成繁體中文"""
    try:
        msg = client.messages.create(
            model="claude-opus-4-6",
            max_tokens=500,
            messages=[{"role": "user", "content": f"""將以下文章標題和摘要翻譯成繁體中文。
保留 AI、LLM、Claude 等專業術語。摘要限 100 字以內。
嚴格按格式回覆（不加其他文字）：
標題：[翻譯後標題]
摘要：[翻譯後摘要]

【標題】{title}
【內容】{text[:600]}"""}]
        )
        return msg.content[0].text
    except Exception as e:
        print(f"翻譯錯誤: {e}")
        return f"標題：{title}\n摘要：翻譯失敗"


def parse_translation(text):
    title, excerpt = "", ""
    for line in text.split('\n'):
        line = line.strip()
        if line.startswith('標題：'):
            title = line[3:].strip()
        elif line.startswith('摘要：'):
            excerpt = line[3:].strip()
    return title, excerpt


def get_category(title):
    t = title.lower()
    if any(k in t for k in ['safety', 'policy', 'ethics', 'trust', 'harm']):
        return 'AI 安全'
    if any(k in t for k in ['vision', 'image', 'multimodal', 'video']):
        return '視覺模型'
    if any(k in t for k in ['language', 'text', 'nlp']):
        return '自然語言處理'
    if any(k in t for k in ['claude', 'sonnet', 'opus', 'haiku']):
        return 'Claude'
    return '多模態'


def load_existing():
    try:
        if os.path.exists(OUTPUT_PATH):
            with open(OUTPUT_PATH, 'r', encoding='utf-8') as f:
                return json.load(f)
    except:
        pass
    return []


def save(articles):
    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        json.dump(articles, f, ensure_ascii=False, indent=2)
    print(f"✅ 已儲存 {len(articles)} 篇文章到 {OUTPUT_PATH}")


def main():
    print("🤖 開始抓取和翻譯...")
    raw = fetch_anthropic_blog()
    if not raw:
        print("❌ 找不到文章，保留現有資料")
        return
    print(f"✅ 找到 {len(raw)} 篇文章，開始翻譯...")

    processed = []
    for i, a in enumerate(raw):
        print(f"  翻譯 {i+1}/{len(raw)}: {a['title'][:40]}")
        translation = translate_to_chinese(a['preview'], a['title'])
        title_cn, excerpt = parse_translation(translation)
        processed.append({
            'id': i + 1,
            'title_en': a['title'],
            'title_cn': title_cn or a['title'],
            'excerpt': excerpt or '暫無摘要',
            'url': a['url'],
            'category': get_category(a['title']),
            'difficulty': '中級',
            'source': 'Anthropic Blog',
            'date': datetime.now().strftime('%Y-%m-%d'),
            'readTime': max(3, len(a['preview']) // 200),
            'views': 0
        })

    existing = load_existing()
    seen = set()
    merged = []
    for art in processed + existing:
        if art['url'] not in seen:
            seen.add(art['url'])
            merged.append(art)
    for i, a in enumerate(merged):
        a['id'] = i + 1

    save(merged[:50])
    print("✅ 完成！")


if __name__ == "__main__":
    main()
