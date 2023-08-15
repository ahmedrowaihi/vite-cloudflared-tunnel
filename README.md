# vite-cloudflared-tunnel

[![NPM version][npm-image]][npm-url]

> A Vite Plugin on top of cloudflared-tunnel package to serve your localhost to the outside world during development.

## Installation

```sh
 yarn add -D vite-cloudflared-tunnel
```

## Usage

```js
// vite.config.js
import viteCloudflaredTunnel from 'vite-cloudflared-tunnel'
export default {
  plugins: [
    // ...other vite plugins
    viteCloudflaredTunnel(),
  ],
}
```

## License

MIT © [Ahmed Rowaihi](https://ahmedrowaihi.lol)

[npm-image]: https://badge.fury.io/js/vite-cloudflared-tunnel.svg
[npm-url]: https://npmjs.org/package/vite-cloudflared-tunnel
