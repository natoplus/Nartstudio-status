import Head from 'next/head'
import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'
import { monitoredServices } from '../lib/systems'

export default function StatusHome() {
  return <SiteLayout><Head><title>Nartstudio Status | Monitoring setup</title><meta name="description" content="Monitoring setup information for Nartstudio ecosystem websites. No live health checks are configured." /></Head>
    <main id="main-content" className="status-main">
      <section className="hero"><p className="eyebrow"><span /> NARTSTUDIO / SERVICE INFORMATION</p><div className="status-label"><i aria-hidden="true" /> MONITORING NOT CONFIGURED</div><h1>Visibility before<br /><em>assumptions.</em></h1><p className="lede">This page is being prepared for service monitoring. It does not currently run health checks, measure uptime or verify live availability.</p><div className="hero-actions"><Link className="button-primary" href="/systems">Systems in scope <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/incidents">Incident information</Link></div></section>
      <section className="status-panel"><div className="panel-heading"><div><p className="eyebrow">SERVICE REGISTER</p><h2>Monitoring setup is pending.</h2></div><span>NO LIVE DATA</span></div><p className="panel-note">The services below are listed for planning only. Their live status is unknown here; no green, amber or red health state is being reported.</p><div className="system-list">{monitoredServices.slice(0, 5).map((system, index) => <div className="system-row" key={system.name}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{system.name}</strong><small>{system.purpose}</small></div><b>Not monitored</b><a href={system.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${system.name} website in a new tab`}>Visit ↗</a></div>)}</div><Link className="panel-link" href="/systems">See all services and monitoring scope <span aria-hidden="true">↗</span></Link></section>
      <section className="setup-callout"><div><p className="eyebrow">HONEST STATUS / NO SYNTHETIC UPTIME</p><h2>Checks will appear<br />when they are real.</h2><p>Monitoring needs approved health-check URLs, alert thresholds and an incident process before this page can publish live results.</p></div><Link href="/systems">Review setup details <span aria-hidden="true">↗</span></Link></section>
    </main>
  </SiteLayout>
}
