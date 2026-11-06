# Market School • Official Landing Page Website (मार्केट स्कूल)

The official high-converting, responsive marketing landing page for the **Market School** mobile & web application.

---

## 🌟 Key Features of the Landing Page

1. **Bilingual Engine (English & Hindi)**:
   - One-click toggle between English and Hindi (`EN | हिंदी`) that updates all headlines, stats, buttons, curriculum cards, and callouts dynamically.
2. **Interactive Rule of 72 & Compounding Calculator**:
   - Interactive sliders for Monthly Savings (₹2,000 to ₹1,00,000), Investment Horizon (5 to 35 years), Equity CAGR %, and Inflation %.
   - Real-time comparison between **Cash in Locker** (eroded by inflation) and **Equity Market Compounding** with animated visual progress bars.
3. **Interactive 3D Smartphone Mockup**:
   - Realistic iPhone frame showcasing actual Flutter app screens:
     - **Dashboard**: Mastery Speedometer gauge (100 Learning Score), Active chapter resume card (62% done), Daily streak.
     - **Chapter Reader**: Pedagogical blocks, green accent bar, KaTeX math formula, and finish reading button.
     - **Candlestick Simulator**: Real-time candle charts with Buy/Sell buttons.
     - **AI Mentor**: Realistic Hinglish chat exchange explaining market concepts.
4. **Complete 33-Chapter Curriculum Explorer**:
   - Tabbed view: All Chapters, Module 1 (Stock Basics - 13 chapters), Module 2 (Technical Analysis - 20 chapters).
   - Live search filter (e.g. search "IPO", "Hammer", "RSI", "Dividends").
   - Pop-up chapter preview modal detailing pedagogical learning objectives and key concepts.
5. **Interactive Candlestick Mini-Game Replay**:
   - Live interactive chart at key support level with a classic Hammer formation.
   - Visitors can click **BUY LONG** or **SELL SHORT** to test their edge before downloading.
6. **SEBI Compliance & Pure Education Manifesto**:
   - Clear disclaimer highlighting that Market School is purely an academic platform with zero paid tip channels or advisory schemes.
7. **Interactive FAQ Accordion**:
   - 6 toggleable questions addressing common learner concerns.

---

## 🚀 How to Run Locally

### Option 1: Using npm (Port 8080)
```bash
cd website
npm start
```
Then open your browser at:
```
http://localhost:8080
```

### Option 2: Direct File Opening
Double-click `website/index.html` in your file explorer to open it immediately in Chrome, Safari, Edge, or Brave. Zero build step or npm install required!

### Option 3: Using Python
```bash
cd website
python3 -m http.server 8080
```

---

## 📦 Deployment

The landing page is self-contained with no heavy compilation dependencies:
- **Vercel**: Set root directory to `website/` and deploy instantly.
- **Netlify**: Drag and drop the `website/` folder onto Netlify Drop.
- **GitHub Pages**: Point GitHub Pages to `/website` folder or copy to `docs/`.

---

## 🎨 Design Specifications
- **Typography**: Plus Jakarta Sans, JetBrains Mono
- **Primary Accent**: Emerald Mint (`#10B981`)
- **Secondary Accents**: Amber Gold (`#F59E0B`), Soft Coral (`#F43F5E`)
- **Background**: Deep Slate (`#070B14`, `#0F172A`)
