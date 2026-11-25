import Link from 'next/link'
import type { ReactNode } from 'react'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="status-site">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header"><Link href="/" className="wordmark">NARTSTUDIO <span>STATUS</span></Link><nav aria-label="Main navigation"><Link href="/">Overview</Link><Link href="/systems">Systems</Link><Link href="/incidents">Incident information</Link></nav></header>
    {children}
    <footer className="site-footer"><p>STATUS INFORMATION / MONITORING NOT CONFIGURED</p><p><a href="https://nartstudio.com">Nartstudio ↗</a> <a href="mailto:hello@nartstudio.com?subject=Website%20availability">Report a website issue ↗</a></p></footer>
  </div>
}
