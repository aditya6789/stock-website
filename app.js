/**
 * Market School Landing Page Interactive Engine
 * Handles bilingual state, compounding calculator, phone mockup tabs,
 * candlestick mini-simulator, module explorer, and modal readers.
 */

// 1. Bilingual Content Dictionary
const i18n = {
  en: {
    heroTag: "Join 10K+ Learners",
    heroAccess: "Get Access",
    heroTitle1: "Master the Stock Market.",
    heroTitle2: "Zero Fluff. 100% Free.",
    heroDesc: "India's most rigorous, bilingual market academy inspired by Zerodha Varsity. Master market mechanics, test strategies on real historical candlestick replays, and learn with your 24/7 AI mentor.",
    ctaStart: "Start Learning Free",
    ctaExplore: "Browse 33 Chapters",
    stat1Label: "In-Depth Chapters",
    stat1Desc: "Varsity Core Aligned",
    stat2Label: "Cost Forever",
    stat2Desc: "No Paid Upsells",
    stat3Label: "Active Learners",
    stat3Desc: "Across Bharat",
    stat4Label: "SEBI Advisory",
    stat4Desc: "Pure Education Only",
    
    // Calculator
    calcBadge: "INTERACTIVE RULE OF 72 TOOL",
    calcHeading: "Why Idle Cash is Financial Suicide",
    calcSub: "Explore how inflation destroys idle bank balances versus disciplined equity compounding (Derived from Chapter 1.1)",
    calcMonthlyLabel: "Monthly Savings / Surplus (₹)",
    calcYearsLabel: "Investment Horizon (Years)",
    calcReturnLabel: "Expected Equity Return (CAGR %)",
    calcInflationLabel: "Average Inflation Rate (%)",
    
    // Modules
    modBadge: "STRUCTURED PEDAGOGICAL CURRICULUM",
    modHeadA: "Master Every Level",
    modHeadB: "Step-by-Step",
    modSub: "From first-time IPO bidding to advanced candlestick formations, support/resistance, and risk management.",
    tabAll: "All Chapters",
    tabMod1: "Module 1: Stock Basics",
    tabMod2: "Module 2: Technical Analysis",
    searchPlaceholder: "Search chapters (e.g. IPO, Hammer, RSI, Regulators)...",

    // Pillars
    pillarBadge: "Our Features",
    pillarHeadA: "Everything You Need for",
    pillarHeadB: "a Smarter Investing Journey",
    pillarSub: "Market School brings together structured lessons, risk-free practice and an AI mentor to make learning the markets clear, safe and unforgettable.",
    
    // Simulator
    simBadge: "RISK-FREE PRACTICE ENGINE",
    simHeadA: "Test Your Market Edge",
    simHeadB: "Before Risking Real Money",
    simSub: "Replay real historical NIFTY & stock charts candle-by-candle. Make trading decisions and evaluate your edge without losing a rupee.",

    // AI Tutor
    tutorBadge: "24/7 PERSONAL MENTOR",
    tutorHeadA: "An AI Mentor That",
    tutorHeadB: "Speaks Your Language",
    tutorSub: "Ask complex market questions in Hindi, English, or Hinglish. Get instant analogies, math formulas, and risk warnings.",

    // FAQ
    faqBadge: "FREQUENTLY ASKED QUESTIONS",
    faqHeadA: "Everything You Need",
    faqHeadB: "to Know",

    // Banner
    ctaBannerTitle: "Ready to Stop Gambling & Start Investing?",
    ctaBannerSub: "Join thousands of disciplined learners across India. Available on Android, iOS Web, and Desktop.",
    btnDownloadApk: "Download Android APK",
    btnLaunchWeb: "Launch Web App"
  },
  hi: {
    heroTag: "10K+ लर्नर्स से जुड़ें",
    heroAccess: "शुरू करें",
    heroTitle1: "शेयर बाजार की असली समझ।",
    heroTitle2: "बिना किसी भटकाव के, 100% फ्री।",
    heroDesc: "भारत की सबसे भरोसेमंद स्टॉक मार्केट अकादमी। ज़ेरोधा वार्सिटी से प्रेरित विस्तृत पाठ्यक्रम, रियल हिस्टोरिकल कैंडलस्टिक सिम्युलेटर और आपका अपना 24/7 AI मेंटर।",
    ctaStart: "मुफ्त सीखना शुरू करें",
    ctaExplore: "33 चैप्टर्स देखें",
    stat1Label: "विस्तृत चैप्टर्स",
    stat1Desc: "वार्सिटी आधारित",
    stat2Label: "जीवन भर मुफ्त",
    stat2Desc: "कोई हिडन चार्ज नहीं",
    stat3Label: "सक्रिय लर्नर्स",
    stat3Desc: "पूरे भारत से",
    stat4Label: "सेबी एडवाइजरी",
    stat4Desc: "सिर्फ शुद्ध शिक्षा",
    
    // Calculator
    calcBadge: "इंटरैक्टिव कम्पाउंडिंग कैलकुलेटर",
    calcHeading: "पैसा बैंक में रखना आर्थिक आत्महत्या क्यों है?",
    calcSub: "जानिए कैसे महंगाई (Inflation) आपके बैंक बैलेंस को खत्म करती है और इक्विटी कम्पाउंडिंग कैसे वेल्थ बनाती है (चैप्टर 1.1 से)।",
    calcMonthlyLabel: "मासिक बचत / सरप्लस (₹)",
    calcYearsLabel: "निवेश अवधि (वर्ष)",
    calcReturnLabel: "अनुमानित इक्विटी रिटर्न (CAGR %)",
    calcInflationLabel: "अनुमानित महंगाई दर (%)",

    // Modules
    modBadge: "व्यवस्थित पाठ्यक्रम",
    modHeadA: "हर लेवल को",
    modHeadB: "क्रमबद्ध तरीके से सीखें",
    modSub: "पहली बार IPO बिडिंग से लेकर एडवांस्ड कैंडलस्टिक पैटर्न्स, सपोर्ट-रेजिस्टेंस और रिस्क मैनेजमेंट तक।",
    tabAll: "सभी चैप्टर्स",
    tabMod1: "मॉड्यूल 1: बेसिक एवं तंत्र",
    tabMod2: "मॉड्यूल 2: टेक्निकल एनालिसिस",
    searchPlaceholder: "चैप्टर खोजें (उदा. IPO, हैमर, RSI, सेबी)...",

    // Pillars
    pillarBadge: "हमारे फीचर्स",
    pillarHeadA: "आपकी स्मार्ट निवेश यात्रा के लिए",
    pillarHeadB: "सब कुछ, एक ही जगह",
    pillarSub: "मार्केट स्कूल में व्यवस्थित पाठ, जोखिम-मुक्त अभ्यास और AI मेंटर साथ मिलते हैं, ताकि शेयर बाजार सीखना आसान, सुरक्षित और यादगार बने।",

    // Simulator
    simBadge: "जोखिम-मुक्त अभ्यास",
    simHeadA: "असली पैसा लगाने से पहले",
    simHeadB: "अपना एज टेस्ट करें",
    simSub: "निफ्टी और स्टॉक्स के पुराने चार्ट्स को कैंडल-दर-कैंडल चलाकर देखें। बिना एक भी रुपया गंवाए ट्रेडिंग साइकोलॉजी मजबूत करें।",

    // AI Tutor
    tutorBadge: "24/7 व्यक्तिगत मेंटर",
    tutorHeadA: "एक ऐसा AI गुरु जो",
    tutorHeadB: "आपकी भाषा समझता है",
    tutorSub: "हिंदी, इंग्लिश या हिंग्लिश में कोई भी सवाल पूछें। आसान उदाहरणों, फॉर्मूलों और रिस्क चेतावनियों के साथ तुरंत समझें।",

    // FAQ
    faqBadge: "अक्सर पूछे जाने वाले सवाल",
    faqHeadA: "आपके सभी सवालों",
    faqHeadB: "के जवाब",

    // Banner
    ctaBannerTitle: "तुक्केबाजी छोड़कर समझदारी से ट्रेड करना चाहते हैं?",
    ctaBannerSub: "आज ही भारत के हजारों अनुशासित ट्रेडर्स के साथ जुड़ें। एंड्रॉइड और वेब दोनों पर उपलब्ध।",
    btnDownloadApk: "एंड्रॉइड APK डाउनलोड करें",
    btnLaunchWeb: "वेब ऐप शुरू करें"
  }
};

