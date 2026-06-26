# 420Things site bundle

## What this is
A Next.js site bundle for 420Things with:
- searchable video archive
- per-video pages
- funny AI write-ups
- AC Infinity discount page
- YouTube sync script

## First steps
1. Install Node.js 20+
2. Open a terminal in this folder
3. Run:
   npm install

4. Create `.env.local` based on `.env.example`
5. Put your *new rotated* YouTube API key into `.env.local`
6. Run:
   npm run sync:youtube
7. Then start the site:
   npm run dev

## Important
Because the API key was shared in chat, rotate it in Google Cloud before using this project.
