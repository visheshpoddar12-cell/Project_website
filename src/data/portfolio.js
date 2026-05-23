export const personal = {
  name: "Vishesh Poddar",
  firstName: "Vishesh",
  lastName: "Poddar",
  title: "Finance, Economics & Data Science",
  email: "vishesh.poddar@mail.utoronto.ca",
  linkedin: "https://linkedin.com/in/visheshpoddar",
  github: "https://github.com/visheshpoddar",
  university: "University of Toronto (Rotman Commerce)",
  degree: "B.Comm., Finance and Economics Specialist",
  graduation: "Class of 2028",
  gpa: "3.96",
  location: "Toronto, ON",
  heroHeadline: "Equity research, stock pitching, and data-driven finance.",
  heroSub:
    "I combine finance, economics, and analytics to build investment theses, compete in stock pitch challenges, and communicate complex ideas with clarity.",
  aboutP1:
    "I am a Finance and Economics Specialist at the University of Toronto’s Rotman Commerce, focused on equity research, valuation, and competitive finance work. My background includes modeling investment opportunities, developing pitch decks, and analyzing markets through the lens of both fundamentals and data.",
  aboutP2:
    "I have placed in top finance competitions like Fidelity Stock Pitch and UTCC Case Comp, supported investment decisions at Ranger Equity Investments, and produced pitch-ready research deliverables in Excel, PowerPoint, and written reports. I’m looking for opportunities that value rigorous analysis, teamwork, and real-world investment insight.",
};

export const stats = [
  { value: "3.96", label: "CGPA" },
  { value: "8+", label: "Competitions" },
  { value: "20+", label: "Research Reports" },
  { value: "4", label: "Internships" },
];

export const education = [
  {
    institution: "University of Toronto (Rotman Commerce)",
    degree: "B.Comm., Finance and Economics Specialist",
    concentration: "Finance, Economics & Data Science",
    dates: "Aug 2024 – Apr 2028",
    gpa: "3.96 / 4.00",
    honors: [
      "International Scholar ($100,000)",
      "Dean’s List Scholar",
      "The Professor William Kingston and Dr John Kingston Scholarship",
    ],
    coursework: [
      "Financial Modeling",
      "Corporate Finance",
      "Econometrics",
      "Investment Analysis",
      "Data Science for Finance",
      "Capital Markets",
      "Statistical Methods",
      "Macro Finance",
    ],
  },
];

export const experience = [
  {
    title: "Equity Research Associate",
    company: "Ranger Equity Investments",
    location: "Toronto, ON",
    dates: "Jan 2026 – Present",
    bullets: [
      "Conducted company and industry analysis using Bloomberg and Capital IQ to evaluate competitive position, cash flow strength, and market trends.",
      "Built interconnected Excel models including DCF, comparable company, and precedent transaction analyses; authored 20+ page investment reports.",
      "Monitored market developments and delivered weekly news summaries to support portfolio decisions.",
    ],
    tags: ["Excel", "Bloomberg", "Capital IQ", "DCF", "Equity Research"],
  },
  {
    title: "Finance and Operations Assistant",
    company: "Toronto 2025 AI Conference, BMO Lab @ UofT",
    location: "Toronto, ON",
    dates: "Aug 2025 – Dec 2025",
    bullets: [
      "Coordinated logistics for 1,000+ attendees and 15 international speakers, including travel, lodging, and venue support.",
      "Managed stakeholder relationships across sponsors, speakers, and university teams to deploy a $150,000 operating budget on schedule.",
      "Executed event-day operations, ticketing, registration, and panel moderation support for a two-day interdisciplinary conference.",
    ],
    tags: ["Operations", "Event Management", "Stakeholder Coordination", "Budget Management"],
  },
  {
    title: "Investment Analyst Intern",
    company: "Thinkuvate",
    location: "Singapore",
    dates: "May 2025 – Jul 2025",
    bullets: [
      "Evaluated business potential and macroeconomic drivers for 8 startups across DeepTech and growth-stage industries.",
      "Prepared due diligence materials that supported funding conversations for roughly $2M in capital deployment.",
      "Spearheaded research for a new DeepTech fund, benchmarking investment opportunities and synthesizing findings into investor-ready presentations.",
    ],
    tags: ["Market Research", "Due Diligence", "Pitch Decks", "Fund Strategy"],
  },
  {
    title: "Equity Analyst Intern",
    company: "Foord Asset Management",
    location: "Singapore",
    dates: "Jun 2024 – Aug 2024",
    bullets: [
      "Built a buy/sell recommendation for Cummins (NYSE: CMI) using financial modeling and qualitative analysis.",
      "Predicted 30% upside within six months based on valuation, macro setup, and execution risk review.",
      "Created an ESG decision-making tool using Bloomberg data that reduced portfolio review time by 80%.",
    ],
    tags: ["Equity Research", "Financial Modeling", "ESG", "Excel"],
  },
];

