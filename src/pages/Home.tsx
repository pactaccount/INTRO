import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { projects } from "../data/projects";

export function Home() {
  const [copied, setCopied] = useState(false);

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
          <Reveal><p className="eyebrow"><span className="status-dot" /><span className="eyebrow-name">Abhinav Vummidichetty /</span> AI Engineer / Autonomous Agents & GenAI</p></Reveal>
          <Reveal delay="delay-1"><h1>AI Engineer<br /><em>building agentic workflows.</em></h1></Reveal>
          <Reveal delay="delay-2"><p className="hero-intro">I build intelligent, agent-driven workflows and Generative AI applications that solve real-world problems.</p></Reveal>
          <Reveal delay="delay-3" className="hero-actions"><button className="button button-primary" onClick={() => goTo("projects")}>View projects <Icon name="arrow-right" size={16} /></button><button className="text-link" onClick={() => goTo("contact")}>Contact me <Icon name="arrow-up-right" size={15} /></button></Reveal>
          <Reveal delay="delay-4" className="hero-footnote"><span>Currently building with</span><span className="micro-stack">Python <i /> PyTorch <i /> LLMs</span></Reveal>
        </div>
        <Reveal className="terminal-wrap" delay="delay-2">
          <div className="terminal-orbit orbit-one" /><div className="terminal-orbit orbit-two" />
          <div className="terminal-window" aria-label="Animated AI systems terminal preview">
            <div className="terminal-topbar"><div className="window-dots"><i /><i /><i /></div><span className="terminal-label">inference / live</span><span className="terminal-time">00:04:28</span></div>
            <div className="terminal-body">
              <div className="terminal-line muted"><span>01</span> <b>import</b> trust from signal</div><div className="terminal-line muted"><span>02</span> <b>from</b> systems <b>import</b> observe</div><div className="terminal-line blank"><span>03</span></div><div className="terminal-line"><span>04</span> <strong>agent</strong> = Agent(</div><div className="terminal-line indent"><span>05</span> <em>goal</em>=<mark>"make complexity useful"</mark>,</div><div className="terminal-line indent"><span>06</span> <em>guardrails</em>=[<mark>"grounded"</mark>, <mark>"measurable"</mark>],</div><div className="terminal-line"><span>07</span> )</div><div className="terminal-line blank"><span>08</span></div><div className="terminal-line pulse-line"><span>09</span> <b>run</b> agent.run(<span className="cursor-block" />)</div>
              <div className="terminal-output"><span className="output-pip">&gt;</span><span>output</span><strong>confidence: 0.94</strong></div><div className="terminal-signal"><span>signal strength</span><div className="signal-bars"><i /><i /><i /><i /><i /><i /><i /></div><strong>STABLE</strong></div>
            </div>
            <div className="terminal-footer"><span><i className="live-pip" /> model online</span><span>latency <b>128ms</b></span><span>tokens <b>1.2k</b></span></div>
          </div>
          <div className="terminal-caption"><span>01 / 03</span><span>production evaluation loop</span></div>
        </Reveal>
      </section>

      <section className="intro section-pad" id="about">
        <Reveal className="section-kicker"><span>01</span><span>PROFILE</span></Reveal>
        <div className="intro-grid">
          <Reveal><h2>AI systems<br /><em>for real work.</em></h2></Reveal>
          <Reveal delay="delay-1" className="intro-body"><p>I am an AI Engineer specializing in autonomous agents, retrieval-augmented generation (RAG), and deterministic workflows.</p><p>I focus on moving complex Generative AI prototypes into reliable production systems, with experience building enterprise RAG pipelines, text-to-SQL agents, and secure clinical chatbots.</p></Reveal>
          <Reveal delay="delay-2" className="intro-ascii"><span>01</span><pre>{"  .----------------.\n /  AGENT IN LOOP  /\n'----------------'\n       |  ^  |\n       | / \\ |\n    ___|     |___\n   /   |     |   \\ \n  /____|_____|____\\"}</pre><small>agent-centric machine learning</small></Reveal>
        </div>
      </section>

      <section className="work section-pad" id="projects">
        <Reveal className="section-kicker"><span>02</span><span>PROJECTS</span><span className="kicker-rule" /></Reveal>
        <div className="work-heading"><Reveal><h2>Projects and<br /><em>outcomes.</em></h2></Reveal><Reveal delay="delay-1"><p>Selected production systems covering retrieval, generative media, and model observability.</p></Reveal></div>
        
        <div className="project-showcase-list" style={{ display: 'flex', flexDirection: 'column', gap: '100px', marginTop: '40px' }}>
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index === 0 ? "delay-1" : index === 1 ? "delay-2" : "delay-3"} className="project-showcase">
              <Link to={`/projects/${project.id}`} className={`project-showcase-left bg-${project.tone}`} style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                <h3 className="showcase-title-bg">{project.title}</h3>
                <img src={project.mainImage} alt={project.title} className="showcase-main-img" style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              </Link>
              <div className="project-showcase-right">
                <h3 className="showcase-title">{project.title}</h3>
                <Link to={`/projects/${project.id}`} className="showcase-link">View product &rarr;</Link>
                <img src={project.secondaryImage} alt={`${project.title} secondary interface`} className="showcase-secondary-img" />
                <p className="showcase-desc">{project.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="contact section-pad" id="contact"><div className="contact-scan" aria-hidden="true" /><Reveal className="section-kicker"><span>03</span><span>CONTACT</span></Reveal><Reveal delay="delay-1" className="contact-content"><p className="eyebrow"><span className="status-dot" /> Available for applied AI and ML systems work</p><h2>Let's build<br /><em>the system.</em></h2><p className="contact-copy">Share the workflow, model, or product problem you are working through. I can help with research, prototyping, evaluation, and production delivery.</p><div className="contact-actions"><a className="button button-light" href="mailto:vummidichettyabhinav@gmail.com">Email me <Icon name="arrow-up-right" size={16} /></a><button className="copy-button" onClick={copyEmail}>{copied ? <Icon name="check" size={16} /> : <Icon name="copy" size={16} />} {copied ? "Copied" : "vummidichettyabhinav@gmail.com"}</button></div></Reveal></section>
    </>
  );
}