let currentLang = 'en';

// Format Indian Currency
function formatINR(number) {
  if (isNaN(number)) return "₹0";
  const num = Math.round(number);
  if (num >= 10000000) {
    return `₹${(num / 10000000).toFixed(2)} Cr`;
  } else if (num >= 100000) {
    return `₹${(num / 100000).toFixed(2)} Lakh`;
  } else {
    return `₹${num.toLocaleString('en-IN')}`;
  }
}

// 2. Compounding & Inflation Destroyer Math
function calculateCompounding() {
  if (!document.getElementById('calc-monthly')) return;
  const monthly = parseFloat(document.getElementById('calc-monthly').value);
  const years = parseInt(document.getElementById('calc-years').value);
  const equityRate = parseFloat(document.getElementById('calc-return').value) / 100;
  const inflationRate = parseFloat(document.getElementById('calc-inflation').value) / 100;

  document.getElementById('val-monthly').textContent = `₹${monthly.toLocaleString('en-IN')}`;
  document.getElementById('val-years').textContent = `${years} yrs`;
  document.getElementById('val-return').textContent = `${(equityRate * 100).toFixed(1)}%`;
  document.getElementById('val-inflation').textContent = `${(inflationRate * 100).toFixed(1)}%`;

  const totalMonths = years * 12;
  const totalPrincipal = monthly * totalMonths;

  // 1. Cash in Locker (Nominal vs Inflation Adjusted)
  const cashNominal = totalPrincipal;
  const cashRealPurchasingPower = cashNominal / Math.pow(1 + inflationRate, years);

  // 2. Equity Compounded via SIP formula: P * [( (1+i)^n - 1 ) / i] * (1+i)
  const monthlyRate = equityRate / 12;
  const equityNominal = monthly * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
  
  // Real equity after inflation
  const equityReal = equityNominal / Math.pow(1 + inflationRate, years);

  // Update UI stats
  document.getElementById('res-principal').textContent = formatINR(totalPrincipal);
  document.getElementById('res-cash-nominal').textContent = formatINR(cashNominal);
  document.getElementById('res-cash-real').textContent = formatINR(cashRealPurchasingPower);
  document.getElementById('res-equity-nominal').textContent = formatINR(equityNominal);
  document.getElementById('res-equity-real').textContent = formatINR(equityReal);

  // Multiplier
  const wealthMultiplier = (equityNominal / (cashNominal || 1)).toFixed(1);
  document.getElementById('res-multiplier').textContent = `${wealthMultiplier}x`;

  // Bars Percentage
  const maxVal = Math.max(equityNominal, cashNominal);
  const cashPct = Math.max(10, Math.min(100, (cashRealPurchasingPower / maxVal) * 100));
  const equityPct = Math.max(25, Math.min(100, (equityNominal / maxVal) * 100));

  const barCash = document.getElementById('bar-cash');
  const barEquity = document.getElementById('bar-equity');
  if (barCash && barEquity) {
    barCash.style.width = `${cashPct}%`;
    barEquity.style.width = `${equityPct}%`;
  }
}