export const research = [
  {
    category: "Equity Research",
    title: "The Case for [Company]: Undervalued in a Crowded Sector",
    summary:
      "Market mispricing driven by near-term earnings noise; strong FCF generation supports 25% upside over 18 months.",
    date: "Mar 2025",
    readTime: "12 min read",
    pdf: true,
  },
  {
    category: "Macro Analysis",
    title: "Fed Policy in a Stagflationary Environment: Lessons from the 1970s",
    summary:
      "Parallels between current and 1970s inflation cycles suggest rate policy will remain tighter for longer, pressuring growth equities.",
    date: "Jan 2025",
    readTime: "9 min read",
    pdf: true,
  },
  {
    category: "Industry Deep Dive",
    title: "The Energy Transition Investment Landscape: Capital Flows, Risk, and Opportunity",
    summary:
      "Policy tailwinds and long-term demand shifts create compelling risk-adjusted returns in select clean energy sub-sectors.",
    date: "Nov 2024",
    readTime: "15 min read",
    pdf: true,
  },
  {
    category: "Investment Thesis",
    title: "Why Consumer Staples May Outperform in the Next Recession",
    summary:
      "Defensive characteristics, pricing power, and dividend stability position staples well in a late-cycle environment.",
    date: "Sep 2024",
    readTime: "8 min read",
    pdf: false,
  },
  {
    category: "Market Commentary",
    title: "Breaking Down the Yield Curve Inversion: What History Actually Says",
    summary:
      "Yield curve inversions predict recessions with a median 14-month lag; current signal is meaningful but not deterministic.",
    date: "Jul 2024",
    readTime: "6 min read",
    pdf: false,
  },
  {
    category: "Policy & Macro",
    title: "India's Digital Financial Infrastructure: A Macro Case Study",
    summary:
      "UPI adoption and digital credit infrastructure position India as a case study for financial inclusion at scale.",
    date: "Apr 2024",
    readTime: "11 min read",
    pdf: true,
  },
];

