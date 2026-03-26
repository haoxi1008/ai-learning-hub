'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

function renderContent(content) {
  if (!content) return null;
  const blocks = content.split(/\n\n+/).filter(b => b.trim());
  return blocks.map((block, idx) => {
    const trimmed = block.trim();
    if (trimmed.startsWith('## ')) {
      return (
        <h2 key={idx} style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1a1a1a', margin: '2.25rem 0 0.75rem 0', letterSpacing: '-0.01em', lineHeight: '1.3' }}>
          {trimmed.replace(/^## /, '')}
        </h2>
      );
    }
    if (trimmed.startsWith('### ')) {
      return (
        <h3 key={idx} style={{ fontSize: '1.0625rem', fontWeight: '700', color: '#1a1a1a', margin: '1.75rem 0 0.5rem 0', lineHeight: '1.4' }}>
          {trimmed.replace(/^### /, '')}
        </h3>
      );
    }
    return (
      <p key={idx} style={{ fontSize: '1.0625rem', color: '#2a2a2a', lineHeight: '1.85', margin: '0 0 1.25rem 0' }}>
        {trimmed}
      </p>
    );
  });
}

export default function ArticlePage() {
  const params = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/articles.json')
      .then(r => r.json())
      .then(data => {
        const found = data.find(a => String(a.id) === String(params.id));
        setArticle(found || null);
      })
      .catch(() => setArticle(null))
      .finally(() => setLoading(false));
  }, [params.id]);

  const baseStyle = {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    color: '#1a1a1a',
  };

  const Header = () => (
    <header style={{ borderBottom: '3px solid #1a1a1a', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1a1a1a', letterSpacing: '-0.02em' }}>AI 智慧學習</div>
          <div style={{ fontSize: '0.6875rem', color: '#888888', letterSpacing: '0.08em', textTransform: 'uppercase' }}>台灣 AI 資源中心</div>
        </Link>
        <Link href="/" style={{ fontSize: '0.75rem', fontWeight: '700', color: '#1a1a1a', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', borderBottom: '2px solid #1a1a1a', paddingBottom: '0.125rem' }}>
          返回首頁
        </Link>
      </div>
    </header>
  );

  const Footer = () => (
    <footer style={{ borderTop: '3px solid #1a1a1a', backgroundColor: '#1a1a1a', color: '#ffffff', padding: '2rem 1.5rem', marginTop: '5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: '800', fontSize: '1rem' }}>AI 智慧學習</div>
          <div style={{ fontSize: '0.6875rem', color: '#888888', marginTop: '0.25rem', letterSpacing: '0.05em' }}>高品質中文 AI 資源，為台灣學習者服務</div>
        </div>
        <div style={{ fontSize: '0.6875rem', color: '#888888' }}>© 2024 AI 智慧學習. All rights reserved.</div>
      </div>
    </footer>
  );

  if (loading) {
    return (
      <div style={baseStyle}>
        <Header />
        <div style={{ textAlign: 'center', padding: '6rem', color: '#888888', fontSize: '0.875rem', letterSpacing: '0.05em' }}>載入中...</div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div style={baseStyle}>
        <Header />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '5rem 1.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.6875rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c00000', marginBottom: '1rem' }}>找不到文章</div>
          <p style={{ color: '#888888', fontSize: '0.875rem', marginBottom: '2rem' }}>此文章不存在或已被移除。</p>
          <Link href="/" style={{ fontSize: '0.75rem', fontWeight: '700', color: '#1a1a1a', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '2px solid #1a1a1a', paddingBottom: '0.125rem' }}>返回首頁</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={baseStyle}>
      <Header />
      <main style={{ maxWidth: '760px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.6875rem', color: '#aaaaaa', marginBottom: '2.5rem', letterSpacing: '0.05em', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#aaaaaa', textDecoration: 'none' }}>首頁</Link>
          <span>/</span>
          <span style={{ color: '#c00000', fontWeight: '700', textTransform: 'uppercase' }}>{article.category}</span>
        </div>

        {/* Category */}
        <div style={{ fontSize: '0.625rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c00000', marginBottom: '1rem' }}>
          {article.category}
        </div>

        {/* Chinese title */}
        <h1 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#1a1a1a', lineHeight: '1.2', margin: '0 0 1rem 0', letterSpacing: '-0.02em' }}>
          {article.title_cn}
        </h1>

        {/* English title */}
        <div style={{ fontSize: '1rem', color: '#888888', fontStyle: 'italic', marginBottom: '1.75rem', paddingLeft: '1rem', borderLeft: '3px solid #e5e5e5', lineHeight: '1.5' }}>
          {article.title_en}
        </div>

        {/* Metadata */}
        <div style={{ display: 'flex', gap: '1.5rem', paddingBottom: '1.75rem', borderBottom: '1px solid #e5e5e5', marginBottom: '2.5rem', fontSize: '0.75rem', color: '#aaaaaa', flexWrap: 'wrap' }}>
          <span>{article.date}</span>
          <span>{article.readTime}</span>
          <span>來源：{article.source}</span>
          <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 'auto', color: '#c00000', textDecoration: 'none', fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.6875rem' }}>
            閱讀原文
          </a>
        </div>

        {/* Full content or excerpt */}
        {article.content ? (
          <div>{renderContent(article.content)}</div>
        ) : (
          <div style={{ fontSize: '1.125rem', color: '#2a2a2a', lineHeight: '1.85', marginBottom: '3.5rem' }}>
            {article.excerpt}
          </div>
        )}

        {/* Footer CTA */}
        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '2.5rem', marginTop: '2.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8125rem', color: '#888888', marginBottom: '1.75rem', lineHeight: '1.6' }}>
            此為翻譯版本，如需查閱原始英文內容，請至 Anthropic 官方部落格。
          </p>
          <a href={article.url} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '0.875rem 2.5rem', backgroundColor: '#1a1a1a', color: '#ffffff', textDecoration: 'none', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            閱讀原文
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
