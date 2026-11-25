# Nartstudio Ecosystem Status

The status site is an informational shell. It does not currently make health-check requests, measure uptime, maintain incident records or verify service availability. Every listed service is explicitly shown as **Not monitored**.

## Development

```bash
npm install
npm run dev
```

Before enabling live monitoring, confirm the service owners and health-check URLs, acceptable response thresholds, monitoring intervals, alert recipients, public status-feed integration and incident communication process. A provider such as Better Stack or Hyperping can be evaluated once those details are approved. Do not publish uptime or incident claims from unverified checks.
