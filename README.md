# next - dashboard

A port of my hybrid go/react personal dashboard over to next.js/typescript

## Running Locally

```bash
touch .env.local

# set values:

LAT=xx.xxxxxxxx
LON=-xx.xxxxxxxxx
DARKSKY_API_KEY=xxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_ZIP=xxxxx
NEXT_PUBLIC_SHOW_SECONDS=true
NEXT_PUBLIC_DARK_MODE=true
NEXT_PUBLIC_CHUNKY_FONTS=false
```

```bash
yarn
yarn run dev
open http://localhost:3000
```

### Epaper Displays

For epaper displays consider changing the following env vars:

```bash
NEXT_PUBLIC_SHOW_SECONDS=false
NEXT_PUBLIC_DARK_MODE=false
NEXT_PUBLIC_CHUNKY_FONTS=true
```

### Coming soon

- More modules
- Swap api provider from darksky to account for the upcoming shutdown
- Hue LAN support
