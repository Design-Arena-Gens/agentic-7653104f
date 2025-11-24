export const metadata = {
  title: 'Blitzitip - Quick Tip Calculator',
  description: 'Calculate tips quickly and easily',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
