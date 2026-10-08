# Lemonade Empire

Grow a lemonade stand into a cosmic business, with 45 surprise destinations, 139 shop items, 106 achievements, arcade games, rebirths, and persistent player accounts.

## Run locally

Use Node.js 22 or newer:

```sh
npm ci
npm start
```

Open http://localhost:3000. Without `DATABASE_URL`, local development allows guest play with device saves. For accounts, set `DATABASE_URL` to a PostgreSQL connection string before starting. Database tables are created automatically using `migrations/001_accounts.sql`.

## Deploy on Railway

1. Add a PostgreSQL service in the same Railway project as the game.
2. Set the game service’s `DATABASE_URL` to the database reference, normally `${{Postgres.DATABASE_URL}}` (use the actual database service name).
3. Deploy this repository. The Dockerfile installs locked dependencies and serves the game using Railway’s assigned `PORT`.
4. Keep the existing public domain and target port 8080. The server binds to `0.0.0.0`.

Production requires `DATABASE_URL`; startup fails if the database is missing or unreachable so an unhealthy account service is not published. Store database credentials in Railway variables, never in GitHub. Existing database data stays in PostgreSQL across game deployments.

## Accounts and saving

- Sign up with a username and password to keep current guest progress as the initial cloud save.
- Log in to restore that account’s progress in another tab or on another device.
- Passwords are salted and hashed with scrypt. Sessions are stored in PostgreSQL using hashed random tokens and served as HttpOnly, SameSite cookies, with Secure enabled in production.
- Cloud saves are authenticated and versioned. One tab at a time owns the play session; opening or resuming another tab safely pauses the old one. Stale tabs cannot overwrite the active save.
- Cloud writes happen every few seconds and when a tab becomes hidden. A browser-local backup remains available when networking fails. Up to two hours of offline business income are added when progress is restored.
- Guest saves remain on the current browser and domain. Each signed-in account has a separate local backup. Logging out restores guest progress without deleting the cloud empire.
- New game clears the current account’s game progress, including rebirths and achievements; it does not delete the account.

## Gameplay and artwork

Tap to earn clicks, buy sales upgrades and automatic businesses, and discover new locations. Each boost can be purchased once per run. Flappy Lemon costs 50,000 bank clicks to unlock; Cookie Catch costs 100,000. Arcade unlocks persist through rebirths and cloud saves, and a full New game resets them. Achievements pay once.

The Play button opens four illustrated arcade games and rebirths. Flappy Lemon costs 50K clicks to unlock and pays 10K per fully avoided squeezer. Cosmic Cookie Catch costs 100K, Lemon Pop costs 150K, and Lemonade Rush costs 250K. Games stay unlocked through rebirths. Lemon Pop rewards ripe fruit and penalizes sour fruit; Lemonade Rush rewards matching orders with streak bonuses. Lemon Express and the lounge Happy Hour buttons are gone. Instead, a surprise Happy Hour lemon appears every 5–9 minutes of play; click it within 5 seconds to start 30 seconds of double tap, business and arcade earnings, a countdown, and decorative falling lemons. It cannot stack, gives no offline multiplier, and resets when changing saves. Both surprise lemons appear in random reachable positions, flash during their last two seconds, and disappear after five seconds. Golden lemons appear roughly every 3–6 minutes in the main world and reward a random whole-number percentage from 5% to 25% of the bank balance at the moment they are caught.

Rebirths unlock at 1 million run earnings; each subsequent rebirth requires ten times more. Each permanent Zest adds 25% to tap and business earnings. Rebirth resets the bank and shop while keeping completed achievements, arcade unlocks, and arcade records.

