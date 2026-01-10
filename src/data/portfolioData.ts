// src/data/portfolioData.ts

import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Sai Kiran Patirla",
    title: "Business Systems Consultant | Data, ML and Agentic Driven",
    tagline: "Bridging Business Strategy with AI/ML Solutions",
    about: `I am a versatile technology professional who bridges the gap between business strategy and cutting-edge AI/ML solutions. With a unique blend of technical expertise and business acumen from my Computer Science background from NIT Raipur, MBA from IIT Delhi, and MS from UIUC, I transform complex data into actionable insights and build intelligent systems that drive real business value.

My experience spans designing AI-powered chatbots, building ETL pipelines, developing NLP systems, and creating end-to-end machine learning solutions. I've worked with Fortune 500 companies and startups alike, consistently delivering solutions that improve efficiency and drive measurable results.`,
    location: "Urbana, IL",
    email: "saikiranpatirla@gmail.com",
    phone: "+1-217-926-3526",
    linkedin: "https://www.linkedin.com/in/sai-kiran-patirla/",
    github: "https://github.com/saikiran-patirla",
  },

  education: [
    {
      degree: "MS in Information Management",
      institution: "University of Illinois Urbana-Champaign",
      duration: "Aug 2023 – Dec 2024",
      gpa: "3.75/4.0",
      description: "Focus on Data Science, Machine Learning, and AI applications in business systems."
    },
    {
      degree: "MBA in General Management",
      institution: "Indian Institute of Technology Delhi",
      duration: "Sep 2020 – Apr 2022",
      gpa: "3.48/4.0",
      description: "Strategic management, business analytics, and technology leadership."
    },
    {
      degree: "B.Tech in Computer Science",
      institution: "National Institute of Technology Raipur",
      duration: "Aug 2014 – May 2018",
      gpa: "3.29/4.0",
      description: "Core computer science fundamentals, algorithms, and software development."
    }
  ],

  experience: [
    {
      title: "Business Systems Consultant",
      company: "Qualified Inc.",
      location: "San Francisco",
      duration: "Jan 2025 – Present",
      highlights: [],
      categories: [
        {
          title: "AI & LLM Integration",
          points: [
            "Designed and deployed AI-powered chatbots by fine-tuning LLMs (OpenAI GPT-3/3.5) on customer interaction data, improving user engagement by 15% and conversion by 10%",
            "Applied NLP techniques (intent classification, entity extraction) to improve bot accuracy, reducing misclassification by 12%",
            "Led transition from custom BERT NLP models to Agentforce-based persona prediction for improved decision-maker identification"
          ]
        },
        {
          title: "Salesforce & Business Systems",
          points: [
            "Developed Apex triggers and flows across Salesforce objects (Account, Opportunity, Case, Contact) to automate business logic",
            "Integrated ZoomInfo APIs into Salesforce for automated Lead/Contact/Account enrichment with clean field mapping and deduplication",
            "Built strategic dashboards in Domo: Outbound Funnel, Pipeline Performance, and Sales Opportunity dashboards"
          ]
        },
        {
          title: "AI Agents & Automation",
          points: [
            "Created 'Next Steps' AI Agent for Opportunities providing contextual recommendations based on stage, activity, and buyer persona",
            "Customized Opportunity Summary and Case Summary Agents for real-time contextual recaps",
            "Implemented Einstein Case Classification for intelligent case routing and faster resolution times"
          ]
        }
      ]
    },
    {
      title: "Senior Consultant (Information Technology)",
      company: "Quess Corp Limited",
      location: "Bangalore",
      duration: "Jun 2022 – Feb 2023",
      highlights: [
        "Engineered ETL pipelines (Python + SQL) to integrate payroll & ERP data, reducing processing time by 60%",
        "Developed NLP-based email prioritization system using GPT-3.5 and Scikit-learn, achieving 91.8% classification accuracy",
        "Applied ML-based workflow optimization, cutting response latency for priority emails by 25%"
      ]
    },
    {
      title: "Supply Network Development Specialist",
      company: "Dassault Systèmes",
      location: "Bangalore",
      duration: "Jul 2018 – Aug 2020",
      highlights: [
        "Developed supply network solutions using Java, Python, and REST APIs to automate supplier onboarding, reducing KPI response times by 20%",
        "Created automated RFQ workflow using Python and RESTful services, reducing manual intervention by 40%",
        "Built performance monitoring models with Python, enabling anomaly detection in system logs, improving uptime by 15%"
      ]
    }
  ],

  skills: [
    {
      category: "Programming & ML",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "R", level: 75 },
        { name: "Java", level: 80 },
        { name: "C", level: 70 }
      ]
    },
    {
      category: "AI/ML Frameworks",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 90 },
        { name: "LangChain", level: 85 },
        { name: "OpenAI API", level: 90 }
      ]
    },
    {
      category: "Data Engineering & Cloud",
      skills: [
        { name: "AWS (S3, Lambda, Glue)", level: 80 },
        { name: "ETL Pipelines", level: 90 },
        { name: "Streamlit", level: 90 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      category: "Data Visualization",
      skills: [
        { name: "Tableau", level: 85 },
        { name: "Power BI", level: 80 },
        { name: "Domo", level: 75 },
        { name: "Matplotlib/Plotly", level: 85 }
      ]
    },
    {
      category: "Business Systems",
      skills: [
        { name: "Salesforce", level: 85 },
        { name: "Apex Development", level: 80 },
        { name: "JIRA/Asana", level: 85 },
        { name: "Git", level: 90 }
      ]
    }
  ],

  projects: [
    {
      title: "AI-Powered Equity Research Analysis Tool",
      headline: "End-to-end LLM pipeline for automated financial news extraction & summarization",
      description: "Built a comprehensive tool that leverages Large Language Models to automatically extract, process, and summarize financial news articles. The system enables faster equity research analysis by providing concise, actionable insights from multiple news sources.",
      techStack: [
        { name: "LangChain", description: "Orchestrating LLM workflows and chains" },
        { name: "OpenAI GPT", description: "Text generation and summarization" },
        { name: "Streamlit", description: "Interactive web interface" },
        { name: "FAISS", description: "Vector storage for semantic search" }
      ],
      pipeline: [
        "Data Collection: Fetch financial news from multiple APIs",
        "Text Processing: Clean and chunk articles for LLM processing",
        "Embedding Generation: Create vector embeddings using OpenAI",
        "Semantic Search: Store in FAISS for efficient retrieval",
        "Summarization: Generate concise summaries using GPT",
        "User Interface: Display results in Streamlit dashboard"
      ],
      githubUrl: "https://github.com/saikiran-patirla/equity-research-ai-tool",
      liveUrl: "https://equity-research-ai-tool-by-sai-kiran.streamlit.app"
    },
    {
      title: "Dangerous Selfie Classification System",
      headline: "Deep learning model achieving 94% accuracy in classifying dangerous selfies",
      description: "Developed a computer vision system that identifies potentially dangerous selfie scenarios using a combination of deep learning and traditional ML techniques. The model helps raise awareness about selfie-related safety.",
      techStack: [
        { name: "CNN", description: "Feature extraction from images" },
        { name: "Random Forest", description: "Ensemble classification" },
        { name: "SVM", description: "Support Vector classification" },
        { name: "PCA", description: "Dimensionality reduction" }
      ],
      pipeline: [
        "Data Collection: Curated dataset of dangerous/safe selfie images",
        "Preprocessing: Image resizing, normalization, augmentation",
        "Feature Extraction: CNN for deep features, traditional features",
        "Dimensionality Reduction: PCA for feature optimization",
        "Model Training: Ensemble of Random Forest and SVM",
        "Evaluation: Cross-validation achieving 94% accuracy"
      ],
      githubUrl: "https://github.com/saikiran-patirla/dangerous-selfie-classifier",
      liveUrl: "https://dangerous-selfie.streamlit.app"
    },
    {
      title: "Portfolio Optimization Tool",
      headline: "Sharpe ratio optimization & risk-return simulations for investment strategies",
      description: "A quantitative finance tool that helps investors optimize their portfolio allocation using Modern Portfolio Theory. Implements Monte Carlo simulations to find the optimal risk-return balance.",
      techStack: [
        { name: "NumPy", description: "Numerical computations" },
        { name: "Pandas", description: "Data manipulation and analysis" },
        { name: "Matplotlib", description: "Visualization of efficient frontier" },
        { name: "yfinance", description: "Real-time stock data retrieval" }
      ],
      pipeline: [
        "Data Retrieval: Fetch historical stock prices via yfinance",
        "Return Calculation: Compute daily/annual returns",
        "Risk Analysis: Calculate volatility and covariance matrix",
        "Monte Carlo Simulation: Generate 10,000+ portfolio combinations",
        "Optimization: Identify maximum Sharpe ratio portfolio",
        "Visualization: Plot efficient frontier and optimal allocation"
      ],
      githubUrl: "https://github.com/saikiran-patirla/portfolio-optimization-tool",
      liveUrl: "https://portfolio-optimizer.streamlit.app"
    },
    {
      title: "COVID-19 Data Pipeline & Dashboard",
      headline: "Real-time ETL pipeline with interactive dashboard for policy decision-making",
      description: "Designed an automated ETL pipeline that processes public COVID-19 datasets and presents insights through an interactive dashboard. Built to support policy makers with real-time data visualization.",
      techStack: [
        { name: "Python ETL", description: "Automated data processing pipeline" },
        { name: "SQLite", description: "Lightweight data storage" },
        { name: "Plotly", description: "Interactive visualizations" },
        { name: "Streamlit", description: "Dashboard interface" }
      ],
      pipeline: [
        "Data Extraction: Automated fetch from public health APIs",
        "Data Transformation: Cleaning, aggregation, calculations",
        "Data Loading: Store processed data in SQLite",
        "Scheduling: Automated daily updates",
        "Visualization: Interactive charts with Plotly",
        "Deployment: Hosted dashboard on Streamlit Cloud"
      ],
      githubUrl: "https://github.com/saikiran-patirla/covid19-data-pipeline",
      liveUrl: "https://covid19-dashboard-sk.streamlit.app"
    }
  ],

  certifications: [
    { name: "Data Science Professional", issuer: "IBM" },
    { name: "Advanced Data Analytics", issuer: "Google" },
    { name: "Generative AI Fundamentals", issuer: "Databricks" },
    { name: "Agentforce Specialist", issuer: "Salesforce" }
  ],

  competencies: [
    {
      title: "Machine Learning & AI",
      items: [
        "Supervised Learning (Classification, Regression)",
        "Unsupervised Learning (Clustering, Dimensionality Reduction)",
        "Deep Learning (CNNs, Transformers, LLMs)",
        "NLP (Text Classification, NER, Summarization)"
      ]
    },
    {
      title: "Statistical Modeling",
      items: [
        "Probability & Hypothesis Testing",
        "Regression Analysis",
        "Clustering Algorithms",
        "Time-Series Forecasting"
      ]
    },
    {
      title: "End-to-End ML Pipelines",
      items: [
        "Data Collection & Cleaning",
        "Feature Engineering",
        "Model Training & Evaluation",
        "Deployment & Monitoring"
      ]
    },
    {
      title: "Applied AI",
      items: [
        "Generative AI & LLM Fine-tuning",
        "RAG (Retrieval Augmented Generation)",
        "AI Agents & Automation",
        "Vector Databases"
      ]
    }
  ]
};
