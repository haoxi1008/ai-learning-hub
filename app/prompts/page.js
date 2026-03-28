'use client'

import { useState } from 'react'

export default function PromptsPage() {
  const [copiedId, setCopiedId] = useState(null)

  const prompts = [
    {
      id: 1,
      category: '職場應用',
      title: '專業商業提案撰寫',
      description: '協助撰寫正式的商業企劃書或提案報告',
      template: '請以專業的繁體中文，幫我撰寫一份關於「[主題]」的商業提案。內容需包含：背景說明、問題分析、解決方案、預期效益與執行時程。語氣需正式且具說服力，適合呈交給台灣企業主管。',
    },
    {
      id: 2,
      category: '教育學習',
      title: '概念解說與學習輔助',
      description: '讓複雜概念變得容易理解',
      template: '請用台灣高中生能理解的方式，解釋「[概念]」。請先給一個台灣日常生活中的具體例子，再逐步說明核心原理，最後提供 3 個延伸思考問題。',
    },
    {
      id: 3,
      category: '生活應用',
      title: '台灣在地行程規劃',
      description: '規劃符合台灣生活習慣的旅遊或活動行程',
      template: '請幫我規劃一個「[天數]」天的 [地點] 旅遊行程。我的預算是新台幣 [金額] 元，偏好 [類型：文化/自然/美食] 體驗。請包含每日行程、推薦餐廳、交通建議與預估費用，並考量台灣本地交通與文化習慣。',
    },
    {
      id: 4,
      category: '文書處理',
      title: '正式公文與書信撰寫',
      description: '撰寫符合台灣格式的正式文件',
      template: '請以台灣正式公文格式，幫我撰寫一封致「[收件單位／人]」的 [文件類型：陳情書／申請書／感謝函]。主旨為：[主旨說明]。語氣需正式有禮，符合台灣公文書寫習慣，並附上適當的開頭與結尾敬語。',
    },
    {
      id: 5,
      category: '資料分析',
      title: '數據解讀與報告摘要',
      description: '將數據轉化為可讀性高的分析報告',
      template: '以下是一組數據：「[貼上你的數據]」。請用繁體中文幫我分析這些數據，找出主要趨勢與異常值，並以台灣讀者習慣的方式呈現重點摘要，最後提供 2 至 3 項具體可行的建議方向。',
    },
  ]

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    })
  }

  return (
    <div style={{ fontFamily: "'Noto Sans TC', 'PingFang TC', sans-serif", backgroundColor: '#ede9e3', minHeight: '100vh' }}>
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
            <p style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.25em', color: '#d4880a', marginBottom: '14px' }}>PROMPT LIBRARY</p>
            <h1 style={{ fontSize: '44px', fontWeight: '900', color: '#ffffff', marginBottom: '16px', lineHeight: '1.2' }}>Prompt 指令庫</h1>
            <p style={{ fontSize: '18px', color: '#a8c0d4', lineHeight: '1.85', maxWidth: '560px' }}>專為台灣使用者設計的繁體中文 AI 指令範本，複製後填入中括號內容即可使用</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#152b40', borderBottom: '1px solid #1e3d57', padding: '14px 32px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#7a9ab4', fontSize: '13px', margin: 0 }}>
            <a href="/" style={{ color: '#7a9ab4', textDecoration: 'none' }}>首頁</a>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: '#c8d8e8' }}>Prompt 指令庫</span>
          </p>
        </div>
      </div>

      {/* Prompt Cards */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          {prompts.map((prompt, idx) => (
            <div key={prompt.id} style={{ backgroundColor: '#ffffff', border: '1px solid #d0c8bc', padding: '36px', gridColumn: idx === 4 ? '1 / -1' : 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <span style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.12em', color: '#ffffff', backgroundColor: '#0f2d4a', padding: '4px 12px', borderRadius: '2px', flexShrink: 0 }}>{prompt.category}</span>
                <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#0f2d4a', margin: 0 }}>{prompt.title}</h3>
              </div>
              <p style={{ fontSize: '13px', color: '#7a8a9a', marginBottom: '20px', lineHeight: '1.6' }}>{prompt.description}</p>
              <div style={{ backgroundColor: '#f5f1eb', border: '1px solid #ddd8d0', borderLeft: '4px solid #0f2d4a', padding: '18px 22px', borderRadius: '2px' }}>
                <p style={{ fontSize: '13px', color: '#3a4a5a', lineHeight: '1.9', fontFamily: "'Courier New', monospace", margin: 0 }}>{prompt.template}</p>
              </div>
              <button
                onClick={() => handleCopy(prompt.id, prompt.template)}
                style={{ marginTop: '16px', fontSize: '12px', fontWeight: '800', color: copiedId === prompt.id ? '#2a7a4a' : '#0f2d4a', background: 'none', border: `1.5px solid ${copiedId === prompt.id ? '#2a7a4a' : '#0f2d4a'}`, padding: '7px 18px', borderRadius: '2px', cursor: 'pointer', letterSpacing: '0.06em', transition: 'all 0.2s' }}
              >
                {copiedId === prompt.id ? '已複製' : '複製指令'}
              </button>
            </div>
          ))}
        </div>
      </main>

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
