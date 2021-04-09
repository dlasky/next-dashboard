# next - dashboard

A port of my hybrid go/react personal dashboard over to next.js/typescript

## Running Locally

```bash
touch .env.local

# set values:

NEXT_PUBLIC_ZIP=
LAT=
LON=
DARKSKY_API_KEY=
```

```bash
yarn
yarn run dev
open http://localhost:3000
```

### Coming soon

- More modules
- Swap api provider from darksky to account for the upcoming shutdown
- Hue LAN support
