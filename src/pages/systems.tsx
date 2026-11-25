import Head from 'next/head'
import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'
import { monitoredServices } from '../lib/systems'

export default function Systems() {
  const groups = [...new Set(monitoredServices.map(system => system.group))]
  return <SiteLayout><Head><title>Systems | Nartstudio Status</title><meta name="description" content="Services intended for Nartstudio ecosystem monitoring, with their current monitoring setup state." /></Head>
    <main id="main-content" className="content-page"><p className="eyebrow"><Link href="/">STATUS</Link> / SYSTEMS IN SCOPE</p><h1>Know what is<br /><em>being checked.</em></h1><p className="lede">This register is a planning view, not a live health report. Monitoring is not configured for any service listed here.</p><div className="setup-warning"><strong>No live health checks are active.</strong><p>Service availability, latency, uptime history and incident alerts are not measured by this site.</p></div>
      {groups.map(group => <section className="systems-group" key={group}><div className="group-heading"><p className="eyebrow">{group.toUpperCase()}</p><span>MONITORING NOT CONFIGURED</span></div>{monitoredServices.filter(system => system.group === group).map(system => <article className="system-detail" key={system.name}><div><h2>{system.name}</h2><p>{system.purpose}</p>{system.href ? <a href={system.href} target="_blank" rel="noopener noreferrer">Open website <span aria-hidden="true">↗</span></a> : <small>Public URL not published here</small>}</div><span className="not-monitored">Not monitored</span></article>)}</section>)}
      <section className="requirements"><h2>What is needed before activation?</h2><ul><li>An owner-approved health-check URL for each service</li><li>Defined response and availability thresholds</li><li>An alert recipient and incident communication process</li><li>A monitoring provider and a verified public status feed</li></ul></section>
    </main>
  </SiteLayout>
}
