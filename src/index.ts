import { setup, startTunnel } from 'cloudflared-tunnel'
import type { ViteDevServer } from 'vite'

function viteCloudflaredTunnel() {
  return {
    name: 'vite-cloudflared-tunnel',
    configureServer(server: ViteDevServer) {
      if (server.config.command === 'serve') {
        setup().then(() => {
          startTunnel({
            host:
              typeof server.config.server.host === 'string'
                ? server.config.server.host
                : 'localhost',
            port:
              typeof server.config.server.port === 'number'
                ? server.config.server.port
                : 5173,
          })
        })
      }
    },
  }
}

export default viteCloudflaredTunnel
