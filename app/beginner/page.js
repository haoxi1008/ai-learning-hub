'use client'
import { useState } from 'react'

export default function BeginnerPage() {
  const [openQ, setOpenQ] = useState(null)
  const faqs = [
    { q: 'AI 回答錯了怎麼辦？', a: 'AI 有時候確實會出錯，甚至講得很有自信但答案是錯的。重要的是養成習慣——對重要資訊記得自己查證。你也可以直接追問：「你確定嗎？」或「可以再解釋一次嗎？」，ChatGPT 通常會重新整理。', },
    { q: '我問的問題太簡單，AI 會嘲笑我嗎？', a: '完全不會。AI 不會評判任何問題，也不會記得你問過什麼（下次開新對話就清空了）。盡管放心問，越具體越好。', },
    { q: '一個對話可以問多久？', a: '可以一直問下去。ChatGPT 在同一個對話內會記得你說過的話，所以e��以用「剛才那個」、「再改一下」這種方式繼續追問，不需要每次重新說明背景。', },
    { q: '免費版本有什麼限制？', a: '免費版本有使用次數的上限（大約每隔幾小時會重置），對初學者來說完全夠用。如果遇到「已達到上限」的提示，稍等一下或隔天再試即可。', },
    { q: '用 AI 寫作業算作弊嗎？', a: '這是個很好的問題，也是很多同學的疑惑。建議直接問老師，因為每個科目的標準不同。不過學會「和 AI 合作」本身就是一種現代技能——讓 AI 幫你起草、你再修改，和讓字典幫你查字、你再造句，本質上類似。', },
    { q: '同一個問題問兩次，答案會一樣嗎？', a: '通常不會一模一樣。AI 每次都是重新生成答案，所以措辭和細節可能有差異。如果你覺得某次的回答比較好，可以複製下來存起來。', },
  ]

  const tips = [
    {
      num: 1, icon: '🎭', title: '設定角色',
      desc: '告訴 AI「你是誰」，它的回答風格、深度與語氣都會跟著改變',
      bad: '「解釋機器學習。」',
      good: '「你是一位擅長用生活比喻教學的老師，我是高中生，請解釋機器學習。」',
      badNote: 'AI 不知道你是誰，給出模糊的通用回答',
      goodNote: 'AI 調整語氣，給出適合高中生的說明',
    },
    {
      num: 2, icon: '📋', title: '給足背景資訊',
      desc: 'AI 只知道你告訴它的事——說得越詳細，回答越貼近你的真實需求',
      bad: '「幫我寫一封請假信。」',
      good: '「我是高中生，需要向班導師請假明天的課，原因是家族喜宴，請寫一封正式的請假信，100字以內。」',
      badNote: 'AI 只能猜測，結果和實際需求差很遠',
      goodNote: 'AI 生成完全符合情境的信件',
    },
    {
      num: 3, icon: '📝', title: '要求特定格式',
      desc: '主動指定格式，省去自己整理的時間，輸出可以直接使用',
      bad: '「列出學習 Python 的步驟。」',
      good: '「請用表格列出學習 Python 的 5 個步驟，包含步驟名稱、時間估計、推薦工具。」',
      badNote: '可能得到一大段文字，還要自己再整理',
      goodNote: '整齊的表格，可直接複製使用',
    },
    {
      num: 4, icon: '💬', title: '善用多輪對話',
      desc: '不要期望一次問到完美答案——每一輪追問都能讓結果更接近你想要的',
      bad: '「期望一次問到完美答案，不滿意就放棄。」',
      good: '先得到草稿 → 追問「改成更輕鬆的語氣」 → 追問「加一個具體例子」 → 追問「縮短到 100 字」',
      badNote: '一次問答往往不夠精準',
      goodNote: '逐步迭代，結果越來越好',
    },
    {
      num: 5, icon: '🔍', title: '驗證重要資訊',
      desc: 'AI 有時會自信地說錯——數字、日期、人名等具體事實要自己查',
      bad: '「直接相信 AI 給出的數字和日期。」',
      good: '「如果你不確定這個答案，請告訴我，並告訴我該去哪裡查詢。」',
      badNote: 'AI 可能生成聽起來合理但錯誤的資訊',
      goodNote: '引導 AI 表達不確定性，更可靠',
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
            <p style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.25em', color: '#d4880a', marginBottom: '14px' }}>BEGINNER'S GUIDE</p>
            <h1 style={{ fontSize: '44px', fontWeight: '900', color: '#ffffff', marginBottom: '16px', lineHeight: '1.2' }}>新手入門</h1>
            <p style={{ fontSize: '18px', color: '#a8c0d4', lineHeight: '1.85', maxWidth: '560px' }}>從打開 ChatGPT 到完成第一個實際任務，跟著這份指南一步步上手。</p>
          </div>
          {/* Quick nav pills */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '36px', flexWrap: 'wrap' }}>
            {['選一個工具', '認識介面', '實際任務', '提問技巧', '常見問題'].map((label, i) => (
              <a key={i} href={`#section-${i + 1}`} style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#c8d8e8', fontSize: '13px', fontWeight: '600', padding: '8px 18px', borderRadius: '20px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', letterSpacing: '0.03em' }}>
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
            <span style={{ color: '#c8d8e8' }}>新手入門</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '72px 32px 100px' }}>

        {/* ── Section 1: Choose a tool ── */}
        <section id="section-1" style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#0f2d4a', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#d4880a', fontWeight: '900', fontSize: '18px' }}>1</span>
            </div>
            <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1a2e3d', margin: 0 }}>選一個工具開始</h2>
          </div>
          <p style={{ fontSize: '16px', color: '#3a4a5a', lineHeight: '1.9', marginBottom: '24px' }}>
            生成式 AI 的工具現在很多，包括 ChatGPT、Claude、Gemini 等等。對初學者來說，建議先專注在其中一個，學會了再看其他的——因為這些工具的邏輯都很相似，學會一個就能快速上手另一個。
          </p>
          <div style={{ backgroundColor: '#fff', border: '2px solid #0f2d4a', borderRadius: '14px', padding: '28px 32px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ backgroundColor: '#d4880a', color: '#fff', fontSize: '11px', fontWeight: '800', letterSpacing: '0.1em', padding: '4px 12px', borderRadius: '4px' }}>推薦起點</div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f2d4a', margin: 0 }}>ChatGPT</h3>
            </div>
            <p style={{ fontSize: '15px', color: '#3a4a5a', lineHeight: '1.85', margin: 0 }}>
              ChatGPT 是目前台灣人使用最廣泛的 AI 工具，身邊的朋友或家人也最可能在用它。免費版本就已經很好用，中文支援完整，介面簡單直覺，非常適合初學者入門。
            </p>
          </div>
          <div style={{ backgroundColor: '#f0f4f8', borderRadius: '10px', padding: '20px 24px' }}>
            <p style={{ fontSize: '13px', color: '#5a7a94', fontWeight: '600', marginBottom: '8px', letterSpacing: '0.05em' }}>其他選擇︈之後可以試試看）</p>
            <p style={{ fontSize: '14px', color: '#4a6070', lineHeight: '1.75', margin: 0 }}>
              <strong>Claude</strong> — 長文寫作和推理表現優秀｜<strong>Gemini</strong> — Google 出品，與 Google 服務整合好｜<strong>Copilot</strong> — 內建於 Microsoft 產品中
            </p>
          </div>
        </section>

        {/* ── Section 2: Interface ── */}
        <section id="section-2" style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#0f2d4a', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#d4880a', fontWeight: '900', fontSize: '18px' }}>2</span>
            </div>
            <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1a2e3d', margin: 0 }}>認識介面，開始提問</h2>
          </div>
          <p style={{ fontSize: '16px', color: '#3a4a5a', lineHeight: '1.9', marginBottom: '28px' }}>
            打開 <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0f2d4a', fontWeight: '700' }}>chatgpt.com</a>，你會看到這樣的畫面：
          </p>
          <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.12)', marginBottom: '28px', border: '1px solid #e0ddd8' }}>
            <img src="/b4dfd7b4-805c-4b85-a5f3-3795a61b5be0.jpg" alt="ChatGPT 主畫面" style={{ width: '100%', display: 'block' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '36px' }}>
            {[
              { label: '左側欄', icon: '☰', desc: '「新對話」按鈕和過去的對話記錄。每次開新對話，ChatGPT 就不記得之前聊過什麼。' },
              { label: '主區域', icon: '💬', desc: '對話發生的地方。你問的問題和 AI 的回答都會顯示在這裡。' },
              { label: '輸入框', icon: '✏️', desc: '畫面下方的輸入框。在這裡打你的問題，按 Enter 或箭頭按鈕送出。' },
              { label: '語音輸入', icon: '🎙', desc: '不想打字？點右側的麥克風圖示，可以用說的。' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#fff', border: '1px solid #e4e0da', borderRadius: '10px', padding: '18px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '20px' }}>{item.icon}</span>
                  <span style={{ fontWeight: '700', color: '#0f2d4a', fontSize: '15px' }}>{item.label}</span>
                </div>
                <p style={{ fontSize: '14px', color: '#5a6a7a', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <h3 style={{ fontSize: '19px', fontWeight: '800', color: '#1a2e3d', marginBottom: '16px' }}>怎麼提問？</h3>
          <p style={{ fontSize: '16px', color: '#3a4a5a', lineHeight: '1.9', marginBottom: '24px' }}>
            把想問的話打在輸入框，按 <kbd style={{ backgroundColor: '#0f2d4a', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '13px', fontWeight: '700' }}>Enter</kbd> 送出，等 ChatGPT 回應，就這樣。ChatGPT 會記得整個對話的內容，所以你可以繼續追問，不需要每次重新說明。
          </p>
          <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.12)', border: '1px solid #e0ddd8', marginBottom: '16px' }}>
            <img src="/86cf20de-0ea6-498e-babc-59cb4d3cdead.jpg" alt="在輸入框輸入問題的示範" style={{ width: '100%', display: 'block' }} />
          </div>
          <p style={{ fontSize: '13px', color: '#8a9aaa', textAlign: 'center', marginBottom: '0' }}>↑ 在輸入框打好問題後，點右側的箭頭按鈕（或按 Enter）送出</p>
        </section>

        {/* ── Section 3: Tasks ── */}
        <section id="section-3" style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#0f2d4a', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#d4880a', fontWeight: '900', fontSize: '18px' }}>3</span>
            </div>
            <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1a2e3d', margin: 0 }}>第一個實際任務</h2>
          </div>
          <p style={{ fontSize: '16px', color: '#3a4a5a', lineHeight: '1.9', marginBottom: '36px' }}>
            光看說明沒有感覺，實際試一次才真的有感。下面三個任務是最適合新手的起點，每個只需要一句話就能開始。
          </p>

          {/* Task 1 */}
          <div style={{ backgroundColor: '#fff', border: '1px solid #e4e0da', borderRadius: '14px', overflow: 'hidden', marginBottom: '28px' }}>
            <div style={{ backgroundColor: '#0f2d4a', padding: '20px 28px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ backgroundColor: '#d4880a', color: '#fff', fontWeight: '900', fontSize: '13px', padding: '4px 12px', borderRadius: '4px', letterSpacing: '0.05em' }}>任務 1</div>
              <h3 style={{ color: '#fff', fontWeight: '800', fontSize: '18px', margin: 0 }}>用 AI 寫自我介紹</h3>
            </div>
            <div style={{ padding: '28px' }}>
              <p style={{ fontSize: '15px', color: '#3a4a5a', lineHeight: '1.85', marginBottom: '20px' }}>
                無論是班級自我介紹、社團活動還是求職，自我介紹總是讓人苦惱。把你的基本資訊告訴 ChatGPT，讓它起草一版，再依照你的感覺修改。
              </p>
              <div style={{ backgroundColor: '#f0f4f0', borderLeft: '4px solid #2d7a4a', borderRadius: '0 8px 8px 0', padding: '16px 20px', marginBottom: '20px' }}>
                <p style={{ fontSize: '12px', fontWeight: '800', color: '#2d7a4a', letterSpacing: '0.1em', marginBottom: '8px' }}>你可以這樣問</p>
                <p style={{ fontSize: '15px', color: '#1a3a2a', lineHeight: '1.75', margin: 0, fontFamily: 'monospace' }}>
                  「我叫小明，喜歡籃球和數學，想成為工程師。請幫我寫一個1分鐘的自我介紹。」
                </p>
              </div>
              <div style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.1)', border: '1px solid #e0ddd8', marginBottom: '16px' }}>
                <img src="/c00b3210-40fa-4921-95dc-a62565e4750b.jpg" alt="ChatGPT 回應自我介紹的示範" style={{ width: '100%', display: 'block' }} />
              </div>
              <p style={{ fontSize: '13px', color: '#8a9aaa', textAlign: 'center', marginBottom: '20px' }}>↑ ChatGPT 的回答，幾秒鐘就完成了</p>
              <div style={{ backgroundColor: '#f8f4ee', borderRadius: '8px', padding: '16px 20px' }}>
                <p style={{ fontSize: '13px', fontWeight: '700', color: '#8a5a0a', marginBottom: '8px' }}>繼續追問試試看</p>
                <p style={{ fontSize: '14px', color: '#5a4020', lineHeight: '1.75', margin: 0 }}>
                  「能改成更輕鬆的語氣嗎？」「加一個有趣的開場白」「改成英文版本」— 不滿意就繼續修改，直到你喜歡為止。
                </p>
              </div>
            </div>
          </div>

          {/* Task 2 */}
          <div style={{ backgroundColor: '#fff', border: '1px solid #e4e0da', borderRadius: '14px', overflow: 'hidden', marginBottom: '28px' }}>
            <div style={{ backgroundColor: '#0f2d4a', padding: '20px 28px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ backgroundColor: '#d4880a', color: '#fff', fontWeight: '900', fontSize: '13px', padding: '4px 12px', borderRadius: '4px', letterSpacing: '0.05em' }}>任務 2</div>
              <h3 style={{ color: '#fff', fontWeight: '800', fontSize: '18px', margin: 0 }}>用 AI 幫忙考前複習</h3>
            </div>
            <div style={{ padding: '28px' }}>
              <p style={{ fontSize: '15px', color: '#3a4a5a', lineHeight: '1.85', marginBottom: '20px' }}>
                明天要考試但不知道重點在哪？告訴 ChatGPT 科目和章節，讓它幫你整理重點，甚至出模擬考題。
              </p>
              <div style={{ backgroundColor: '#f0f4f0', borderLeft: '4px solid #2d7a4a', borderRadius: '0 8px 8px 0', padding: '16px 20px', marginBottom: '20px' }}>
                <p style={{ fontSize: '12px', fontWeight: '800', color: '#2d7a4a', letterSpacing: '0.1em', marginBottom: '8px' }}>你可以這樣問</p>
                <p style={{ fontSize: '15px', color: '#1a3a2a', lineHeight: '1.75', margin: 0, fontFamily: 'monospace' }}>
                  「我明天要考生物的『細胞』章節，能幫我整理重點嗎？」
                </p>
              </div>
              <div style={{ backgroundColor: '#f8f4ee', borderRadius: '8px', padding: '16px 20px' }}>
                <p style={{ fontSize: '13px', fontWeight: '700', color: '#8a5a0a', marginBottom: '8px' }}>繼續追問試試看</p>
                <p style={{ fontSize: '14px', color: '#5a4020', lineHeight: '1.75', margin: 0 }}>
                  「幫我出 5 個可能的考題」「粒線體是什麼，用簡單的話解釋」「幫我把重點整理成表格」
                </p>
              </div>
            </div>
          </div>

          {/* Task 3 */}
          <div style={{ backgroundColor: '#fff', border: '1px solid #e4e0da', borderRadius: '14px', overflow: 'hidden', marginBottom: '0' }}>
            <div style={{ backgroundColor: '#0f2d4a', padding: '20px 28px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ backgroundColor: '#d4880a', color: '#fff', fontWeight: '900', fontSize: '13px', padding: '4px 12px', borderRadius: '4px', letterSpacing: '0.05em' }}>任務 3</div>
              <h3 style={{ color: '#fff', fontWeight: '800', fontSize: '18px', margin: 0 }}>用 AI 檢查和改進文章</h3>
            </div>
            <div style={{ padding: '28px' }}>
              <p style={{ fontSize: '15px', color: '#3a4a5a', lineHeight: '1.85', marginBottom: '20px' }}>
                寫完作文或報告不確定有沒有問題？把文字貼給 ChatGPT，請它幫你找錯字、調整文法，或讓文章更流暢。
              </p>
              <div style={{ backgroundColor: '#f0f4f0', borderLeft: '4px solid #2d7a4a', borderRadius: '0 8px 8px 0', padding: '16px 20px', marginBottom: '20px' }}>
                <p style={{ fontSize: '12px', fontWeight: '800', color: '#2d7a4a', letterSpacing: '0.1em', marginBottom: '8px' }}>你可以這樣問</p>
                <p style={{ fontSize: '15px', color: '#1a3a2a', lineHeight: '1.75', margin: 0, fontFamily: 'monospace' }}>
                  「幫我檢查這段文字有沒有錯別字和文法問題：[貼上你的文字]」
                </p>
              </div>
              <div style={{ backgroundColor: '#f8f4ee', borderRadius: '8px', padding: '16px 20px' }}>
                <p style={{ fontSize: '13px', fontWeight: '700', color: '#8a5a0a', marginBottom: '8px' }}>繼續追問試試看</p>
                <p style={{ fontSize: '14px', color: '#5a4020', lineHeight: '1.75', margin: 0 }}>
                  「這個開場白能改得更吸引人嗎？」「把這段改成更正式的語氣」「幫我縮短到 100 字以內」
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 4: 提問技巧 ── */}
        <section id="section-4" style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#0f2d4a', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#d4880a', fontWeight: '900', fontSize: '18px' }}>4</span>
            </div>
            <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1a2e3d', margin: 0 }}>5 個提問技巧，讓 AI 更好用</h2>
          </div>
          <p style={{ fontSize: '16px', color: '#3a4a5a', lineHeight: '1.9', margin: '16px 0 32px' }}>
            同樣一個需求，問法不同，結果差很多。學會這 5 個技巧，不用多久就能明顯感受到差別。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {tips.map((tip) => (
              <div key={tip.num} style={{ backgroundColor: '#fff', border: '1px solid #e4e0da', borderRadius: '14px', overflow: 'hidden' }}>
                {/* Tip header */}
                <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid #f0ece6' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '36px', height: '36px', backgroundColor: '#0f2d4a', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: '#d4880a', fontWeight: '900', fontSize: '14px' }}>{tip.num}</span>
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '18px' }}>{tip.icon}</span>
                        <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#1a2e3d', margin: 0 }}>{tip.title}</h3>
                      </div>
                      <p style={{ fontSize: '14px', color: '#5a6a7a', margin: '4px 0 0', lineHeight: '1.5' }}>{tip.desc}</p>
                    </div>
                  </div>
                </div>
                {/* Comparison */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                  <div style={{ padding: '18px 20px', borderRight: '1px solid #f0ece6', backgroundColor: '#fffaf9' }}>
                    <p style={{ fontSize: '11px', fontWeight: '800', color: '#c0392b', letterSpacing: '0.08em', marginBottom: '8px' }}>❌ 模糊的問法</p>
                    <p style={{ fontSize: '13px', color: '#5a3a34', fontFamily: 'monospace', lineHeight: '1.65', margin: '0 0 8px' }}>{tip.bad}</p>
                    <p style={{ fontSize: '12px', color: '#9a7a74', margin: 0, lineHeight: '1.5' }}>→ {tip.badNote}</p>
                  </div>
                  <div style={{ padding: '18px 20px', backgroundColor: '#f8fdf8' }}>
                    <p style={{ fontSize: '11px', fontWeight: '800', color: '#2d7a4a', letterSpacing: '0.08em', marginBottom: '8px' }}>✅ 更好的問法</p>
                    <p style={{ fontSize: '13px', color: '#1a3a2a', fontFamily: 'monospace', lineHeight: '1.65', margin: '0 0 8px' }}>{tip.good}</p>
                    <p style={{ fontSize: '12px', color: '#4a7a5a', margin: 0, lineHeight: '1.5' }}>→ {tip.goodNote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Link to advanced */}
          <div style={{ backgroundColor: '#f0f4f8', borderRadius: '10px', padding: '20px 24px', marginTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#1a2e3d', margin: '0 0 4px' }}>想學更進階的技巧？</p>
              <p style={{ fontSize: '13px', color: '#5a7a94', margin: 0 }}>包含 Chain-of-Thought 思維鏈、Few-shot 舉例引導，以及每個技巧背後的 AI 原理說明</p>
            </div>
            <a href="/advanced" style={{ display: 'inline-block', backgroundColor: '#0f2d4a', color: '#fff', fontWeight: '700', fontSize: '14px', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', flexShrink: 0 }}>
              進階實踐 →
            </a>
          </div>
        </section>

        {/* ── Section 5: FAQ ── */}
        <section id="section-5">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#0f2d4a', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#d4880a', fontWeight: '900', fontSize: '18px' }}>5</span>
            </div>
            <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#1a2e3d', margin: 0 }}>常見問題</h2>
          </div>
          <p style={{ fontSize: '16px', color: '#3a4a5a', lineHeight: '1.9', marginBottom: '28px' }}>
            新手常有的疑惑，這裡一次解答。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((item, i) => (
              <div key={i} style={{ backgroundColor: '#fff', border: '1px solid #e4e0da', borderRadius: '10px', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenQ(openQ === i ? null : i)}
                  style={{ width: '100%', textAlign: 'left', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}
                >
                  <span style={{ fontSize: '15px', fontWeight: '700', color: '#1a2e3d', lineHeight: '1.5' }}>{item.q}</span>
                  <span style={{ color: '#d4880a', fontSize: '20px', fontWeight: '700', flexShrink: 0, transform: openQ === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
                </button>
                {openQ === i && (
                  <div style={{ padding: '0 24px 20px', borderTop: '1px solid #f0ece6' }}>
                    <p style={{ fontSize: '15px', color: '#3a4a5a', lineHeight: '1.85', margin: '16px 0 0' }}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Next step CTA */}
          <div style={{ backgroundColor: '#0f2d4a', borderRadius: '14px', padding: '36px', marginTop: '56px', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.2em', color: '#d4880a', marginBottom: '12px' }}>下一步</p>
            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#fff', marginBottom: '12px' }}>準備好進階了嗎？</h3>
            <p style={{ fontSize: '15px', color: '#a8c0d4', lineHeight: '1.75', marginBottom: '24px' }}>
              學會基本使用後，前往進階實踐學習更深入的提問技巧，或到 Prompt 指令庫直接套用現成模板。
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/advanced" style={{ display: 'inline-block', backgroundColor: '#d4880a', color: '#fff', fontWeight: '800', fontSize: '15px', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', letterSpacing: '0.05em' }}>
                進階實踐 →
              </a>
              <a href="/prompts" style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.1)', color: '#c8d8e8', fontWeight: '700', fontSize: '15px', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)' }}>
                Prompt 指令庫
              </a>
            </div>
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
