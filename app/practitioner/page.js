'use client'

export default function PractitionerPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans TC', 'PingFang TC', sans-serif", backgroundColor: '#faf8f5', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{ backgroundColor: '#0f2d4a', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{ width: '38px', height: '38px', backgroundColor: '#d4880a', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#fff', fontWeight: '900', fontSize: '17px' }}>台</span>
            </div>
            <div>
              <span style={{ color: '#ffffff', fontWeight: '800', fontSize: '17px', letterSpacing: '0.04em' }}>台灣 AI 學習平台</span>
              <span style={{ color: '#7a9ab4', fontSize: '11px', marginLeft: '10px', letterSpacing: '0.05em' }}>TAIWAN AI LEARNING</span>
            </div>
          </a>
          <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
            {[
              { label: '學習路徑', href: '/#paths' },
              { label: 'Prompt 指令庫', href: '/#prompts' },
              { label: '資源總覽', href: '/#resources' },
              { label: '意見回饋', href: '/#feedback' },
            ].map(item => (
              <a key={item.label} href={item.href} style={{ color: '#c8d8e8', fontSize: '14px', textDecoration: 'none', fontWeight: '500', letterSpacing: '0.03em' }}
                onMouseEnter={e => e.target.style.color = '#ffffff'}
                onMouseLeave={e => e.target.style.color = '#c8d8e8'}
              >{item.label}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section style={{ backgroundColor: '#0f2d4a', padding: '72px 32px 60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <a href="/" style={{ color: '#7a9ab4', fontSize: '13px', textDecoration: 'none', letterSpacing: '0.05em', fontWeight: '600' }}>
            ← 返回首頁
          </a>
          <div style={{ marginTop: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.25em', color: '#d4880a', marginBottom: '14px' }}>PRACTITIONER'S PATH</p>
            <h1 style={{ fontSize: '44px', fontWeight: '900', color: '#ffffff', marginBottom: '16px', lineHeight: '1.2' }}>進階實踐</h1>
            <p style={{ fontSize: '18px', color: '#a8c0d4', lineHeight: '1.85', maxWidth: '560px' }}>系統化提升 AI 應用能力，學習 Prompt 工程與工作流程設計</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#152b40', borderBottom: '1px solid #1e3d57', padding: '14px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#7a9ab4', fontSize: '13px', margin: 0 }}>
            <a href="/" style={{ color: '#7a9ab4', textDecoration: 'none' }}>首頁</a>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#c8d8e8' }}>進階實踐</span>
          </p>
        </div>
      </div>

      {/* Main Content — 待填入 */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <div style={{ width: '64px', height: '4px', backgroundColor: '#d0c8bc', margin: '0 auto 32px', borderRadius: '2px' }}></div>
          <p style={{ fontSize: '14px', color: '#aaa', letterSpacing: '0.15em', fontWeight: '700' }}>COMING SOON</p>
          <p style={{ fontSize: '18px', color: '#6a7a8a', marginTop: '12px' }}>內容準備中，敬請期待</p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#091e30', padding: '40px 32px 28px', borderTop: '1px solid #1e3d57', marginTop: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '28px', height: '28px', backgroundColor: '#d4880a', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontWeight: '900', fontSize: '13px' }}>台</span>
            </div>
            <span style={{ color: '#7a9ab4', fontSize: '13px' }}>台灣 AI 學習平台</span>
          </div>
          <p style={{ color: '#3a5a74', fontSize: '12px' }}>© 2026 台灣 AI 學習平台 高中自主學習計畫成果</p>
        </div>
      </footer>
    </div>
  )
}
