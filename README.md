# Yak Hotel & Restaurant — Website

A full-featured static website built with **Vite + Vanilla JS**.  
Location: Namche Bazar, Nepal · 3,440m altitude

## 🚀 Getting Started

```bash
npm install
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Build for production → ./dist/
npm run preview   # Preview production build
```

## 📁 File Structure

```
yak-hotel/
├── index.html          ← Home page
├── rooms.html          ← Rooms showcase page
├── contact.html        ← Contact page
├── vite.config.js      ← Multi-page app config
├── package.json
└── src/
    ├── style.css       ← All styles (Tibetan/Himalayan theme)
    └── js/
        ├── nav.js      ← Shared nav + scroll reveal logic
        ├── main.js     ← Home page JS
        ├── rooms.js    ← Rooms page JS
        └── contact.js  ← Contact page JS
```

---

## ✏️ Content to Fill In

Below is everything marked `[PLACEHOLDER]` in the code that you need to provide:

---

### 📞 Contact Page (`contact.html`)

| Placeholder | What to fill in |
|---|---|
| `+977-[PHONE NUMBER]` | Actual hotel phone number (e.g. `+977-38-540123`) |
| `[Manager Name]` | Full name of the hotel manager |
| `info@yakhotel.com` | Real email address if different |

**Google Maps Embed:**
The map currently shows the centre of Namche Bazar. To pin the *exact* hotel location:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your hotel or drop a pin at the exact location
3. Click **Share → Embed a map → Copy HTML**
4. Replace the entire `<iframe>` in `contact.html` with the new embed code

---

### 🛏 Rooms Page (`rooms.html`)

| Placeholder | What to fill in |
|---|---|
| `[PRICE]` (Standard room) | Price per night in NPR (e.g. `2,500`) |
| `[PRICE]` (Deluxe room) | Price per night in NPR (e.g. `4,500`) |

**Room Photos:**
Currently using Unsplash placeholder photos. To use your own:
- Standard room: Replace `src` in first `.room-image img` with your photo URL or `/images/standard-room.jpg`
- Deluxe room: Replace `src` in second `.room-image img` with your photo URL or `/images/deluxe-room.jpg`

Place your images in `public/images/` and reference as `/images/your-photo.jpg`

---

### 🖼 Photos Needed (Optional Upgrades)

The site currently uses photos from your existing Wix site + Unsplash.  
For a fully custom look, provide these photos:

| Photo | Dimensions | Usage |
|---|---|---|
| Hero / hotel exterior or Namche view | 1920×1200px | Home page hero |
| Standard room interior | 900×700px | Rooms page |
| Deluxe room interior | 900×700px | Rooms page |
| Restaurant interior | 700×500px | Gallery strip |
| Namche Bazar panorama | 900×500px | Gallery strip |

Place in `public/images/` and update the `src` attributes in HTML files.

---

### 🌐 Deployment

After running `npm run build`, upload the contents of `./dist/` to any static host:
- **Netlify**: Drag & drop the `dist` folder at netlify.com
- **Vercel**: `vercel --prod` from project root
- **GitHub Pages**: Push `dist` to `gh-pages` branch
- **Traditional hosting**: FTP the `dist` folder to your web host's `public_html`

---

## 🎨 Design Notes

- **Fonts**: Cormorant Garamond (display) + Josefin Sans (body) + Noto Serif Tibetan (accents)
- **Palette**: Glacial white `#EDF4FB` · Ice blue `#C8DFF2` · Deep blue `#1A3D5C` · Tibetan gold `#B8903A`
- **Tibetan script**: The ཡ emblem in the nav and decorative text are authentic Unicode Tibetan characters
- **Decorative dividers**: Mountain silhouettes as inline SVGs separate each page section

