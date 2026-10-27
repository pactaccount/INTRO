import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { projects } from "../data/projects";

export function Home() {
  const [copied, setCopied] = useState(false);
  const [deviceViews, setDeviceViews] = useState<Record<string, 'desktop' | 'mobile'>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("vummidichettyabhinav@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch { window.location.href = "mailto:vummidichettyabhinav@gmail.com"; }
  };

  return (
    <>
      <section className="hero section-pad" id="top">
        <div className="hero-gridline" aria-hidden="true" />
        <div className="hero-copy">
          <Reveal><p className="eyebrow"><span className="status-dot" /><span className="eyebrow-name">Abhinav Vummidichetty /</span> AI Product Engineer / Autonomous Agents & GenAI</p></Reveal>
          <Reveal delay="delay-1"><h1>AI Products<br /><em>built for real work.</em></h1></Reveal>
          <Reveal delay="delay-2"><p className="hero-intro">I architect enterprise AI products solving complex domain problems across document intelligence, conversational analytics, multimodal video search, and edge vision.</p></Reveal>
          <Reveal delay="delay-3" className="hero-actions">
            <button className="button button-primary" onClick={() => goTo("projects")}>View Products <Icon name="arrow-right" size={16} /></button>
            <a className="text-link" href="/resume.pdf" target="_blank" rel="noreferrer">Resume <Icon name="arrow-up-right" size={15} /></a>
            <button className="text-link" onClick={() => goTo("contact")}>Contact me <Icon name="arrow-up-right" size={15} /></button>
          </Reveal>
          <Reveal delay="delay-4" className="hero-footnote"><span>Core specializations</span><span className="micro-stack">Multimodal RAG <i /> Autonomous Agents <i /> Computer Vision</span></Reveal>
        </div>
        <Reveal className="terminal-wrap" delay="delay-2">
          <div className="terminal-orbit orbit-one" /><div className="terminal-orbit orbit-two" />
          <div className="terminal-window" aria-label="Live AI Product Pipeline Console">
            <div className="terminal-topbar">
              <div className="window-dots"><i /><i /><i /></div>
              <span className="terminal-label">AI PRODUCT PIPELINE</span>
              <span className="terminal-time">ACTIVE</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-line muted"><span>01</span> [QUERY] "Compare Q3 Cloud Revenue with prior fiscal year"</div>
              <div className="terminal-line"><span>02</span> [INTENT] Multimodal RAG &bull; Financial Document Intelligence</div>
              <div className="terminal-line indent"><span>03</span> &rarr; Rasterizing PDF Page 4 (180-DPI fast preview) <mark>73ms</mark></div>
              <div className="terminal-line indent"><span>04</span> &rarr; Extracting bounding box coordinates [100, 275, 545, 410]</div>
              <div className="terminal-line blank"><span>05</span></div>
              <div className="terminal-line pulse-line"><span>06</span> [SYNTHESIS] NVIDIA VLM 2B grounded validation<span className="cursor-block" /></div>
              <div className="terminal-output"><span className="output-pip">&gt;</span><span>result</span><strong>$4.12B (+34.8% YoY) &bull; Verified on Page 4</strong></div>
              <div className="terminal-signal"><span>grounding score</span><div className="signal-bars"><i /><i /><i /><i /><i /><i /><i /></div><strong>100% CITED</strong></div>
            </div>
            <div className="terminal-footer"><span><i className="live-pip" /> live execution telemetry</span><span>sub-second response across all products</span></div>
          </div>
          <div className="terminal-caption"><span>01 / {projects.length.toString().padStart(2, '0')}</span><span>featured products below</span></div>
        </Reveal>
      </section>

      <section className="intro section-pad" id="about">
        <Reveal className="section-kicker"><span>01</span><span>OVERVIEW</span></Reveal>
        <div className="intro-grid">
          <Reveal><h2>AI Products<br /><em>engineered for enterprise impact.</em></h2></Reveal>
          <Reveal delay="delay-1" className="intro-body"><p>I develop full-fledged AI software products that transform how teams interact with documents, data, video, and visual manufacturing quality.</p><p>Every product is built with intuitive interfaces, empirical benchmarks, and production-grade reliability.</p></Reveal>
          <Reveal delay="delay-2" className="intro-ascii"><span>01</span><pre>{"  .--------------------.\n /   AI PRODUCT SUITE   /\n'----------------------'\n     |      |      |\n [ANALYZE] [GROUND] [ACT]\n     |      |      |\n  .--------------------.\n /  ENTERPRISE IMPACT   /\n'----------------------'"}</pre><small>production-grade intelligent software</small></Reveal>
        </div>
      </section>

      <section className="work section-pad" id="projects">
        <Reveal className="section-kicker"><span>02</span><span>PRODUCTS</span><span className="kicker-rule" /></Reveal>
        <div className="work-heading"><Reveal><h2>Products and<br /><em>solutions.</em></h2></Reveal><Reveal delay="delay-1"><p>Production AI applications spanning document workspaces, autonomous SQL analytics, multimodal video search, and edge vision.</p></Reveal></div>
        
        <div className="project-showcase-list" style={{ display: 'flex', flexDirection: 'column', gap: '100px', marginTop: '40px' }}>
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index === 0 ? "delay-1" : index === 1 ? "delay-2" : "delay-3"} className="project-showcase">
              <Link to={`/projects/${project.id}`} className={`project-showcase-left bg-${project.tone}`} style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                <h3 className="showcase-title-bg">{project.title}</h3>
                <img src={project.mainImage} alt={project.title} className="showcase-main-img" style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </Link>
              <div className="project-showcase-right">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
                  <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3
                      className="showcase-title"
                      onMouseOver={(e) => e.currentTarget.style.color = project.theme.accent}
                      onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}
                      style={{ transition: 'color 0.3s ease', margin: 0 }}
                    >
                      {project.title}
                    </h3>
                  </Link>

                  {project.mobileImage && (
                    <div style={{ display: 'inline-flex', gap: '3px', background: 'rgba(255,255,255,0.06)', padding: '3px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <button
                        type="button"
                        onClick={() => setDeviceViews(prev => ({ ...prev, [project.id]: 'mobile' }))}
                        style={{
                          padding: '4px 12px',
                          fontSize: '10px',
                          fontFamily: 'var(--mono)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          borderRadius: '100px',
                          border: 'none',
                          background: (deviceViews[project.id] ?? 'mobile') === 'mobile' ? 'var(--lime)' : 'transparent',
                          color: (deviceViews[project.id] ?? 'mobile') === 'mobile' ? '#000' : 'var(--paper-dim)',
                          fontWeight: 700,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Mobile (393px)
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeviceViews(prev => ({ ...prev, [project.id]: 'desktop' }))}
                        style={{
                          padding: '4px 12px',
                          fontSize: '10px',
                          fontFamily: 'var(--mono)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          borderRadius: '100px',
                          border: 'none',
                          background: deviceViews[project.id] === 'desktop' ? 'var(--lime)' : 'transparent',
                          color: deviceViews[project.id] === 'desktop' ? '#000' : 'var(--paper-dim)',
                          fontWeight: 700,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Desktop
                      </button>
                    </div>
                  )}
                </div>

                <Link to={`/projects/${project.id}`} style={{ display: 'block' }}>
                  <img
                    src={deviceViews[project.id] === 'desktop' ? project.mainImage : project.secondaryImage}
                    alt={`${project.title} interface preview`}
                    className="showcase-secondary-img"
                    style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </Link>
                <p className="showcase-desc">{project.description}</p>
                <p className="eyebrow" style={{ marginTop: '1rem' }}>{project.metric}</p>
                
                {/* ACTION BUTTON */}
                <div style={{ display: 'flex', gap: '12px', marginTop: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-primary"
                      style={{
                        padding: '12px 28px',
                        fontSize: '12px',
                        fontFamily: 'var(--mono)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none'
                      }}
                    >
                      Try now <Icon name="arrow-up-right" size={14} />
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-primary"
                      style={{
                        padding: '12px 28px',
                        fontSize: '12px',
                        fontFamily: 'var(--mono)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none'
                      }}
                    >
                      Learn more <Icon name="arrow-up-right" size={14} />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="contact section-pad" id="contact"><div className="contact-scan" aria-hidden="true" /><Reveal className="section-kicker"><span>03</span><span>CONTACT</span></Reveal><Reveal delay="delay-1" className="contact-content"><p className="eyebrow"><span className="status-dot" /> Available for applied AI and ML systems work</p><h2>Let's build<br /><em>the system.</em></h2><p className="contact-copy">Share the workflow, model, or product problem you are working through. I can help with research, prototyping, evaluation, and production delivery.</p><div className="contact-actions"><a className="button button-light" href="mailto:vummidichettyabhinav@gmail.com">Email me <Icon name="arrow-up-right" size={16} /></a><button className="copy-button" onClick={copyEmail}>{copied ? <Icon name="check" size={16} /> : <Icon name="copy" size={16} />} {copied ? "Copied" : "vummidichettyabhinav@gmail.com"}</button></div></Reveal></section>
    </>
  );
}
