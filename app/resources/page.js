'use client'

export default function ResourcesPage() {
  const resources = [
    {
      category: '政府與教育機構',
      items: [
        { name: '教育部 AI 素養課程', desc: '教育部推動的 K-12 AI 教育資源與教材', url: '#' },
        { name: '國科會 AI 研究資源', desc: '台灣 AI 相關研究計畫成果與公開資料', url: '#' },
      ],
    },
    {
      category: '線上學習平台',
      items: [
        { name: 'NTHU OCW 開放式課程', desc: '清華大學開放式課程，含多門 AI 相關課程', url: 'https://ocw.nthu.edu.tw' },
        { name: 'Taiwan AI Academy', desc: '台灣人工智慧學校，提供專業培訓課程', url: 'https://www.aiacademy.tw' },
      ],
    },
    {
      category: 'AI 工具推薦',
      items: [
        { name: 'Claude（Anthropic）', desc: '進階 AI 助理，適合複雜分析與長文處理任務', url: 'https://claude.ai' },
        { name: 'ChatGPT（OpenAI）', desc: '最廣泛使用的 AI 對話工具，適合日常輔助', url: 'https://chat.openai.com' },
      ],
    },
    {
      category: '社群與媒體',
      items: [
        { name: 'AIoTTalk 人工智慧論壇', desc: '台灣 AI 從業人員與研究者交流社群', url: '#' },
        { name: 'Meet 創業之島', desc: '台灣科技與 AI 新創媒體，提供最新產業動態', url: 'https://meet.bnext.com.tw' },
      ],
    },
  ]

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
              { label: 'Prompt 指令庫', href: '/prompts' },
              { label: '資源總覽', href: '/resources' },
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
          <a href="/" style={{ color: '#7a9ab4', fontSize: '13px', textDecoration: 'none', letterSpacing: '0.05em', fontWeight: '600' }}>← 返回首頁</a>
          <div style={{ marginTop: '24px' }}>
            <p style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.25em', color: '#d4880a', marginBottom: '14px' }}>RESOURCE DIRECTORY</p>
            <h1 style={{ fontSize: '44px', fontWeight: '900', color: '#ffffff', marginBottom: '16px', lineHeight: '1.2' }}>資源總覽</h1>
            <p style={{ fontSize: '18px', color: '#a8c0d4', lineHeight: '1.85', maxWidth: '560px' }}>精選台灣本土與國際 AI 資源，涵蓋政府機構、學習平台、工具推薦與社群媒體</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#152b40', borderBottom: '1px solid #1e3d57', padding: '14px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#7a9ab4', fontSize: '13px', margin: 0 }}>
            <a href="/" style={{ color: '#7a9ab4', textDecoration: 'none' }}>首頁</a>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#c8d8e8' }}>資源總覽</span>
          </p>
        </div>
      </div>

      {/* Resource Grid */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {resources.map(group => (
            <div key={group.category} style={{ backgroundColor: '#ffffff', border: '1px solid #d0c8bc', padding: '36px' }}>
              <div style={{ paddingBottom: '18px', marginBottom: '24px', borderBottom: '2.5px solid #0f2d4a' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0f2d4a', letterSpacing: '0.06em', margin: 0 }}>{group.category}</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {group.items.map(item => (
                  <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: '15px', fontWeight: '700', color: '#0f2d4a', marginBottom: '5px' }}>{item.name}</p>
                      <p style={{ fontSize: '13px', color: '#7a8a9a', lineHeight: '1.6' }}>{item.desc}</p>
                    </div>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: '#d4880a', fontWeight: '800', textDecoration: 'none', whiteSpace: 'nowrap', marginTop: '2px', letterSpacing: '0.06em' }}>前往</a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#091e30', padding: '40px 32px 28px', borderTop: '1px solid #1e3d57' }}>
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
