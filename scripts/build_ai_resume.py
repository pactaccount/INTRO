"""Build the evidence-based one-page AI resume linked from the portfolio."""
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph

OUT = Path(__file__).resolve().parents[1] / 'public' / 'resume-ai.pdf'
W, H = letter
LEFT, RIGHT = 43, 43
INK = HexColor('#14202c')
MUTED = HexColor('#475569')
ACCENT = HexColor('#275b88')
RULE = HexColor('#cbd5e1')
c = canvas.Canvas(str(OUT), pagesize=letter)
c.setTitle('Abhinav Vummidichetty - Applied AI Resume')
c.setAuthor('Abhinav Vummidichetty')
y = H - 42


def para(text, size=9, leading=12.5, color=INK, indent=0, after=0):
    global y
    st = ParagraphStyle('line', fontName='Helvetica', fontSize=size,
        leading=leading, textColor=color, spaceAfter=0, leftIndent=indent)
    p = Paragraph(text, st)
    _, h = p.wrap(W - LEFT - RIGHT - indent, 1000)
    p.drawOn(c, LEFT, y - h)
    y -= h + after


def section(title):
    global y
    y -= 10
    c.setStrokeColor(RULE)
    c.setLineWidth(.7)
    c.line(LEFT, y, W-RIGHT, y)
    y -= 13
    c.setFillColor(ACCENT)
    c.setFont('Helvetica-Bold', 8.5)
    c.drawString(LEFT, y, title.upper())
    y -= 15


def item(title, url, bullets, after=11):
    global y
    c.setFillColor(INK)
    c.setFont('Helvetica-Bold', 9)
    c.drawString(LEFT, y, title)
    if url:
        width = c.stringWidth(title, 'Helvetica-Bold', 9)
        c.linkURL(url, (LEFT, y-2, LEFT+width, y+10), relative=0)
    y -= 15
    for bullet in bullets:
        c.setFillColor(ACCENT)
        c.circle(LEFT+3, y-3, 1.5, stroke=0, fill=1)
        para(bullet, size=9, leading=12.5, indent=12, after=3)
    y -= after


c.setFillColor(INK)
c.setFont('Helvetica-Bold', 19)
c.drawString(LEFT, y, 'Abhinav Vummidichetty')
y -= 17
c.setFillColor(ACCENT)
c.setFont('Helvetica-Bold', 10)
c.drawString(LEFT, y, 'APPLIED AI / ML ENGINEER')
y -= 17
c.setFillColor(MUTED)
c.setFont('Helvetica', 8.4)
contact = '+1 (669) 649-1676  |  vummidichettyabhinav@gmail.com  |  GitHub  |  LinkedIn'
c.drawString(LEFT, y, contact)
for label, url in [
    ('GitHub', 'https://github.com/pactaccount'),
    ('LinkedIn', 'https://www.linkedin.com/in/abhinav-vummidichetty/')]:
    before = contact.split(label)[0]
    x = LEFT + c.stringWidth(before, 'Helvetica', 8.4)
    c.linkURL(url, (x, y-2, x+c.stringWidth(label, 'Helvetica', 8.4), y+10), relative=0)
y -= 8

section('Profile')
para('AI and data engineer building multimodal search, computer vision, RAG, and agent workflows. I pair working product interfaces with reproducible evaluations and clearly stated failure modes.', after=1)

section('Technical skills')
para('<b>Languages and services:</b> Python, SQL, FastAPI, React, Docker, PostgreSQL, SQLite', after=2)
para('<b>AI/ML:</b> PyTorch, SigLIP 2, retrieval evaluation, PatchCore, LangGraph, Qdrant, LlamaIndex, vector search', after=1)

section('Selected AI projects')
item('MomentFlow - multimodal video moment search', 'https://github.com/pactaccount/MomentFlow', [
    'Built video upload, background indexing, visual/speech/OCR search, and timestamped playback with SigLIP 2, faster-whisper, Tesseract, SQLite FTS5, and FastAPI.',
    'Reached 90% Recall@1 (18/20 held-out queries) on a fixed 50-video MSR-VTT subset versus 70% for a first-frame baseline; documented 12.5% top-1 action-segment recall as a temporal limitation.'
])
item('Argus - unsupervised visual inspection', 'https://github.com/pactaccount/Industrial-Anomaly-Detection/tree/feature/product-rebuild', [
    'Implemented normal-only feature-bank training, coreset selection, localized heatmaps, threshold calibration, API, React console, and camera-folder gateway.',
    'Recorded 0.9805 image AUROC and 1.05% false-positive rate across 15 MVTec AD categories; benchmark results are not a factory deployment claim.'
])
item('SeaQL - text-to-SQL agent prototype', 'https://github.com/pactaccount/SQLAgent/tree/demo-readiness-20261022', [
    'Built a LangGraph flow for schema retrieval, SQL generation, error-based retry, and a server-owned, short-lived, single-use review token for data-changing statements.',
    'Added offline approval-flow tests; remote database use still requires controlled credentials and further security hardening.'
])
item('Financial Document RAG - retrieval prototype', 'https://github.com/pactaccount/production-rag-pipeline/tree/demo-readiness-20261022', [
    'Combined PDF parsing, sentence-window indexing, Qdrant retrieval, Cohere reranking, and a FastAPI/React interface; identified gaps in the early six-question evaluation report.'
], after=0)

section('Experience')
item('Data Engineering Volunteer | Beet (gobeet.app) | Jan 2026 - Present', None, [
    'Built Python and SQL ETL workflows to ingest event data from 5+ sources, with schema checks and documentation for downstream data consumers.',
    'Designed storage schemas and partitioning strategies with product, engineering, and data science collaborators.'
], after=0)

section('Education')
para('<b>San Jose State University</b> - M.S. Data Analytics, expected Dec 2026  |  <b>Andhra University</b> - B.Tech Computer Science, May 2024', size=8.3, leading=10.8)

if y < 36:
    raise RuntimeError(f'Resume overflow: final y={y:.1f}')
c.setStrokeColor(RULE)
c.line(LEFT, 34, W-RIGHT, 34)
c.setFillColor(MUTED)
c.setFont('Helvetica', 7)
c.drawString(LEFT, 23, 'Project metrics are scoped to the linked evaluation artifacts.')
c.save()
print(f'{OUT} (final y={y:.1f})')
