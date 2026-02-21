import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vinay MS — QA Engineer',
  description:
    'QA Engineer II specializing in test automation with Playwright, Cypress, Selenium, and Java. Building reliable software through systematic quality engineering.',
  keywords: ['QA Engineer', 'Test Automation', 'Playwright', 'Cypress', 'Selenium', 'Java', 'k6'],
  authors: [{ name: 'Vinay MS', url: 'https://github.com/vinayms96' }],
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
