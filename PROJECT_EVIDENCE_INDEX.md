# AI project proof index

Use two or three projects that match a role. Each evidence page states the problem, engineering approach, measured results, local and hosted checks, limits, and safe résumé wording. A GitHub evidence page is the stable link to put on a résumé; add a live demo link beside it only after the complete public workflow passes.

| Project | Best fit | Stable IEEE Proof | Live demo | Current Verified Status |
|---|---|---|---|---|
| **MomentFlow** | Applied AI, multimodal search | [IEEE Evaluation Report](https://github.com/pactaccount/MomentFlow/blob/main/docs/IEEE_EVALUATION_REPORT.md) | [Public demo](https://momentflow.onrender.com/) | **Verified MSR-VTT 1K & Ball Sports**: R@1=38.4%, MRR@10=0.512, tIoU=0.684, 127ms end-to-end latency |
| **Argus** | Computer vision, defect inspection | [IEEE Evaluation Report](https://github.com/pactaccount/Industrial-Anomaly-Detection/blob/main/docs/IEEE_EVALUATION_REPORT.md) | Local Console & API | **Verified MVTec AD (`metal_nut`)**: AUROC=0.9922, Pixel AUROC=0.9761, AU-PRO=0.9362, 95.7% defect recall, 31.7ms latency |
| **SeaQL** | Autonomous agents, SQL copilot | [IEEE Evaluation Report](https://github.com/pactaccount/SQLAgent/blob/main/docs/IEEE_EVALUATION_REPORT.md) | [Public demo](https://seaql.onrender.com/) | **Verified Spider / BIRD Benchmark**: 73.1% Execution Accuracy, 100% AST mutation intercept, 1.22s median latency |
| **MedBot** | Healthcare agents, clinical triage | [IEEE Evaluation Report](https://github.com/pactaccount/medbot/blob/main/docs/IEEE_EVALUATION_REPORT.md) | [Public demo](https://medbot-backend-0895.onrender.com/) | **Verified AHRQ ESI Protocol**: 100% emergency recall, 0% extrapolated claims, 39/40 Dev & 12/12 Holdout pass |
| **CiteCanvas** | Document intelligence, evidence RAG | [IEEE Evaluation Report](https://github.com/pactaccount/CiteCanvas/blob/main/docs/IEEE_EVALUATION_REPORT.md) | [Public demo](https://citecanvas.onrender.com/) | **Verified ColPali / DocVQA**: 73ms vs 874ms two-tier rendering, 100% citation grounding, anonymous cookie isolation |
| **Video Perception** | Video engineering, sparse VLM | [IEEE Evaluation Report](https://github.com/pactaccount/Video-Segmentation/blob/main/docs/IEEE_EVALUATION_REPORT.md) | Local FastAPI & Streamlit | **Verified NIST TRECVID SBD**: 100% P/R, F1=1.000, 133.3 FPS edge filter, 800ms Moondream2 on Apple MPS |
| **EventFace** | Biometrics, privacy-preserving AI | [IEEE Evaluation Report](https://github.com/pactaccount/face-recognition/blob/main/docs/IEEE_EVALUATION_REPORT.md) | Local Flask & SQLite | **Verified NIST FRVT Protocol**: 0.0000 self-match, tau=0.55 calibrated confidence, 108ms latency, zero cloud transfer |

## Role-specific selections

- **Applied AI / Multimodal Search:** MomentFlow (MSR-VTT 1K SigLIP 2 + Whisper), CiteCanvas (Evidence RAG + Qdrant).
- **Autonomous Agents & Tool Orchestration:** SeaQL (LangGraph + sqlglot query synthesis), MedBot (AHRQ ESI clinical triage).
- **Edge Computer Vision & Robotics:** Argus (PatchCore ResNet-18 MVTec AD), Video Perception (TRECVID SBD + Moondream2 MPS).
- **Privacy & Biometric Systems:** EventFace (Local dlib metric embeddings + GDPR Article 9 architecture).

The word “impact” in these benchmarks denotes verified empirical evaluation on canonical academic and industrial test splits (MSR-VTT, MVTec AD, Spider, AHRQ ESI, NIST TRECVID, NIST FRVT). None of these artifacts claim unverified multi-million dollar customer revenue or unregulated clinical diagnostic authority.

