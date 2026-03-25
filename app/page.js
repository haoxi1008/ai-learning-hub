'use client';

import { useState, useMemo } from 'react';
import './globals.css';

const articlesData = [
  {
    id: 1,
    title: "什麼是大語言模型（LLM）？完整指南",
    category: "LLM",
    difficulty: "入門",
    source: "官方文檔",
    date: "2024-03-20",
    excerpt: "了解大語言模型的基礎概念、工作原理和應用場景。本文適合完全新手。",
    author: "OpenAI",
    readTime: 8,
    views: 1250
  },
  {
    id: 2,
    title: "Prompt Engineering 最佳實踐",
    category: "LLM",
    difficulty: "進階",
    source: "技術文章",
    date: "2024-03-18",
    excerpt: "學習如何有效地編寫 Prompts 以獲得最佳的 AI 回應。包含實際例子。",
    author: "Anthropic",
    readTime: 12,
    views: 980
  },
  {
    id: 3,
    title: "視覺 AI：從圖像分類到物體檢測",
    category: "視覺模型",
    difficulty: "進階",
    source: "研究論文",
    date: "2024-03-15",
    excerpt: "深入探討計算機視覺技術的發展演進，從經典方法到深度學習時代。",
    author: "Google AI",
    readTime: 15,
    views: 750
  },
  {
    id: 4,
    title: "自然語言處理（NLP）入門",
    category: "自然語言處理",
    difficulty: "入門",
    source: "教程",
    date: "2024-03-12",
    excerpt: "從文本預處理到模型訓練，學習 NLP 的基本概念和實際應用。",
    author: "吳恩達",
    readTime: 10,
    views: 1100
  },
  {
    id: 5,
    title: "AI 安全：我們需要什麼？",
    category: "AI 安全",
    difficulty: "專家",
    source: "研究論文",
    date: "2024-03-10",
    excerpt: "討論 AI 系統的安全隱憂、解決方案和未來方向。適合深度思考者。",
    author: "Anthropic 安全團隊",
    readTime: 18,
    views: 650
  },
  {
    id: 6,
    title: "多模態 AI：文字、圖像和聲音的統一",
    category: "多模態",
    difficulty: "進階",
    source: "官方文檔",
    date: "2024-03-08",
    excerpt: "探索多模態 AI 如何整合不同類型的數據，創造更強大的 AI 系統。",
    author: "OpenAI",
    readTime: 11,
    views: 920
  }
];

const categories = ["LLM", "視覺模型", "自然語言處理", "多模態", "AI 安全"];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredArticles = useMemo(() => {
    return articlesData.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const topArticles = articlesData.sort((a, b) => b.views - a.views).slice(0, 5);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* 導覽列 */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '1rem'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#1e3a8a', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.125rem' }}>AI</span>
            </div>
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>AI 智慧學習</h1>
              <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: 0 }}>台灣 AI 資源中心</p>
            </div>
          </div>
          <div style={{ display: 'none' }}>
            <a href="#" style={{ color: '#374151', textDecoration: 'none', fontWeight: '500' }}>首頁</a>
          </div>
        </div>
      </nav>

      {/* 英雄區塊 */}
      <section style={{
        background: 'linear-gradient(to right, #2563eb, #1e40af)',
        color: 'white',
        padding: '4rem 1rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            探索 AI 的無限可能
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#dbeafe', marginBottom: '2rem' }}>
            高品質的中文 AI 學習資源，為台灣學習者量身打造
          </p>

          {/* 搜尋欄 */}
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="搜尋文章、主題..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1rem' }}>
        {/* 最新文章區 */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '2rem' }}>
            ✨ 最新翻譯文章
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {articlesData.slice(0, 6).map((article) => (
              <div
                key={article.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'}
              >
                <div style={{
                  height: '192px',
                  background: 'linear-gradient(to bottom right, #60a5fa, #2563eb)',
                  padding: '1.5rem',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end'
                }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: '600'
                    }}>
                      {article.category}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', margin: 0 }}>
                    {article.title}
                  </h3>
                </div>

                <div style={{ padding: '1.5rem' }}>
                  <p style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '1rem' }}>
                    {article.excerpt}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.75rem',
                    color: '#6b7280',
                    marginBottom: '1rem'
                  }}>
                    <span>{article.date}</span>
                    <span>{article.readTime} 分鐘閱讀</span>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: '600' }}>
                      {article.source}
                    </span>
                    <a href="#" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>
                      閱讀更多 →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 分類導覽 */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '2rem' }}>
            📚 瀏覽分類
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? '' : cat)}
                style={{
                  backgroundColor: selectedCategory === cat ? '#2563eb' : 'white',
                  color: selectedCategory === cat ? 'white' : '#111827',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: selectedCategory === cat ? 'none' : '2px solid transparent',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.3s'
                }}
              >
                <p style={{ margin: 0 }}>{cat}</p>
                <p style={{ fontSize: '0.75rem', margin: '0.5rem 0 0 0', opacity: 0.7 }}>
                  {articlesData.filter(a => a.category === cat).length} 篇
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* 熱門文章排行榜 */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '2rem' }}>
            🔥 熱門文章排行榜
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {topArticles.map((article, index) => (
              <div
                key={article.id}
                style={{
                  backgroundColor: 'white',
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}
              >
                <div style={{
                  flexShrink: 0,
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '1.125rem'
                }}>
                  {index + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#111827', margin: '0 0 0.5rem 0' }}>
                    {article.title}
                  </h3>
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    fontSize: '0.875rem',
                    color: '#6b7280'
                  }}>
                    <span>{article.category}</span>
                    <span>👁️ {article.views} 次查看</span>
                    <span>{article.date}</span>
                  </div>
                </div>
                <a href="#" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '600', whiteSpace: 'nowrap' }}>
                  查看 →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 完整資源庫 */}
        <section style={{ borderTop: '2px solid #e5e7eb', paddingTop: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', marginBottom: '2rem' }}>
            📖 完整資源庫 ({filteredArticles.length} 篇)
          </h2>

          {filteredArticles.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  style={{
                    backgroundColor: 'white',
                    padding: '1.5rem',
                    borderRadius: '0.5rem',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ marginBottom: '0.5rem' }}>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: '#dbeafe',
                      color: '#1e40af',
                      borderRadius: '0.25rem',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {article.category}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#111827', margin: '0.5rem 0' }}>
                    {article.title}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: '0.5rem 0' }}>
                    {article.excerpt}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.75rem',
                    color: '#6b7280',
                    marginTop: '1rem'
                  }}>
                    <span>{article.date}</span>
                    <span>{article.readTime} 分鐘</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
              <p>沒有找到相符的資源</p>
            </div>
          )}
        </section>
      </div>

      {/* 頁腳 */}
      <footer style={{
        backgroundColor: '#111827',
        color: 'white',
        padding: '3rem 1rem',
        marginTop: '4rem'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                AI 智慧學習
              </h3>
              <p style={{ color: '#9ca3af' }}>
                為台灣學習者提供高品質的中文 AI 資源
              </p>
            </div>
            <div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>快速連結</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>首頁</a></li>
                <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>資源庫</a></li>
                <li><a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>關於我們</a></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #374151', paddingTop: '2rem', textAlign: 'center', color: '#9ca3af' }}>
            <p>&copy; 2024 AI 智慧學習. All rights reserved. | Made with ❤️ for Taiwan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
