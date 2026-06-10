export const personal = {
  name: "Vishesh Poddar",
  firstName: "Vishesh",
  lastName: "Poddar",
  title: "Finance & Economics · Data Science",
  email: "vishesh.poddar@mail.utoronto.ca",
  linkedin: "https://www.linkedin.com/in/visheshpoddar/",
  github: "https://github.com/visheshpoddar",
  university: "University of Toronto",
  degree: "Rotman Commerce · Finance and Economics",
  graduation: "2028",
  gpa: "3.96",
  location: "Toronto, Canada",
  heroHeadline: "Quantitative Thinking at the Intersection of Finance and Data.",
  heroSub:
    "Incoming third-year Rotman Commerce student specializing in Finance and Economics with a Focus in Data Science, actively following markets and building investment research.",
  aboutP1:
    "I am Vishesh Poddar, an incoming 3rd year Rotman Commerce student at the University of Toronto, specializing in Finance and Economics with a Focus in Data Science.",
  aboutP2:
    "I love learning. I like to put myself in new situations and experiences that help me grow. I actively follow the markets and have worked on several projects and reports as part of my extracurricular involvement around campus.",
  scholarships:
    "CGPA & Scholarships: 3.96/4.00; International Scholar ($100,000); Dean's List Scholar; The Professor William Kingston and Dr John Kingston Scholarship.",
};

export const stats = [
  { value: "3.96", label: "GPA" },
  { value: "10+", label: "Stock Pitches" },
];

export const education = [
  {
    institution: "University of Toronto",
    degree: "Rotman Commerce",
    concentration: "Finance and Economics · Focus in Data Science",
    dates: "2024 – 2028",
    gpa: "3.96 / 4.0",
    honors: ["Dean's List — Fall 2022, Spring 2023, Fall 2023", "Merit Scholarship Recipient"],
    coursework: [
      "Econometrics",
      "Financial Modeling",
      "Corporate Finance",
      "Investment Analysis",
      "Macroeconomics",
      "Statistical Methods",
      "Derivatives & Options",
      "Game Theory",
      "Data Analysis",
      "Behavioral Finance",
      "Fixed Income",
      "Financial Accounting",
    ],
  },
];