export const projects = [
  {
    category: "Quantitative Finance",
    title: "Portfolio Optimization Model",
    summary: "Mean-variance optimization constructing the efficient frontier for a user-defined asset universe.",
    problem: "How should a portfolio be weighted to maximize return for a given level of risk?",
    method: "Markowitz mean-variance framework; SciPy optimization; Monte Carlo simulation for frontier visualization.",
    result: "Optimal weights for a 15-asset portfolio with Sharpe ratio improvement of 18% over equal-weight benchmark.",
    tools: ["Python", "NumPy", "SciPy", "Matplotlib"],
    github: "#",
    demo: "#",
  },
  {
    category: "Equity Analytics",
    title: "Stock Price Analysis Dashboard",
    summary: "Interactive dashboard visualizing price trends, volume, and momentum indicators for S&P 500 constituents.",
    problem: "Identifying meaningful price signals requires combining multiple data sources with no clean off-the-shelf tool.",
    method: "Python with yfinance, pandas, and Plotly Dash to pull, clean, and visualize historical equity data.",
    result: "Working dashboard tracking 50+ stocks with configurable indicators and downloadable summary reports.",
    tools: ["Python", "Pandas", "Plotly", "yfinance", "Dash"],
    github: "#",
    demo: "#",
  },
  {
    category: "Risk Analytics",
    title: "Credit Risk / Default Prediction Model",
    summary: "ML model predicting corporate default probability using financial ratios from public filings.",
    problem: "Can publicly available financial ratios reliably predict corporate default one year in advance?",
    method: "Feature engineering from financial data; logistic regression baseline; XGBoost classifier; SHAP interpretability.",
    result: "AUC of 0.82 on held-out test set; identified leverage ratios and interest coverage as top predictors.",
    tools: ["Python", "scikit-learn", "XGBoost", "SHAP", "Pandas"],
    github: "#",
    demo: null,
  },
  {
    category: "Economic Analysis",
    title: "Macroeconomic Indicators Dashboard",
    summary: "Live dashboard tracking U.S. macro indicators including CPI, unemployment, GDP growth, and yield curve.",
    problem: "Macro signals are scattered across FRED, BLS, and BEA — no unified visual for tracking the business cycle.",
    method: "Python ETL pulling from FRED API; Streamlit for visualization; automated weekly refresh.",
    result: "Single-page dashboard used weekly for macro research; integrated into personal investment research workflow.",
    tools: ["Python", "FRED API", "Streamlit", "Pandas"],
    github: "#",
    demo: "#",
  },
  {
    category: "Quantitative Finance",
    title: "Multi-Factor Return Forecasting",
    summary: "Factor model estimating excess equity returns using macroeconomic and firm-specific variables.",
    problem: "Can a multi-factor regression model explain cross-sectional return variation better than the CAPM?",
    method: "Fama-MacBeth cross-sectional regression; factors include size, value, momentum, and quality.",
    result: "4-factor model explains 34% of cross-sectional return variation vs. CAPM R² of 0.11.",
    tools: ["Python", "statsmodels", "Pandas", "NumPy"],
    github: "#",
    demo: null,
  },
  {
    category: "NLP / FinTech",
    title: "Financial News Sentiment Analyzer",
    summary: "NLP pipeline classifying financial news headlines and correlating sentiment scores with next-day returns.",
    problem: "Does news sentiment contain incremental predictive information about short-term stock price movements?",
    method: "FinBERT fine-tuned sentiment classifier; daily aggregation per ticker; Granger causality testing.",
    result: "Negative sentiment showed statistically significant predictive relationship with next-day returns (p = 0.03).",
    tools: ["Python", "HuggingFace", "FinBERT", "NLTK", "Pandas"],
    github: "#",
    demo: null,
  },
];

export const stockPitches = [
  {
    title: "ABM Industries",
    date: "10 May 2026",
    competition: false,
    position: "",
    reportUrl: "/pdfs/ABM Industries Memo.pdf",
    modelUrl: "/pdfs/models/ABM Industries model.xlsx",
  },
  {
    title: "Perplexity Computer's Stock Pitch Competition",
    date: "8 April 2026",
    competition: true,
    position: "Honorable mention (Top 70 out of 1400+)",
    websiteUrl: "https://www.perplexity.ai/computer/a/parker-hannifin-sell-pitch-IjzJ0i9qRSqOSok078lGhg",
  },
  {
    title: "Reitmans",
    date: "20 February 2026",
    competition: false,
    position: "",
    pitchUrl: "/pdfs/Reitmans Pitch.pdf",
  },
  {
    title: "Parker Hannifin",
    date: "15 January 2026",
    competition: false,
    position: "",
    pitchUrl: "/pdfs/Parker Hannifin.pdf",
  },
  {
    title: "Canada Goose",
    date: "20 November 2025",
    competition: false,
    position: "",
    pitchUrl: "/pdfs/Canada Goose.pdf",
  },
  {
    title: "Levi’s",
    date: "25 October 2025",
    competition: true,
    position: "Pre-finalist",
    pitchUrl: "/pdfs/Levi's.pdf",
  },
  {
    title: "ASML",
    date: "20 June 2025",
    competition: true,
    position: "",
    pitchUrl: "/pdfs/ASML Stock Pitch.pdf",
  },
  {
    title: "Canadian National Railway",
    date: "30 April 2025",
    competition: false,
    position: "",
    pitchUrl: "/pdfs/Canadian National Railway Pitch.pdf",
  },
  {
    title: "Iron Mountain",
    date: "10 March 2025",
    competition: true,
    position: "Top 5 Finalist (only team of 1st year students to reach there)",
    pitchUrl: "/pdfs/Iron Mountain Pitch.pdf",
  },
  {
    title: "Comcast",
    date: "10 February 2025",
    competition: false,
    position: "",
    pitchUrl: "/pdfs/Comcast Pitch.pdf",
  },
];

