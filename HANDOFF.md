# WreathToday Project Handoff

> Last updated: 2026-05-20 evening (SEO content expansion + Quick-facts + Internal links)
> Use this as primary context after `/compact` to resume work efficiently.

---

## 🎯 Business Context

- **WreathToday** = พวงหรีดออนไลน์ (Thai funeral wreath delivery)
- **Owner:** ธนพล วัฒนไกร (บริษัท วัฒนไกร จำกัด, เลขผู้เสียภาษี 0505560000270)
- **Service area:** กรุงเทพ + สมุทรปราการ + เชียงใหม่ (อ.เมือง+ติดเมือง) + นนทบุรี (+100 บาท)
- **Pricing:** ดอกไม้สด 1,090 / พัดลม 1,800 / พรีเมียม 4,000 บาท
- **LINE OA:** @wreathtoday
- **Phone:** 094-147-6210
- **Status:** Site live แต่ยัง 0 ลูกค้าจริง (เว็บอายุ ~2 สัปดาห์, รอ SEO ติด + ต้องเปิด Google Ads)

---

## 🖥 Infrastructure (DigitalOcean Droplet)

```
Droplet: wreathtoday-server
IP:      157.230.43.169
Region:  Singapore (SGP1)
Spec:    4 GB RAM, 2 vCPU, 80 GB SSD, 4 TB transfer
Cost:    $24/mo + $4.80 backup = $28.80/mo
Tier:    Tier 2 (10 Droplet limit, ใช้ 1/10)
OS:      Ubuntu 22.04 LTS
Auto-charge threshold: $250
```

### Stack Installed
- **nginx 1.18** — reverse proxy + static files
- **Node.js 20.20.2** + npm 10
- **Python 3.10** + pip + venv
- **PM2 7.0.1** (auto-startup enabled, fork/cluster modes)
- **Certbot** (not used — Cloudflare Origin Certs instead)
- **UFW firewall** (SSH + 80 + 443 only)
- **4 GB swap** (`vm.swappiness=10`)

### SSH Access
- `ssh root@157.230.43.169`
- Key: `C:\Users\PRO-I5 Gen8\.ssh\id_ed25519` (ED25519, no passphrase)

---

## 🌐 Sites Running

