import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projects";
import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { useEffect } from "react";

// Inline CSS for the diagram to keep it self-contained
const DiagramStyles = () => (
  <style>{`
    .diagram-container {
      background: var(--ink-soft);
      border: 1px solid var(--line);
      border-radius: 24px;
      padding: 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3rem;
      position: relative;
      overflow: hidden;
    }
    .diagram-container::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size: 24px 24px;
      pointer-events: none;
    }
    .diagram-row {
      display: flex;
      gap: 2rem;
      position: relative;
      z-index: 1;
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
    }
    .diagram-node {
      background: var(--ink);
      border: 1px solid var(--project-accent);
      padding: 1.5rem 2rem;
      border-radius: 16px;
      color: var(--paper);
      font-family: var(--mono);
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      position: relative;
      text-align: center;
      min-width: 200px;
    }
    .diagram-node span {
      display: block;
      color: var(--project-accent);
      font-size: 0.7rem;
      margin-bottom: 0.5rem;
    }
    .diagram-arrow {
      color: var(--paper-dim);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .diagram-arrow svg {
      opacity: 0.5;
    }
  `}</style>
);

const ArchitectureDiagram = ({ projectId }: { projectId: string }) => {
  if (projectId === "rag-pipeline") {
    return (
      <div className="diagram-container">
        <div className="diagram-row">
          <div className="diagram-node"><span>Ingestion Layer</span>LlamaParse PDF Extraction</div>
        </div>
        <div className="diagram-arrow"><Icon name="arrow-down" size={24} /></div>
        <div className="diagram-row">
          <div className="diagram-node" style={{ borderColor: 'var(--line)' }}><span>Processing</span>Sentence Window Chunking</div>
          <div className="diagram-node" style={{ borderColor: 'var(--line)' }}><span>Embedding</span>Cohere Models</div>
        </div>
        <div className="diagram-arrow"><Icon name="arrow-down" size={24} /></div>
        <div className="diagram-row">
          <div className="diagram-node"><span>Vector Database</span>Qdrant Cloud</div>
        </div>
        <div className="diagram-arrow"><Icon name="arrow-down" size={24} /></div>
        <div className="diagram-row">
          <div className="diagram-node" style={{ borderColor: 'var(--line)' }}><span>Retrieval</span>Semantic Search</div>
          <div className="diagram-node" style={{ borderColor: 'var(--line)' }}><span>Re-Ranking</span>Cross-Encoder Rescoring</div>
        </div>
        <div className="diagram-arrow"><Icon name="arrow-down" size={24} /></div>
        <div className="diagram-row">
          <div className="diagram-node" style={{ backgroundColor: 'var(--project-accent)', color: '#000', borderColor: 'transparent' }}><span>Generation</span>LLM Output</div>
        </div>
      </div>
    );
  }

  if (projectId === "sql-agent") {
    return (
      <div className="diagram-container">
        <div className="diagram-row">
          <div className="diagram-node"><span>User Input</span>Natural Language Query</div>
        </div>
        <div className="diagram-arrow"><Icon name="arrow-down" size={24} /></div>
        <div className="diagram-row">
          <div className="diagram-node" style={{ borderColor: 'var(--line)' }}><span>Router</span>Semantic Cache Check</div>
          <div className="diagram-node" style={{ borderColor: 'var(--line)' }}><span>Schema RAG</span>Qdrant Vector Search</div>
        </div>
        <div className="diagram-arrow"><Icon name="arrow-down" size={24} /></div>
        <div className="diagram-row">
          <div className="diagram-node"><span>State Machine</span>LangGraph Agent Loop</div>
        </div>
        <div className="diagram-arrow"><Icon name="arrow-down" size={24} /></div>
        <div className="diagram-row">
          <div className="diagram-node" style={{ borderColor: 'var(--line)' }}><span>Validation</span>Syntax & Security Check</div>
          <div className="diagram-node" style={{ borderColor: 'var(--line)' }}><span>Execution</span>HITL DB Query</div>
        </div>
        <div className="diagram-arrow"><Icon name="arrow-down" size={24} /></div>
        <div className="diagram-row">
          <div className="diagram-node" style={{ backgroundColor: 'var(--project-accent)', color: '#000', borderColor: 'transparent' }}><span>Delivery</span>Formatted Results</div>
        </div>
      </div>
    );
  }

  return (
    <div className="diagram-container">
      <div className="diagram-row">
        <div className="diagram-node"><span>Client Interface</span>React Dashboard</div>
      </div>
      <div className="diagram-arrow"><Icon name="arrow-down" size={24} /></div>
      <div className="diagram-row">
        <div className="diagram-node"><span>Orchestrator</span>Triage Agent (LangGraph)</div>
      </div>
      <div className="diagram-arrow"><Icon name="arrow-down" size={24} /></div>
      <div className="diagram-row">
        <div className="diagram-node" style={{ borderColor: 'var(--line)' }}><span>Specialist</span>Action Agent</div>
        <div className="diagram-node" style={{ borderColor: 'var(--line)' }}><span>Specialist</span>Policy Agent</div>
        <div className="diagram-node" style={{ borderColor: 'var(--line)' }}><span>Specialist</span>Emergency Agent</div>
      </div>
      <div className="diagram-arrow"><Icon name="arrow-down" size={24} /></div>
      <div className="diagram-row">
        <div className="diagram-node" style={{ borderColor: 'var(--line)' }}><span>Protocol</span>Model Context Protocol</div>
      </div>
      <div className="diagram-arrow"><Icon name="arrow-down" size={24} /></div>
      <div className="diagram-row">
        <div className="diagram-node" style={{ backgroundColor: 'var(--project-accent)', color: '#000', borderColor: 'transparent' }}><span>Storage</span>MongoDB Patient Records</div>
      </div>
    </div>
  );
};

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" />;
  }

  const themeVars = {
    '--project-bg': project.theme.bg,
    '--project-text': project.theme.text,
    '--project-text-dim': project.theme.textDim,
    '--project-accent': project.theme.accent,
    '--project-card-bg': project.theme.cardBg,
    '--project-border': project.theme.border,
  } as React.CSSProperties;

  return (
    <main style={{ ...themeVars, backgroundColor: 'var(--project-bg)', color: 'var(--project-text)', transition: "background-color 300ms ease" }}>
      <DiagramStyles />
      
      {/* HERO SECTION */}
      <section className="section-pad" style={{ paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <Link to="/" style={{ marginBottom: "3rem", display: "inline-flex", alignItems: "center", gap: "0.5rem", color: 'var(--project-text)', fontFamily: 'var(--mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.8 }}>
               &larr; Back to projects
            </Link>
          </Reveal>
          
          <Reveal delay="delay-1">
            <h1 style={{ fontSize: "clamp(3.5rem, 7vw, 7rem)", margin: "0 0 1.5rem", letterSpacing: "-0.04em", lineHeight: "0.95", color: "var(--project-text)" }}>
              {project.title}
            </h1>
            <p style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)", color: "var(--project-text-dim)", maxWidth: "800px", lineHeight: "1.5", margin: "0 0 4rem" }}>
              {project.description}
            </p>
          </Reveal>

          {/* METADATA GRID */}
          <Reveal delay="delay-2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", paddingTop: "3rem", borderTop: "1px solid var(--project-border)" }}>
            <div>
              <h4 style={{ fontFamily: "var(--mono)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--project-accent)", marginBottom: "1rem" }}>My Role</h4>
              <p style={{ margin: 0, fontSize: "1.1rem" }}>{project.role}</p>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--mono)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--project-accent)", marginBottom: "1rem" }}>Timeline</h4>
              <p style={{ margin: 0, fontSize: "1.1rem" }}>{project.timeline}</p>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--mono)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--project-accent)", marginBottom: "1rem" }}>Core Tools</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {project.tools.map(tool => <span key={tool} style={{ color: "var(--project-text-dim)", fontSize: "0.95rem" }}>{tool}</span>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FULL WIDTH IMAGE */}
      <section style={{ padding: "4rem 0", background: "var(--ink-soft)" }}>
        <Reveal>
          <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 24px" }}>
            <img src={project.mainImage} alt={project.title} style={{ width: "100%", borderRadius: "16px", boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }} />
          </div>
        </Reveal>
      </section>

      {/* PROJECT BACKGROUND */}
      <section className="section-pad" style={{ padding: "8rem 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", fontWeight: 400, letterSpacing: "-0.03em", color: "var(--project-accent)" }}>Project Background</h2>
            <p style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "var(--project-text-dim)", marginBottom: "2rem" }}>
              {project.problemStatement}
            </p>
            <p style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "var(--project-text)", marginBottom: "4rem" }}>
              {project.longDescription}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ARCHITECTURE DIAGRAM */}
      <section className="section-pad" style={{ padding: "4rem 0 8rem", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "3rem", fontWeight: 400, letterSpacing: "-0.03em" }}>System Architecture</h2>
            <p style={{ fontSize: "1.15rem", lineHeight: "1.7", color: "var(--project-text-dim)", marginBottom: "4rem", maxWidth: "800px" }}>
              {project.architecture}
            </p>
            
            <ArchitectureDiagram projectId={project.id} />
          </Reveal>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="section-pad" style={{ padding: "8rem 0", background: "var(--ink-soft)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "4rem", fontWeight: 400, letterSpacing: "-0.04em", textAlign: "center" }}>Technical Process & Features</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
              {project.features.map((feature, idx) => (
                <div key={idx} style={{ background: "var(--project-bg)", border: "1px solid var(--project-border)", borderRadius: "20px", padding: "3rem" }}>
                  <div style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--project-accent)", marginBottom: "1.5rem" }}>0{idx + 1}</div>
                  <h3 style={{ marginBottom: "1.5rem", fontSize: "1.6rem", fontWeight: 400, letterSpacing: "-0.02em" }}>{feature.title}</h3>
                  <p style={{ color: "var(--project-text-dim)", lineHeight: "1.7", margin: 0, fontSize: "1.1rem" }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* EVALUATION METRICS */}
      <section className="section-pad" style={{ padding: "8rem 0", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "3rem", fontWeight: 400, letterSpacing: "-0.03em", color: "var(--project-accent)" }}>Evaluation & Testing</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {project.evaluations.map((evalMetric, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", background: "var(--project-card-bg)", border: "1px solid var(--project-border)", padding: "1.5rem 2rem", borderRadius: "12px" }}>
                  <Icon name="check" size={20} color="var(--project-accent)" />
                  <p style={{ margin: 0, color: "var(--project-text)", fontSize: "1.15rem", lineHeight: "1.6" }}>{evalMetric}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* USE CASES */}
      <section className="section-pad" style={{ padding: "8rem 0", background: "var(--ink-soft)", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "4rem", fontWeight: 400, letterSpacing: "-0.04em", textAlign: "center" }}>Practical Use Cases</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
              {project.useCases.map((useCase, idx) => {
                const [title, desc] = useCase.split(': ');
                return (
                  <div key={idx} style={{ background: "var(--project-bg)", border: "1px solid var(--project-border)", padding: "2.5rem", borderRadius: "16px", borderLeft: "4px solid var(--project-accent)" }}>
                    <h4 style={{ margin: "0 0 1rem", fontSize: "1.2rem", fontWeight: 500, color: "var(--project-text)" }}>{title}</h4>
                    <p style={{ margin: 0, color: "var(--project-text-dim)", fontSize: "1.05rem", lineHeight: "1.6" }}>{desc || title}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONCEPT GALLERY */}
      <section className="section-pad" style={{ padding: "8rem 0", borderTop: "1px solid var(--line)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <Reveal>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", fontWeight: 400, letterSpacing: "-0.04em", textAlign: "center" }}>Active UI States</h2>
            <p style={{ textAlign: "center", color: "var(--project-text-dim)", marginBottom: "4rem", fontSize: "1.15rem" }}>Simulated environments demonstrating real-world data processing.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", gap: "2rem" }}>
              {project.aiImages.map((imgSrc, idx) => (
                <div key={idx} style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--project-border)", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
                  <img src={imgSrc} alt={`${project.title} UI State ${idx + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ACTION FOOTER */}
      <section className="section-pad" style={{ padding: "8rem 0", textAlign: "center" }}>
        <Reveal>
          <h2 style={{ fontSize: "3rem", marginBottom: "3rem", fontWeight: 400, letterSpacing: "-0.03em" }}>Explore the system.</h2>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={project.link} target="_blank" rel="noreferrer" style={{ background: "var(--project-accent)", color: "#000", display: "inline-flex", alignItems: "center", gap: "18px", padding: "0 32px", minHeight: "56px", fontFamily: "var(--mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", borderRadius: "100px", transition: "transform 0.2s ease" }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
              View Live Product <Icon name="arrow-up-right" size={16} />
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" style={{ background: "transparent", color: "var(--project-text)", border: "1px solid var(--project-border)", display: "inline-flex", alignItems: "center", gap: "18px", padding: "0 32px", minHeight: "56px", fontFamily: "var(--mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", borderRadius: "100px", transition: "transform 0.2s ease" }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
              View Source Code <Icon name="github" size={16} />
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
