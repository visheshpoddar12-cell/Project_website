export const personal = {
  name: "Vishesh Poddar",
  firstName: "Vishesh",
  lastName: "Poddar",
  title: "Economics & Finance · Data Science",
  email: "yashovardhansaraswat26@gmail.com",
  linkedin: "https://linkedin.com/in/visheshpoddar",
  github: "https://github.com/visheshpoddar",
  university: "Your University",
  degree: "B.S. Economics & Finance",
  graduation: "May 2026",
  gpa: "3.8",
  location: "New York, NY",
  heroHeadline: "Quantitative Thinking at the Intersection of Finance and Data.",
  heroSub:
    "I combine economic theory, financial modeling, and data science to analyze markets, evaluate investments, and turn complex data into clear decisions.",
  aboutP1:
    "I am a rising junior at [University], studying Economics and Finance with a concentration in quantitative methods and data analysis. My work sits at the intersection of financial theory and applied analytics — I use Python, statistical modeling, and econometric techniques to investigate the questions that interest me most: what drives market prices, how capital flows through economies, and where data reveals what fundamentals cannot.",
  aboutP2:
    "Outside the classroom, I write equity research and macroeconomic analysis, build financial models for industry projects, and participate in case competitions focused on investment strategy and corporate valuation. I am actively looking for opportunities where rigorous analysis and business judgment are equally valued.",
};

export const stats = [
  { value: "3.8", label: "GPA" },
  { value: "10+", label: "Projects" },
  { value: "6+", label: "Research Pieces" },
  { value: "3", label: "Internships" },
];

export const education = [
  {
    institution: "Your University",
    degree: "B.S. Economics & Finance",
    concentration: "Quantitative Methods & Data Science",
    dates: "Aug 2022 – May 2026",
    gpa: "3.8 / 4.0",
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
