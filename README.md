# 🏀 The MoneyShot Pool — 2026 March Madness Dashboard

Live bracket tracking dashboard for the Tiatia family pool.

## Setup

### Step 1 — Deploy to GitHub Pages

1. Create a new GitHub repository called `moneyshot-pool`
2. Upload all files from this folder to the repo
3. Go to **Settings → Pages**
4. Set source to **main branch, root folder**
5. Your dashboard will be live at `https://yourusername.github.io/moneyshot-pool`

### Step 2 — Connect Google Sheets

1. Open your March Madness Google Sheet
2. Go to **File → Share → Publish to web**
3. Select **"Player Picks"** sheet, format **"CSV"**
4. Click **Publish** and copy the URL
5. Open `config.js` and paste the URL as `PICKS_URL`
6. Do the same for **"Master Bracket"** sheet as `MASTER_URL`
7. Commit and push the updated `config.js` to GitHub

### Step 3 — During the Tournament

- Update **Master Bracket** tab in Google Sheets as games finish
- The dashboard auto-refreshes every 5 minutes
- Share the GitHub Pages URL with anyone in the pool

## Files

- `index.html` — Main dashboard (4 views: Standings, Root For, Bracket, Player Profile)
- `config.js` — Your Google Sheets URLs and pool settings
- `README.md` — This file

## Views

### 🏆 Standings
Live leaderboard sorted by max points possible. Shows earned points, max possible, and gap to first place.

### 📺 Who To Root For
Every game sorted by how much it affects Tyson and Kristin's chances. Highest stakes games at top. Shows exactly who picked each team.

### 🗂 Bracket
Full bracket comparison showing pick distribution for every game. See who picked what for every matchup.

### 👤 Player Profile
Click any player to see their full bracket, path to win, and which picks they need to close the gap.

## Updating During Games

1. Open Google Sheet
2. Go to **Master Bracket** tab
3. Type the winner in the appropriate round column (format: `4 Arkansas`)
4. Dashboard updates automatically within 5 minutes for everyone

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
