import requests
from bs4 import BeautifulSoup
import json
import os
import re
from anthropic import Anthropic
from datetime import datetime

OUTPUT_PATH = "public/articles.json"
BASE_URL = "https://www.anthropic.com"
NEWS_URL = "https://www.anthropic.com/news"
MAX_ARTICLES = 20

client = Anthropic()


def get_category(title, text=""):
    combined = (title + " " + text).lower()
    if any(k in combined for k in ["claude", "sonnet", "opus", "haiku", "model card"]):
        return "Claude"
    if any(k in combined for k in ["vision", "image", "visual", "video", "multimodal", "multi-modal"]):
        return "視覺模型"
    if any(k in combined for k in ["safety", "safe", "alignment", "responsible", "ethical", "policy", "trust"]):
        return "AI 安全"
    if any(k in combined for k in ["language", "nlp", "text", "translation", "speech", "natural language"]):
        return "自然語言處理"
    if any(k in combined for k in ["audio", "voice", "sound"]):
        return "多模態"
    return "Claude"


def translate_text(text, max_chars=10000):
    """Translate text to Traditional Chinese using Claude API."""
    if not text or len(text.strip()) < 10:
        return ""
    if len(text) > max_chars:
        text = text[:max_chars] + "..."
    try:
        response = client.messages.create(
            model="claude-3-5-haiku-20241022",
            max_tokens=8192,
            messages=[{
                "role": "user",
                "content": (
                    "請將以下英文文章翻譯成繁體中文。要求：\n"
                    "1. 使用自然流暢的繁體中文，符合台灣用語習慣\n"
                    "2. 完整保留原文的段落結構，段落之間空一行\n"
                    "3. 標題行（以 ## 開頭）保留格式，翻譯標題文字\n"
                    "4. 技術術語可保留英文（如 AI、Claude、API、tokens 等）\n"
                    "5. 只回傳翻譯結果，不要任何說明\n\n"
                    f"原文：\n{text}"
                )
            }]
        )
        return response.content[0].text.strip()
    except Exception as e:
        print(f"  Translation error: {e}")
        return ""


def fetch_article_content(url):
    """Fetch the full body text of an article page."""
    try:
        headers = {
            "User-Agent": (
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/120.0.0.0 Safari/537.36"
            )
        }
        resp = requests.get(url, headers=headers, timeout=20)
        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, "html.parser")

        for tag in soup.find_all(["nav", "header", "footer", "script", "style", "aside"]):
            tag.decompose()

        content_area = None
        candidates = [
            soup.find("article"),
            soup.find("main"),
            soup.find(class_=re.compile(r"(post|article|blog|content)[_-]?(body|content|text)", re.I)),
        ]
        for c in candidates:
            if c and len(c.get_text(strip=True)) > 300:
                content_area = c
                break

        if not content_area:
            content_area = soup.body
        if not content_area:
            return ""

        blocks = []
        for elem in content_area.find_all(["h2", "h3", "h4", "p", "li"]):
            text = elem.get_text(strip=True)
            if len(text) < 20:
                continue
            tag = elem.name
            if tag in ["h2", "h3"]:
                blocks.append(f"## {text}")
            elif tag == "h4":
                blocks.append(f"### {text}")
            else:
                blocks.append(text)

        full_text = "\n\n".join(blocks)
        full_text = re.sub(r"\n{3,}", "\n\n", full_text).strip()
        return full_text

    except Exception as e:
        print(f"  Error fetching {url}: {e}")
        return ""


def fetch_article_list():
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/120.0.0.0 Safari/537.36"
        )
    }
    resp = requests.get(NEWS_URL, headers=headers, timeout=15)
    resp.raise_for_status()
    soup = BeautifulSoup(resp.text, "html.parser")

    seen = set()
    articles = []
    for a in soup.select('a[href^="/news/"]'):
        href = a.get("href", "")
        text = a.get_text(strip=True)
        if href not in seen and len(href) > 7 and "-" in href and len(text) > 15:
            seen.add(href)
            articles.append({"href": href, "text": text})
        if len(articles) >= MAX_ARTICLES:
            break
    return articles


def main():
    print("Fetching article list from Anthropic Blog...")
    raw_articles = fetch_article_list()
    print(f"Found {len(raw_articles)} articles\n")

    existing = {}
    if os.path.exists(OUTPUT_PATH):
        try:
            with open(OUTPUT_PATH, "r", encoding="utf-8") as f:
                for a in json.load(f):
                    existing[a.get("url", "")] = a
            print(f"Loaded {len(existing)} cached articles\n")
        except Exception:
            pass

    results = []
    article_id = 1

    for item in raw_articles:
        url = BASE_URL + item["href"]

        if url in existing and existing[url].get("content"):
            old = dict(existing[url])
            old["id"] = article_id
            results.append(old)
            article_id += 1
            print(f"[CACHED] {old.get('title_cn', url)}")
            continue

        print(f"[FETCH] {url}")

        full_text = fetch_article_content(url)
        if not full_text:
            print("  No content found, skipping\n")
            continue

        print(f"  Content length: {len(full_text)} chars")

        title_en = item["text"]
        title_en = re.sub(
            r"^(Product|Research|News|Company)\s+\w+\s+\d+,\s+\d+\s*", "", title_en
        ).strip()

        print("  Translating title...")
        title_cn = translate_text(title_en, max_chars=300)
        if not title_cn:
            title_cn = title_en

        plain_lines = [l for l in full_text.split("\n") if l.strip() and not l.startswith("#")]
        excerpt_en = plain_lines[0] if plain_lines else full_text[:300]

        print("  Translating excerpt...")
        excerpt_cn = translate_text(excerpt_en[:600], max_chars=600)

        print(f"  Translating full content...")
        content_cn = translate_text(full_text, max_chars=10000)

        category = get_category(title_en, full_text[:500])
        word_count = len(full_text.split())
        read_time = max(3, word_count // 200)

        article = {
            "id": article_id,
            "title_en": title_en,
            "title_cn": title_cn or title_en,
            "excerpt": excerpt_cn or excerpt_en[:200],
            "content": content_cn or full_text[:3000],
            "url": url,
            "category": category,
            "difficulty": "中級",
            "source": "Anthropic Blog",
            "date": datetime.now().strftime("%Y-%m-%d"),
            "readTime": f"{read_time} 分鐘閱讀",
            "views": existing.get(url, {}).get("views", 0),
        }
        results.append(article)
        article_id += 1
        print(f"  Done: {title_cn}\n")

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    print(f"Saved {len(results)} articles to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