// 3. Curriculum Data (Module 1 & 2)
const curriculumData = [
  // Module 1
  {
    module: 1,
    id: 'm1-1',
    num: "01",
    slug: "need-to-invest",
    title: "The Need to Invest",
    titleHi: "निवेश की आवश्यकता",
    time: "8 min read",
    level: "Beginner",
    summary: "Why idle cash in bank lockers loses half its purchasing power in 10 years, the 4 core asset classes, and the Rule of 72.",
    points: [
      "Inflation as the silent wealth destroyer (6-8% yearly loss)",
      "Comparison of Fixed Income, Real Estate, Bullion, and Equities",
      "Rule of 72: Quick estimation of wealth doubling horizon"
    ]
  },
  {
    module: 1,
    id: 'm1-2',
    num: "02",
    slug: "regulators",
    title: "Regulators & Market Integrity",
    titleHi: "नियामक एवं बाजार अखंडता",
    time: "7 min read",
    level: "Beginner",
    summary: "Role of SEBI, RBI, and market surveillance rules preventing stock price manipulation and scam operations.",
    points: [
      "Why stock markets require strict legal watchdogs",
      "SEBI's mandate: retail protection, market transparency, systemic stability",
      "Historical scams that shaped modern digital settlement"
    ]
  },
  {
    module: 1,
    id: 'm1-3',
    num: "03",
    slug: "financial-intermediaries",
    title: "Financial Intermediaries",
    titleHi: "वित्तीय मध्यस्थ",
    time: "6 min read",
    level: "Beginner",
    summary: "Stock brokers, Depositories (NSDL & CDSL), Clearing Corporations, and custodian banks.",
    points: [
      "Demat Account vs Trading Account vs Bank Account link",
      "Role of NSDL and CDSL in electronic share custody",
      "Clearing Corporations: Guaranteeing every single trade settlement"
    ]
  },
  {
    module: 1,
    id: 'm1-4',
    num: "04",
    slug: "the-ipo-markets-part-1",
    title: "The IPO Markets - Part 1",
    titleHi: "आईपीओ बाजार - भाग 1",
    time: "9 min read",
    level: "Beginner",
    summary: "Origin of a business, bootstrapped funding, Angel Investors, Venture Capital, and Pre-IPO stages.",
    points: [
      "From an idea to public enterprise: Equity dilution journey",
      "Venture Capital vs Private Equity evaluation metrics",
      "Why founders choose to list on the stock exchange"
    ]
  },
  {
    module: 1,
    id: 'm1-5',
    num: "05",
    slug: "the-ipo-markets-part-2",
    title: "The IPO Markets - Part 2",
    titleHi: "आईपीओ बाजार - भाग 2",
    time: "10 min read",
    level: "Beginner",
    summary: "DRHP prospectus analysis, merchant bankers, IPO price bands, bidding, allotment, and listing day dynamics.",
    points: [
      "Reading between the lines of a Draft Red Herring Prospectus (DRHP)",
      "Book building mechanism, Floor price, and Cut-off bidding",
      "Retail quota allotment rules and listing gains vs long-term holding"
    ]
  },
  {
    module: 1,
    id: 'm1-6',
    num: "06",
    slug: "the-stock-markets",
    title: "The Stock Markets",
    titleHi: "शेयर बाजार की कार्यप्रणाली",
    time: "8 min read",
    level: "Beginner",
    summary: "BSE & NSE exchanges, order matching engines, bid-ask quotes, and return calculations (CAGR).",
    points: [
      "What actually causes share prices to move every second",
      "How continuous automated electronic order matching functions",
      "Absolute Return vs Compounded Annual Growth Rate (CAGR)"
    ]
  },
  {
    module: 1,
    id: 'm1-7',
    num: "07",
    slug: "the-stock-markets-index",
    title: "The Stock Markets Index",
    titleHi: "स्टॉक मार्केट इंडेक्स (NIFTY & SENSEX)",
    time: "8 min read",
    level: "Beginner",
    summary: "Construction of NIFTY 50 and SENSEX, Free-Float Market Cap methodology, and sectoral indices.",
    points: [
      "What is an index and why is it the barometer of the national economy",
      "Free-float market capitalization weighting methodology",
      "Practical applications: Benchmark comparison and Index Funds"
    ]
  },
  {
    module: 1,
    id: 'm1-8',
    num: "08",
    slug: "commonly-used-jargons",
    title: "Commonly Used Market Jargons",
    titleHi: "बाजार में आम तौर पर प्रयुक्त शब्द",
    time: "6 min read",
    level: "Beginner",
    summary: "Bull/Bear, Long/Short, Square-off, Stop-loss, Spread, 52-week High/Low, and Volume.",
    points: [
      "Demystifying Wall Street & Dalal Street terminology",
      "What shorting a stock really means mechanically",
      "Order types: Market, Limit, Stop-loss (SL), Stop-loss Market (SL-M)"
    ]
  },
  {
    module: 1,
    id: 'm1-9',
    num: "09",
    slug: "the-trading-terminal",
    title: "The Trading Terminal",
    titleHi: "ट्रेडिंग टर्मिनल",
    time: "8 min read",
    level: "Beginner",
    summary: "Market watch setup, order book, trade book, bid/ask spread, and placing your first trade cleanly.",
    points: [
      "Anatomy of a modern trading terminal (Kite, terminal apps)",
      "Understanding Market Depth (Level 2 quote: Top 5 Bids and Asks)",
      "Difference between Order Book (pending) and Trade Book (executed)"
    ]
  },
  {
    module: 1,
    id: 'm1-10',
    num: "10",
    slug: "clearing-and-settlement-process",
    title: "Clearing & Settlement Process (T+1)",
    titleHi: "क्लीयरिंग और सेटलमेंट प्रक्रिया",
    time: "7 min read",
    level: "Intermediate",
    summary: "What happens behind the scenes from the second you click BUY until shares enter your Demat account.",
    points: [
      "Step-by-step T+1 settlement timeline in India",
      "Pay-in and Pay-out obligations between clearing members",
      "Short delivery and the electronic auction mechanism"
    ]
  },
  {
    module: 1,
    id: 'm1-11',
    num: "11",
    slug: "five-corporate-actions",
    title: "Five Corporate Actions & Price Impact",
    titleHi: "कॉर्पोरेट एक्शन और उनके प्रभाव",
    time: "9 min read",
    level: "Intermediate",
    summary: "Dividends, Bonus Shares, Stock Splits, Rights Issues, and Share Buybacks explained with exact math.",
    points: [
      "Record date vs Ex-date: Why prices adjust on ex-date automatically",
      "Stock Split vs Bonus: Why liquidity increases without changing market cap",
      "Tender offer vs Open market share buybacks"
    ]
  },
  {
    module: 1,
    id: 'm1-12',
    num: "12",
    slug: "key-events-and-their-impact",
    title: "Key Macro Events & Market Reaction",
    titleHi: "प्रमुख मैक्रो घटनाएं और प्रभाव",
    time: "8 min read",
    level: "Intermediate",
    summary: "RBI Monetary policy, Repo rates, CPI inflation, IIP, PMI indices, Union Budget, and Corporate Earnings.",
    points: [
      "How RBI interest rate hikes impact borrowing costs and stock valuations",
      "Quarterly corporate earnings: Revenue, EBITDA margin, and Guidance",
      "Union Budget: Sectoral allocations and fiscal deficit targets"
    ]
  },
  {
    module: 1,
    id: 'm1-13',
    num: "13",
    slug: "getting-started",
    title: "Getting Started & Path Forward",
    titleHi: "शुरुआत कैसे करें",
    time: "5 min read",
    level: "Beginner",
    summary: "How Module 1 connects to Technical Analysis and Fundamental Analysis, and setting up your learning plan.",
    points: [
      "Synthesizing foundation knowledge into a structured market philosophy",
      "Choosing your approach: Value Investor vs Swing Trader vs Intraday",
      "Next steps into Module 2: Technical Analysis"
    ]
  },

  // Module 2
  {
    module: 2,
    id: 'm2-1',
    num: "14",
    slug: "intro-technical-analysis",
    title: "Introduction to Technical Analysis",
    titleHi: "टेक्निकल एनालिसिस का परिचय",
    time: "7 min read",
    level: "Intermediate",
    summary: "Fundamental vs Technical Analysis, core assumptions, price discounts everything, and market trends.",
    points: [
      "The philosophy: Price action represents the collective psychology of all participants",
      "History repeats itself: Fractal human nature across different timeframes",
      "Why technical analysis is a game of probability, not certainty"
    ]
  },
  {
    module: 2,
    id: 'm2-2',
    num: "15",
    slug: "chart-types-candlesticks",
    title: "The Chart Types: Line, Bar & Candlesticks",
    titleHi: "चार्ट के प्रकार और कैंडलस्टिक्स",
    time: "8 min read",
    level: "Intermediate",
    summary: "Why Line charts hide critical intraday extremes and how Japanese candlesticks reveal bull/bear battles.",
    points: [
      "OHLC: Open, High, Low, and Close mechanics",
      "Real Body vs Upper & Lower Shadows (Wicks)",
      "Bullish (Green) vs Bearish (Red) candle construction"
    ]
  },
  {
    module: 2,
    id: 'm2-3',
    num: "16",
    slug: "single-candlestick-marubozu",
    title: "Single Candlestick Patterns: Marubozu",
    titleHi: "सिंगल कैंडलस्टिक: मारूबोज़ू",
    time: "8 min read",
    level: "Intermediate",
    summary: "Bullish and Bearish Marubozu: Extreme directional conviction, entry triggers, stop-loss placement.",
    points: [
      "Anatomy: Massive real body with zero or negligible wicks",
      "Bullish Marubozu: Buyers in total control from open to close",
      "Defining risk: Placing stoploss at the low/high of the Marubozu candle"
    ]
  },
  {
    module: 2,
    id: 'm2-4',
    num: "17",
    slug: "spinning-top-doji",
    title: "Spinning Top & Doji Formations",
    titleHi: "स्पिनिंग टॉप एवं दोजी पैटर्न्स",
    time: "8 min read",
    level: "Intermediate",
    summary: "Market indecision, Dragonfly Doji, Gravestone Doji, and identifying potential trend exhaustion.",
    points: [
      "Doji: Open equals Close, showing equilibrium between buyers and sellers",
      "Spinning top: Small real body with equal upper and lower shadows",
      "Why Doji at key support or resistance signals high-probability inflection"
    ]
  },
  {
    module: 2,
    id: 'm2-5',
    num: "18",
    slug: "hammer-hanging-man",
    title: "The Hammer & Hanging Man",
    titleHi: "हैमर एवं हैंगिंग मैन पैटर्न",
    time: "9 min read",
    level: "Intermediate",
    summary: "Paper umbrella patterns: Long lower shadow rejecting lower prices, bullish reversals at bottoms.",
    points: [
      "Hammer rule: Lower shadow must be at least twice the height of real body",
      "Psychology: Sharp rejection of intraday selling pressure",
      "Confirmation rules: Waiting for the subsequent candle to breach the high"
    ]
  },
  {
    module: 2,
    id: 'm2-6',
    num: "19",
    slug: "engulfing-patterns",
    title: "Multiple Candlestick: Bullish & Bearish Engulfing",
    titleHi: "एंगल्फिंग पैटर्न्स",
    time: "9 min read",
    level: "Intermediate",
    summary: "Two-candle reversal patterns where the current day completely envelops the prior day's range.",
    points: [
      "Bullish Engulfing: Sellers push price down, but buyers flood in and engulf prior red candle",
      "Volume confirmation on the engulfing day",
      "Trade setup, entry triggers, and stoploss management"
    ]
  },
  {
    module: 2,
    id: 'm2-7',
    num: "20",
    slug: "morning-evening-star",
    title: "Morning Star & Evening Star",
    titleHi: "मॉर्निंग स्टार एवं इवनिंग स्टार",
    time: "10 min read",
    level: "Advanced",
    summary: "Three-candle reversal setups representing decisive transition from downtrend to explosive uptrend.",
    points: [
      "First candle (dominant trend), Second candle (indecision gap), Third candle (decisive reversal)",
      "High win-rate pattern across Daily and Weekly timeframes",
      "Managing false breakouts with strict risk-to-reward ratios"
    ]
  },
  {
    module: 2,
    id: 'm2-8',
    num: "21",
    slug: "support-resistance",
    title: "Support and Resistance Framework",
    titleHi: "सपोर्ट और रेजिस्टेंस की पहचान",
    time: "10 min read",
    level: "Intermediate",
    summary: "Horizontal price levels where institutional demand and supply concentrate. Role reversal principle.",
    points: [
      "Support: Price level where buying interest overcomes selling pressure",
      "Resistance: Price ceiling where supply overpowers demand",
      "Polarity principle: Broken support turns into future resistance"
    ]
  },
  {
    module: 2,
    id: 'm2-9',
    num: "22",
    slug: "volumes-confirmation",
    title: "Volume Analysis & Institutional Footprints",
    titleHi: "वॉल्यूम एनालिसिस",
    time: "8 min read",
    level: "Intermediate",
    summary: "Why price moves without volume are traps, volume spikes at breakout levels, and volume dry-ups.",
    points: [
      "Volume confirms trend: Increasing price + Increasing volume = Healthy bull move",
      "Price breakout with low volume: Danger sign of retail bull trap",
      "Using Volume Moving Averages to filter high-probability setups"
    ]
  },
  {
    module: 2,
    id: 'm2-10',
    num: "23",
    slug: "moving-averages",
    title: "Moving Averages (SMA & EMA)",
    titleHi: "मूविंग एवरेज (SMA और EMA)",
    time: "9 min read",
    level: "Intermediate",
    summary: "Simple vs Exponential Moving Averages, Golden Cross (50/200), dynamic support, and trend filters.",
    points: [
      "Why EMA gives more weight to recent price action than SMA",
      "20 EMA for short-term swing, 50 EMA for intermediate trend, 200 EMA for long-term bias",
      "Crossover strategies and avoiding choppy sideways market whipsaws"
    ]
  },
  {
    module: 2,
    id: 'm2-11',
    num: "24",
    slug: "macd-indicator",
    title: "Momentum Indicators: MACD",
    titleHi: "मोमेंटम इंडिकेटर्स: MACD",
    time: "9 min read",
    level: "Advanced",
    summary: "Moving Average Convergence Divergence: MACD line, signal line, histogram, and bullish/bearish divergence.",
    points: [
      "Calculation: 12 EMA minus 26 EMA with 9 EMA signal line",
      "Centerline crossovers vs Signal line crossovers",
      "Regular and Hidden Divergence: Spotting institutional trend reversals early"
    ]
  },
  {
    module: 2,
    id: 'm2-12',
    num: "25",
    slug: "rsi-relative-strength",
    title: "RSI: Relative Strength Index",
    titleHi: "RSI (रिलेटिव स्ट्रेंथ इंडेक्स)",
    time: "9 min read",
    level: "Intermediate",
    summary: "Overbought (70) and Oversold (30) ranges, range shift principle (bull market 40-80, bear market 20-60).",
    points: [
      "RSI formula: Measuring speed and change of price movements",
      "Why buying blindly when RSI hits 30 causes huge drawdowns in strong downtrends",
      "RSI Divergence: Price makes lower low but RSI makes higher low"
    ]
  },
  {
    module: 2,
    id: 'm2-13',
    num: "26",
    slug: "dow-theory-market-phases",
    title: "The Dow Theory: Market Trends & 3 Phases",
    titleHi: "डाउ थ्योरी: ट्रेंड्स और 3 चरण",
    time: "10 min read",
    level: "Advanced",
    summary: "Higher Highs / Higher Lows structure, Accumulation, Public Participation, and Distribution phases.",
    points: [
      "Charles Dow's foundational tenets that govern all financial markets",
      "Accumulation phase: Smart money buying silently when sentiment is at despair",
      "Distribution phase: Institutional selling into euphoria and retail FOMO"
    ]
  },
  {
    module: 2,
    id: 'm2-14',
    num: "27",
    slug: "risk-management-rules",
    title: "Risk Management & The 1% Rule",
    titleHi: "रिस्क मैनेजमेंट और 1% नियम",
    time: "11 min read",
    level: "Advanced",
    summary: "Position sizing formula, Risk-to-Reward ratio (1:2 minimum), avoiding ruin, and trading psychology.",
    points: [
      "Capital preservation is Job #1: No trader can survive without strict position sizing",
      "The 1% Rule: Never risk more than 1% of total trading account on any single trade",
      "Position Size = (Account Capital × 1%) / (Entry Price - Stop Loss Price)"
    ]
  }
];

