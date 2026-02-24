# Deploy nguoivietcali.com to Vercel

## Status
- ✅ Site built (Next.js static export)
- ✅ GitHub repo: https://github.com/vietcgi/nguoivietcali-landing
- ✅ vercel.json configured
- ✅ robots.txt + sitemap.xml added
- ✅ SEO metadata (canonical URL, structured data, keywords)
- ⏳ Kevin needs: Vercel login + DNS

## One-Time Setup (5 minutes)

### Option A: Vercel Dashboard (Easiest)
1. Go to https://vercel.com/new
2. Import GitHub repo: `vietcgi/nguoivietcali-landing`
3. Framework: Next.js (auto-detected)
4. Click Deploy
5. After deploy: Add domain `nguoivietcali.com` in project settings

### Option B: CLI
```bash
cd /Users/kevin/nvc-landing
vercel login
vercel --prod
```

## DNS Setup (After Vercel Deploy)
In your domain registrar (GoDaddy/Namecheap/Cloudflare):

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

Vercel will give you the exact values after deploy.

## What's Live
- Landing page with 67K+ member count
- Join button → FB group
- SEO keywords: "vietnamese california", "nguoi viet california", etc.
- Mobile-first design
- Structured data for Google

## SEO Keywords Targeted
- "vietnamese california" (primary)
- "vietnamese community california"
- "nguoi viet california"
- "little saigon california"
- "orange county vietnamese"

## After Deploy
Update MEMORY.md and the NVC project file with the live URL.
