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
  tools: string[];
  link?: string;
  mainImage: string;
  secondaryImage: string;
  imageKind?: 'screenshot' | 'illustration';
  github: string;
  evidenceUrl?: string;
  evaluations: string[];
  datasets: string[];
  useCases: string[];
  aiImages: string[];
  longDescription: string;
  features: { title: string; description: string }[];
  architecture: string;
  architectureStages: { label: string; detail: string }[];
  theme: ProjectTheme;
};

export const projects: Project[] = [
  {
    id: 'momentflow',
    title: 'MomentFlow',
    description: 'Search videos by visual events, speech, and on-screen text, then jump to the matching timestamp.',
    tags: ['Multimodal Search', 'SigLIP 2', 'FastAPI'],
    tone: 'violet',
    metric: '18/20 held-out queries · fixed 50-video set',
    tools: ['Python', 'SigLIP 2', 'faster-whisper', 'Tesseract', 'SQLite', 'FastAPI'],
    mainImage: '/images/momentflow-overview.svg',
    secondaryImage: '/images/momentflow-overview.svg',
    imageKind: 'illustration',
    github: 'https://github.com/pactaccount/MomentFlow',
    evidenceUrl: 'https://github.com/pactaccount/MomentFlow/blob/main/Prototype/EVALUATION.md',
    evaluations: [
      'Held-out Recall@1: 18/20 queries on a fixed 50-video MSR-VTT subset; first-frame baseline: 14/20.',
      'Action-segment Recall@1: 2/16 on a separate four-video sports set, exposing weak fine-grained temporal localization.',
      'Local CPU timings: 34 seconds to index 797 frames; 59 ms median warm product search. Hosted latency remains unmeasured.'
    ],
    datasets: ['50-video public MSR-VTT subset; 20 held-out queries', 'Four public sports clips; 16 action segments', 'Synthetic speech and OCR smoke clips'],
    useCases: [
      'Media review: Find a spoken phrase or scene in an uploaded recording.',
      'Knowledge work: Search screen text and open the relevant moment.',
      'Evaluation: Compare retrieval and timestamp quality on fixed labeled clips.'
    ],
    aiImages: [],
    longDescription: 'A public demo combining SigLIP 2 frame embeddings, faster-whisper transcription, Tesseract OCR, SQLite FTS5, and timestamped playback. The visual model is zero-shot; it was not fine-tuned. The small held-out benchmark supports a retrieval result, while the action benchmark documents a clear failure mode.',
    features: [
      { title: 'Three search signals', description: 'Indexes sampled frames, transcripts, and screen text for separate visual, speech, and OCR retrieval.' },
      { title: 'Product workflow', description: 'Upload, background indexing, processing status, video library, search, and timestamped playback.' },
      { title: 'Reproducible evaluation', description: 'Keeps query-level ranks and a manifest-based evaluation script in the repository.' }
    ],
    architecture: 'FastAPI orchestrates video ingestion and search. A private ZeroGPU Space serves the pinned SigLIP 2 checkpoint; speech and OCR run alongside a SQLite-backed product index.',
    architectureStages: [
      { label: 'Ingest', detail: 'Video upload and frame sampling' },
      { label: 'Extract', detail: 'SigLIP 2 + speech + OCR' },
      { label: 'Index', detail: 'SQLite and FTS5' },
      { label: 'Retrieve', detail: 'Rank and group moments' },
      { label: 'Play', detail: 'Open matching timestamp' }
    ],
    theme: { mode: 'dark', bg: '#0a1014', text: '#f4f2eb', textDim: '#acaea4', accent: '#8d75ff', cardBg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.08)' }
  },
  {
    id: 'argus',
    title: 'Argus Visual Inspection',
    description: 'Train from known-good parts, localize defects, and choose a threshold against false rejects.',
    tags: ['Computer Vision', 'PatchCore', 'MLOps'],
    tone: 'lime',
    metric: '0.9805 image AUROC · MVTec AD',
    tools: ['Python', 'PyTorch', 'PatchCore', 'FastAPI', 'React', 'Docker'],
    mainImage: '/images/argus-overview.svg',
    secondaryImage: '/images/argus-overview.svg',
    imageKind: 'illustration',
    github: 'https://github.com/pactaccount/Industrial-Anomaly-Detection/tree/feature/product-rebuild',
    evidenceUrl: 'https://github.com/pactaccount/Industrial-Anomaly-Detection/blob/feature/product-rebuild/results/mvtec_resnet18.json',
    evaluations: [
      'Full 15-category MVTec AD run: 0.9805 image AUROC and 1.05% false positive rate in the recorded benchmark artifact.',
      'Three-category CPU subset: 0.9937 pixel AUROC and 0.8095 AUPRO, with 34 ms per part measured locally.',
      'Benchmark results do not establish factory performance; production requires held-out normal parts and a controlled capture setup.'
    ],
    datasets: ['MVTec AD benchmark; normal training images and held-out test images'],
    useCases: [
      'Visual inspection: Flag unusual surfaces and return localized regions.',
      'Operations: Tune the alert threshold to an acceptable false reject rate.',
      'Review loop: Collect operator feedback before unattended deployment.'
    ],
    aiImages: [],
    longDescription: 'An unsupervised inspection system with a multi-scale feature bank, coreset selection, nearest-neighbor scoring, threshold calibration, FastAPI, React, and a camera-folder gateway. The repository records both benchmark metrics and deployment limits.',
    features: [
      { title: 'Normal-only training', description: 'Builds a feature memory bank from good parts and selects a compact coreset.' },
      { title: 'Localized outputs', description: 'Maps anomaly heatmaps back to source coordinates and returns defect regions.' },
      { title: 'Operating point', description: 'Sweeps thresholds and validates false rejects separately from recall.' }
    ],
    architecture: 'A multi-scale PyTorch feature extractor feeds a PatchCore-style memory bank. A FastAPI service, React console, and camera-folder gateway expose training, inspection, and operator review.',
    architectureStages: [
      { label: 'Train', detail: 'Known-good images' },
      { label: 'Compress', detail: 'Greedy coreset memory bank' },
      { label: 'Inspect', detail: 'Patch distance and heatmap' },
      { label: 'Calibrate', detail: 'Threshold and false rejects' },
      { label: 'Review', detail: 'Operator feedback' }
    ],
    theme: { mode: 'dark', bg: '#080d08', text: '#f4f2eb', textDim: '#9b9e94', accent: '#c7ef68', cardBg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.08)' }
  },
  {
    id: 'sql-agent',
    title: 'SeaQL SQL Agent',
    description: 'A text-to-SQL prototype with schema retrieval, retry logic, and a user review gate for writes.',
    tags: ['Text-to-SQL', 'LangGraph', 'Qdrant'],
    tone: 'orange',
    metric: 'Review gate',
    tools: ['Python', 'LangGraph', 'Gemini', 'Qdrant', 'FastAPI', 'SQLAlchemy'],
    link: 'https://seaql.onrender.com',
    mainImage: '/images/real_seaql.png',
    secondaryImage: '/images/sql_agent_secondary_1789861396690.jpg',
    imageKind: 'screenshot',
    github: 'https://github.com/pactaccount/SQLAgent/tree/demo-readiness-20261022',
    evaluations: [
      'Offline tests cover approval-token ownership, one-time use, and rejection.',
      'The use-case script can measure execution, retries, approval, and cache behavior when a database and model are configured.',
      'There is no published execution-accuracy or latency benchmark yet.'
    ],
    datasets: ['User-supplied SQLite database; optional configured remote database'],
    useCases: [
      'Analytics: Draft a query over an unfamiliar schema.',
      'Review: Inspect generated SQL before a data-changing statement runs.',
      'Experimentation: Compare cache, retry, and approval behavior.'
    ],
    aiImages: ['/images/sql_agent_ui_concept_1789875917016.jpg'],
    longDescription: 'LangGraph coordinates cache lookup, schema search, SQL generation, execution, and error-based retry. The demo now stores pending write statements on the server and issues single-use approval tokens. It is a prototype and should not be treated as a hardened multi-tenant database service.',
    features: [
      { title: 'Schema retrieval', description: 'Qdrant returns relevant table descriptions when an embedding endpoint is configured.' },
      { title: 'Error-based retry', description: 'A failed SQL statement can be regenerated up to the configured retry limit.' },
      { title: 'Review gate', description: 'The browser approves a short-lived server-owned statement and cannot substitute another SQL string at approval time.' }
    ],
    architecture: 'A FastAPI UI calls a LangGraph state machine. Qdrant is used for schema and semantic-cache lookup when embeddings are configured. SQLAlchemy executes against the selected database.',
    architectureStages: [
      { label: 'Ask', detail: 'Natural language' },
      { label: 'Retrieve', detail: 'Relevant schema' },
      { label: 'Generate', detail: 'SQL with retries' },
      { label: 'Review', detail: 'User approval for writes' },
      { label: 'Return', detail: 'Rows and explanation' }
    ],
    theme: { mode: 'dark', bg: '#080d08', text: '#f4f2eb', textDim: '#9b9e94', accent: '#c7ef68', cardBg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.08)' }
  },
  {
    id: 'rag-pipeline',
    title: 'Financial Document RAG',
    description: 'A document QA prototype with PDF parsing, sentence-window retrieval, Qdrant, and reranking.',
    tags: ['RAG', 'Evaluation', 'FastAPI'],
    tone: 'violet',
    metric: 'Eval prototype',
    tools: ['Python', 'LlamaIndex', 'LlamaParse', 'Qdrant', 'Cohere', 'FastAPI'],
    link: 'https://financial-rag-pipeline-te58.onrender.com',
    mainImage: '/images/real_rag_pipeline.png',
    secondaryImage: '/images/rag_pipeline_secondary_1789861383016.jpg',
    imageKind: 'screenshot',
    github: 'https://github.com/pactaccount/production-rag-pipeline/tree/demo-readiness-20261022',
    evidenceUrl: 'https://github.com/pactaccount/production-rag-pipeline/blob/demo-readiness-20261022/eval/eval_results.json',
    evaluations: [
      'An LLM-judge evaluation script exists, but the checked-in report has six generated questions and no query-level details.',
      'The current report does not support a claim of high retrieval accuracy or low hallucination rate.',
      'A held-out, human-reviewed QA set and full per-query traces are the next evidence milestone.'
    ],
    datasets: ['Financial PDF examples used by the evaluation script; provenance needs to be documented'],
    useCases: [
      'Document QA: Retrieve relevant passages from a financial filing.',
      'Engineering: Compare retrieval and reranking choices on the same question set.',
      'Evaluation: Inspect faithfulness and answer relevance per question.'
    ],
    aiImages: ['/images/rag_concept_1_1789868279660.jpg'],
    longDescription: 'The implementation explores LlamaParse extraction, sentence-window nodes, Qdrant retrieval, Cohere reranking, and a FastAPI/React interface. Its existing evaluation artifact is a small smoke test; robust quality claims need a larger independent labeled set.',
    features: [
      { title: 'Structured extraction', description: 'LlamaParse converts PDFs into text suitable for retrieval.' },
      { title: 'Sentence windows', description: 'Embeds a precise sentence while retaining nearby context for generation.' },
      { title: 'Reranking', description: 'Applies a second scoring stage to retrieved candidates.' }
    ],
    architecture: 'PDF extraction feeds sentence-window indexing in Qdrant. Retrieval and reranking provide context to a configurable LLM through FastAPI.',
    architectureStages: [
      { label: 'Parse', detail: 'Financial PDF' },
      { label: 'Index', detail: 'Sentence windows' },
      { label: 'Retrieve', detail: 'Qdrant search' },
      { label: 'Rerank', detail: 'Cohere model' },
      { label: 'Answer', detail: 'Cited response' }
    ],
    theme: { mode: 'dark', bg: '#0a1014', text: '#f4f2eb', textDim: '#acaea4', accent: '#8d75ff', cardBg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.08)' }
  },
  {
    id: 'medbot',
    title: 'MedBot Clinic Workflow',
    description: 'A clinic administration prototype for appointment actions, policy lookup, and emergency routing.',
    tags: ['Agents', 'MCP', 'Workflow'],
    tone: 'orange',
    metric: 'Workflow tests',
    tools: ['Python', 'LangGraph', 'MCP', 'MongoDB', 'FastAPI', 'React'],
    link: 'https://medbot-backend-0895.onrender.com',
    mainImage: '/images/real_medbot.png',
    secondaryImage: '/images/medbot_secondary_1789861450748.jpg',
    imageKind: 'screenshot',
    github: 'https://github.com/pactaccount/medbot',
    evaluations: [
      'The repository contains unit, integration, end-to-end, evaluation, and performance test code.',
      'No verified clinical safety or HIPAA compliance result is published.',
      'This is a demo using synthetic workflows and policy text; it is not a clinical decision tool.'
    ],
    datasets: ['Synthetic patient fixtures and local clinic policy text'],
    useCases: [
      'Administration: Book, cancel, or reschedule an appointment.',
      'Policy support: Answer questions from clinic policy text.',
      'Routing: Escalate emergency language to a dedicated path.'
    ],
    aiImages: ['/images/medbot_concept_1_1789868237207.jpg'],
    longDescription: 'A LangGraph and MCP prototype with a FastAPI backend and React interface. It demonstrates agent routing and tool calls over synthetic clinic workflows. Medical and privacy claims need external validation before real-world use.',
    features: [
      { title: 'Intent routing', description: 'Separates action, policy, emergency, and general requests.' },
      { title: 'Tool-backed actions', description: 'MCP tools connect the action path to appointment data.' },
      { title: 'Evaluation harness', description: 'Includes scripts and tests for routing, sessions, quality, and concurrency.' }
    ],
    architecture: 'A React interface calls FastAPI. LangGraph routes requests to specialized paths; the action path uses MCP tools and MongoDB.',
    architectureStages: [
      { label: 'Message', detail: 'Patient request' },
      { label: 'Route', detail: 'LangGraph triage' },
      { label: 'Act', detail: 'Policy or appointment tools' },
      { label: 'Respond', detail: 'User-facing answer' }
    ],
    theme: { mode: 'dark', bg: '#0a1014', text: '#f4f2eb', textDim: '#acaea4', accent: '#ff875c', cardBg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.08)' }
  }
];
