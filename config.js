// ─────────────────────────────────────────────────────────────────────────────
// THE MONEYSHOT POOL — CONFIG
// ─────────────────────────────────────────────────────────────────────────────
//
// SETUP INSTRUCTIONS:
//
// 1. Open your Google Sheet
// 2. Go to File → Share → Publish to web
// 3. For PICKS_URL:
//    - Select the "Player Picks" sheet
//    - Select "Comma-separated values (.csv)" format
//    - Click Publish
//    - Copy the URL and paste it below as PICKS_URL
//
// 4. For MASTER_URL:
//    - Select the "Master Bracket" sheet
//    - Select "Comma-separated values (.csv)" format
//    - Click Publish
//    - Copy the URL and paste it below as MASTER_URL
//
// 5. Save this file
// 6. Commit and push to GitHub
// 7. The dashboard will auto-update every 5 minutes
//
// NOTE: After you publish in Google Sheets, changes you make to the sheet
// will automatically appear in the dashboard within a few minutes.
// No manual CSV exports needed!
//
// ─────────────────────────────────────────────────────────────────────────────

const CONFIG = {

  // Paste your Player Picks published CSV URL here
  PICKS_URL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTzIiByrRjuFDPn19oUthDSy558EVJRT4Ae5D9mMRyynro4vxkHg804n0kBKgsz-Q/pub?gid=1993458520&single=true&output=csv',

  // Paste your Master Bracket published CSV URL here
  MASTER_URL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTzIiByrRjuFDPn19oUthDSy558EVJRT4Ae5D9mMRyynro4vxkHg804n0kBKgsz-Q/pub?gid=1765527092&single=true&output=csv',

  // Pool settings
  POOL_NAME: 'The MoneyShot Pool',
  SEASON: '2026',

  // Scoring rules — points = round multiplier × seed number
  ROUND_MULTIPLIERS: {
    R1:  1,
    R2:  2,
    S16: 3,
    E8:  4,
    FF:  5,
    NCG: 6,
  },

  // Tiatia household — highlighted in the dashboard
  HIGHLIGHT_PLAYERS: ['Tyson Tiatia', 'Kristin Zamani'],

  // Auto-refresh interval in minutes
  REFRESH_MINUTES: 5,

};
