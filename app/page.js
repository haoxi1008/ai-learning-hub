'use client'

import { useState } from 'react'

export default function Home() {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [copiedId, setCopiedId] = useState(null)

  const learningPaths = [
    {
      id: 'beginner',
      title: '新手入門',
      subtitle: '從零開始認識 AI',
      description: '適合完全沒有 AI 背景的學習者。以生活化的例子帶你了解 AI 的基本概念、常見工具與實際應用場景，建立正確的 AI 使用觀念。',
      tags: ['AI 基礎概念', 'ChatGPT 入門', '日常應用實例'],
      cta: '開始學習',
      href: '/beginner',
    },
    {
      id: 'practitioner',
      title: '進階實踐',
      subtitle: '系統化提升 AI 應用能力',
      description: '適合已有基礎、想深入應用 AI 工具的學習者。學習 Prompt 工程、自動化流程設計，以及如何將 AI 有效融入日常工作與學習。',
      tags: ['Prompt 工程', '工作流程自動化', 'AI 輔助寫作'],
      cta: '深入學習',
      href: '/practitioner',
    },
    {
      id: 'resources',
      title: '資源總覽',
      subtitle: '精選台灣 AI 學習資源',
      description: '整合台灣本土與國際 AI 學習資源，涵蓋課程、工具評測、研究社群與最新動態，協助你找到最適合自己的學習管道與工具。',
      tags: ['學習課程', '工具評測', '研究報告'],
      cta: '瀏覽資源',
      href: '/resources',
    },
  ]

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

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    })
  }

  return (
    <div style={{ fontFamily: "'Noto Sans TC', 'PingFang TC', sans-serif", backgroundColor: '#faf8f5', color: '#1a1a1a', minHeight: '100vh' }}>

      {/* Navigation */}
      <nav style={{ backgroundColor: '#0f2d4a', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '38px', height: '38px', backgroundColor: '#d4880a', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#fff', fontWeight: '900', fontSize: '17px' }}>台</span>
            </div>
            <div>
              <span style={{ color: '#ffffff', fontWeight: '800', fontSize: '17px', letterSpacing: '0.04em' }}>台灣 AI 學習平台</span>
              <span style={{ color: '#7a9ab4', fontSize: '11px', marginLeft: '10px', letterSpacing: '0.05em' }}>TAIWAN AI LEARNING</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
            {[
              { label: '學習路徑', href: '#paths' },
              { label: 'Prompt 指令庫', href: '#prompts' },
              { label: '資源總覽', href: '#resources' },
              { label: '意見回饋', href: '#feedback' },
            ].map(item => (
              <a key={item.label} href={item.href} style={{ color: '#c8d8e8', fontSize: '14px', textDecoration: 'none', fontWeight: '500', letterSpacing: '0.03em', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#ffffff'}
                onMouseLeave={e => e.target.style.color = '#c8d8e8'}
              >{item.label}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#0f2d4a', color: '#ffffff', padding: '108px 32px 88px' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', backgroundColor: '#d4880a', color: '#fff', fontSize: '11px', fontWeight: '800', letterSpacing: '0.2em', padding: '6px 18px', borderRadius: '2px', marginBottom: '36px' }}>
            台灣首個全齡化 AI 學習入口平台
          </div>
          <h1 style={{ fontSize: '54px', fontWeight: '900', lineHeight: '1.25', marginBottom: '28px', letterSpacing: '-0.02em' }}>
            讓每一位台灣人<br />都能掌握 AI 的力量
          </h1>
          <p style={{ fontSize: '19px', color: '#a8c0d4', lineHeight: '1.9', maxWidth: '600px', margin: '0 auto 52px', fontWeight: '400' }}>
            無論你是學生、上班族或銀髮族，我們提供最在地化的繁體中文 AI 學習資源，陪伴你從零開始，逐步掌握未來的關鍵能力。
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#paths" style={{ backgroundColor: '#d4880a', color: '#fff', textDecoration: 'none', padding: '16px 44px', fontSize: '16px', fontWeight: '800', borderRadius: '4px', letterSpacing: '0.06em', display: 'inline-block' }}>
              立即開始學習
            </a>
            <a href="#resources" style={{ backgroundColor: 'transparent', color: '#c8d8e8', textDecoration: 'none', border: '1.5px solid #4a6a84', padding: '16px 40px', fontSize: '16px', fontWeight: '600', borderRadius: '4px', display: 'inline-block' }}>
              瀏覽學習資源
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: '#152b40', borderTop: '1px solid #1e3d57', borderBottom: '1px solid #1e3d57' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '28px 32px', display: 'flex', justifyContent: 'center', gap: '72px', flexWrap: 'wrap' }}>
          {[
            { num: '3', label: '學習路徑' },
            { num: '5', label: 'Prompt 範本' },
            { num: '全齡', label: '適用對象' },
            { num: '100%', label: '繁體中文內容' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '30px', fontWeight: '900', color: '#d4880a', lineHeight: 1 }}>{stat.num}</div>
              <div style={{ fontSize: '12px', color: '#7a9ab4', marginTop: '6px', letterSpacing: '0.08em', fontWeight: '600' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Paths */}
      <section id="paths" style={{ padding: '88px 32px', backgroundColor: '#faf8f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.25em', color: '#d4880a', marginBottom: '14px' }}>LEARNING PATHS</p>
            <h2 style={{ fontSize: '38px', fontWeight: '900', color: '#0f2d4a', marginBottom: '16px' }}>三大學習路徑</h2>
            <p style={{ fontSize: '16px', color: '#6a7a8a', maxWidth: '440px', margin: '0 auto', lineHeight: '1.85' }}>選擇最適合你的學習起點，按照自己的步調前進</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: '1px solid #d0c8bc' }}>
            {learningPaths.map((path, idx) => (
              <div key={path.id}
                style={{ padding: '52px 44px', borderRight: idx < 2 ? '1px solid #d0c8bc' : 'none', backgroundColor: '#ffffff', transition: 'background-color 0.25s', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f5f1eb'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff'}
              >
                <div style={{ width: '44px', height: '4px', backgroundColor: '#0f2d4a', marginBottom: '30px', borderRadius: '2px' }}></div>
                <h3 style={{ fontSize: '26px', fontWeight: '900', color: '#0f2d4a', marginBottom: '8px' }}>{path.title}</h3>
                <p style={{ fontSize: '13px', color: '#d4880a', fontWeight: '700', marginBottom: '22px', letterSpacing: '0.04em' }}>{path.subtitle}</p>
                <p style={{ fontSize: '15px', color: '#4a5a6a', lineHeight: '1.85', marginBottom: '28px' }}>{path.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
                  {path.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '11px', color: '#3a5a74', backgroundColor: '#deeaf4', padding: '4px 12px', borderRadius: '2px', fontWeight: '700', letterSpacing: '0.03em' }}>{tag}</span>
                  ))}
                </div>
                {path.href ? (
                  <a href={path.href} style={{ display: 'inline-block', color: '#0f2d4a', fontSize: '13px', fontWeight: '800', background: 'none', border: '2px solid #0f2d4a', padding: '10px 26px', borderRadius: '3px', cursor: 'pointer', letterSpacing: '0.08em', textDecoration: 'none' }}>
                    {path.cta}
                  </a>
                ) : (
                  <button style={{ color: '#0f2d4a', fontSize: '13px', fontWeight: '800', background: 'none', border: '2px solid #0f2d4a', padding: '10px 26px', borderRadius: '3px', cursor: 'pointer', letterSpacing: '0.08em' }}>
                    {path.cta}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Library */}
      <section id="prompts" style={{ padding: '88px 32px', backgroundColor: '#ede9e3' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.25em', color: '#d4880a', marginBottom: '14px' }}>PROMPT LIBRARY</p>
            <h2 style={{ fontSize: '38px', fontWeight: '900', color: '#0f2d4a', marginBottom: '16px' }}>台灣生活 Prompt 指令庫</h2>
            <p style={{ fontSize: '16px', color: '#6a7a8a', maxWidth: '480px', margin: '0 auto', lineHeight: '1.85' }}>專為台灣使用者設計的繁體中文 AI 指令範本，複製後填入中括號內容即可使用</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {prompts.map((prompt, idx) => (
              <div key={prompt.id} style={{ backgroundColor: '#ffffff', border: '1px solid #d0c8bc', padding: '36px', gridColumn: idx === 4 ? '1 / -1' : 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.12em', color: '#ffffff', backgroundColor: '#0f2d4a', padding: '4px 12px', borderRadius: '2px', flexShrink: 0 }}>{prompt.category}</span>
                  <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#0f2d4a', margin: 0 }}>{prompt.title}</h3>
                </div>
                <p style={{ fontSize: '13px', color: '#7a8a9a', marginBottom: '20px', lineHeight: '1.6' }}>{prompt.description}</p>
                <div style={{ backgroundColor: '#f5f1eb', border: '1px solid #ddd8d0', borderLeft: '4px solid #0f2d4a', padding: '18px 22px', borderRadius: '2px' }}>
                  <p style={{ fontSize: '13px', color: '#3a4a5a', lineHeight: '1.9', fontFamily: "'Courier New', 'Courier', monospace", margin: 0 }}>{prompt.template}</p>
                </div>
                <button
                  onClick={() => handleCopy(prompt.id, prompt.template)}
                  style={{ marginTop: '16px', fontSize: '12px', fontWeight: '800', color: copiedId === prompt.id ? '#2a7a4a' : '#0f2d4a', background: 'none', border: `1.5px solid ${copiedId === prompt.id ? '#2a7a4a' : '#0f2d4a'}`, padding: '7px 18px', borderRadius: '2px', cursor: 'pointer', letterSpacing: '0.06em', transition: 'all 0.2s' }}>
                  {copiedId === prompt.id ? '已複製' : '複製指令'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Directory */}
      <section id="resources" style={{ padding: '88px 32px', backgroundColor: '#faf8f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.25em', color: '#d4880a', marginBottom: '14px' }}>RESOURCES</p>
            <h2 style={{ fontSize: '38px', fontWeight: '900', color: '#0f2d4a', marginBottom: '16px' }}>台灣 AI 學習資源目錄</h2>
            <p style={{ fontSize: '16px', color: '#6a7a8a', maxWidth: '480px', margin: '0 auto', lineHeight: '1.85' }}>精選台灣本土與國際 AI 資源，持續更新補充</p>
          </div>
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
        </div>
      </section>

      {/* Feedback */}
      <section id="feedback" style={{ padding: '88px 32px', backgroundColor: '#0f2d4a' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.25em', color: '#d4880a', marginBottom: '14px' }}>FEEDBACK</p>
          <h2 style={{ fontSize: '38px', fontWeight: '900', color: '#ffffff', marginBottom: '16px' }}>你的建議讓平台更好</h2>
          <p style={{ fontSize: '16px', color: '#a8c0d4', marginBottom: '52px', lineHeight: '1.85' }}>我們正在持續建設這個平台，歡迎告訴我們你希望看到哪些內容或功能</p>
          {feedbackSubmitted ? (
            <div style={{ backgroundColor: '#152b40', border: '1px solid #2a5a7a', padding: '40px', borderRadius: '4px' }}>
              <p style={{ color: '#d4880a', fontSize: '20px', fontWeight: '800', marginBottom: '10px' }}>感謝您的回饋</p>
              <p style={{ color: '#a8c0d4', fontSize: '15px', lineHeight: '1.8' }}>我們已收到您的意見，將持續改善平台內容與功能。</p>
            </div>
          ) : (
            <div style={{ textAlign: 'left' }}>
              <textarea
                value={feedback}
                onChange={e => setFeedback(e.target.value)}
                placeholder="請輸入您的建議或想法（例如：希望增加哪些學習主題、工具評測或資源連結...）"
                style={{ width: '100%', minHeight: '148px', backgroundColor: '#152b40', border: '1px solid #2a5a7a', borderRadius: '4px', padding: '18px 20px', fontSize: '15px', color: '#e0ecf8', resize: 'vertical', boxSizing: 'border-box', outline: 'none', lineHeight: '1.75', fontFamily: "'Noto Sans TC', sans-serif" }}
              />
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '14px' }}>
                <button
                  onClick={() => feedback.trim() && setFeedbackSubmitted(true)}
                  style={{ backgroundColor: '#d4880a', color: '#fff', border: 'none', padding: '13px 36px', fontSize: '15px', fontWeight: '800', borderRadius: '3px', cursor: feedback.trim() ? 'pointer' : 'not-allowed', letterSpacing: '0.06em', opacity: feedback.trim() ? 1 : 0.6 }}>
                  送出回饋
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#091e30', padding: '52px 32px 36px', borderTop: '1px solid #1e3d57' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '36px', flexWrap: 'wrap', gap: '32px' }}>
            <div style={{ maxWidth: '300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: '32px', height: '32px', backgroundColor: '#d4880a', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: '#fff', fontWeight: '900', fontSize: '15px' }}>台</span>
                </div>
                <span style={{ color: '#ffffff', fontWeight: '800', fontSize: '16px' }}>台灣 AI 學習平台</span>
              </div>
              <p style={{ color: '#7a9ab4', fontSize: '13px', lineHeight: '1.85' }}>致力於推動 AI 知識在台灣的普及化，提供全齡、在地化的學習資源與實用工具，讓每個人都能受益於 AI 技術的發展。</p>
            </div>
            <div style={{ display: 'flex', gap: '56px', flexWrap: 'wrap' }}>
              {[
                { title: '學習資源', links: ['新手入門', '進階實踐', '資源總覽', 'Prompt 指令庫'] },
                { title: '關於平台', links: ['平台使命', '內容方針', '聯絡我們', '意見回饋'] },
              ].map(col => (
                <div key={col.title}>
                  <p style={{ color: '#ffffff', fontSize: '12px', fontWeight: '800', marginBottom: '18px', letterSpacing: '0.1em' }}>{col.title}</p>
                  {col.links.map(link => (
                    <a key={link} href="#" style={{ display: 'block', color: '#7a9ab4', fontSize: '13px', textDecoration: 'none', marginBottom: '12px', lineHeight: '1.5', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#c8d8e8'}
                      onMouseLeave={e => e.target.style.color = '#7a9ab4'}
                    >{link}</a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid #1e3d57', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ color: '#3a5a74', fontSize: '12px', letterSpacing: '0.03em' }}>© 2026 台灣 AI 學習平台　高中自主學習計畫成果</p>
            <p style={{ color: '#3a5a74', fontSize: '12px', letterSpacing: '0.03em' }}>以繁體中文服務台灣 AI 學習社群</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
