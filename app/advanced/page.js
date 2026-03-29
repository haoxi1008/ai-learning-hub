'use client'

export default function AdvancedPage() {
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
     0         {[
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
            <p style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.25em', color: '#d4880a', marginBottom: '14px' }}>ADVANCED PRACTICE</p>
            <h1 style={{ fontSize: '44px', fontWeight: '900', color: '#ffffff', marginBottom: '16px', lineHeight: '1.2' }}>進階實踐</h1>
     0      <p style={{ fontSize: '18px', color: '#a8c0d4', lineHeight: '1.85', maxWidth: '580px' }}>學會用對的方式提問，讓 AI 給出更精準、更有用的答案。五個核心技巧，帶你從「能用」到「用得好」。</p>
          </div>
          {/* Quick nav pills */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '36px', flexWrap: 'wrap' }}>
            {['設定角色', '給足背景', '指定格式', '多輪對話', '避免幻覺'].map((label, i) => (
              <a key={i} href={`#tip-${i + 1}`} style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#c8d8e8', fontSize: '13px', fontWeight: '600', padding: '8px 18px', borderRadius: '20px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', letterSpacing: '0.03em' }}>
                {i + 1}. {label}
              </a>
            ))}
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

      {/* Main Content */}
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 32px 100px' }}>

        {/* Intro callout */}
        <div style={{ backgroundColor: '#fff', border: '1px solid #e4e0da', borderRadius: '12px', padding: '28px 32px', marginBottom: '64px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '28px', flexShrink: 0 }}>💡</span>
          <div>
            <p style={{ fontSize: '15px', fontWeight: '700', color: '#0f2d4a', marginBottom: '8px' }}>為什麼要學提問技巧？</p>
            <p style={{ fontSize: '15px', color: '#3a4a5a', lineHeight: '1.85', margin: 0 }}>
              AI 的回答品質，很大程度取決於你怎麼問。同樣的問題，換一個方式問，得到的答案可能天差地遠。這五個技巧，能讓你快速提升和 AI 互動的效率。
            </p>
          </div>
        </div>

        {/* ── Tip 1: 設定角色 ── */}
        <section id="tip-1" style={{ marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <div style={{ width: '44px', height: '44px', backgroundColor: '#0f2d4a', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#d4880a', fontWeight: '900', fontSize: '18px' }}>1</span>
            </div>
            <div>
              <p style={{ fontSize: '11px', fontWeight: '800', color: '#d4880a', letterSpacing: '0.15em', margin: 0 }}>TECHNIQUE 01</p>
              <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1a2e3d', margin: 0 }}>設定角色</h2>
            </div>
          </div>

          <p style={{ fontSize: '16px', color: '#3a4a5a', lineHeight: '1.9', margin: '20px 0 28px' }}>
            在問題開頭告訴 ChatGPT「你現在是什麼身份」，它的回答風格和深度就會跟著調整。想要專業建議，就讓它扮演專家；想要簡單易懂的解釋，就讓它扮演老師或朋友。
          </p>

          {/* Comparison */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#fff8f7', border: '1px solid #f0c8c0', borderRadius: '10px', padding: '20px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '16px' }}>❌</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#c0392b', letterSpacing: '0.08em' }}>沒設定角色</span>
              </div>
              <p style={{ fontSize: '14px', color: '#5a3a34', fontFamily: 'monospace', lineHeight: '1.7', margin: 0 }}>
                「我的作文開頭怎麼寫比較好？」
              </p>
              <p style={{ fontSize: '13px', color: '#8a6a64', marginTop: '10px', lineHeight: '1.6' }}>→ AI 給的是通用建議，不夠有針對性</p>
            </div>
            <div style={{ backgroundColor: '#f4faf4', border: '1px solid #b8e0b8', borderRadius: '10px', padding: '20px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '16px' }}>✅</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#2d7a4a', letterSpacing: '0.08em' }}>有設定角色</span>
              </div>
              <p style={{ fontSize: '14px', color: '#1a3a2a', fontFamily: 'monospace', lineHeight: '1.7', margin: 0 }}>
                「你是一位高中國文老師，擅長幫學生改善寫作。請告訴我作文開頭怎麼寫比較好？」
              </p>
              <p style={{ fontSize: '13px', color: '#4a7a5a', marginTop: '10px', lineHeight: '1.6' }}>→ AI 用老師的角度給出更實用的建議</p>
            </div>
          </div>

          {/* Template */}
          <div style={{ backgroundColor: '#0f2d4a', borderRadius: '10px', padding: '20px 24px' }}>
            <p style={{ fontSize: '12px', fontWeight: '800', color: '#d4880a', letterSpacing: '0.12em', marginBottom: '10px' }}>PROMPT 模板</p>
            <p style={{ fontSize: '15px', color: '#e8f0f8', fontFamily: 'monospace', lineHeight: '1.8', margin: 0 }}>
              「你是一位 <strong style={{ color: '#ffd080' }}>[角色/身份]</strong>，擅長 <strong style={{ color: '#ffd080' }}>[專長]</strong>。請幫我 <strong style={{ color: '#ffd080' }}>[你的問題]</strong>。」
            </p>
            <div style={{ marginTop: '14px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '14px' }}>
              <p style={{ fontSize: '12px', color: '#7a9ab4', margin: '0 0 6px', fontWeight: '600' }}>例子</p>
              <p style={{ fontSize: '14px', color: '#c8d8e8', fontFamily: 'monospace', lineHeight: '1.7', margin: 0 }}>
                「你是一位大學招生顧問，請幫我審查這份自傳初稿並提供改進建議。」
              </p>
            </div>
          </div>
        </section>

        {/* ── Tip 2: 給足背景資訊 ── */}
        <section id="tip-2" style={{ marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <div style={{ width: '44px', height: '44px', backgroundColor: '#0f2d4a', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#d4880a', fontWeight: '900', fontSize: '18px' }}>2</span>
            </div>
            <div>
              <p style={{ fontSize: '11px', fontWeight: '800', color: '#d4880a', letterSpacing: '0.15em', margin: 0 }}>TECHNIQUE 02</p>
              <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1a2e3d', margin: 0 }}>給足背景資訊</h2>
            </div>
          </div>

          <p style={{ fontSize: '16px', color: '#3a4a5a', lineHeight: '1.9', margin: '20px 0 28px' }}>
            AI 只知道你告訴它的事。你的情況、限制、目的越清楚，它的回答就越貼近你的實際需求。把自己當成在跟一個完全不認識你的人說話——什麼都要說清楚。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#fff8f7', border: '1px solid #f0c8c0', borderRadius: '10px', padding: '20px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '16px' }}>❌</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#c0392b', letterSpacing: '0.08em' }}>背景不足</span>
              </div>
              <p style={{ fontSize: '14px', color: '#5a3a34', fontFamily: 'monospace', lineHeight: '1.7', margin: 0 }}>
                「幫我寫一封電子郵件。」
              </p>
              <p style={{ fontSize: '13px', color: '#8a6a64', marginTop: '10px', lineHeight: '1.6' }}>→ AI 不知道寫給誰、為什麼寫、什麼語氣</p>
            </div>
            <div style={{ backgroundColor: '#f4faf4', border: '1px solid #b8e0b8', borderRadius: '10px', padding: '20px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '16px' }}>✅</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#2d7a4a', letterSpacing: '0.08em' }}>背景完整</span>
              </div>
              <p style={{ fontSize: '14px', color: '#1a3a2a', fontFamily: 'monospace', lineHeight: '1.7', margin: 0 }}>
                「我是高二學生，要寄信給社團指導老師，請假下週的社課。語氣需要正式有禮貌，請幫我寫一封約100字的請假信。」
              </p>
              <p style={{ fontSize: '13px', color: '#4a7a5a', marginTop: '10px', lineHeight: '1.6' }}>→ AI 直接給出符合情境的完整信件</p>
            </div>
          </div>

          <div style={{ backgroundColor: '#0f2d4a', borderRadius: '10px', padding: '20px 24px' }}>
            <p style={{ fontSize: '12px', fontWeight: '800', color: '#d4880a', letterSpacing: '0.12em', marginBottom: '10px' }}>背景資訊清單</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {['我是誰（身份、年級）', '對象是誰（收件人、讀者）', '目的是什麼', '有什麼限制（字數、語氣、格式）'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#d4880a', fontSize: '14px', flexShrink: 0 }}>✦</span>
                  <span style={{ fontSize: '14px', color: '#c8d8e8' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tip 3: 要求特定格式 ── */}
        <section id="tip-3" style={{ marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <div style={{ width: '44px', height: '44px', backgroundColor: '#0f2d4a', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#d4880a', fontWeight: '900', fontSize: '18px' }}>3</span>
            </div>
            <div>
              <p style={{ fontSize: '11px', fontWeight: '800', color: '#d4880a', letterSpacing: '0.15em', margin: 0 }}>TECHNIQUE 03</p>
              <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1a2e3d', margin: 0 }}>要求特定格式</h2>
            </div>
          </div>

          <p style={{ fontSize: '16px', color: '#3a4a5a', lineHeight: '1.9', margin: '20px 0 28px' }}>
            不告訴 AI 你要什麼格式，它會自己決定——有時候太長、有時候太短、有時候不是你要的樣子。明確說出格式需求，就能避免這些問題，第一次就拿到可以用的答案。
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#fff8f7', border: '1px solid #f0c8c0', borderRadius: '10px', padding: '20px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '16px' }}>❌</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#c0392b', letterSpacing: '0.08em' }}>沒指定格式</span>
              </div>
              <p style={{ fontSize: '14px', color: '#5a3a34', fontFamily: 'monospace', lineHeight: '1.7', margin: 0 }}>
                「介紹一下台灣的歷史。」
              </p>
              <p style={{ fontSize: '13px', color: '#8a6a64', marginTop: '10px', lineHeight: '1.6' }}>→ 可能得到一大段落落長文，難以快速閱讀</p>
            </div>
            <div style={{ backgroundColor: '#f4faf4', border: '1px solid #b8e0b8', borderRadius: '10px', padding: '20px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '16px' }}>✅</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#2d7a4a', letterSpacing: '0.08em' }}>指定格式</span>
              </div>
              <p style={{ fontSize: '14px', color: '#1a3a2a', fontFamily: 'monospace', lineHeight: '1.7', margin: 0 }}>
                「用條列式整理台灣歷史上最重要的5個時期，每個時期寫一句說明就好。」
              </p>
              <p style={{ fontSize: '13px', color: '#4a7a5a', marginTop: '10px', lineHeight: '1.6' }}>→ 結構清晰、長度適中，直接可用</p>
            </div>
          </div>

          <div style={{ backgroundColor: '#0f2d4a', borderRadius: '10px', padding: '20px 24px' }}>
            <p style={{ fontSize: '12px', fontWeight: '800', color: '#d4880a', letterSpacing: '0.12em', marginBottom: '12px' }}>常用格式指令</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { cmd: '「用條列式整理」', desc: '重點清單，方便瀏覽' },
                { cmd: '「控制在 XX 字以內」', desc: '限制長度，避免冗長' },
                { cmd: '「給我三個選項」', desc: '多個版本讓你挑選' },
                { cmd: '「用表格呈現」', desc: '適合比較或整理資料' },
                { cmd: '「只要結論，不要過程」', desc: '快速取得核心答案' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <span style={{ fontSize: '14px', color: '#ffd080', fontFamily: 'monospace', flexShrink: 0 }}>{item.cmd}</span>
                  <span style={{ fontSize: '13px', color: '#7a9ab4' }}>— {item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tip 4: 多輪對話技巧 ── */}
        <section id="tip-4" style={{ marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <div style={{ width: '44px', height: '44px', backgroundColor: '#0f2d4a', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#d4880a', fontWeight: '900', fontSize: '18px' }}>4</span>
            </div>
            <div>
              <p style={{ fontSize: '11px', fontWeight: '800', color: '#d4880a', letterSpacing: '0.15em', margin: 0 }}>TECHNIQUE 04</p>
              <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1a2e3d', margin: 0 }}>多輪對話技巧</h2>
            </div>
          </div>

          <p style={{ fontSize: '16px', color: '#3a4a5a', lineHeight: '1.9', margin: '20px 0 28px' }}>
            很多人問完一個問題不滿意，就開新對話再問一次——這樣 AI 每次都得從頭來。聰明的做法是在同一個對話裡繼續追問、修改，讓 AI 在已有的基礎上改進，效率高得多。
          </p>

          {/* Flow diagram */}
          <div style={{ backgroundColor: '#fff', border: '1px solid #e4e0da', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
            <p style={{ fontSize: '13px', fontWeight: '700', color: '#5a7a94', marginBottom: '20px', letterSpacing: '0.05em' }}>多輪對話的節奏</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { step: '第一輪', msg: '「幫我寫一段自我介紹」', note: '先得到一個初稿' },
                { step: '第二輪', msg: '「太正式了，改成輕鬆一點的語氣」', note: '調整風格' },
                { step: '第三輪', msg: '「加入我喜歡音樂和旅行這兩點」', note: '補充內容' },
                { step: '第四輪', msg: '「縮短到100字以內」', note: '控制長度' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '32px', height: '32px', backgroundColor: i === 0 ? '#0f2d4a' : '#e8f0f8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: i === 0 ? '#d4880a' : '#5a7a94', fontWeight: '800', fontSize: '13px' }}>{i + 1}</span>
                    </div>
                    {i < 3 && <div style={{ width: '2px', height: '28px', backgroundColor: '#e4e0da' }} />}
                  </div>
                  <div style={{ paddingBottom: i < 3 ? '12px' : '0' }}>
                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#d4880a', letterSpacing: '0.08em' }}>{item.step}</span>
                    <p style={{ fontSize: '14px', color: '#1a2e3d', fontFamily: 'monospace', margin: '4px 0 2px' }}>{item.msg}</p>
                    <p style={{ fontSize: '13px', color: '#7a8a9a', margin: 0 }}>→ {item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: '#0f2d4a', borderRadius: '10px', padding: '20px 24px' }}>
            <p style={{ fontSize: '12px', fontWeight: '800', color: '#d4880a', letterSpacing: '0.12em', marginBottom: '12px' }}>好用的追問句型</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                '「太長了，精簡到一半」',
                '「換一個角度再說一次」',
                '「剛才的版本比較好，能再改回去嗎？」',
                '「繼續，把第三點展開說明」',
                '「這個邏輯有問題，因為……，請修正」',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#d4880a', fontSize: '12px', flexShrink: 0 }}>▸</span>
                  <span style={{ fontSize: '14px', color: '#c8d8e8', fontFamily: 'monospace' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tip 5: 避免 AI 幻覺 ── */}
        <section id="tip-5" style={{ marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <div style={{ width: '44px', height: '44px', backgroundColor: '#0f2d4a', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#d4880a', fontWeight: '900', fontSize: '18px' }}>5</span>
            </div>
            <div>
              <p style={{ fontSize: '11px', fontWeight: '800', color: '#d4880a', letterSpacing: '0.15em', margin: 0 }}>TECHNIQUE 05</p>
              <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1a2e3d', margin: 0 }}>避免 AI 幻覺</h2>
            </div>
          </div>

          <p style={{ fontSize: '16px', color: '#3a4a5a', lineHeight: '1.9', margin: '20px 0 16px' }}>
            「AI 幻覺」是指 AI 用很有自信的口氣，說出完全錯誤的事情——假的數據、不存在的書、捏造的人名……這種情況比你想像的還常見。
          </p>

          {/* Warning box */}
          <div style={{ backgroundColor: '#fff8ee', border: '1px solid #f0cc88', borderRadius: '10px', padding: '18px 22px', marginBottom: '24px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '20px', flexShrink: 0 }}>⚠️</span>
            <p style={{ fontSize: '14px', color: '#7a4a0a', lineHeight: '1.8', margin: 0 }}>
              AI 幻覺最危險的地方，是它不會說「我不確定」——它的語氣永遠是肯定的。所以你不能只因為 AI 說得很有把握就相信它，特別是涉及<strong>事實、數據、人名、時間</strong>的問題。
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#fff8f7', border: '1px solid #f0c8c0', borderRadius: '10px', padding: '20px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '16px' }}>❌</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#c0392b', letterSpacing: '0.08em' }}>容易出錯的問法</span>
              </div>
              <p style={{ fontSize: '14px', color: '#5a3a34', fontFamily: 'monospace', lineHeight: '1.7', margin: 0 }}>
                「台灣 2024 年的 GDP 是多少？」
              </p>
              <p style={{ fontSize: '13px', color: '#8a6a64', marginTop: '10px', lineHeight: '1.6' }}>→ AI 可能給出一個看起來合理但不準確的數字</p>
            </div>
            <div style={{ backgroundColor: '#f4faf4', border: '1px solid #b8e0b8', borderRadius: '10px', padding: '20px 22px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '16px' }}>✅</span>
                <span style={{ fontSize: '12px', fontWeight: '800', color: '#2d7a4a', letterSpacing: '0.08em' }}>加上確認機制</span>
              </div>
              <p style={{ fontSize: '14px', color: '#1a3a2a', fontFamily: 'monospace', lineHeight: '1.7', margin: 0 }}>
                「台灣 2024 年的 GDP 大概是多少？請告訴我你的資料來源，如果不確定請說不確定。」
              </p>
              <p style={{ fontSize: '13px', color: '#4a7a5a', marginTop: '10px', lineHeight: '1.6' }}>→ 要求來源，讓 AI 承認不確定性</p>
            </div>
          </div>

          <div style={{ backgroundColor: '#0f2d4a', borderRadius: '10px', padding: '20px 24px' }}>
            <p style={{ fontSize: '12px', fontWeight: '800', color: '#d4880a', letterSpacing: '0.12em', marginBottom: '12px' }}>防幻覺四招</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { title: '要求說明來源', desc: '「請告訴我這個說法的來源」——讓 AI 意識到你會查證' },
                { title: '要求承認不確定', desc: '「如果你不確定，請直接說不確定」——給 AI 退路' },
                { title: '重要事實自己查', desc: '數字、日期、人名、法律條文——用 AI 理解概念，用官方來源查細節' },
                { title: '追問「你確定嗎？」', desc: '反問一次，AI 常常會自我修正或補充「其實我不太確定……」' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '24px', height: '24px', backgroundColor: '#d4880a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    <span style={{ color: '#fff', fontWeight: '800', fontSize: '12px' }}>{i + 1}</span>
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '700', color: '#e8f0f8', margin: '0 0 3px' }}>{item.title}</p>
                    <p style={{ fontSize: '13px', color: '#7a9ab4', margin: 0, lineHeight: '1.6' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div style={{ backgroundColor: '#0f2d4a', borderRadius: '14px', padding: '36px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.2em', color: '#d4880a', marginBottom: '12px' }}>下一步</p>
          <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>學以致用</h3>
          <p style={{ fontSize: '15px', color: '#a8c0d4', lineHeight: '1.75', marginBottom: '24px' }}>
            看完五個技巧，現在去 Prompt 指令庫找到適合你的場景，把這些技巧實際套用看看。
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/prompts" style={{ display: 'inline-block', backgroundColor: '#d4880a', color: '#fff', fontWeight: '800', fontSize: '15px', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', letterSpacing: '0.05em' }}>
              前往 Prompt 指令庫 →
            </a>
            <a href="/beginner" style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', color: '#c8d8e8', fontWeight: '700', fontSize: '15px', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)' }}>
              ← 回新手入門
            </a>
          </div>
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
