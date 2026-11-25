type MonitoredService = { name: string; purpose: string; href?: string; group: string }

export const monitoredServices: MonitoredService[] = [
  { name: 'Nartstudio', purpose: 'Studio website', href: 'https://nartstudio.com', group: 'Public websites' },
  { name: 'NCU', purpose: 'Comic-universe discovery', href: 'https://ncunartstudio.vercel.app', group: 'Public websites' },
  { name: 'Oubyt', purpose: 'Animation and production studio', href: 'https://oubyt.vercel.app', group: 'Public websites' },
  { name: 'Pylothouse', purpose: 'Story reading and creator platform', href: 'https://pylothouse.com', group: 'Public websites' },
  { name: 'Nartstudio Shop', purpose: 'Preview storefront', href: 'https://shop.nartstudio.com', group: 'Public websites' },
  { name: 'Academy', purpose: 'Creator learning resources', group: 'Supporting services' },
  { name: 'Campaigns', purpose: 'Campaign planning resources', group: 'Supporting services' },
  { name: 'Clients', purpose: 'Client portal', group: 'Supporting services' },
  { name: 'Help', purpose: 'Pylothouse help centre', href: 'https://help.pylothouse.com', group: 'Supporting services' },
  { name: 'Links', purpose: 'Ecosystem link hub', group: 'Supporting services' },
]
