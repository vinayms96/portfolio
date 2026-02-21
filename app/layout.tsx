import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Vinay MS — QA Engineer',
  description:
    'QA Engineer II specializing in test automation with Playwright, Cypress, Selenium, and Java. Building reliable software through systematic quality engineering.',
  keywords: ['QA Engineer', 'Test Automation', 'Playwright', 'Cypress', 'Selenium', 'Java', 'k6'],
  authors: [{ name: 'Vinay MS', url: 'https://github.com/vinayms96' }],
  icons: {
    icon: [
      { url: '/portfolio/favicon.ico', sizes: 'any' },
      { url: '/portfolio/favicon.svg', type: 'image/svg+xml' },
      { url: '/portfolio/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/portfolio/apple-touch-icon.png',
  },
  manifest: '/portfolio/site.webmanifest',
  openGraph: {
    title: 'Vinay MS — QA Engineer',
    description: 'QA Engineer II — Test Automation Specialist',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
