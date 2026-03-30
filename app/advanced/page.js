'use client'

export default function AdvancedPage() {
  const techniques = [
    {
      num: 1,
      title: '設定角色',
      subtitle: 'Role Prompting',
      desc: '明確告訴 AI 扮演什麼角色，可以大幅改變回答的風格、深度與語氣。',
      bad: '「解釋機器學習。」',
      good: '「你是一位擅長用生活比喻教學的高中老師，我是高中生。請用簡單易懂的方式解釋機器學習，並舉一個日常生活的例子。」',
      theory: 'AI 語言模型會根據上下文的「角色框架」調整輸出分佈。設定角色相當於提供了一個「人格濾鏡」，讓模型從該角色的知識庫與表達習慣中取樣，而不是從通用平均值取樣。',
    },
    {
      num: 2,
      title: '給足背景資訊',
      subtitle: 'Context Setting',
      desc: 'AI 不知道你的情況。提供越多相關背景，它的回答就越貼近你的實際需求。',
      bad: '「我的報告寫不好，怎麼辦？」',
      good: '「我是高中二年級學生，要交一份 2000 字的歷史小論文，主題是清朝的衰落原因。我已經寫了引言和第一段，但覺得論點不夠有力。請幫我分析問題並給出改善建議。」',
      theory: '語言模型進行「條件機率生成」：P(回答 | 提示詞)。提示詞越具體，條件越強，模型搜索的解空間越窄，生成的內容就越精準。模糊的問題讓模型在龐大的可能空間中隨機遊走。',
    },
    {
      num: 3,
      title: '要求特定格式',
      subtitle: 'Format Specification',
      desc: '明確指定輸出的格式、長度和結構，讓 AI 的回答更容易直接使用。',
      bad: '「介紹台灣的觀光景點。」',
      good: '「請用表格列出台灣 5 個著名觀光景點，欄位包含：景點名稱、所在縣市、最佳造訪季節、適合族群（家庭/情侶/背包客）、一句話推薦理由。」',
      theory: '明確的格式指令會啟動模型的「結構化生成模式」。模型會將目標格式作為硬性約束，在語法樹的特定節點強制插入分隔符和結構標記，大幅減少格式噪音。',
    },
    {
      num: 4,
      title: '多輪對話技巧',
      subtitle: 'Multi-turn Dialogue',
      desc: '不要試圖在一個提問中解決所有問題。學會拆分任務、逐步深入，才能發揮對話 AI 的真正優勢。',
      bad: '「幫我從零開始學 Python，給我一個完整的學習計畫、所有資源、每天的任務、練習題。」',
      good: '第一輪：「我完全沒有程式基礎，想學 Python 來做數據分析。我每天有 1 小時，請先幫我規劃一個 4 週的學習路線圖。」→ 第二輪：「好的，第一週的內容我看懂了。請針對第二週的『函式與迴圈』，給我 3 個具體的練習題目，難度由淺到深。」',
      theory: '每輪對話都在當前的「上下文視窗」中累積語境。多輪對話讓模型能夠持續精煉和深化理解，而不是在有限的 token 預算內試圖面面俱到。對話記憶讓每個回應都能建立在前一個回應的基礎上。',
    },
    {
      num: 5,
      title: '避免 AI 幻覺',
      subtitle: 'Hallucination Prevention',
      desc: 'AI 可能會自信地給出錯誤的資訊。學會幾個技巧，大幅降低 AI 幻覺的風險。',
      bad: '「台灣最高的山是哪座？它有多高？」（直接相信 AI 的答案）',
      good: '「請告訴我台灣前三高的山，並標注你對每個數據的確信度（高/中/低）。如果你不確定，請明確說明，不要猜測。」',
      theory: '大型語言模型的訓練目標是「最大化下一個 token 的預測概率」，而非「只輸出已知事實」。這導致模型在知識邊界附近會進行「流暢的推測填充」。要求模型標注信心水準，會迫使它啟動自我監控機制，降低流暢度優先、事實性次要的生成傾向。',
    },
    {
      num: 6,
      title: 'Chain-of-Thought 思維鏈',
      subtitle: 'Step-by-step Reasoning',
      desc: '要求 AI 一步步展示推理過程，而不是直接給出答案。這能顯著提升複雜問題的準確率。',
      bad: '「如果一個三角形兩邊長分別是 3 和 4，第三邊最長可以是多少？」',
      good: '「如果一個三角形兩邊長分別是 3 和 4，第三邊最長可以是多少？請一步一步推導，先回憶三角形的基本定理，再列出計算過程，最後給出答案。」',
      theory: 'Chain-of-Thought（CoT）提示是 Google Brain 在 2022 年提出的重要技術。強迫模型生成「中間推理步驟」眆為下一個 token 的生成提供了更強的條件約束，讓模型的注意力機制聚焦在邏輯鏈上而非直接跳到結論，特別適合數學、邏輯和多步驟問題。',
    },
    {
      num: 7,
      title: 'Few-shot 範例學習',
      subtitle: 'In-context Learning',
      desc: '在提示詞中提供 2-3 個「輸入→輸出」的範例，讓 AI 學習你期望的模式，再處理你的真實問題。',
      bad: '「幫我把以下句子改成更正式的書面語：『這個方法真的很讚，大家都可以用。』」',
      good: '「我需要你把口語句子改成正式書面語。以下是幾個例子：\\n口語：『這個東西很貴，買不起。』→ 書面：『此物價格不菲，超出預算範圍。』\\n口語：『他今天沒來上班。』→ 書面：『他今日未出席工作崗位。』\\n現在請改寫：『這個方法真的很讚，大家都可以用。』」',
      theory: 'Few-shot learning 利用了語言模型強大的「模式匹配與類比推理」能力。提供的範例相當於在提示詞中建立了一個「微型微調」：模型通過注意力機制識別輸入→輸出的映射模式，並將這個模式應用到新的輸入上。研究表明，即使只有 2-3 個高質量範例，也能讓複雜任務的準確率提升 30-40%。',
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
      </na     >{item.label}</a>
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
            <p style={{ fontSize: '18px', color: '#a8c0d4', lineHeight: '1.85', maxWidth: '680px' }}>掌握 7 個核心技巧，讓你的 AI 應用能力系統化提升</p>
          </div>
          {/* Quick nav pills */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '36px', flexWrap: 'wrap' }}>
            {['設定角色', '背景資訊', '特定格式', '多輪對話', '避免幻覺', 'Chain-of-Thought', 'Few-shot 學習'].map((label, i) => (
              <a key={i} href={`#technique-${i + 1}`} style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#c8d8e8', fontSize: '13px', fontWeight: '600', padding: '8px 18px', borderRadius: '20px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', letterSpacing: '0.03em' }}>
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

        {/* 7 Technique Sections */}
        {techniques.map((tech, idx) => (
          <section key={idx} id={`technique-${tech.num}`} style={{ marginBottom: '80px' }}>
            {/* Header with number circle and label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
              <div style={{ width: '52px', height: '52px', backgroundColor: '#0f2d4a', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#d4880a', fontWeight: '900', fontSize: '24px' }}>{String(tech.num).padStart(2, '0')}</span>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.15em', color: '#d4880a', marginBottom: '4px' }}>TECHNIQUE {String(tech.num).padStart(2, '0')}</p>
                <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#1a2e3d', margin: 0 }}>{tech.title}</h2>
              </div>
            </div>

            {/* Description */}
            <p style={{ fontSize: '16px', color: '#3a4a5a', lineHeight: '1.9', marginBottom: '28px' }}>
              {tech.desc}
            </p>

            {/* Bad Example */}
            <div style={{ backgroundColor: '#fde8e8', border: '2px solid #d97777', borderRadius: '12px', padding: '24px 28px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span style={{ fontSize: '18px' }}>❌</span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#8a2a2a', letterSpacing: '0.05em' }}>不好的提問</span>
              </div>
              <code style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.05)', padding: '14px 16px', borderRadius: '8px', fontSize: '14px', color: '#5a2a2a', fontFamily: "'Courier New', monospace", lineHeight: '1.6', wordBreak: 'break-word' }}>
                {tech.bad}
              </code>
            </div>

            {/* Good Example */}
            <div style={{ backgroundColor: '#e8f5e9', border: '2px solid #66bb6a', borderRadius: '12px', padding: '24px 28px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span style={{ fontSize: '18px' }}>✅</span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#2d6a2d', letterSpacing: '0.05em' }}>好的提問</span>
              </div>
              <code style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.03)', padding: '14px 16px', borderRadius: '8px', fontSize: '14px', color: '#2d4a2d', fontFamily: "'Courier New', monospace", lineHeight: '1.6', wordBreak: 'break-word' }}>
                {tech.good}
              </code>
            </div>

            {/* Theory Box */}
            <div style={{ background: 'linear-gradient(135deg, #1a0a3a, #2d1a5a)', border: '1px solid #6040a0', borderRadius: '10px', padding: '20px 24px', marginTop: '20px' }}>
              <div style={{ color: '#c0a0ff', fontWeight: '800', fontSize: '13px', letterSpacing: '0.1em', marginBottom: '10px' }}>🔬 為什麼有效？</div>
              <p style={{ color: '#d4c0f0', fontSize: '14px', lineHeight: '1.8', margin: 0 }}>
                {tech.theory}
              </p>
            </div>
          </section>
        ))}

        {/* Learning Resources CTA */}
        <section style={{ backgroundColor: '#0f2d4a', borderRadius: '14px', padding: '48px 36px', textAlign: 'center', marginTop: '72px' }}>
          <p style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.2em', color: '#d4880a', marginBottom: '12px' }}>進階學習資源</p>
          <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#fff', marginBottom: '16px' }}>掌握技巧後，該看什麼？</h3>
          <p style={{ fontSize: '16px', color: '#a8c0d4', lineHeight: '1.8', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            現在你已經學會了 7 個核心技巧，下一步可以瀏覽我們的 Prompt 指令庫來看真實案例，或回到學習路徑選擇適合的進階主題。
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/prompts" style={{ display: 'inline-block', backgroundColor: '#d4880a', color: '#fff', fontWeight: '800', fontSize: '15px', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', letterSpacing: '0.05em' }}>
              Prompt 指令庫 →
            </a>
            <a href="/beginner" style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', color: '#c8d8e8', fontWeight: '700', fontSize: '15px', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)' }}>
              回到新手入門
            </a>
          </div>
        </section>

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