// 4. Render Curriculum Grid
let showAllChapters = false;
function updateChapterCounts() {
  const set = (id, n) => { const el = document.getElementById(id); if (el) el.textContent = n; };
  set('cnt-all', curriculumData.length);
  set('cnt-mod1', curriculumData.filter(c => c.module === 1).length);
  set('cnt-mod2', curriculumData.filter(c => c.module === 2).length);
}

function showMoreChapters() {
  showAllChapters = true;
  const tab = document.querySelector('.curriculum-tab-active');
  const input = document.getElementById('curriculum-search');
  renderCurriculum(tab ? tab.dataset.filter : 'all', input ? input.value : '');
}

// Procedural cover art for chapter cards (unique per chapter)
function chapterArt(item) {
  let seed = item.num * 9301 + 49297;
  const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  const W = 300, H = 120;
  if (item.module === 1) {
    let y = 80, pts = [];
    for (let i = 0; i <= 12; i++) { y = Math.max(20, Math.min(96, y - 5 + rnd() * 9 - 1.5)); pts.push([i * (W / 12), y]); }
    const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
    return `<svg class="cc-art" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><path d="${line} L${W} ${H} L0 ${H}Z" fill="rgba(255,255,255,.16)"/><path d="${line}" fill="none" stroke="rgba(255,255,255,.75)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }
  let c = '', p = 70;
  for (let i = 0; i < 16; i++) {
    const o = p, cl = Math.max(24, Math.min(100, o + (rnd() - 0.52) * 26));
    const hi = Math.min(o, cl) - rnd() * 9, lo = Math.max(o, cl) + rnd() * 9;
    const x = 12 + i * 18, up = cl < o;
    const col = up ? 'rgba(125,255,200,.85)' : 'rgba(255,255,255,.38)';
    c += `<line x1="${x}" x2="${x}" y1="${hi.toFixed(1)}" y2="${lo.toFixed(1)}" stroke="${col}" stroke-width="1.5"/><rect x="${x - 4}" y="${Math.min(o, cl).toFixed(1)}" width="8" height="${Math.max(3, Math.abs(cl - o)).toFixed(1)}" rx="1.5" fill="${col}"/>`;
    p = cl;
  }
  return `<svg class="cc-art" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">${c}</svg>`;
}

function renderCurriculum(filter = 'all', searchQuery = '') {
  updateChapterCounts();
  const container = document.getElementById('curriculum-grid');
  if (!container) return;

  const query = searchQuery.toLowerCase().trim();
  const filtered = curriculumData.filter(item => {
    const matchesFilter = filter === 'all' ? true : (filter === 'mod1' ? item.module === 1 : item.module === 2);
    const matchesSearch = query === '' ||
      item.title.toLowerCase().includes(query) ||
      item.titleHi.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.points.some(p => p.toLowerCase().includes(query));
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty">
        <b>No chapters matched "${searchQuery}"</b>
        Try searching for "IPO", "Hammer", "RSI", "Dividends", or clear filters.
      </div>
    `;
    return;
  }

  const isHindi = currentLang === 'hi';
  const collapse = !showAllChapters && query === '' && filtered.length > 6;
  const visible = collapse ? filtered.slice(0, 6) : filtered;
  container.innerHTML = visible.map(item => {
    const title = isHindi ? item.titleHi : item.title;
    const modLabel = item.module === 1
      ? (isHindi ? 'मॉड्यूल 1 • शेयर बाजार' : 'Module 1 • Stock Basics')
      : (isHindi ? 'मॉड्यूल 2 • टेक्निकल एनालिसिस' : 'Module 2 • Technical Analysis');

    const num = String(item.num).padStart(2, '0');
    return `
      <article class="cc ${item.module === 1 ? 'm1' : 'm2'}" onclick="openChapterModal('${item.id}')">
        <div class="cc-cover">
          ${chapterArt(item)}
          <span class="cc-mod">${modLabel}</span>
          <span class="cc-num">${num}</span>
        </div>
        <div class="cc-body">
          <h3 class="cc-title">${title}</h3>
          <p class="cc-sum">${item.summary}</p>
          <div class="cc-foot">
            <span class="cc-meta"><i></i>${item.time}<em>·</em>${item.points.length} ${isHindi ? 'मुख्य बिंदु' : 'key points'}</span>
            <span class="cc-go" aria-label="${isHindi ? 'प्रीव्यू पढ़ें' : 'Read preview'}">→</span>
          </div>
        </div>
      </article>
    `;
  }).join('') + (collapse ? `<div class="more-wrap"><button class="btn btn-dark" onclick="showMoreChapters()">${isHindi ? `सभी ${filtered.length} चैप्टर्स देखें` : `Show all ${filtered.length} chapters`} ↓</button></div>` : '');
}

// 5. Chapter Detail Preview Modal
function openChapterModal(chapterId) {
  const chapter = curriculumData.find(c => c.id === chapterId);
  if (!chapter) return;

  const isHindi = currentLang === 'hi';
  const modal = document.getElementById('chapter-modal');
  const modalContent = document.getElementById('modal-content');
  if (!modal || !modalContent) return;

  const highlight = chapter.id === 'm1-1'
    ? 'Every rupee kept idle in cash or low-interest savings erodes by 4-5% net every year due to inflation. True wealth requires participating in the productive equity expansion of the nation.'
    : 'Price action reflects human emotion: fear, greed, and hope. By mastering candlestick rejections at key institutional levels, you trade on probability rather than guesswork.';

  modalContent.innerHTML = `
    <div class="m-pad">
      <div class="m-top">
        <span class="badge ${chapter.module === 1 ? 'm1' : 'm2'}">Chapter ${chapter.num} • ${chapter.level}</span>
        <button onclick="closeChapterModal()" class="m-close" aria-label="Close">✕</button>
      </div>
      <h2 class="m-title">${isHindi ? chapter.titleHi : chapter.title}</h2>
      <p class="m-sum">${chapter.summary}</p>
      <div class="m-box">
        <h4>🎯 ${isHindi ? 'इस चैप्टर के मुख्य उद्देश्य' : 'Core Pedagogical Objectives'}</h4>
        <ul>${chapter.points.map(pt => `<li><b>✓</b><span>${pt}</span></li>`).join('')}</ul>
      </div>
      <div class="m-hl"><b>💡 Concept Highlight</b>"${highlight}"</div>
      <div class="m-actions">
        <a href="#download" onclick="closeChapterModal()" class="btn btn-blue">${isHindi ? 'ऐप में पूरा चैप्टर पढ़ें' : 'Read Full Chapter in App'}</a>
        <button onclick="closeChapterModal()" class="btn btn-light">${isHindi ? 'बंद करें' : 'Close'}</button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeChapterModal() {
  const modal = document.getElementById('chapter-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// 6. Interactive Phone Mockup Tab Switcher
function switchPhoneTab(tabName) {
  const buttons = document.querySelectorAll('.phone-tab-btn');
  buttons.forEach(btn => btn.classList.remove('tab-active'));

  const activeBtn = document.getElementById(`tab-btn-${tabName}`);
  if (activeBtn) activeBtn.classList.add('tab-active');

  const screenContainer = document.getElementById('phone-screen-content');
  if (!screenContainer) return;

  if (tabName === 'dashboard') {
    screenContainer.innerHTML = `
      <div class="p-4 space-y-4">
        <!-- Top App Bar -->
        <div class="flex items-center justify-between pt-2">
          <div>
            <div class="text-[10px] text-slate-400 font-semibold">WELCOME BACK</div>
            <div class="text-sm font-black text-white">Aditya P. 📈</div>
          </div>
          <div class="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xs font-bold text-emerald-400">
            AP
          </div>
        </div>

        <!-- Speedometer Card -->
        <div class="glass-panel p-4 rounded-2xl border border-slate-800 text-center relative overflow-hidden">
          <div class="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1">Mastery Progress</div>
          <div class="relative w-28 h-14 mx-auto my-2 flex items-end justify-center">
            <!-- Semi-circle Gauge -->
            <div class="w-24 h-12 border-8 border-slate-800 border-t-emerald-400 border-r-emerald-400 rounded-t-full"></div>
            <div class="absolute bottom-0 text-xl font-black text-white">100</div>
          </div>
          <div class="text-[11px] font-bold text-emerald-400">Learning Score • Level 2</div>
        </div>

        <!-- In-Progress Resume Card -->
        <div class="bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-xl">
          <div class="flex items-center justify-between mb-2">
            <span class="text-[9px] font-extrabold uppercase bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
              CONTINUE LEARNING
            </span>
            <span class="text-[10px] font-bold text-slate-400">62% done</span>
          </div>
          <div class="text-xs font-bold text-white mb-0.5">The Need to Invest</div>
          <div class="text-[10px] text-slate-400 mb-2.5">Card 5 of 8 • Worked Compounding</div>
          <!-- Progress bar -->
          <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3">
            <div class="h-full bg-emerald-400 rounded-full" style="width: 62%;"></div>
          </div>
          <div class="w-full py-1.5 text-center bg-white text-slate-900 text-xs font-black rounded-lg">
            ▶ Resume Lesson
          </div>
        </div>

        <!-- Daily Streak -->
        <div class="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
          <div class="flex items-center gap-2">
            <span class="text-amber-400 text-sm">🔥</span>
            <span class="text-slate-300 font-bold">5 Day Streak</span>
          </div>
          <span class="text-[10px] text-emerald-400 font-bold">+50 XP</span>
        </div>
      </div>
    `;
  } else if (tabName === 'reader') {
    screenContainer.innerHTML = `
      <div class="p-4 space-y-3">
        <!-- Reader Header -->
        <div class="flex items-center justify-between pb-2 border-b border-slate-800">
          <span class="text-[10px] font-bold text-emerald-400">CHAPTER 01</span>
          <span class="text-[10px] text-slate-400">5 / 8</span>
        </div>

        <!-- Green Bar Header -->
        <div class="flex items-center gap-2">
          <div class="w-1 h-4 bg-emerald-400 rounded-full"></div>
          <div class="text-xs font-black text-white">Compounding & Inflation</div>
        </div>

        <!-- Content Card -->
        <div class="glass-panel p-3.5 rounded-xl border border-slate-800 space-y-2 text-slate-300 text-[11px] leading-relaxed">
          <p>If you keep ₹20,000 cash monthly in a safe locker, you accumulate ₹48 Lakhs in 20 years.</p>
          <div class="p-2.5 bg-slate-950/80 rounded-lg border border-slate-800 text-[10px] font-mono text-emerald-400 text-center">
            Real Return = Nominal - Inflation - Tax
          </div>
          <p class="text-[10px] text-slate-400">At 7% inflation, ₹48L will only buy what ₹14.8L buys today. Equities historically beat this hurdle.</p>
        </div>

        <!-- Complete Button -->
        <div class="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
          <div class="text-[11px] font-black text-emerald-400 mb-1">✓ Mark Finished</div>
          <div class="text-[9px] text-slate-400">Unlocks Concept Mastery Quiz</div>
        </div>
      </div>
    `;
  } else if (tabName === 'simulator') {
    screenContainer.innerHTML = `
      <div class="p-4 space-y-3">
        <!-- Sim Header -->
        <div class="flex items-center justify-between pb-2 border-b border-slate-800">
          <div class="text-xs font-black text-white">NIFTY 50 • 15m</div>
          <span class="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">REPLAY ACTIVE</span>
        </div>

        <!-- Mini Candles Chart View -->
        <div class="h-32 bg-slate-950 rounded-xl border border-slate-800 p-2 relative flex items-end justify-between px-3">
          <!-- Support line -->
          <div class="absolute left-0 right-0 bottom-7 border-b border-dashed border-emerald-500/40"></div>
          <div class="absolute left-2 bottom-8 text-[8px] font-mono text-emerald-400">Key Support: 22,450</div>

          <!-- Candle 1: Red -->
          <div class="flex flex-col items-center">
            <div class="w-0.5 h-3 bg-rose-500"></div>
            <div class="w-2.5 h-10 bg-rose-500 rounded-sm"></div>
            <div class="w-0.5 h-2 bg-rose-500"></div>
          </div>
          <!-- Candle 2: Red -->
          <div class="flex flex-col items-center">
            <div class="w-0.5 h-2 bg-rose-500"></div>
            <div class="w-2.5 h-8 bg-rose-500 rounded-sm"></div>
            <div class="w-0.5 h-3 bg-rose-500"></div>
          </div>
          <!-- Candle 3: Hammer (Green) -->
          <div class="flex flex-col items-center animate-bounce">
            <div class="w-0.5 h-1 bg-emerald-400"></div>
            <div class="w-2.5 h-4 bg-emerald-400 rounded-sm shadow-lg shadow-emerald-400/50"></div>
            <div class="w-0.5 h-12 bg-emerald-400"></div>
          </div>
          <!-- Candle 4: Strong Green -->
          <div class="flex flex-col items-center">
            <div class="w-0.5 h-2 bg-emerald-400"></div>
            <div class="w-2.5 h-14 bg-emerald-400 rounded-sm"></div>
            <div class="w-0.5 h-2 bg-emerald-400"></div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="grid grid-cols-2 gap-2">
          <div class="py-2 text-center bg-emerald-500 text-slate-950 font-black text-xs rounded-lg">
            BUY (Long)
          </div>
          <div class="py-2 text-center bg-rose-500 text-white font-black text-xs rounded-lg">
            SELL (Short)
          </div>
        </div>
        <div class="text-[9px] text-center text-slate-400">Paper trade with zero risk • Instant P&L analysis</div>
      </div>
    `;
  } else if (tabName === 'tutor') {
    screenContainer.innerHTML = `
      <div class="p-3.5 space-y-2.5">
        <div class="flex items-center gap-2 pb-2 border-b border-slate-800">
          <div class="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-black text-[10px] flex items-center justify-center">
            AI
          </div>
          <div class="text-xs font-black text-white">FinTech Market Mentor</div>
        </div>

        <!-- Chat bubble User -->
        <div class="p-2.5 bg-slate-800/80 rounded-xl rounded-br-none text-[10px] text-slate-200 ml-4">
          "Sir, Rights Issue se company ka share price kyu gir jata hai?"
        </div>

        <!-- Chat bubble AI -->
        <div class="p-2.5 bg-emerald-950/40 border border-emerald-800/30 rounded-xl rounded-bl-none text-[10px] text-emerald-200 mr-4 space-y-1">
          <p><strong>Aasan shabdon me:</strong></p>
          <p>Rights issue me company naye shares discounted price par issue karti hai. Isse total shares badh jaate hain (dilution), isliye market ex-date par mathematically price adjust kar deta hai!</p>
        </div>
      </div>
    `;
  }
}

// 7. Interactive Candlestick Mini-Game Simulator
let simState = 'ready'; // 'ready', 'traded'
function playMiniSim(action) {
  const resultBox = document.getElementById('mini-sim-result');
  const reveal = document.getElementById('sim-candle-reveal');
  if (!resultBox || !reveal) return;

  reveal.classList.remove('hidden');
  resultBox.classList.remove('hidden');
  if (action === 'BUY') {
    resultBox.innerHTML = `
      <div class="res-card win">
        <span class="res-tag">TARGET HIT: 1:2.4 R:R</span>
        <div class="res-amt">+₹4,320 Profit</div>
        <p>Hammer candle at critical weekly support confirmed with subsequent volume spike. Textbook setup!</p>
      </div>`;
  } else {
    resultBox.innerHTML = `
      <div class="res-card loss">
        <span class="res-tag">STOPLOSS HIT (-1R)</span>
        <div class="res-amt">-₹1,800 Loss</div>
        <p>Shorting directly into a major demand/support zone with hammer rejection is a retail trap.</p>
      </div>`;
  }
}

function resetMiniSim() {
  const reveal = document.getElementById('sim-candle-reveal');
  const resultBox = document.getElementById('mini-sim-result');
  if (reveal) reveal.classList.add('hidden');
  if (resultBox) resultBox.classList.add('hidden');
}

// 8. FAQ Accordion Toggle
function toggleFaq(index) {
  const item = document.getElementById(`faq-item-${index}`);
  if (!item) return;
  const willOpen = !item.classList.contains('faq-open');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('faq-open'));
  if (willOpen) item.classList.add('faq-open');
}

// 9. Language Switcher (EN / HI)
function setLanguage(lang) {
  currentLang = lang;

  // Toggle active button style
  document.querySelectorAll('#btn-lang-en, #btn-lang-hi, [data-lang-btn]').forEach(btn => {
    const code = btn.id === 'btn-lang-en' ? 'en' : btn.id === 'btn-lang-hi' ? 'hi' : btn.dataset.langBtn;
    btn.classList.toggle('lang-active', code === lang);
  });
  document.documentElement.lang = lang === 'hi' ? 'hi' : 'en';

  // Update i18n texts across DOM
  const dict = i18n[lang];
  for (const [key, val] of Object.entries(dict)) {
    const el = document.getElementById(`i18n-${key}`);
    if (el) {
      el.textContent = val;
    }
  }

  // Re-render curriculum in chosen language
  const activeTab = document.querySelector('.curriculum-tab-active')?.dataset.filter || 'all';
  const searchInput = document.getElementById('curriculum-search');
  if (searchInput && dict.searchPlaceholder) searchInput.placeholder = dict.searchPlaceholder;
  renderCurriculum(activeTab, searchInput ? searchInput.value : '');
}

// Mobile Nav Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// 10. Initialization on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  // Calculator initial execution
  calculateCompounding();

  // Attach calculator slider events
  ['calc-monthly', 'calc-years', 'calc-return', 'calc-inflation'].forEach(id => {
    const slider = document.getElementById(id);
    if (slider) {
      slider.addEventListener('input', calculateCompounding);
    }
  });

  // Render initial curriculum
  renderCurriculum('all');

  // Curriculum Filter Tabs
  document.querySelectorAll('.curriculum-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      document.querySelectorAll('.curriculum-tab').forEach(t => {
        t.classList.remove('curriculum-tab-active');
      });
      tab.classList.add('curriculum-tab-active');

      const filter = tab.dataset.filter;
      const searchInput = document.getElementById('curriculum-search');
      renderCurriculum(filter, searchInput ? searchInput.value : '');
    });
  });

  // Curriculum Search input
  const searchInput = document.getElementById('curriculum-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeTab = document.querySelector('.curriculum-tab-active')?.dataset.filter || 'all';
      renderCurriculum(activeTab, e.target.value);
    });
  }

  // Initialize Phone Mockup
  switchPhoneTab('dashboard');
});


