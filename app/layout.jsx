import '/styles/globals.css'


export const metadata = {
  title: 'NeoNexa',
  description: 'Your gateway to an immersive metaverse where reality and imagination unite, offering limitless adventures and global connections.',
  developer: {
    name: 'Christian Onoh',
    email: 'chibyk5000@gmail.com',
    website: 'https://github.com/christianonoh',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
