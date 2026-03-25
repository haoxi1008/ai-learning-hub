import './globals.css'

export const metadata = {
  title: 'AI 智慧學習 - 台灣 AI 資源中文化平台',
  description: '為台灣初學者和進階學習者提供高品質的中文 AI 學習資源',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