// 11. AI Mentor interactive demo
const mentorQA = [
  { q: 'What is RSI?', a: 'RSI (Relative Strength Index) measures momentum on a 0–100 scale. Above 70 = strong momentum, below 30 = weak momentum. On its own it is not a buy or sell signal.' },
  { q: 'Theta decay kya hai?', a: 'Option ki value time ke saath ghat-ti hai, aur expiry ke paas ye speed badh jaati hai, bilkul pighalti hui ice ki tarah. Isi ko theta decay kehte hain.' },
  { q: '1% rule kya hai?', a: 'Ek trade mein capital ka maximum 1% hi risk karo. ₹1,00,000 capital par risk ₹1,000. Position size = Risk ÷ (Entry − Stoploss). Educational example only.' },
  { q: 'Hammer candle?', a: 'Chhoti body aur lambi neeche ki wick wali candle. Support par bane to buyers ke wapas aane ka hint deti hai, lekin pehle confirmation candle ka wait karo.' }
];
function mentorAsk(i) {
  const body = document.getElementById('mentor-body');
  const item = mentorQA[i];
  if (!body || !item) return;
  const you = document.createElement('div');
  you.className = 'msg you';
  you.textContent = item.q;
  body.appendChild(you);
  const typing = document.createElement('div');
  typing.className = 'msg ai typing';
  typing.innerHTML = '<i></i><i></i><i></i>';
  body.appendChild(typing);
  body.scrollTo({ top: body.scrollHeight, behavior: 'smooth' });
  setTimeout(() => {
    typing.className = 'msg ai';
    typing.textContent = item.a;
    body.scrollTo({ top: body.scrollHeight, behavior: 'smooth' });
  }, 900);
}