export const otherWork = [
  {
    title: "Cryptocurrencies can act as money if left alone",
    subtitle: "FT letter to the editor",
    date: "21 July 2021",
    description: "Letter published in the Financial Times offering a perspective on cryptocurrencies as money.",
    links: [
      { label: "FT (subscription)", url: "https://www.ft.com/content/8cd1a96e-ce2a-4b55-8800-085abedcfa2b?shareType=nongift" },
      { label: "No-subscription link", url: "https://drive.google.com/file/d/1wCrqOW_eWaqBL0skY097AoNsPEBaVVuQ/view" },
    ],
  },
  {
    title: "Perplexity Computer's Stock Pitch Competition",
    subtitle: "Honorable mention, top 70 of 1400+",
    date: "8 April 2026",
    description: "A stock pitch competition run by Perplexity Computer mode, focusing on a concise, data-driven buy/sell recommendation.",
    links: [
      { label: "Website", url: "https://www.perplexity.ai/computer/a/parker-hannifin-sell-pitch-IjzJ0i9qRSqOSok078lGhg" },
    ],
  },
  {
    title: "Deckers / Crocs M&A Model",
    subtitle: "M&A model and pitch",
    date: "Oct 2025",
    description: "A detailed acquisition model and pitch for Deckers' acquisition of Crocs.",
    links: [
      { label: "Pitch", url: "/pdfs/deckers-crocs-mna.pdf" },
      { label: "Model", url: "/pdfs/deckers-crocs-model.xlsb" },
    ],
  },
];

export const skills = {
  "Financial Analysis": [
    "Financial Modeling",
    "DCF Valuation",
    "Comparable Company Analysis",
    "Ratio Analysis",
    "DuPont Decomposition",
    "Credit Analysis",
    "Equity Research",
    "Fixed Income",
    "Portfolio Construction",
    "Risk Analysis",
    "Corporate Valuation",
    "Capital Budgeting",
  ],
  "Programming & Data": [
    "Python",
    "SQL",
    "R",
    "Pandas",
    "NumPy",
    "scikit-learn",
    "Matplotlib",
    "Seaborn",
    "Plotly",
    "Streamlit",
    "Git / GitHub",
    "Jupyter Notebooks",
  ],
  "Statistical Methods": [
    "Econometrics",
    "OLS Regression",
    "Time Series Analysis",
    "Monte Carlo Simulation",
    "Hypothesis Testing",
    "Factor Models",
    "Logistic Regression",
    "Cluster Analysis",
    "PCA",
    "Gradient Boosting",
  ],
  "Tools & Platforms": [
    "Excel (Advanced)",
    "Bloomberg Terminal",
    "Capital IQ",
    "Tableau",
    "Power BI",
    "FRED API",
    "SEC EDGAR",
    "FactSet",
    "Microsoft Office Suite",
    "LaTeX",
  ],
};

export const leadership = [
  {
    role: "Vice President, Research",
    organization: "University Investment Club",
    dates: "Aug 2023 – Present",
    bullets: [
      "Lead a team of 8 analysts producing weekly equity research reports distributed to 120+ club members.",
      "Organized 3 stock pitch competitions; mentored 15 first-year students on financial modeling and presentation skills.",
    ],
  },
  {
    role: "Director of Analytics",
    organization: "Economics Society",
    dates: "Sep 2023 – Present",
    bullets: [
      "Built and maintain the club's macroeconomic tracker dashboard, used by 60+ members for research and discussion.",
      "Facilitated 5 workshops on Python for financial data analysis, averaging 30 attendees per session.",
    ],
  },
  {
    role: "Case Competition — 2nd Place",
    organization: "CFA Institute Research Challenge",
    dates: "Feb 2024",
    bullets: [
      "Produced a 40-page equity research report on a publicly listed company; presented to a panel of industry judges.",
      "Placed 2nd regionally out of 24 competing university teams.",
    ],
  },
  {
    role: "Finance Mentor",
    organization: "First-Gen Student Network",
    dates: "Jan 2023 – Present",
    bullets: [
      "Mentor 4 first-generation college students on breaking into finance: resume review, interview prep, and networking strategy.",
    ],
  },
];
