export type ProjectTheme = {
  mode: 'dark' | 'light';
  bg: string;
  text: string;
  textDim: string;
  accent: string;
  cardBg: string;
  border: string;
};

export type Project = { 
  id: string;
  title: string; 
  description: string; 
  tags: string[]; 
  tone: string; 
  metric: string; 
  link: string; 
  mainImage: string;
  secondaryImage: string;
  github: string;
  
  // Case Study Fields
  role: string;
  timeline: string;
  tools: string[];
  problemStatement: string;
  
  // Newly Added Fields
  evaluations: string[];
  useCases: string[];
  aiImages: string[];
  
  longDescription: string;
  features: { title: string; description: string }[];
  architecture: string;
  theme: ProjectTheme;
};

export const projects: Project[] = [
  { 
    id: "rag-pipeline",
    title: "Financial AI Analyst (RAG)", 
    description: "Enterprise-grade retrieval system utilizing dense vector indexing for high-accuracy financial QA.", 
    tags: ["RAG", "Vector DB", "LLMs"], 
    tone: "violet", 
    metric: "High Accuracy", 
    link: "https://financial-rag-pipeline-te58.onrender.com",
    mainImage: "/images/real_rag_pipeline.png",
    secondaryImage: "/images/rag_pipeline_secondary_1789861383016.jpg",
    github: "https://github.com/pactaccount/production-rag-pipeline",
    
    role: "AI Engineer & Full-stack Developer",
    timeline: "4 Weeks",
    tools: ["LlamaIndex", "Qdrant", "Cohere", "OpenAI", "Python"],
    problemStatement: "Traditional RAG systems fail on highly structured financial documents, resulting in hallucinations and inaccurate financial advice. The client needed a multimodal pipeline capable of parsing complex PDFs, extracting charts, and eliminating retrieval hallucinations to safely deploy an LLM in a financial environment.",
    
    evaluations: [
      "Automated Multi-Document Evaluation using LLM-as-a-judge.",
      "Mathematical scoring for Faithfulness to source documents.",
      "Answer Relevancy metrics computed across synthetic ground-truth datasets."
    ],
    useCases: [
      "Financial Analysis: Extracting revenue tables from 10-K filings.",
      "Legal Tech: Precision retrieval of clauses across thousands of contracts.",
      "Enterprise Search: Internal knowledge bases requiring zero hallucination."
    ],
    aiImages: [
      "/images/rag_concept_1_1789868279660.jpg",
      "/images/rag_concept_2_1789867995996.jpg"
    ],
    
    longDescription: "A high-performance, production-ready Retrieval-Augmented Generation (RAG) system engineered for complex financial and technical documents. Built with a modern, decoupled stack, this project transforms standard text-based RAG into a fully multimodal, highly precise intelligence engine.",
    features: [
      { title: "Multimodal Extraction", description: "Uses LlamaParse to parse tables semantically and extract charts as visual nodes, allowing you to ask the LLM to analyze the actual trends in a graph." },
      { title: "Sentence Window Chunking", description: "Breaks documents down sentence-by-sentence, embedding only the precise sentence for retrieval, but dynamically injecting a window of surrounding context into the LLM prompt." },
      { title: "Two-Stage Re-ranking", description: "Uses Qdrant for initial retrieval, followed by a Cohere Cross-Encoder to mathematically rescore the top candidates against the exact user query, eliminating hallucination." },
      { title: "BYOK Architecture", description: "Natively supports dynamic model routing, allowing users to securely plug in their own API keys to test the system with OpenAI, Anthropic, or Groq models." }
    ],
    architecture: "The architecture consists of three layers: Document Ingestion Layer (PDF parsing via LlamaParse), Indexing & Storage Layer (SentenceWindowNodeParser, Cohere embeddings, Qdrant Cloud), and Retrieval & Reranking Layer.",
    theme: { mode: 'dark', bg: '#0a1014', text: '#f4f2eb', textDim: '#acaea4', accent: '#8d75ff', cardBg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.08)' }
  },
  { 
    id: "sql-agent",
    title: "SQL Agent (SeaQL)", 
    description: "An autonomous agent capable of translating natural language into complex SQL queries to interact with databases.", 
    tags: ["Text-to-SQL", "Agentic AI", "LangChain"], 
    tone: "lime", 
    metric: "Autonomous", 
    link: "https://seaql.onrender.com",
    mainImage: "/images/real_seaql.png",
    secondaryImage: "/images/sql_agent_secondary_1789861396690.jpg",
    github: "https://github.com/pactaccount/SQLAgent",
    
    role: "AI Systems Architect",
    timeline: "3 Weeks",
    tools: ["LangGraph", "Google Gemini", "FastAPI", "PostgreSQL", "React"],
    problemStatement: "Non-technical teams struggle to access enterprise data due to complex SQL schemas. Traditional Text-to-SQL solutions are prone to destructive query execution and hallucinated table structures, posing a severe security risk. The goal was to build a secure, deterministic interface that anyone could query using plain English.",

    evaluations: [
      "Semantic Cache Hit Rate monitoring to ensure latency reduction.",
      "Execution Interception Rate for testing the Zero-Trust HITL security layer.",
      "Syntax Self-Healing Success Rate (measuring autonomous error recovery)."
    ],
    useCases: [
      "Business Intelligence: Allowing non-technical execs to query sales databases.",
      "Data Engineering: Rapid prototyping of complex JOINs and aggregations.",
      "Customer Support: Securely retrieving user data without writing manual SQL."
    ],
    aiImages: [
      "/images/sql_agent_ui_concept_1789875917016.jpg",
      "/images/sql_agent_ui_concept_2_1789875935870.jpg"
    ],

    longDescription: "An autonomous, self-healing Text-to-SQL agent built with Python, LangGraph, Google Gemini, Qdrant Cloud, and FastAPI. This project democratizes data access by allowing non-technical users to query complex databases using plain English. It is built with enterprise security and reliability in mind.",
    features: [
      { title: "Self-Healing LLM Loop", description: "If the AI generates syntactically incorrect SQL, the system catches the database error, feeds the stack trace back to the AI, and prompts it to fix its own mistake autonomously." },
      { title: "Zero-Trust Security (HITL)", description: "A deterministic security layer intercepts any destructive queries (e.g., DROP, DELETE, UPDATE) and requires manual Human-In-The-Loop approval before the query can touch the database." },
      { title: "Schema RAG via Qdrant", description: "Generates embeddings of the schema using sentence-transformers and retrieves only the relevant table structures for the current query, preventing hallucination." },
      { title: "Smart Semantic Caching", description: "Successful queries are stored in Qdrant's vector cache. If a new question is semantically identical, the system instantly returns the cached result, eliminating API latency." }
    ],
    architecture: "The system runs a LangGraph State Machine spanning a Semantic Cache Check, Schema Vector Search, SQL Generation, Safe Execution Validation, and Output Formatting, seamlessly connecting the Web Dashboard (Vanilla JS/CSS) to the FastAPI backend.",
    theme: { mode: 'dark', bg: '#0a1014', text: '#f4f2eb', textDim: '#acaea4', accent: '#c7ef68', cardBg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.08)' }
  },
  { 
    id: "medbot",
    title: "MedBot", 
    description: "Deterministic AI medical receptionist powered by agentic frameworks for clinical workflows.", 
    tags: ["LangGraph", "Healthcare", "Agents"], 
    tone: "orange", 
    metric: "Secure Workflows", 
    link: "https://medbot-backend-0895.onrender.com",
    mainImage: "/images/real_medbot.png",
    secondaryImage: "/images/medbot_secondary_1789861450748.jpg",
    github: "https://github.com/pactaccount/medbot",
    
    role: "Lead Agentic Engineer",
    timeline: "5 Weeks",
    tools: ["LangGraph", "Model Context Protocol", "MongoDB", "React", "Node.js"],
    problemStatement: "Clinic administrative staff are overwhelmed by repetitive patient inquiries, booking scheduling, and policy questions. The client required a highly secure, HIPAA-compliant multi-agent system that could autonomously triage workflows, reference clinic policies, and securely interact with patient record databases.",

    evaluations: [
      "Unit & Integration tests across all agent routing nodes.",
      "E2E Scenario Testing simulating patient multi-turn dialogues.",
      "LLM-as-a-judge quality evaluations for policy adherence.",
      "Concurrency Stress Testing for backend stability."
    ],
    useCases: [
      "Healthcare Administration: Autonomous appointment booking and rescheduling.",
      "Patient Triage: Identifying intent and escalating emergency situations.",
      "Policy Support: Instantly answering complex insurance and billing FAQs."
    ],
    aiImages: [
      "/images/medbot_concept_1_1789868237207.jpg",
      "/images/medbot_concept_2_1789868249510.jpg"
    ],

    longDescription: "MedBot is an intelligent, multi-agent autonomous medical receptionist designed to automate clinic administrative workflows, answer policy questions, and escalate medical emergencies. Built with LangGraph, Model Context Protocol (MCP), and a modern React frontend.",
    features: [
      { title: "Multi-Agent Orchestration", description: "Routes queries intelligently between specialized agents including Triage, Action, Policy, and Emergency agents using LangGraph." },
      { title: "Model Context Protocol (MCP)", description: "Standardized, secure tool execution layer connecting the LLM to MongoDB for patient records." },
      { title: "Persistent Session Memory", description: "Maintains contextual awareness across multi-turn conversations, allowing users to provide booking details naturally over time." },
      { title: "Live Activity Feed", description: "Provides real-time visual tracing of the LLM's thought process and tool executions within the user interface." }
    ],
    architecture: "A React/Vite UI connects to a FastAPI Backend, which orchestrates a LangGraph structure. The Triage Agent routes to Action, Policy, or Emergency agents, and the Action Agent interacts with a MongoDB database via an MCP Server.",
    theme: { mode: 'dark', bg: '#0a1014', text: '#f4f2eb', textDim: '#acaea4', accent: '#ff875c', cardBg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.08)' }
  },
];
