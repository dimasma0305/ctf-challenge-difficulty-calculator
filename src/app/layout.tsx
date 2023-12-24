import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CTF Difficulty Calculator',
  description: 'CTF difficulty calculator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">CTF Difficulty Calculator</a>
          </div>
          <div className="navbar-end">
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
