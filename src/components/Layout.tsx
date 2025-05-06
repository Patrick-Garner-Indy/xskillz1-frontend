import './globals.css'
import { ReactNode } from 'react'
import Layout from '../components/Layout'

export const metadata = {
  title: 'XSkillz1',
  description: 'Compete. Connect. Celebrate.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
