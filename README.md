# Abhinav Vummidichetty - AI Project Showcase

[AI project proof index for role-specific résumé selection](PROJECT_EVIDENCE_INDEX.md)

This portfolio is a job application guide to five selected AI projects. Each case study links to source code and states what the recorded evidence does and does not support. The [AI-focused resume](public/resume-ai.pdf) uses the same claims.

| Project | What to inspect | Evidence |
| --- | --- | --- |
| [MomentFlow](https://github.com/pactaccount/MomentFlow) | Multimodal video search and timestamped playback | [Fixed 50-video retrieval evaluation](https://github.com/pactaccount/MomentFlow/blob/main/Prototype/EVALUATION.md): 18/20 held-out Recall@1; separate action localization result is 2/16 at rank 1 |
| [Argus](https://github.com/pactaccount/Industrial-Anomaly-Detection/tree/feature/product-rebuild) | Normal-only visual inspection and threshold calibration | [15-category MVTec AD summary](https://github.com/pactaccount/Industrial-Anomaly-Detection/blob/feature/product-rebuild/docs/benchmark_summary.json): 0.9805 image AUROC, 1.05% good-part false positive rate |
| [SeaQL](https://github.com/pactaccount/SQLAgent/tree/demo-readiness-20261022) | LangGraph text-to-SQL flow and server-owned review tokens | Offline approval-flow tests; no published execution-accuracy benchmark |
| [Financial Document RAG](https://github.com/pactaccount/production-rag-pipeline/tree/demo-readiness-20261022) | PDF parsing, sentence-window retrieval, and reranking | [Historical smoke report](https://github.com/pactaccount/production-rag-pipeline/blob/demo-readiness-20261022/eval/smoke_report.json) is incomplete and does not establish answer quality |
| [MedBot](https://github.com/pactaccount/medbot) | Agent routing and appointment tools | Workflow test code; no clinical or compliance claim |

MomentFlow and Argus are the strongest quantified examples. SeaQL, financial RAG, and MedBot demonstrate implementation breadth. These are personal engineering demos and benchmark experiments, not claims of customer deployment.

## Run this portfolio

```bash
npm ci
npm run dev
```

Run `npx tsc --noEmit && npm run build` before publishing. The generated `dist/` is not source code. Original data-engineering résumé remains in `public/resume.pdf`; the navigation links to `public/resume-ai.pdf`.

## Application use

Link the specific project branch shown above. For a résumé bullet, include the metric's dataset and sample size, and use the linked evaluation artifact as the source. For a demo, show the local UI or a short screen recording and then open the relevant code and evaluation file. Existing Render URLs did not respond during the October 22, 2026 check, so this showcase currently links source code and evidence instead of advertising them as live demos.
