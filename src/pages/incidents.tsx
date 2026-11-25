import Head from 'next/head'
import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'

export default function Incidents() {
  return <SiteLayout><Head><title>Incident information | Nartstudio Status</title><meta name="description" content="Current incident-feed setup information for Nartstudio ecosystem services." /></Head>
    <main id="main-content" className="content-page incidents-page"><p className="eyebrow"><Link href="/">STATUS</Link> / INCIDENT INFORMATION</p><h1>Incident updates,<br /><em>when connected.</em></h1><p className="lede">No incident feed is connected to this page. We cannot confirm whether an issue is active or provide a service history here.</p><section className="incident-state"><span className="incident-icon" aria-hidden="true">i</span><div><p className="eyebrow">REPORTING STATUS</p><h2>Incident history unavailable</h2><p>Monitoring and incident reporting are not configured. This is not a statement that all services are operating normally.</p></div></section><section className="incident-help"><h2>Having trouble with a service?</h2><p>Contact the affected website using its own support options, or email the studio about a website availability concern.</p><a className="button-primary" href="mailto:hello@nartstudio.com?subject=Website%20availability%20concern">Email Nartstudio <span aria-hidden="true">↗</span></a></section><Link className="text-link" href="/systems">Review systems in scope <span aria-hidden="true">↗</span></Link></main>
  </SiteLayout>
}
