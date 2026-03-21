# The MoneyShot Pool — 2026 March Madness Dashboard

Live bracket tracking dashboard for the Tiatia family pool.

## Files

- `bracket-tracker.html` — Main dashboard (Standings, Root For, Bracket, Player Profile, My Stats)
- `admin.html` — Admin panel for managing picks and bracket data
- `config.js` — Pool settings (name, season, JSONBin IDs, scoring rules)

## Setup

### Deploy to GitHub Pages

1. Create a GitHub repository and upload all files
2. Go to **Settings → Pages**, set source to **main branch, root folder**
3. Dashboard will be live at `https://yourusername.github.io/repo-name/bracket-tracker.html`

### Configure JSONBin

1. Create a free account at [jsonbin.io](https://jsonbin.io)
2. Update `config.js` with your `BIN_ID`, `MASTER_KEY`, and `ACCESS_KEY`
3. Open the dashboard and enter your JSONBin Master Key in Settings to enable data imports

### During the Tournament

- Use `admin.html` to update game results and manage picks
- The dashboard auto-refreshes every 3 minutes
- Share the GitHub Pages URL with pool participants

## Scoring Rules

Points = Round Multiplier × Seed Number

| Round | Multiplier |
|-------|-----------|
| Round 1 | ×1 |
| Round 2 | ×2 |
| Sweet 16 | ×3 |
| Elite 8 | ×4 |
| Final Four | ×5 |
| Championship | ×6 |

Example: 4-seed Arkansas winning the Final Four = 5 × 4 = **20 points**
