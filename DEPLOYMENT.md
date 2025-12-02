# Deploying to Vercel

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

## Manual Deployment

### 1. Push to GitHub
Your code is already in Git. Ensure all changes are committed and pushed:

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository: `AliMontana98/MarvelDevs`
4. Vercel will auto-detect Next.js settings
5. Click **"Deploy"**

### 3. Done! 🎉

Your app will be live at: `https://your-project.vercel.app`

## Configuration

No environment variables needed - the app is now a static frontend.

## Build Settings (Auto-configured)

- **Framework**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Features

All pages are fully static and will deploy instantly:
- Landing page
- Why Marvel
- Enterprise
- Pricing
- Login/Signup (UI only)
- Dashboard (static demo)

## Need Backend?

To add authentication and database:
1. Use Vercel Postgres or Supabase
2. Add NextAuth.js back
3. Set up API routes

See the [Next.js docs](https://nextjs.org/docs) for more.
