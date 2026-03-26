'use client';
import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';

const categories = ['全部', 'Claude', '視覺模型', '自然語言處理', '多模態', 'AI 安全'];
const ARTICLES_PER_PAGE = 6;

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('/articles.json')
      .then(r => r.json())
      .then(data => setArticles(data))
      .catch(() => setArticles([]))
      .finally(() => setLoading(false));
  }, []);

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = !searchTerm ||
        article.title_cn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [articles, searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;
    return filteredArticles.slice(start, start + ARTICLES_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat === '全部' ? '' : cat);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const navStyle = {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    color: '#1a1a1a',
  };

  return (
    <div style={navStyle}>
      {/* Header */}
      <header style={{ borderBottom: '3px solid #1a1a1a', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0' }}>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-0.02em' }}>
                AI 智慧學習
              </div>
              <div style={{ fontSize: '0.6875rem', color: '#888888', marginTop: '0.125rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                台灣 AI 資源中心
              </div>
            </div>
            <input
              type="text"
              placeholder="搜尋文章..."
              value={searchTerm}
              onChange={handleSearch}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #cccccc',
                fontSize: '0.875rem',
                width: '220px',
                outline: 'none',
                backgroundColor: '#f9f9f9',
                color: '#1a1a1a',
              }}
            />
          </div>
        </div>

        {/* Category navigation */}
        <div style={{ backgroundColor: '#1a1a1a' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
            <nav style={{ display: 'flex', overflowX: 'auto' }}>
              {categories.map(cat => {
                const isActive = cat === '全部' ? !selectedCategory : selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    style={{
                      padding: '0.75rem 1.25rem',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      border: 'none',
                      cursor: 'pointer',
                      backgroundColor: isActive ? '#c00000' : 'transparent',
                      color: '#ffffff',
                      whiteSpace: 'nowrap',
                      transition: 'background-color 0.15s',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Main */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '5rem', color: '#888888', fontSize: '0.875rem', letterSpacing: '0.05em' }}>
            載入中...
          </div>
        ) : filteredArticles.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem', color: '#888888', fontSize: '0.875rem' }}>
            沒有符合的文章
          </div>
        ) : (
          <>
            {/* Section heading */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid #e5e5e5' }}>
              <h2 style={{ fontSize: '0.6875rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888888', margin: 0 }}>
                {selectedCategory || '最新文章'} &mdash; {filteredArticles.length} 篇
              </h2>
              <span style={{ fontSize: '0.6875rem', color: '#aaaaaa' }}>
                第 {currentPage} / {totalPages} 頁
              </span>
            </div>

            {/* Article grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {paginatedArticles.map((article, idx) => {
                const col = idx % 3;
                const isLastRow = idx >= paginatedArticles.length - (paginatedArticles.length % 3 || 3);
                return (
                  <article
                    key={article.id}
                    style={{
                      padding: '1.75rem',
                      borderBottom: isLastRow ? 'none' : '1px solid #e5e5e5',
                      borderRight: col < 2 ? '1px solid #e5e5e5' : 'none',
                    }}
                  >
                    <div style={{ fontSize: '0.625rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c00000', marginBottom: '0.625rem' }}>
                      {article.category}
                    </div>
                    <Link href={`/article/${article.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h3 style={{ fontSize: '1.0625rem', fontWeight: '700', color: '#1a1a1a', lineHeight: '1.4', margin: '0 0 0.75rem 0' }}>
                        {article.title_cn}
                      </h3>
                    </Link>
                    <p style={{ fontSize: '0.875rem', color: '#555555', lineHeight: '1.65', margin: '0 0 1.25rem 0' }}>
                      {article.excerpt}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.6875rem', color: '#aaaaaa', borderTop: '1px solid #f0f0f0', paddingTop: '0.875rem', gap: '0.75rem' }}>
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginLeft: 'auto', color: '#c00000', textDecoration: 'none', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.625rem' }}
                      >
                        原文
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.25rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e5e5e5' }}>
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  style={{
                    padding: '0.5rem 1.25rem',
                    border: '1px solid #cccccc',
                    backgroundColor: '#ffffff',
                    color: currentPage === 1 ? '#cccccc' : '#1a1a1a',
                    cursor: currentPage === 1 ? 'default' : 'pointer',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    letterSpacing: '0.05em',
                  }}
                >
                  上一頁
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    style={{
                      padding: '0.5rem 0.875rem',
                      border: '1px solid',
                      borderColor: currentPage === page ? '#1a1a1a' : '#cccccc',
                      backgroundColor: currentPage === page ? '#1a1a1a' : '#ffffff',
                      color: currentPage === page ? '#ffffff' : '#1a1a1a',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                    }}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  style={{
                    padding: '0.5rem 1.25rem',
                    border: '1px solid #cccccc',
                    backgroundColor: '#ffffff',
                    color: currentPage === totalPages ? '#cccccc' : '#1a1a1a',
                    cursor: currentPage === totalPages ? 'default' : 'pointer',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    letterSpacing: '0.05em',
                  }}
                >
                  下一頁
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '3px solid #1a1a1a', backgroundColor: '#1a1a1a', color: '#ffffff', padding: '2rem 1.5rem', marginTop: '4rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: '800', fontSize: '1rem', letterSpacing: '-0.01em' }}>AI 智慧學習</div>
            <div style={{ fontSize: '0.6875rem', color: '#888888', marginTop: '0.25rem', letterSpacing: '0.05em' }}>
              高品質中文 AI 資源，為台灣學習者服務
            </div>
          </div>
          <div style={{ fontSize: '0.6875rem', color: '#888888' }}>
            © 2024 AI 智慧學習. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
