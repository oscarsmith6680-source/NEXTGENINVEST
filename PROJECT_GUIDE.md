# Next.js Project Guide (NextGenInvest)

Yeh guide aapko aapke project ka structure samajhne mein madad karegi. Chunkay aap pehli baar Next.js par kaam kar rahe hain, toh yeh basic overview aapke liye zaroori hai.

## 📁 Folder Structure Overview

### 1. `pages/` (Sabse important folder)
Next.js mein `pages` folder routing ke liye use hota hai. Is folder mein jo bhi `.js` file hogi, woh website ka ek page (URL) ban jayegi.
- `index.js`: Yeh aapka **Home Page** (`/`) hai.
- `about.js`: Yeh **About Us** page hai (`/about`).
- `contact.js`: Yeh **Contact** page hai (`/contact`).
- `insights.js`: Insights/Blog listing page.
- `strategies.js`: Investment strategies page.
- `_app.js`: Yeh main entry point hai jahan global styles (jaise Bootstrap) aur common layout apply hota hai.
- `_document.js`: Ismein HTML ka basic structure (<html>, <body>) hota hai.
- `api/`: Iske andar backend API endpoints hote hain (Next.js full-stack hai!).
- `insights/`: Ismein dynamic routes ho sakte hain (jaise `/insights/[id]`).

### 2. `components/`
Is folder mein woh parts hote hain jo pages ke andar use hote hain (Reusable UI parts).
- `Navbar.js`: Website ka top menu.
- `Footer.js`: Website ka bottom section.
- `Hero.js`: Home page ka main banner.
- `CTA.js`: "Call to Action" buttons ya sections.
- `Contact.js`, `About.js`, etc.: Yeh specific sections hain jo pages par render hote hain.

### 3. `public/`
Ismein static files rakhi jati hain jo direct access ho saken.
- `images/`: Website ki saari pics aur icons yahan hoti hain.
- `favicon.ico`: Browser tab ka icon.

### 4. `styles/`
Ismein CSS files hoti hain.
- `globals.css`: Ismein woh styles hain jo poori website par apply hote hain.

### 5. `node_modules/`
Ismein woh saari libraries hain jo project chalanay ke liye install ki gayi hain (jaise React, Next, Bootstrap). Isay aapne touch nahi karna hota.

---

## 📄 Key Files

- `package.json`: Ismein project ki saari details aur dependencies (libraries) ki list hoti hai.
- `next.config.mjs`: Next.js ki apni configuration file.
- `jsconfig.json`: JavaScript paths aur aliases (import asani se karne ke liye) ki settings.
- `.gitignore`: Woh files jo Git/GitHub par nahi bhejni hotin.

## 🚀 Kaam Shuru Kaise Karein?
1. Agar aapne koi naya page banana hai, toh `pages/` folder mein nayi `.js` file banayein.
2. Agar koi naya UI part banana hai, toh `components/` mein file banayein aur phir use page par import karein.
3. Development server chalanay ke liye terminal mein `npm run dev` likhein.

---
Ab aap asani se files ko follow kar sakte hain!