export const experience = [
  {
    title: "Equity Research Intern",
    company: "XYZ Capital",
    location: "New York, NY",
    dates: "Jun 2024 – Aug 2024",
    bullets: [
      "Analyzed 12 companies across the consumer discretionary sector using DCF and comparable company analysis; presented findings to a team of 6 analysts.",
      "Built a Python-based data pipeline aggregating financial statement data from SEC EDGAR, reducing manual reporting time by 40%.",
      "Assisted in preparing weekly equity research summaries covering earnings, macro developments, and sector rotations distributed to 30+ portfolio managers.",
    ],
    tags: ["Python", "Excel", "Bloomberg", "DCF", "Equity Research"],
  },
  {
    title: "Corporate Finance Analyst (Part-time)",
    company: "ABC Consulting",
    location: "Remote",
    dates: "Jan 2024 – May 2024",
    bullets: [
      "Developed three-statement financial models for 4 mid-market client engagements in healthcare and technology sectors.",
      "Automated monthly performance reporting using SQL and Excel, eliminating 8 hours of manual work per reporting cycle.",
      "Contributed to a market entry analysis report for a $50M capital allocation decision.",
    ],
    tags: ["SQL", "Excel", "Financial Modeling", "Valuation"],
  },
  {
    title: "Data Analytics Intern",
    company: "DEF Analytics",
    location: "Mumbai, India",
    dates: "May 2023 – Jul 2023",
    bullets: [
      "Designed a regression model in Python to identify leading indicators for customer churn, achieving 0.79 AUC on out-of-sample data.",
      "Built interactive Tableau dashboards for operational KPIs used in weekly executive reviews.",
      "Processed and cleaned 500K+ row datasets across 3 business lines for quarterly reporting.",
    ],
    tags: ["Python", "Tableau", "SQL", "Regression", "Pandas"],
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

export const stockPitches = [
  {
    company: "ABM Industries (NYSE: ABM)",
    category: "Equity Research Report",
    eyebrow: "Equity Research",
    filterGroup: "equity",
    links: [
      { label: "Report", href: "/docs/abm-memo.pdf", download: false },
      { label: "Model", href: "/docs/abm-model.xlsx", download: true },
    ],
    date: "10 May 2026",
    position: "",
  },
  {
    company: "Perplexity Computer's Stock Pitch Competition",
    category: "Stock Pitch Competition",
    eyebrow: "Competition",
    filterGroup: "competitions",
    links: [{ label: "Website", href: "https://perplexity.ai", external: true }],
    date: "8 April 2026",
    position: "Honorable Mention (Top 70 out of 1400+)",
  },
  {
    company: "Reitmans (TSX: RET)",
    category: "Personal Stock Pitch",
    eyebrow: "Personal Pitch",
    filterGroup: "personal",
    links: [{ label: "Pitch", href: "/docs/reitmans-pitch.pdf" }],
    date: "20 February 2026",
    position: "",
  },
  {
    company: "Parker Hannifin (NYSE: PH)",
    category: "Personal Stock Pitch",
    eyebrow: "Personal Pitch",
    filterGroup: "personal",
    links: [{ label: "Pitch", href: "/docs/parker-hannifin-pitch.pdf" }],
    date: "15 January 2026",
    position: "",
  },
  {
    company: "Canada Goose (NYSE: GOOS)",
    category: "Personal Stock Pitch",
    eyebrow: "Personal Pitch",
    filterGroup: "personal",
    links: [{ label: "Pitch", href: "/docs/canada-goose-pitch.pdf" }],
    date: "20 November 2025",
    position: "",
  },
  {
    company: "Levi's (NYSE: LEVI)",
    category: "Stock Pitch Competition",
    eyebrow: "Competition",
    filterGroup: "competitions",
    links: [{ label: "Pitch", href: "/docs/levis-pitch.pdf" }],
    date: "25 October 2025",
    position: "Pre-finalist",
  },
  {
    company: "ASML (NASDAQ: ASML)",
    category: "Stock Pitch Competition",
    eyebrow: "Competition",
    filterGroup: "competitions",
    links: [{ label: "Pitch", href: "/docs/asml-pitch.pdf" }],
    date: "20 June 2025",
    position: "",
  },
  {
    company: "Canadian National Railway (TSX: CNR)",
    category: "Personal Stock Pitch",
    eyebrow: "Personal Pitch",
    filterGroup: "personal",
    links: [{ label: "Pitch", href: "/docs/canadian-national-railway-pitch.pdf" }],
    date: "30 April 2025",
    position: "",
  },
  {
    company: "Iron Mountain (NYSE: IRM)",
    category: "Stock Pitch Competition",
    eyebrow: "Competition",
    filterGroup: "competitions",
    links: [{ label: "Pitch", href: "/docs/iron-mountain-pitch.pdf" }],
    date: "10 March 2025",
    position: "Top 5 Finalist (only team of 1st year students to reach there)",
  },
  {
    company: "Comcast (NASDAQ: CMCSA)",
    category: "Personal Stock Pitch",
    eyebrow: "Personal Pitch",
    filterGroup: "personal",
    links: [{ label: "Pitch", href: "/docs/comcast-pitch.pdf" }],
    date: "10 February 2025",
    position: "",
  },
  {
    company: "Deckers / Crocs M&A Model",
    category: "Merger Model",
    eyebrow: "Model",
    filterGroup: "modeling",
    links: [
      { label: "Pitch", href: "/docs/deckers-crocs-ma.pdf" },
      { label: "Model", href: "/docs/deckers-crocs-model.xlsb", download: true },
    ],
    date: "Oct 2025",
    position: "",
  },
];

export const otherWork = [
  {
    tag: "FT Letter to the Editor",
    tagColor: "gold",
    title: "Cryptocurrencies can act as money if left alone",
    date: "21 July 2021",
    description:
      "Letter published in the Financial Times offering a perspective on cryptocurrencies as money.",
    links: [
      { label: "FT (subscription)", href: "https://www.ft.com", external: true },
      { label: "No-subscription link", href: "https://www.ft.com", external: true },
    ],
  },
  {
    tag: "Honorable Mention, Top 70 of 1400+",
    tagColor: "cyan",
    title: "Perplexity Computer's Stock Pitch Competition",
    date: "8 April 2026",
    description:
      "A stock pitch competition run by Perplexity Computer, focusing on a concise, data-driven buy/sell recommendation.",
    links: [{ label: "Website", href: "https://perplexity.ai", external: true }],
  }
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
