#!/usr/bin/env python3
"""
Anthropic Blog 爬蟲 + 翻譯腳本
自動抓取最新文章，翻譯成繁體中文，保存為 JSON
"""

import requests
import json
import os
from datetime import datetime
from bs4 import BeautifulSoup
import anthropic

# 初始化 Claude 客戶端
client = anthropic.Anthropic(api_key=os.environ.get("CLAUDE_API_KEY"))

def fetch_anthropic_blog():
    """爬取 Anthropic Blog 最新文章"""
    try:
        # Anthropic 新聞頁面
        url = "https://www.anthropic.com/news"
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        
        response = requests.get(url, headers=headers, timeout=10)
        response.encoding = 'utf-8'
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        articles = []
        
        # 查找文章鏈接（根據網站結構調整選擇器）
        # 這是一個通用的查找方式，可能需要根據實際網站結構調整
        article_links = soup.find_all('a', {'class': ['news-item', 'blog-post', 'article-link']})
        
        # 如果上面找不到，嘗試其他方式
        if not article_links:
            article_links = soup.find_all('a', href=True)
            article_links = [a for a in article_links if 'news' in a.get('href', '') or 'blog' in a.get('href', '')]
        
        for link in article_links[:10]:  # 最多抓 10 篇
            title = link.get_text(strip=True)
            href = link.get('href', '')
            
            # 處理相對 URL
            if href.startswith('/'):
                href = 'https://www.anthropic.com' + href
            
            if title and href:
                article_preview = fetch_article_preview(href)
                
                articles.append({
                    'title': title,
                    'url': href,
                    'preview': article_preview,
                    'fetched_at': datetime.now().isoformat()
                })
        
        return articles
    
    except Exception as e:
        print(f"爬蟲錯誤: {e}")
        return []

def fetch_article_preview(url):
    """獲取文章預覽"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=10)
        response.encoding = 'utf-8'
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # 查找文章主要內容
        content = soup.find('article') or soup.find('main') or soup.find('body')
        
        if content:
            # 提取前 500 字
            text = content.get_text(strip=True)[:500]
            return text
        return "無法獲取預覽"
    
    except Exception as e:
        print(f"獲取文章預覽失敗: {e}")
        return "無法獲取預覽"

def translate_to_chinese(english_text, title):
    """使用 Claude API 翻譯成繁體中文"""
    try:
        prompt = f"""請將以下文章標題和內容翻譯成繁體中文。

要求：
1. 保留專業術語（如 AI、LLM、Claude 等）不翻譯
2. 翻譯應該精確且易於閱讀
3. 保持原文的邏輯和結構
4. 不要過度簡化

【標題】
{title}

【內容】
{english_text[:1000]}

請提供翻譯結果，格式為：
標題：[翻譯後的標題]
摘要：[翻譯後的摘要，200字以內]
"""
        
        message = client.messages.create(
            model="claude-opus-4-6",
            max_tokens=1000,
            messages=[
                {"role": "user", "content": prompt}
            ]
        )
        
        return message.content[0].text
    
    except Exception as e:
        print(f"翻譯錯誤: {e}")
        return f"標題：{title}\n摘要：翻譯失敗"

def parse_translation(translation_text):
    """解析翻譯結果，提取標題和摘要"""
    try:
        lines = translation_text.split('\n')
        title = ""
        excerpt = ""
        
        for line in lines:
            if line.startswith('標題：'):
                title = line.replace('標題：', '').strip()
            elif line.startswith('摘要：'):
                excerpt = line.replace('摘要：', '').strip()
        
        return title, excerpt
    except:
        return "", ""

def process_articles(articles):
    """處理文章並翻譯"""
    processed = []
    
    for i, article in enumerate(articles):
        print(f"處理第 {i+1}/{len(articles)} 篇: {article['title']}")
        
        # 翻譯文章
        translation = translate_to_chinese(article['preview'], article['title'])
        title_cn, excerpt_cn = parse_translation(translation)
        
        processed_article = {
            'id': i + 1,
            'title_en': article['title'],
            'title_cn': title_cn or article['title'],
            'excerpt': excerpt_cn,
            'url': article['url'],
            'category': 'Claude',
            'difficulty': '進階',
            'source': 'Official Blog',
            'date': datetime.now().strftime('%Y-%m-%d'),
            'readTime': 8,
            'views': 0
        }
        
        processed.append(processed_article)
    
    return processed

def load_existing_articles():
    """加載現有文章"""
    try:
        if os.path.exists('articles.json'):
            with open('articles.json', 'r', encoding='utf-8') as f:
                return json.load(f)
    except:
        pass
    return []

def save_articles(articles):
    """保存文章到 JSON"""
    try:
        with open('articles.json', 'w', encoding='utf-8') as f:
            json.dump(articles, f, ensure_ascii=False, indent=2)
        print(f"✅ 成功保存 {len(articles)} 篇文章到 articles.json")
    except Exception as e:
        print(f"❌ 保存文章失敗: {e}")

def main():
    """主函數"""
    print("🤖 開始自動抓取和翻譯...")
    
    # 爬取文章
    print("📥 正在爬取 Anthropic Blog...")
    articles = fetch_anthropic_blog()
    
    if not articles:
        print("❌ 沒有找到文章")
        return
    
    print(f"✅ 找到 {len(articles)} 篇文章")
    
    # 翻譯文章
    print("🔄 正在翻譯文章...")
    processed = process_articles(articles)
    
    # 加載現有文章
    existing = load_existing_articles()
    
    # 合併（新文章在前）
    all_articles = processed + existing
    
    # 去除重複（根據 URL）
    seen_urls = set()
    unique_articles = []
    for article in all_articles:
        if article['url'] not in seen_urls:
            seen_urls.add(article['url'])
            unique_articles.append(article)
    
    # 保存
    save_articles(unique_articles[:50])  # 最多保留 50 篇
    
    print("✅ 自動化流程完成！")

if __name__ == "__main__":
    main()
