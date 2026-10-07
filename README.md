# Lemonade Empire

A browser clicker game about growing a lemonade business. Make clicks, sell cookies, buy sales upgrades and automatic businesses, and discover new locations as your empire grows.

## Play locally

No installation or build step is required. With Python installed, run:

```sh
python -m http.server 8000 --directory dist
```

Open http://localhost:8000 in your browser.

With Node.js 22 or later, you can also run `npm start` and open http://localhost:3000.

## Deploy to Railway

Create a Railway service from this GitHub repository. Railway detects the included Dockerfile and serves the game using its assigned `PORT`; no secrets or build commands are required. Once deployment is healthy, generate a public domain in the service's Networking settings.

## Files

- `dist/index.html`: game interface
- `dist/style.css`: full-screen scene and collapsible shop
- `dist/game.js`: purchases, earnings, one-time boosts, achievements, and progression
- `dist/images/`: generated background artwork

## Gameplay

- Sales upgrades increase clicks per tap.
- Business upgrades earn clicks automatically while the game is open.
- Each boost can be bought once per game; different boosts combine.
- Unlock achievements for one-time bonus clicks.
- New locations appear as lifetime earnings grow.
- Starting a new game resets the current run. Progress is currently held in memory.

The game uses plain HTML, CSS, and JavaScript. Google Fonts is optional; local font fallbacks are provided. Numeric limits prevent overflowing totals or purchases.