### 1. wreathtoday.com (static site)
- **Path:** `/var/www/wreathtoday`
- **Repo:** `numchaHub/wreathtoday-web` (private)
- **Deploy key:** `~/.ssh/github_wreathtoday`
- **nginx config:** `/etc/nginx/sites-available/wreathtoday.com`
- **SSL:** Cloudflare Origin Cert (`/etc/ssl/cloudflare/wreathtoday.{pem,key}`)
- **Auto-deploy:** ✅ GitHub Actions → 30 sec deploy
- **Local repo:** `F:\GitHub\` (this is the working copy)

### 2. stringtuned.com (Next.js 16)
- **Path:** `/var/www/stringtuned`
- **Port:** 3000
- **Repo:** `numchaHub/stringtune-web` (private)
- **Deploy key:** `~/.ssh/github_deploy`
- **PM2 name:** `stringtuned`
- **SSL:** Cloudflare Origin Cert (`/etc/ssl/cloudflare/stringtuned.{pem,key}`)
- **Build:** ~5–8 min for 2,924 pages (NODE_OPTIONS max-old-space-size=4096)
- **Auto-deploy:** ⏳ User to add `DROPLET_SSH_KEY` secret + push workflow file

### 3. zkinora.com (Next.js 16)
- **Path:** `/var/www/zkinora`
- **Port:** 3001
- **Repo:** `numchaHub/Zkinora` (private)
- **Deploy key:** `~/.ssh/github_zkinora`
- **PM2 name:** `zkinora`
- **SSL:** Cloudflare Origin Cert (`/etc/ssl/cloudflare/zkinora.{pem,key}`)
- **Pre-build:** `npm run prepare:models` (face-api models)
- **Auto-deploy:** ⏳ User to add secret + push workflow

### 4. LINE Bot (Python FastAPI)
- **Path:** `/var/www/linebot`
- **Port:** 8000
- **Repo:** `numchaHub/wreathtoday-bot` (private)
- **Deploy key:** `~/.ssh/github_linebot`
- **PM2 name:** `linebot` (fork mode, NOT cluster)
- **Domains:** `bot.wreathtoday.com` + `bill.wreathtoday.com`
- **SSL:** wreathtoday wildcard cert (covers `*.wreathtoday.com`)
- **Stack:** FastAPI + uvicorn + line-bot-sdk + anthropic + Claude Haiku 4.5
- **Auto-deploy:** ⏳ User to add secret + push workflow

### 5. wreathbot Cloudflare Tunnel
- ❌ **Removed** — was used to expose PC bot via `bot.wreathtoday.com`
- ✅ Replaced with direct A records → Droplet
- User can stop `cloudflared` on PC if still running

---

## 🔑 Deploy Keys (Droplet → GitHub)

| Repo | SSH Key Path on Droplet | Public Key Status |
|------|-------------------------|---------------------|
| wreathtoday-web | `~/.ssh/github_wreathtoday` | ✅ Added to GitHub |
| stringtune-web | `~/.ssh/github_deploy` | ✅ Added to GitHub |
| Zkinora | `~/.ssh/github_zkinora` | ✅ Added to GitHub |
| wreathtoday-bot | `~/.ssh/github_linebot` | ✅ Added to GitHub |

Each repo has `core.sshCommand` configured in `/var/www/<site>/.git/config` to use correct key.

### GitHub Actions Universal SSH Key
- **Private key on Droplet:** `~/.ssh/github_actions`
- **Public key:** added to `~/.ssh/authorized_keys` on Droplet
- **GitHub Secret:** `DROPLET_SSH_KEY` (private key value)
- **Used by:** All 4 repos for `appleboy/ssh-action@v1.2.0`

---

## ☁ Cloudflare Config

### DNS Records

**wreathtoday.com:**
| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | wreathtoday.com | 157.230.43.169 | 🟠 |
| A | www | 157.230.43.169 | 🟠 |
| A | bot | 157.230.43.169 | 🟠 |
| A | bill | 157.230.43.169 | 🟠 |

**stringtuned.com:**
| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | stringtuned.com | 157.230.43.169 | 🟠 |
| A | www | 157.230.43.169 | 🟠 |

**zkinora.com:**
| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | zkinora.com | 157.230.43.169 | 🟠 |
| A | www | 157.230.43.169 | 🟠 |
| MX × 3 | zkinora.com | route{1,2,3}.mx.cloudflare.net | (Cloudflare email) |
| TXT | cf2024-1._domainkey | DKIM | (locked) |
| TXT | zkinora.com | SPF | (locked) |

### SSL Mode
- All 3 domains: **Full (Strict)** ✅
- Origin Certs valid for 15 years (until 2041)

---

## 📦 Repository Structure (F:\GitHub\)

```
F:\GitHub\
├── index.html              # WreathToday homepage
├── corporate.html          # B2B landing
├── blog.html               # Blog hub
├── sitemap.xml             # 53 URLs total
├── robots.txt
├── .github/workflows/
│   └── deploy.yml          # Auto-deploy to Droplet
├── area/                   # 10 district pages + hub
│   ├── index.html
│   ├── sukhumvit.html, lat-phrao.html, huai-khwang.html, etc.
├── temple/                 # 11 temple pages + hub
│   ├── index.html
│   ├── wat-thepsirin.html, wat-thatthong.html, etc.
├── blog/                   # 19 blog articles
│   ├── wreath-urgent.html (long-tail keyword pages)
│   ├── wreath-for-parents.html
│   ├── wreath-for-boss.html
│   ├── wreath-for-friend.html
│   ├── wreath-budget.html
│   └── ... (older posts)
├── image/                  # 200+ files (jpg + webp)
├── css/style.css
├── js/app.js, data.js
├── HANDOFF.md              # ← this file
├── setup-autodeploy-stringtuned.md   # for stringtune-web chat
├── setup-autodeploy-zkinora.md       # for Zkinora chat
├── setup-autodeploy-linebot.md       # for wreathtoday-bot chat
└── setup-linebot-migration.md        # historical reference
```

### Sitemap Coverage (53 URLs)
- 1 homepage + 1 corporate
- 1 blog hub + 19 articles
- 1 temple hub + 11 temple pages
- 1 area hub + 10 district pages
- Plus #anchor URLs for product categories

---

## 🎯 SEO Status (as of 2026-05-08)

### Completed
- ✅ www → non-www migration (174 URL changes, fix Cloudflare redirect)
- ✅ 5 long-tail keyword pages (parents, boss, friend, urgent, budget)
- ✅ 10 Bangkok district pages (sukhumvit, lat-phrao, etc.)
- ✅ Image SEO (lazy loading, decoding async on 61 imgs)
- ✅ Schema.org: Article, BreadcrumbList, FAQPage, Service, CollectionPage
- ✅ Sitemap submitted to Search Console (48 URLs found)
- ✅ Index requested for 10 priority URLs

### Pending
- ⏳ Index 6 area URLs (bang-kapi, ramintra, don-mueang, dusit, pathumwan, bang-sue)
- ⏳ Validate Fix for 14 redirect errors + 2 404s in Search Console
- ⏳ Watch Performance report — see when long-tail/district pages rank

### Stats (2026-04-29 data, 7 days)
- 24 active users
- 22 first_visits
- 96 page_views
- 3 line_clicks (✨ conversion working!)
- 0 actual orders

### What's needed for revenue
1. ✅ **Google Ads LIVE** (2026-05-11, ฿150/วัน, BKK only)
2. 📞 **Direct partnerships** with temples
3. 📱 **Facebook/IG Ads** ($100/day budget recommended)
4. 🎬 **TikTok content**
5. ⏳ SEO will take 2–6 months to mature

---

## ❌ Failed/Abandoned

### Google Business Profile
- **Status:** Suspended → Appeal denied → Video verification offered → User gave up
- **Reason:** User is middleman/dropshipper, no physical store
- **Decision:** Abandon GBP, focus SEO + Ads instead

### Vercel (stringtuned + zkinora)
- **Status:** Migrated away from Vercel (was approaching ISR Writes limit)
- **Recommended cleanup:** Wait 7 days post-migration, then delete Vercel projects

### DO App Platform (wreathtoday original host)
- **Status:** Orphan after DNS switch to Droplet
- **Recommended cleanup:** Delete in 7 days

---

## 🚀 What to Resume Tomorrow

### Priority 1: Google Ads Decision (stuck for 9+ days)
- **Status:** WreathToday-BKK still 0 impressions, ฿0 spent
- Even Manual CPC ฿20 + ฿1,500/วัน budget can't trigger impressions
- Account likely on silent hold (reactivated from 2018 cancellation)
- **Options:**
  - 🆕 Create NEW Google Ads account with different Gmail (clean slate)
  - 📱 Switch to Meta Ads (Facebook/IG) — faster approval, better B2C
  - 📞 Direct outreach to temples (offline)
  - ⏳ Wait 2-4 more weeks for Google to unblock (low confidence)

### Priority 2: SEO Index Status Check
- Search Console — 10 URLs that were index-requested
- 6 remaining URLs: bang-kapi, ramintra, don-mueang, dusit, pathumwan, bang-sue
- Watch Performance report — long-tail/district pages ranking?

### Priority 3: Continue SEO content
- 🌍 **Provincial pages** (เชียงใหม่ districts, สมุทรปราการ, นนทบุรี)
- 📝 **Blog content** (มารยาทงานศพ, ความหมายดอกไม้, etc.)
- 🏷 **Product schema** for individual wreaths
- 🏢 **LocalBusiness schema** brand-level

### Priority 4: Auto-deploy verification (low urgency)
- Check if user added `DROPLET_SSH_KEY` to stringtune-web, Zkinora, wreathtoday-bot

### Priority 5: Customer acquisition expansion (after Ads data settles)
- After 2 weeks of BKK data → expand to สมุทรปราการ + นนทบุรี
- After 1 month if profitable → Create เชียงใหม่ campaign separately
- Consider FB/IG Ads alternative if Google CPC too high
- Direct outreach to temples

---

## 📋 Common Commands Reference

### Check all PM2 services
```bash
ssh root@157.230.43.169 "pm2 status"
```

### View bot logs
```bash
ssh root@157.230.43.169 "pm2 logs linebot --lines 50 --nostream"
```

### Manual deploy (if auto-deploy fails)
```bash
# wreathtoday (static)
ssh root@157.230.43.169 "cd /var/www/wreathtoday && git pull"

