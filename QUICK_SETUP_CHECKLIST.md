# ⚡ Quick Setup Checklist

## 🎯 Replace These IDs in ALL HTML Files

### Files to Update:
- [ ] index.html
- [ ] property-balicha.html
- [ ] property-dheekli-1516.html
- [ ] property-dheekli-3132.html

---

## 1️⃣ Google Tag Manager ID

**Find:** `GTM-XXXXXXX`  
**Replace with:** Your actual GTM ID (e.g., `GTM-ABC1234`)

**How to get it:**
1. Go to https://tagmanager.google.com/
2. Create account → Container: "UDR Properties" → Web
3. Copy the ID shown (starts with GTM-)

**Appears in:** 2 places per file (head script + body noscript)

---

## 2️⃣ Google Analytics 4 ID

**Find:** `G-XXXXXXXXXX`  
**Replace with:** Your actual GA4 Measurement ID (e.g., `G-ABC123XYZ`)

**How to get it:**
1. Go to https://analytics.google.com/
2. Create property → Web stream
3. Copy Measurement ID (starts with G-)

**Appears in:** 2 places per file (gtag config lines)

---

## 3️⃣ Google Ads Conversion ID

**Find:** `AW-XXXXXXXXXX`  
**Replace with:** Your actual Google Ads ID (e.g., `AW-123456789`)

**How to get it:**
1. Go to https://ads.google.com/
2. Tools → Measurement → Conversions
3. Create conversion action → Get tag ID

**Appears in:** 1 place per file (gtag config line)

---

## 4️⃣ Meta Pixel ID

**Find:** `YOUR_PIXEL_ID_HERE`  
**Replace with:** Your actual Pixel ID (e.g., `1234567890123456`)

**How to get it:**
1. Go to https://business.facebook.com/
2. Business Settings → Data Sources → Pixels
3. Create Pixel → Copy the 16-digit ID

**Appears in:** 2 places per file (fbq init + noscript img)

---

## 🔍 Easy Find & Replace Method

### Using VS Code or any text editor:

1. **Open all HTML files**
2. **Press Ctrl+Shift+F** (or Cmd+Shift+F on Mac)
3. **Search for:** `GTM-XXXXXXX`
4. **Replace all with:** Your actual GTM ID
5. **Repeat for:** `G-XXXXXXXXXX`, `AW-XXXXXXXXXX`, `YOUR_PIXEL_ID_HERE`

---

## ✅ After Replacing IDs

### Test the Setup:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add SEO optimization, analytics, lead form, and remarketing tags"
   git push origin main
   ```

2. **Wait 2-3 minutes** for GitHub Pages to deploy

3. **Visit your website** and open browser console (F12)

4. **Check for errors** - should see no red errors

5. **Test lead form** - fill it out and submit

6. **Check Google Analytics** - Go to Real-Time reports, should see yourself

7. **Check Meta Pixel** - Install "Facebook Pixel Helper" Chrome extension

---

## 📊 Google Search Console Setup

1. Go to https://search.google.com/search-console
2. Add property: `https://bhaveshagarwal.github.io/udr-properties/`
3. Verify using "HTML tag" method (copy meta tag to index.html head)
4. Submit sitemap: `https://bhaveshagarwal.github.io/udr-properties/sitemap.xml`

---

## 🎉 You're Done!

Your website now has:
- ✅ SEO-optimized titles, descriptions, keywords
- ✅ Descriptive image alt tags for better ranking
- ✅ Google Analytics tracking
- ✅ Google Tag Manager for advanced tracking
- ✅ Lead capture form with WhatsApp integration
- ✅ Remarketing tags for Google & Facebook ads
- ✅ XML sitemap for search engines

---

## 💡 Pro Tips

1. **Check Analytics Daily** - See which pages get most traffic
2. **Monitor Form Submissions** - Track conversion rate
3. **Set up Remarketing Audiences** - Target visitors who didn't convert
4. **Run Small Test Ads** - Start with ₹500/day budget
5. **A/B Test** - Try different ad copy and images

---

**Need help? Have questions? Just ask!**