All 30 expansion locations use individually generated, detailed lemonade-themed artwork. The complete scene stays visible below a compact toolbar, with a soft full-screen extension of the same artwork filling any remaining bands. The sidebar arrow overlays the artwork without a reserved empty strip; on phones the open shop overlays the scene instead of shrinking it. Progression runs from local businesses and earthly attractions through space, galaxies, dimensions, and finally the multiverse. Shop content and prices follow the same theme order. Every sales upgrade, business and boost is visible from the beginning and can be purchased whenever its current price is affordable, independently of the reached stage. Expansion requires the current bank balance, not total earnings. Bank targets follow the original smooth opening: 250, 2,500, 25,000, 250,000, then 2.5 million. Each later requirement grows by 10×. Prices and production are retuned together: sales are sized around hundreds of upgraded taps, businesses provide slower steady income, and boosts improve that baseline instead of being assumed before purchase. Starter sales, several business payouts, and oversized achievement rewards are reduced so one purchase or badge does not leap across multiple worlds. The Neon Lemon Night Market is stage 7. Every later item costs more and gives more than the earlier base items in its category. Available shop rows are sorted by their current purchase price, including price increases from ownership. New item costs and gains are sized against the next expansion requirement; boosts are limited to 2× one earnings type or 1.5× both per purchase. Unlocking a stage does not spend those clicks, and spending later does not downgrade an already-unlocked location. The best reached stage is saved by a stable scene ID. Earlier saves retain their previously reached location through a one-time migration. Achievements have separate ordered sections for discoveries, earnings, sales, businesses, shopping, taps, arcade activities, and rebirths. Stable item and achievement names preserve ownership and collected rewards in earlier saves.

Artwork fits entirely below the toolbar without cropping. The upgrades sidebar slides from the right and has an arrow handle to open or close it. The image resizes to fit the space beside the sidebar.

## Tests

Use a disposable PostgreSQL database:

```sh
TEST_DATABASE_URL=postgres://user:password@localhost:5432/lemonade_test npm test
```

Tests cover signup, password hashing, cookie sessions, account isolation, origin checks, save validation, version conflicts, logout, persistent login, and inactive-tab protection. Account integration tests skip when no test database is configured.

## Files

- `server.mjs`: static files and API routing
- `accounts.mjs`: PostgreSQL accounts, sessions, and cloud saves
- `migrations/001_accounts.sql`: database schema
- `dist/content.js`: themed stage progression, item prices, and achievement sections
- `dist/game.js`: purchases, earnings, achievements, and stage transitions
- `dist/fun.js`: rebirths and device save helpers
- `dist/arcade.js`: paid arcade games and illustrated sprite rendering
- `dist/events.js`: surprise Happy Hour and decorative lemon rain
- `dist/account.js`: login UI, cloud sync, and tab handoff
- `dist/style.css`: responsive interface and image framing
- `dist/images/`: background artwork

Run `npm run balance` for deterministic economy simulations. Tests exercise slow, steady and fast active play, play without surprise events, saving for new upgrades, buying affordable upgrades immediately, and passive business income. These are pacing estimates, not guarantees of individual play times. The modeled steady player clicks twice per second and invests in upgrades; optional events help but are not required. Existing banks, ownership, reached scenes, and completed badges are preserved.

Type `secretpanel` outside text fields to open the hidden Lemon Lab: stage starter kits, letter-suffix bank editing, Happy Hour and golden lemon triggers, arcade unlocks, all upgrades, achievements, and permanent Zest. These changes save to the current guest or signed-in game.

Developer world hopping preserves your bank and pins the selected stage even at maximum money. Manual stage selection is saved for guests and accounts; Resume normal progression returns to bank-based advancement, and New game or rebirth clears the selection.

Discovering the Lemon Lab reveals a Secret Panel shortcut in the toolbar (Lab on mobile). The shortcut is saved with your progress and retained through rebirths, but starting a New game hides it again.

Surprise events use random cooldowns: golden lemons wait 3–6 minutes and Happy Hour offers wait 5–9 minutes. Both still have five-second claim windows. The main click button uses illustrated lemon artwork rather than a symbol.
