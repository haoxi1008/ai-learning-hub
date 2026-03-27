import './globals.css'

export const metadata = {
  title: '台灣 AI 學習平台 | Taiwan AI Learning',
  description: '全齡化台灣 AI 學習入口平台，提供在地化繁體中文學習資源、Prompt 指令庫與工具推薦',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
