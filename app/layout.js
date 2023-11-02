import '/styles/globals.css'


export const metadata = {
  title: 'NeoNexa',
  description: 'Your gateway to an immersive metaverse where reality and imagination unite, offering limitless adventures and global connections.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