# stringtuned/zkinora (Next.js)
ssh root@157.230.43.169 "cd /var/www/stringtuned && git pull && npm ci && NODE_OPTIONS='--max-old-space-size=4096' npm run build && pm2 restart stringtuned"

# linebot (Python)
ssh root@157.230.43.169 "cd /var/www/linebot && git pull && source venv/bin/activate && pip install -r requirements.txt && pm2 restart linebot"
```

### Restart all services
```bash
ssh root@157.230.43.169 "pm2 restart all"
```

### Check disk + memory
```bash
ssh root@157.230.43.169 "free -h && df -h /"
```

### View nginx logs
```bash
ssh root@157.230.43.169 "tail -20 /var/log/nginx/access.log"
ssh root@157.230.43.169 "tail -20 /var/log/nginx/error.log"
```

---

## 🔒 Secrets Reference (where they live)

### On Droplet
- `/var/www/linebot/.env.production` — LINE bot secrets (LINE_CHANNEL_*, ANTHROPIC_API_KEY)
- (stringtuned + zkinora env vars are NEXT_PUBLIC_ baked into bundle, no secrets at runtime except SUPABASE_SERVICE_ROLE_KEY in stringtuned .env.production)

### In GitHub (per repo)
- `DROPLET_SSH_KEY` — universal SSH access to Droplet root

### In User's Local Machine
- `C:\Users\PRO-I5 Gen8\.ssh\id_ed25519` — SSH key for user → Droplet
- `C:\Users\PRO-I5 Gen8\stringtune-web\.env.local` — dev env (has secrets)
- `F:\stringtuned-cert.txt` + similar — Cloudflare Origin Certs (already uploaded to Droplet, can keep as backup)

---

## 📚 Recent Activity Log

### 2026-04-22 to 2026-04-30
- Built SEO foundation: corporate page, temple hub + 11 pages, area hub + 10 districts, 5 long-tail blog pages
- Image SEO improvements
- www → non-www migration
- GBP suspended → appealed → denied → abandoned

### 2026-05-08
- 5 long-tail pages deployed (commit d992f5e)
- 10 area pages deployed (commit 8b3dc96)
- Image lazy loading (commit fac971a)
- Sitemap submitted, 10 URLs index requested

### 2026-05-10
- ✅ Created DigitalOcean Droplet ($24/mo)
- ✅ Migrated wreathtoday.com from DO App Platform → Droplet
- ✅ Migrated stringtuned.com from Vercel → Droplet
- ✅ Migrated zkinora.com from Vercel → Droplet
- ✅ Migrated LINE bot from PC (Cloudflare Tunnel) → Droplet (24/7)
- ✅ All 4 services on PM2, Cloudflare Origin Certs, Full Strict SSL
- ✅ Auto-deploy working for wreathtoday
- ⏳ Auto-deploy templates created for stringtuned/zkinora/linebot

### 2026-05-11 (TODAY) — Google Ads Launch 🚀
**Campaign:** `WreathToday - BKK` (Search, ฿150/วัน, 06:00-15:00, BKK only)

**Setup completed:**
- ✅ Reactivated Google Ads account 900-470-0717 (linked new card)
- ✅ 31 keywords (5 exact + 26 phrase, no broad match)
- ✅ 30 negative keywords (saved as reusable list: "Negative keyword")
- ✅ Network: Search only (Partners + Display OFF — anti-burn)
- ✅ Location: BKK province (Presence only — no foreign clicks)
- ✅ Conversion tracking: Phone click + LINE click (@ 150 บาท value, GA4 linked)
- ✅ GA4 `line_click` event marked as Key Event → imported as Conversion
- ✅ Assets attached at campaign level (19 total):
  - 9 Sitelinks (all using real URLs from wreathtoday.com, no www)
  - 7 Callouts (ตอบเร็ว 5 นาที, ถ่ายรูปก่อนนำส่ง, รับงานด่วน 1-3 ชม., etc.)
  - 2 Structured Snippets (ประเภท + บริการ)
  - 1 Phone (094-147-6210)
- ✅ Created `/contact.html` landing page for "สั่งผ่าน LINE" sitelink
  - Schema.org ContactPage + FAQPage
  - GA4 event tracking on LINE/Phone buttons
- ✅ Fixed `/corporate.html` to match reality:
  - Removed: หัก ณ ที่จ่าย 3%, ใบแจ้งหนี้ Invoice, โอนเข้าบัญชีบริษัท
  - Added: Credit Term ลูกค้าประจำ, พร้อมเพย์ทันที, ส่งเอกสาร Email+EMS

**B2B Service Reality (corporate.html aligned to this):**
- ✅ ออกใบกำกับภาษีเต็มรูป + ใบเสร็จรับเงิน
- ✅ ส่งเอกสาร Email + ไปรษณีย์ EMS
- ✅ รับโอนพร้อมเพย์ (no company bank account)
- ✅ **Credit Term** ลูกค้าประจำ — สั่งก่อนจ่ายทีหลัง (strong USP!)
- ❌ ไม่รับหัก ณ ที่จ่าย 3%
- ❌ ไม่มีใบแจ้งหนี้ก่อนจ่าย

**Wreath workflow USP (used in ads):**
- "ถ่ายรูปก่อนนำส่ง" — photo of finished wreath sent in LINE BEFORE delivery
- ลูกค้ายืนยันแบบ → ถ้าต้องแก้ไขจะแก้ทันที → ส่ง
- Then photo at temple as delivery confirmation

**Schedule reasoning (06:00-15:00 only):**
- User is middleman, no inventory
- Evening urgent orders → flower suppliers closed → can't fulfill
- Wasted ad spend if showed evening
- Customers can find via LINE/SEO at any time

**Pending verification tomorrow (12 พ.ค.):**
- LINE sitelink "สั่งผ่าน LINE 24 ชม." review approved? (using contact.html)
- First impressions/clicks appearing?
- Conversion data flowing?
- Search Terms — any odd queries to add as negative?

### 2026-05-13 to 2026-05-19 — Spam attacks + Cloudflare hardening

**Spam attacks:** Casino/gambling URL spam started hitting site
- /pinocasino-reviews-comprehend-customer-...
- /33-best-activities-in-thessaloniki-greece...
- /mr-bet-50-freispiele-exklusive-einzahlung-... (German)
- /dragon-tiger-by-the-triple-payouts-games-...
- /dunder-spielbank-erfahrungen-pramie-casin... (German)

**Cloudflare WAF (Custom rule #1):**
- Name: "Block spam URL patterns"
- Method: URI Path `contains` with 39+ gambling/spam keywords (Free plan doesn't allow regex `matches`)
- Coverage: casino, gambling, poker, jackpot, freispiele, spielbank, etc.
- Action: Block
- Events blocked: 532/24h then 460+/24h
- Limit: 5 custom rules max on Free plan, 4000 chars per expression

**Other Cloudflare protections enabled:**
- ✅ **Block AI bots** (Cloudflare managed) — ChatGPT, Claude, Perplexity blocked
- ✅ **Bot Fight Mode** — auto-block unknown scrapers (preserves Google/Bing)

### 2026-05-20 (TODAY) — nginx Defense in Depth + Google Ads Diagnosis

**Google Ads status (9 days after launch):**
- ⚠️ Still 0 impressions despite Manual CPC ฿20 + budget raised to ฿1,500/วัน
- Account appears stuck in verification limbo (was previously cancelled in 2018)
- Google support gave only generic advice
- All campaign checks green but "การแสดงผล: เร็วๆ นี้" forever
- Diagnosis: Reactivated account silently held by Google's trust system
- **Recommendation:** Either create new Google Ads account with different email,
  switch to Meta Ads (faster approval), or wait 2-4 weeks for unblock

**nginx Security Hardening (Droplet):**
- File: `/etc/nginx/sites-available/wreathtoday.com`
- Backup: `/etc/nginx/sites-available/wreathtoday.com.backup.20260520`
- Added 2 layers:
  1. **Bot User-Agent block** (60+ patterns): AhrefsBot, SemrushBot, MJ12bot,
     DotBot, PetalBot, BLEXBot, MauiBot, Bytespider, scrapy, python-requests,
     curl/, wget, libcurl, httpie, etc. + empty UA
  2. **URL pattern block** (90+ patterns): casino, gambling, poker, jackpot,
     freispiele, spielbank, 1xbet, betway, megaways, viagra, cialis, etc.
- **Whitelisted:** Mozilla browsers, Googlebot, AdsBot-Google, Bingbot,
  facebookexternalhit, LineBot, Twitterbot, WhatsApp, LinkedInBot
- **Tested:** all 8 test cases pass (browsers + Google/Bing → 200, bots/spam → 403)
- **Defense in depth:** Cloudflare WAF (edge) + nginx (origin)
- ⚠️ nginx config NOT in git repo — lives only on Droplet
- ⚠️ Don't push to GitHub (config has no place in static-site repo)

**Rollback command if nginx breaks:**
```bash
ssh root@157.230.43.169 "cp /etc/nginx/sites-available/wreathtoday.com.backup.20260520 /etc/nginx/sites-available/wreathtoday.com && systemctl reload nginx"
```

**App Platform cleanup:** Destroyed orca-app (old wreathtoday DO App Platform deploy)
- Saving ~$0.30/month

**Spam URLs that still appear in Cloudflare Web Analytics:**
- These are LOGGED before nginx 403 response — analytics counts request hits, not page loads
- Real "loaded" page views = those that returned 200 only
- Future: Use GA4 events for accurate user metrics (not Cloudflare beacon)

### 2026-05-20 evening — SEO content expansion + Quick-facts + Internal links + Mobile UX

**5 new temple pages created** (เพิ่มจาก 11 → 16 วัด):
- `temple/wat-chonprathan.html` — วัดชลประทานรังสฤษดิ์ (ปากเกร็ด นนทบุรี) — **รับเฉพาะพัดลม** (ตามแนวทางหลวงพ่อปัญญานันทภิกขุ) ราคา 1,800 บาท + กล่องเตือนสีส้ม + เบอร์วัด 02-583-8847
- `temple/wat-samiannari.html` — วัดเสมียนนารี (จตุจักร) เบอร์วัด 02-580-2729
- `temple/wat-saket.html` — วัดสระเกศ ภูเขาทอง (ป้อมปราบ)
- `temple/wat-yannawa.html` — วัดยานนาวา (สาทร ริมเจ้าพระยา)
- `temple/wat-dansamrong.html` — วัดด่านสำโรง (สมุทรปราการ)

**Homepage SEO internal links section** — เพิ่ม `.seo-links` 4 คอลัมน์ก่อน footer (วัด/พื้นที่/จังหวัด/บทความ) — แก้ปัญหาเดิม homepage มี 0 internal links ไปยัง landing pages

**Quick-facts chips** — เพิ่ม `.quick-facts` กับทุก 16 หน้าวัด
- ไม่มีหัวข้อ "สรุปด่วน", ไม่ใส่ราคา (ตามที่ user ขอ: "เดี๋ยวนี้คนเค้าไม่อ่านกันยาวๆ เอาสั้นๆเน้นเนื้อๆ")
- chips: ส่งด่วน 2-3 ชม. / ดอกไม้สด-พัดลม-พรีเมียม / เขต / ใบกำกับภาษี / รูปยืนยัน
- CSS: flex pills border-radius 50px

**Flower badges feature — ADDED แล้ว REVERTED**
- เพิ่ม FLOWERS_REF (75+ ดอกไม้ไทย + gradient) + FLOWER_IMAGES ใน `js/data.js` — ยังคงไว้เป็น dead code เผื่อใช้อนาคต
- ดาวน์โหลด 22 รูปจาก Wikimedia Commons ผ่าน Node script (User-Agent `WreathTodayBot/1.0` + 500ms delay)
- User REJECT เพราะ Wikimedia photos มีพื้นหลังสวน ไม่ใช่ขาวสะอาด: "ตอนนี้ revert ส่วนที่ดอกไม้ที่ใช้ กลับแบบเดิมก่อนครับ ยังไม่เนียนไม่เอาขึ้นเวปดีกว่า"
- `js/app.js` modal title กลับเป็น "ส่วนประกอบ" + simple `<li>` list

**Mobile responsive overhaul** (iPhone 14 Pro Max bug fix):
- 3 breakpoints: 768 / 480 / 380 px
- Hero h1: `clamp(22px, 5.5vw, 30px)` (เดิม clamp(28px, 7vw, 38px) ใหญ่เกิน)
- Logo: 44px → 52px + `width:auto` (user feedback "โลโก้ แบนไปหน่อยครับ")
- Product images: ใส่ `aspect-ratio` + max-width 100%
- CSS cache bust: `?v=20260520e` (bump หลายรอบเพราะ user เห็นของเก่า)
- JS cache bust: `?v=20260520c`

**Corporate.html B2B accuracy fix** (user: "ไม่ได้ หัก ณที่จ่ายได้นะครับ"):
- ลบ: หัก ณ ที่จ่าย 3%, ใบแจ้งหนี้ก่อนจ่าย, โอนเข้าบัญชีบริษัท
- เพิ่ม: Credit Term ลูกค้าประจำ / พร้อมเพย์ทันที / ส่งเอกสาร Email+EMS

**Contact.html workflow accuracy fix** (user: "ก็เป็น เสร็จแล้วถ่ายรูปให้ดูก่อนส่ง"):
- แก้ 6 จุด: ชัดเจนว่ารูปที่ส่งคือ "พวงหรีดที่จัดเสร็จแล้ว ก่อนส่งถึงวัด" (ไม่ใช่ตัวอย่างก่อนจัด)

**Files updated:**
- `temple/index.html` — เพิ่ม Zone 4 (5 cards ใหม่) + แก้ schema CollectionPage 11→16 + แก้ corporate text เก่า + wat-chonprathan card warning
- `sitemap.xml` — เพิ่ม 5 URL ใหม่ → รวม 58 URLs (lastmod: 2026-05-20)
- `css/style.css` — `.quick-facts`, `.seo-links`, `.flower-grid` (dead), mobile breakpoints
- `index.html` — SEO internal links section + cache busters
- `js/data.js` — FLOWERS_REF + FLOWER_IMAGES (dead code)
- `js/app.js` — revert flower modal

**Pending after this session:**
- ⏳ Search Console: resubmit sitemap.xml + Request Indexing สำหรับ 5 URL ใหม่
- ⏳ ตรวจสอบ auto-deploy ของหน้า temple ใหม่
- ⏳ พิจารณาทำ quick-facts chips กับหน้า area/ + blog/ ด้วย (postponed)
- ⏳ Google Ads ยังค้าง 0 impressions (เหมือนเดิม) — ตัดสินใจสร้างบัญชีใหม่ / ย้าย Meta Ads / รอ
- ⏳ ถ้าได้ภาพดอกไม้พื้นขาวสะอาดในอนาคต → unwrap dead code `FLOWERS_REF` + `FLOWER_IMAGES` กลับมาใช้

---

## 💡 Key Insights from Migration

### Cost savings vs Vercel Pro
- Vercel Pro $20/mo per account → would need $40 for 2 sites
- DO Droplet $28.80/mo → covers 3 sites + LINE bot
- Bandwidth: Cloudflare CDN absorbs most → DO bandwidth limit (4 TB) never hit

### Performance
- All sites: HTTP/2 + Cloudflare Singapore edge
- Bot response time: ~2–5 sec (Claude API + humanized typing delay)
- Resource usage: ~960 MB / 4 GB (24%) — plenty of headroom

### Reliability
- DO Backup ($4.80/mo) = weekly snapshots, 4-week retention
- PM2 auto-restart on crash
- nginx reload zero-downtime

---

## 🌐 Public URLs

- 🏵 https://wreathtoday.com (main site)
- 🏢 https://wreathtoday.com/corporate.html (B2B)
- 💬 https://wreathtoday.com/contact.html (LINE landing)
- 📰 https://wreathtoday.com/blog.html
- 🛕 https://wreathtoday.com/temple/
- 🏙 https://wreathtoday.com/area/
- 🤖 https://bot.wreathtoday.com (LINE webhook)
- 📄 https://bill.wreathtoday.com (invoice PDF download)
- 🎸 https://stringtuned.com (separate biz)
- 🛍 https://zkinora.com (separate biz, low traffic)

---

End of handoff. After `/compact`, this file remains the authoritative source.
