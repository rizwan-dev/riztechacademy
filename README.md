# RizTech Academy — Next.js Website (with Blog)

A professional site for RizTech Academy (AI-based software solutions for startups), built on **Next.js 14 (App Router)** and **Tailwind CSS** with a working **blog** rendered from Markdown.

## Company Info
- Address: 703, Jubilation, Ahwalwadi Road, Wagholi, Pune, India  
- Phone: +91 8983265077

## Features
- Elegant, responsive UI (cards, soft shadows, sticky header)
- Pages: Home, Services, Solutions, About, Contact
- Working **Blog** (Markdown in `content/blog/*.md`)
- Contact form posts to `/api/contact` (currently logs on server)
- TypeScript, ESLint, Tailwind pre-configured

## Getting Started
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Add a blog post
1. Create a new Markdown file under `content/blog/your-slug.md`:
```md
---
title: "Your Post Title"
date: "2025-08-01"
tags: ["tag1","tag2"]
excerpt: "One-line summary for the listing."
---

Your content in Markdown...
```
2. Visit `/blog` to see the listing; click into your post at `/blog/your-slug`.

## Deploy
- Push to GitHub and deploy on **Vercel** (zero-config for Next.js).

## Customize
- Colors & style: `tailwind.config.js`, `app/globals.css`
- Header/Footer: `components/`
- Pages: `app/(site)/*`
- Blog content: `content/blog/*`
