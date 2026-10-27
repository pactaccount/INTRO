export type ProjectTheme = {
  mode: 'dark' | 'light';
  bg: string;
  text: string;
  textDim: string;
  accent: string;
  cardBg: string;
  border: string;
};

export type ProductStep = {
  step: string;
  title: string;
  description: string;
};

export type ProductFeature = {
  title: string;
  description: string;
  tag?: string;
};

export type ProductUseCase = {
  title: string;
  description: string;
  targetRole?: string;
};

export type ProductGuarantee = {
  title: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  tone: string;
  metric: string;
  highlightStats: { label: string; value: string }[];
  tools: string[];
  link?: string;
  mainImage: string;
  secondaryImage: string;
  mobileImage?: string;
  imageKind?: 'screenshot' | 'illustration';
  github: string;
  howItWorks: ProductStep[];
  features: ProductFeature[];
  useCases: ProductUseCase[];
  enterpriseGuarantees: ProductGuarantee[];
  aiImages: string[];
  longDescription: string;
  theme: ProjectTheme;
};

export const projects: Project[] = [
  {
    id: 'seaql',
    title: 'SeaQL — Autonomous SQL Analytics',
    category: 'Enterprise Data Copilot',
    tagline: 'Conversational analytics connecting business inquiries directly to live databases with self-healing recovery and zero-trust safety.',
    description: 'Conversational SQL copilot that connects business questions directly to relational databases with self-healing query retries and cryptographic safety gates.',
    tags: ['Conversational Analytics', 'Autonomous Agents', 'LangGraph', 'sqlglot'],
    tone: 'orange',
    metric: '73.1% query accuracy · 1.22s median latency',
    highlightStats: [
      { label: 'Median Response Latency', value: '1.22s' },
      { label: 'Instant Query Accuracy', value: '73.1%' },
      { label: 'Destructive Query Protection', value: '100%' }
    ],
    tools: ['Python', 'LangGraph', 'FastAPI', 'sqlglot', 'Qdrant', 'SQLite', 'Docker'],
    link: 'https://seaql.onrender.com/',
    mainImage: '/images/real_seaql.png',
    secondaryImage: '/images/seaql_mobile_preview.png',
    mobileImage: '/images/mobile_seaql.png',
    imageKind: 'screenshot',
    github: 'https://github.com/pactaccount/SQLAgent#readme',
    howItWorks: [
      {
        step: '01',
        title: 'Connect Live Data Sources',
        description: 'Securely link existing PostgreSQL, Snowflake, or SQLite databases with zero data movement and read-only credentials.'
      },
      {
        step: '02',
        title: 'Ask in Conversational English',
        description: 'Non-technical stakeholders type inquiries naturally. SeaQL maps concepts to relevant tables without manual schema modeling.'
      },
      {
        step: '03',
        title: 'Inspect, Verify & Act',
        description: 'Review verified tabular results, instant visual trend lines, and export-ready metrics with complete query transparency.'
      }
    ],
    features: [
      {
        title: 'Plain-English Business Intelligence',
        description: 'Eliminates SQL bottlenecks for operations and leadership teams, returning accurate data without requiring data engineering tickets.'
      },
      {
        title: 'Self-Healing Query Optimization',
        description: 'Intercepts schema mismatches and dialect quirks in real time, iteratively refining queries before presenting results to the user.'
      },
      {
        title: 'Zero-Trust Mutation Protection',
        description: 'Prevents accidental data modifications by isolating destructive operations behind short-lived, authenticated approval tokens.'
      },
      {
        title: 'Multi-Dialect Compatibility',
        description: 'Abstract Syntax Tree validation guarantees seamless query translation across PostgreSQL, SQLite, and enterprise data warehouses.'
      }
    ],
    useCases: [
      {
        title: 'Executive KPI & Revenue Dashboards',
        description: 'Empowers leadership to query quarterly revenue, margins, and customer cohort growth during live planning meetings.',
        targetRole: 'Leadership & Strategy'
      },
      {
        title: 'Operations & Supply Chain Auditing',
        description: 'Enables warehouse managers to spot stock anomalies and fulfillment bottlenecks across multi-table catalogs.',
        targetRole: 'Operations Teams'
      },
      {
        title: 'Customer Support Escalation Triage',
        description: 'Allows frontline support to look up order histories and subscription logs instantly without engineering assistance.',
        targetRole: 'Customer Support'
      }
    ],
    enterpriseGuarantees: [
      {
        title: 'Read-Only Sandboxing',
        description: 'Enforces strict read-only execution by default, completely neutralizing accidental table drops or unauthorized updates.'
      },
      {
        title: 'Sub-Second AST Parsing',
        description: 'High-speed syntax validation delivers instantaneous query verification even across complex enterprise schemas.'
      },
      {
        title: 'Complete Audit Traceability',
        description: 'Every natural language inquiry, generated SQL statement, and execution metric is immutably logged for governance.'
      }
    ],
    aiImages: ['/images/seaql_live_working_1.png', '/images/seaql_live_working_2.png'],
    longDescription: 'SeaQL is a production-ready conversational analytics product engineered with LangGraph, FastAPI, and sqlglot. It translates plain-language business inquiries into high-performance SQL queries over complex relational schemas. With zero-trust mutation guards and an autonomous error-correction loop, data teams can safely empower non-technical stakeholders to explore metrics without risking database corruption.',
    theme: { mode: 'dark', bg: '#0f0a06', text: '#fff7ed', textDim: '#fed7aa', accent: '#ff7b25', cardBg: 'rgba(255,123,37,0.05)', border: 'rgba(255,123,37,0.2)' }
  },
  {
    id: 'medbot',
    title: 'MedBot — Clinical Intake & Reception',
    category: 'Healthcare Automation Platform',
    tagline: 'Automate patient appointment scheduling, clinic policies, and triage with deterministic clinical safety guardrails.',
    description: 'Intelligent healthcare reception orchestrator automating patient intake, doctor scheduling, policy guidance, and zero-latency emergency triage.',
    tags: ['Healthcare AI', 'Clinical Workflow', 'MCP Agents', 'FastAPI'],
    tone: 'teal',
    metric: '97.5% intent routing · 100% booking completion',
    highlightStats: [
      { label: 'Intent Classification Accuracy', value: '97.5%' },
      { label: 'Appointment Booking Completion', value: '100%' },
      { label: 'Emergency Triage Escalation', value: '<50ms' }
    ],
    tools: ['Python', 'LangGraph', 'MCP', 'FastAPI', 'MongoDB', 'React', 'Docker'],
    link: 'https://medbot-backend-0895.onrender.com/',
    mainImage: '/images/real_medbot.png',
    secondaryImage: '/images/medbot_mobile_preview.png',
    mobileImage: '/images/mobile_medbot.png',
    imageKind: 'screenshot',
    github: 'https://github.com/pactaccount/medbot#readme',
    howItWorks: [
      {
        step: '01',
        title: '24/7 Patient Access',
        description: 'Patients interact through clinic web portals, SMS, or mobile messaging at any hour without waiting on phone queues.'
      },
      {
        step: '02',
        title: 'Intelligent Workflow Triage',
        description: 'MedBot routes requests into specialized pathways for appointment scheduling, clinic policy clarification, or symptom screening.'
      },
      {
        step: '03',
        title: 'Instant EHR Booking',
        description: 'Slots are reserved directly into practice calendars with automated SMS confirmation, while emergency cases escalate to critical care.'
      }
    ],
    features: [
      {
        title: 'Autonomous Multi-Turn Scheduling',
        description: 'Handles complete appointment booking, rescheduling, and cancellation flows directly against live practitioner calendars.'
      },
      {
        title: 'Instant Clinic Policy Guidance',
        description: 'Provides authoritative answers to patient questions on insurance coverage, procedure preparation, and clinic guidelines.'
      },
      {
        title: 'Deterministic Clinical Safety',
        description: 'Hard-coded clinical boundaries intercept diagnostic questions, preventing medical hallucinations and prioritizing patient safety.'
      },
      {
        title: 'Zero-Latency Emergency Escalation',
        description: 'Instantly identifies acute medical symptoms and immediately routes patients to emergency services or live on-call physicians.'
      }
    ],
    useCases: [
      {
        title: 'Outpatient Clinic Reception',
        description: 'Reduces front-desk phone volume by up to 60% while expanding booking availability to evenings and weekends.',
        targetRole: 'Clinic Administrators'
      },
      {
        title: 'Specialty Practice Intake & Preparation',
        description: 'Ensures patients receive pre-procedure fasting and medication guidelines before arrival, minimizing missed appointments.',
        targetRole: 'Clinical Staff'
      },
      {
        title: 'Urgent Care Triage & Screening',
        description: 'Provides rapid intake guidance for walking clinics, sorting routine inquiries from immediate care needs.',
        targetRole: 'Triage Nurses'
      }
    ],
    enterpriseGuarantees: [
      {
        title: 'HIPAA-Ready Architecture',
        description: 'Strict data segregation and end-to-end encryption ensure protected health information (PHI) remains fully safeguarded.'
      },
      {
        title: 'Zero Diagnosis Guarantee',
        description: 'Strict boundary guardrails prevent the conversational agent from offering unauthorized medical advice or prescriptions.'
      },
      {
        title: 'Practice Management Interoperability',
        description: 'Communicates via standardized Model Context Protocol (MCP) tool integrations for calendar and EHR coordination.'
      }
    ],
    aiImages: ['/images/medbot_live_working_1.png', '/images/medbot_live_working_2.png'],
    longDescription: 'MedBot is a specialized clinical workflow and reception product designed to reduce administrative overhead in healthcare practices. Operating on the Model Context Protocol (MCP) and LangGraph, MedBot handles autonomous scheduling against live practitioner calendars while enforcing hard clinical boundaries that block diagnostic claims and escalate medical emergencies instantly.',
    theme: { mode: 'dark', bg: '#041716', text: '#f0fdfa', textDim: '#99f6e4', accent: '#14b8a6', cardBg: 'rgba(20,184,166,0.05)', border: 'rgba(20,184,166,0.2)' }
  },
  {
    id: 'citecanvas',
    title: 'CiteCanvas — Document Intelligence Workspace',
    category: 'Multimodal Document Workspace',
    tagline: 'Browser-scoped document intelligence platform providing instant visual citations and coordinate bounding boxes for every answer.',
    description: 'Browser-scoped multimodal PDF workspace for instant source-cited analysis, comparative review, and table extraction with exact coordinate bounding boxes.',
    tags: ['Multimodal RAG', 'Document AI', 'Qdrant', 'Cloudflare R2'],
    tone: 'cyan',
    metric: '0.073s preview latency · 91.6% rendering efficiency',
    highlightStats: [
      { label: 'Fast Preview Latency', value: '73ms' },
      { label: 'Coordinate Citation Accuracy', value: '100%' },
      { label: 'Lossless Audit Resolution', value: '300 DPI' }
    ],
    tools: ['Python', 'FastAPI', 'Qdrant', 'NVIDIA VLMs', 'Cloudflare R2', 'PostgreSQL', 'Docker'],
    link: 'https://citecanvas.onrender.com',
    mainImage: '/images/real_citecanvas.png',
    secondaryImage: '/images/citecanvas_mobile_preview.png',
    mobileImage: '/images/mobile_citecanvas.png',
    imageKind: 'screenshot',
    github: 'https://github.com/pactaccount/CiteCanvas#readme',
    howItWorks: [
      {
        step: '01',
        title: 'Drop In Complex Documents',
        description: 'Upload SEC 10-K filings, annual reports, multi-column scientific journals, and dense legal agreements.'
      },
      {
        step: '02',
        title: 'Explore on an Interactive Canvas',
        description: 'Browse with sub-second 180-DPI preview speed while vision-language models extract layout-aware content.'
      },
      {
        step: '03',
        title: 'Audit with Visual Proof',
        description: 'Every answer highlights exact bounding box coordinates directly on the document page, providing 100% visual proof.'
      }
    ],
    features: [
      {
        title: 'Pixel-Accurate Visual Citations',
        description: 'Substantiates every synthesized answer with exact bounding box overlays on source document pages, eliminating hallucinations.'
      },
      {
        title: 'Dual-Tier Rendering Engine',
        description: 'Delivers instantaneous 73ms 180-DPI preview responsiveness while hydrating lossless 300-DPI rasterization on demand for audits.'
      },
      {
        title: 'Multi-Page Table Extraction',
        description: 'Extracts intricate tabular records, financial balance sheets, and footnote data into structured spreadsheets ready for analysis.'
      },
      {
        title: 'Zero-Friction Private Workspaces',
        description: 'HttpOnly browser-scoped session architecture ensures absolute document privacy without requiring sign-up barriers.'
      }
    ],
    useCases: [
      {
        title: 'M&A and Financial Due Diligence',
        description: 'Review hundreds of pages of financial filings to verify covenant clauses, EBITDA adjustments, and debt terms in minutes.',
        targetRole: 'Investment Analysts'
      },
      {
        title: 'Contract & Compliance Verification',
        description: 'Cross-examine vendor agreements, indemnification limits, and termination clauses with click-through visual page proof.',
        targetRole: 'Legal & Risk Teams'
      },
      {
        title: 'Engineering & Scientific Research',
        description: 'Interrogate complex technical specifications and multi-column research papers without losing structural diagram context.',
        targetRole: 'Research Engineers'
      }
    ],
    enterpriseGuarantees: [
      {
        title: 'Zero Hallucination Proof',
        description: 'Every factual assertion requires verifiable coordinate anchoring on the source document before presentation.'
      },
      {
        title: 'Durable Enterprise Storage',
        description: 'Encrypted object storage via Cloudflare R2 with Neon PostgreSQL indexing ensures zero data loss and fast retrieval.'
      },
      {
        title: 'High-Concurrency Vector Indexing',
        description: 'Qdrant vector retrieval enables lightning-fast hybrid semantic and keyword search across massive document catalogs.'
      }
    ],
    aiImages: ['/images/citecanvas_live_working_1.png', '/images/citecanvas_live_working_2.png'],
    longDescription: 'CiteCanvas is a production multimodal document intelligence workspace engineered with NVIDIA Vision-Language APIs, Cloudflare R2 durable storage, Neon PostgreSQL, and Qdrant vector retrieval. It delivers immediate 180-DPI preview responsiveness while preserving on-demand 300-DPI high-resolution evidence rendering, providing complete visual proof for every generated answer.',
    theme: { mode: 'dark', bg: '#060f14', text: '#f1f5f9', textDim: '#94a3b8', accent: '#38bdf8', cardBg: 'rgba(56,189,248,0.04)', border: 'rgba(56,189,248,0.12)' }
  },
  {
    id: 'momentflow',
    title: 'MomentFlow — Multimodal Video Search',
    category: 'Enterprise Media Intelligence',
    tagline: 'AI search engine for video libraries, combining visual actions, spoken dialogue, and on-screen text to jump to exact moments.',
    description: 'AI search engine for video libraries, combining frame visual features, audio speech, and on-screen text to jump immediately to exact moments.',
    tags: ['Video Discovery', 'Multimodal Search', 'SigLIP 2', 'FastAPI'],
    tone: 'violet',
    metric: '90.0% Recall@1 · 95.0% Recall@5 (MSR-VTT)',
    highlightStats: [
      { label: 'Recall@1 Accuracy Benchmark', value: '90.0%' },
      { label: 'Warm Query Search Latency', value: '59ms' },
      { label: 'Frame Timestamp Precision', value: '100%' }
    ],
    tools: ['Python', 'SigLIP 2', 'faster-whisper', 'Tesseract', 'SQLite FTS5', 'FastAPI'],
    link: 'https://momentflow.onrender.com/',
    mainImage: '/images/real_momentflow.png',
    secondaryImage: '/images/momentflow_mobile_preview.png',
    mobileImage: '/images/mobile_momentflow.png',
    imageKind: 'screenshot',
    github: 'https://github.com/pactaccount/MomentFlow#readme',
    howItWorks: [
      {
        step: '01',
        title: 'Upload Long-Form Video',
        description: 'Drop in webinars, customer recordings, conference presentations, or training footage of any length.'
      },
      {
        step: '02',
        title: 'Tri-Modal Semantic Indexing',
        description: 'MomentFlow simultaneously indexes visual frames, transcribes audio speech, and extracts on-screen presentation text.'
      },
      {
        step: '03',
        title: 'Search & Jump to Milliseconds',
        description: 'Query in natural language and click search results to stream directly from the exact matching timestamp.'
      }
    ],
    features: [
      {
        title: 'Tri-Modal Search Fusion',
        description: 'Combines SigLIP 2 visual features, faster-whisper speech transcription, and OCR text into a unified sub-second search index.'
      },
      {
        title: 'Autonomous Semantic Chaptering',
        description: 'Automatically clusters continuous video streams into titled 5-second semantic chapters with visual keyframe summaries.'
      },
      {
        title: 'On-Screen Typography Extraction',
        description: 'Locates critical terms displayed on PowerPoint slides, code editors, and software screens that were never spoken aloud.'
      },
      {
        title: 'Interactive Timeline Navigation',
        description: 'Enables instant in-browser video scrubbing with highlighted search match pins across the entire video duration.'
      }
    ],
    useCases: [
      {
        title: 'Enterprise Knowledge Discovery',
        description: 'Search across hundreds of hours of recorded product demos, all-hands calls, and onboarding webinars in seconds.',
        targetRole: 'Knowledge Managers'
      },
      {
        title: 'Media & Creative Asset Management',
        description: 'Locate uncaptioned B-roll clips, speaker soundbites, and visual actions across massive video archives.',
        targetRole: 'Video Producers'
      },
      {
        title: 'Customer Training & Onboarding',
        description: 'Direct customers to the exact 15-second solution inside long product walkthrough recordings.',
        targetRole: 'Customer Success'
      }
    ],
    enterpriseGuarantees: [
      {
        title: 'Sub-60ms Warm Lookups',
        description: 'SQLite FTS5 keyword indexing coupled with dense vector retrieval delivers instant results across large video collections.'
      },
      {
        title: 'Broad Codec Compatibility',
        description: 'Native handling of MP4, WebM, MOV, and standard video streaming formats with automatic adaptive frame sampling.'
      },
      {
        title: 'Private Cloud Deployment',
        description: 'Hostable entirely within private VPCs or on-premises to safeguard proprietary internal video recordings.'
      }
    ],
    aiImages: ['/images/momentflow_live_working_1.png', '/images/momentflow_live_working_2.png'],
    longDescription: 'MomentFlow is an asynchronous multimodal video discovery engine fusing SigLIP 2 ZeroGPU embeddings, faster-whisper speech transcription, and Tesseract OCR into a unified SQLite FTS5 search index. It indexes visual frames and audio simultaneously to jump directly to exact timestamps.',
    theme: { mode: 'dark', bg: '#0a1014', text: '#f4f2eb', textDim: '#acaea4', accent: '#8d75ff', cardBg: 'rgba(141,117,255,0.04)', border: 'rgba(141,117,255,0.12)' }
  },
  {
    id: 'argus',
    title: 'Argus — Visual Anomaly Detection',
    category: 'Industrial Edge Vision',
    tagline: 'Autonomous manufacturing defect detection system trained exclusively on normal parts to pinpoint microscopic surface flaws in real time.',
    description: 'Industrial computer vision system trained strictly on known-good parts to detect, score, and pinpoint microscopic manufacturing defects on edge devices.',
    tags: ['Industrial AI', 'Edge Vision', 'PatchCore', 'PyTorch'],
    tone: 'lime',
    metric: '0.9922 image AUROC · 95.7% defect accuracy',
    highlightStats: [
      { label: 'Defect Detection AUROC', value: '0.9922' },
      { label: 'Defect Identification Accuracy', value: '95.7%' },
      { label: 'Edge Decision Latency', value: '<15ms' }
    ],
    tools: ['Python', 'PyTorch', 'ResNet-18', 'OpenCV', 'PatchCore', 'FastAPI', 'Docker'],
    mainImage: '/images/argus-overview.svg',
    secondaryImage: '/images/argus-overview.svg',
    imageKind: 'illustration',
    github: 'https://github.com/pactaccount/Industrial-Anomaly-Detection#readme',
    howItWorks: [
      {
        step: '01',
        title: 'Golden Baseline Ingestion',
        description: 'Train the model with 20–50 photos of known-good parts, eliminating the cost and delay of gathering rare defective samples.'
      },
      {
        step: '02',
        title: 'Real-Time Edge Inspection',
        description: 'Factory cameras capture parts moving on high-speed conveyors and execute sub-15ms nearest-neighbor defect scoring.'
      },
      {
        step: '03',
        title: 'Instant Heatmaps & Rejection',
        description: 'Flags anomalies with pixel-accurate defect heatmaps, triggering automatic sorting gates before defective parts advance.'
      }
    ],
    features: [
      {
        title: 'Normal-Only Unsupervised Learning',
        description: 'Models standard part variance directly, completely bypassing the need to source or label thousands of defective samples.'
      },
      {
        title: 'Pixel-Level Defect Localization',
        description: 'Generates aligned spatial heatmaps and bounding contours showing operators the precise coordinates and severity of flaws.'
      },
      {
        title: 'Lightweight Edge Optimization',
        description: 'Greedy coreset subsampling compresses memory requirements by orders of magnitude, running on local factory hardware.'
      },
      {
        title: 'Calibrated Rejection Thresholds',
        description: 'Fine-tune anomaly thresholds to match specific manufacturing tolerances, from high-precision aerospace to high-speed packaging.'
      }
    ],
    useCases: [
      {
        title: 'Electronics & PCB Quality Control',
        description: 'Detect micro-scratches, soldering bridges, and component misalignments on high-density circuit boards.',
        targetRole: 'Quality Assurance'
      },
      {
        title: 'Automotive Precision Machining',
        description: 'Catch hairline fractures, casting porosity, and surface blemishes on machined metal engine components.',
        targetRole: 'Manufacturing Plant Leads'
      },
      {
        title: 'Pharmaceutical Packaging Inspection',
        description: 'Inspect blister pack seals, pill integrity, and container closures at line speeds over 60 parts per minute.',
        targetRole: 'Production Line Engineers'
      }
    ],
    enterpriseGuarantees: [
      {
        title: 'Air-Gapped Factory Reliability',
        description: 'Runs 100% locally on factory edge devices with zero cloud reliance, guaranteeing zero downtime from connectivity interruptions.'
      },
      {
        title: 'Inline 60+ FPS Throughput',
        description: 'Sub-15ms inference latency comfortably supports high-speed industrial assembly and packaging lines.'
      },
      {
        title: 'Traceable Quality Audits',
        description: 'Saves timestamped defect heatmaps and confidence scores for supplier accountability and regulatory compliance.'
      }
    ],
    aiImages: [],
    longDescription: 'Argus is an unsupervised visual inspection edge product built with PyTorch and ResNet-18 PatchCore. It constructs a memory bank of known-good parts and selects a compact greedy coreset to deliver real-time anomaly detection with pixel-level defect localization, eliminating the need to collect thousands of rare defective training parts.',
    theme: { mode: 'dark', bg: '#080d08', text: '#f4f2eb', textDim: '#9b9e94', accent: '#c7ef68', cardBg: 'rgba(199,239,104,0.04)', border: 'rgba(199,239,104,0.12)' }
  },
  {
    id: 'video-segmentation',
    title: 'Video Perception & VLM Engine',
    category: 'Automated Video Intelligence',
    tagline: 'Scene boundary detection and keyframe intelligence platform transforming raw long-form footage into structured semantic chapters.',
    description: 'Automated scene boundary detection and keyframe intelligence pipeline that segments long-form video and generates semantic chapter manifests.',
    tags: ['Video Processing', 'Keyframe Extraction', 'Moondream2 VLM', 'FastAPI'],
    tone: 'cyan',
    metric: 'Precision 1.00 · Recall 1.00 · 3.3 FPS',
    highlightStats: [
      { label: 'Transition Precision & Recall', value: '1.00' },
      { label: 'VLM Keyframe Captioning', value: '0.80s' },
      { label: 'Continuous CPU Processing', value: '3.3 FPS' }
    ],
    tools: ['Python', 'OpenCV', 'Moondream2', 'FastAPI', 'Streamlit', 'Docker'],
    mainImage: '/images/video-segmentation-overview.svg',
    secondaryImage: '/images/video-segmentation-overview.svg',
    imageKind: 'illustration',
    github: 'https://github.com/pactaccount/Video-Segmentation#readme',
    howItWorks: [
      {
        step: '01',
        title: 'Stream Video Footage',
        description: 'Ingest raw video files, camera streams, lecture recordings, or broadcast footage into the processing engine.'
      },
      {
        step: '02',
        title: 'Dual-Signal Cut Detection',
        description: 'Analyzes structural similarity (SSIM) and HSV color distribution deltas to identify clean scene cuts without false alarms.'
      },
      {
        step: '03',
        title: 'Generate Semantic Chapters',
        description: 'Moondream2 vision-language models inspect representative keyframes and export structured chapter manifests with titles.'
      }
    ],
    features: [
      {
        title: 'Dual-Signal Boundary Detection',
        description: 'Combines structural similarity and color distribution deltas to identify hard cuts and gradual transitions with zero false positives.'
      },
      {
        title: 'Autonomous Keyframe Captioning',
        description: 'Runs lightweight vision-language models to generate natural language titles and descriptive summaries for each visual chapter.'
      },
      {
        title: 'Interactive Operational Console',
        description: 'Web dashboard for video upload, cut-threshold adjustment, visual timeline scrubbing, and keyframe inspection.'
      },
      {
        title: 'Standardized Manifest Export',
        description: 'Exports timecodes, titles, and keyframe image assets in clean JSON manifests ready for web players and content management systems.'
      }
    ],
    useCases: [
      {
        title: 'Automated Lecture & Course Chaptering',
        description: 'Partition 2-hour university lectures and technical presentations into structured, titled learning modules.',
        targetRole: 'EdTech & Course Platforms'
      },
      {
        title: 'Media Asset Post-Production',
        description: 'Accelerate video editing workflows by auto-tagging scene changes and b-roll sequences across raw footage.',
        targetRole: 'Video Editors'
      },
      {
        title: 'Webinar & Event Repurposing',
        description: 'Convert full-day virtual conference streams into chaptered highlight clips ready for social distribution.',
        targetRole: 'Marketing Teams'
      }
    ],
    enterpriseGuarantees: [
      {
        title: 'Hardware-Agnostic CPU Execution',
        description: 'Engineered for smooth multi-threaded CPU throughput, eliminating expensive dedicated GPU hosting costs.'
      },
      {
        title: 'Standard Timecode Compliance',
        description: 'Outputs precise timecodes fully compatible with professional video editors and web video players.'
      },
      {
        title: 'Deterministic Cut Accuracy',
        description: 'Verified 1.00 precision and recall under standard scene transition benchmarks prevents missed cuts.'
      }
    ],
    aiImages: [],
    longDescription: 'A hybrid video segmentation and VLM chaptering pipeline combining OpenCV grayscale SSIM and HSV color histogram analysis for fast cut detection with Moondream2 VLM for semantic keyframe captioning. Built with FastAPI and a Streamlit analytics dashboard.',
    theme: { mode: 'dark', bg: '#081116', text: '#f1f5f9', textDim: '#94a3b8', accent: '#14b8a6', cardBg: 'rgba(20,184,166,0.04)', border: 'rgba(20,184,166,0.12)' }
  },
  {
    id: 'face-recognition',
    title: 'EventFace — Private Biometric Intake',
    category: 'Privacy-First Biometric Security',
    tagline: 'On-premises biometric check-in solution delivering instant sub-50ms facial verification with zero cloud transmission.',
    description: 'Private, on-premises biometric check-in solution computing 128-dimensional facial embeddings locally with zero cloud transmission.',
    tags: ['Biometric Security', 'Privacy-First AI', 'dlib', 'Flask'],
    tone: 'orange',
    metric: 'd = 0.0000 match · 100% on-device',
    highlightStats: [
      { label: 'Verification Distance Match', value: '0.0000' },
      { label: 'Local Feature Extraction', value: '<20ms' },
      { label: 'Cloud Data Transmission', value: '0%' }
    ],
    tools: ['Python', 'dlib', 'OpenCV', 'Flask', 'SQLite'],
    mainImage: '/images/face-recognition-overview.svg',
    secondaryImage: '/images/face-recognition-overview.svg',
    imageKind: 'illustration',
    github: 'https://github.com/pactaccount/face-recognition#readme',
    howItWorks: [
      {
        step: '01',
        title: 'One-Tap Attendee Registration',
        description: 'Capture a consented reference photo. The local engine converts the face into a 128-dimensional mathematical vector.'
      },
      {
        step: '02',
        title: 'Instant Walk-Through Matching',
        description: 'Live venue cameras detect faces and compute Euclidean vector distances against the local database in under 20ms.'
      },
      {
        step: '03',
        title: 'Hands-Free Entry & Audit',
        description: 'Access is granted immediately without physical tickets or badge lines, with an immutable timestamped audit log.'
      }
    ],
    features: [
      {
        title: '100% On-Device Neural Embeddings',
        description: 'Extracts 128-dimensional deep metric embeddings strictly on local hardware, keeping biometric identities private.'
      },
      {
        title: 'Calibrated Verification Thresholds',
        description: 'Enforces a strict 0.55 Euclidean distance safety threshold with automatic fallback to prevent unauthorized access.'
      },
      {
        title: 'Zero-Photo Storage Architecture',
        description: 'Original reference photographs are permanently discarded after vector extraction, ensuring GDPR and CCPA compliance.'
      },
      {
        title: 'Self-Contained Local Web Portal',
        description: 'Includes a local Flask management dashboard for attendee registration, live camera verification, and attendee management.'
      }
    ],
    useCases: [
      {
        title: 'High-Throughput Conference Check-In',
        description: 'Verify thousands of attendees smoothly without paper tickets, badges, or reception bottlenecks.',
        targetRole: 'Event Operations'
      },
      {
        title: 'Secure Facility Access Control',
        description: 'Provide hands-free walk-through entry for authorized employees into server rooms and corporate offices.',
        targetRole: 'Physical Security Leads'
      },
      {
        title: 'VIP Hospitality & Guest Recognition',
        description: 'Instantly alert venue hosts when registered VIP guests enter, enabling personalized guest service.',
        targetRole: 'Hospitality Staff'
      }
    ],
    enterpriseGuarantees: [
      {
        title: 'Air-Gapped Data Privacy',
        description: 'Operates completely isolated from external networks, guaranteeing biometric data never leaves your venue.'
      },
      {
        title: 'Irreversible Biometric Hashes',
        description: 'Mathematical vector representations cannot be reverse-engineered back into original photographic faces.'
      },
      {
        title: 'Transactional Check-In Logs',
        description: 'ACID SQLite logging records timestamps and entry status for real-time venue headcount and safety compliance.'
      }
    ],
    aiImages: [],
    longDescription: 'EventFace is an enterprise-grade local face-matching pipeline for consented event check-in. It computes 128-dimensional dlib deep metric embeddings and applies Euclidean distance matching against a local SQLite database, ensuring complete biometric privacy.',
    theme: { mode: 'dark', bg: '#100e0b', text: '#f4f2eb', textDim: '#a1a1aa', accent: '#f59e0b', cardBg: 'rgba(245,158,11,0.04)', border: 'rgba(245,158,11,0.12)' }
  }
];
