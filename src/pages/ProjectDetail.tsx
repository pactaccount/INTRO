import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projects";
import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { useEffect } from "react";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(
    (p) =>
      p.id === id ||
      (id === "sql-agent" && p.id === "seaql") ||
      (id === "rag-pipeline" && p.id === "citecanvas")
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" />;
  }

  const themeVars = {
    "--project-bg": project.theme.bg,
    "--project-text": project.theme.text,
    "--project-text-dim": project.theme.textDim,
    "--project-accent": project.theme.accent,
    "--project-card-bg": project.theme.cardBg,
    "--project-border": project.theme.border,
  } as React.CSSProperties;

  return (
    <main
      style={{
        ...themeVars,
        backgroundColor: "var(--project-bg)",
        color: "var(--project-text)",
        transition: "background-color 300ms ease",
      }}
    >
      {/* HERO SECTION */}
      <section
        className="section-pad"
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          borderBottom: "1px solid var(--project-border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <Link
              to="/"
              style={{
                marginBottom: "2.5rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--project-text-dim)",
                fontFamily: "var(--mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                textDecoration: "none",
              }}
            >
              &larr; Back to products
            </Link>
          </Reveal>

          <Reveal delay="delay-1">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "100px",
                background: "var(--project-card-bg)",
                border: "1px solid var(--project-border)",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--project-accent)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--project-accent)",
                }}
              >
                {project.category}
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(3rem, 6.5vw, 6rem)",
                margin: "0 0 1.5rem",
                letterSpacing: "-0.04em",
                lineHeight: "1.02",
                color: "var(--project-text)",
              }}
            >
              {project.title}
            </h1>

            <p
              style={{
                fontSize: "clamp(1.2rem, 2vw, 1.45rem)",
                color: "var(--project-text-dim)",
                maxWidth: "850px",
                lineHeight: "1.6",
                margin: "0 0 3rem",
              }}
            >
              {project.tagline}
            </p>

            {/* ACTION CTA */}
            <div
              style={{
                display: "flex",
                gap: "1.25rem",
                flexWrap: "wrap",
                alignItems: "center",
                marginBottom: "4rem",
              }}
            >
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "var(--project-accent)",
                    color: "#000",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "0 32px",
                    minHeight: "52px",
                    fontFamily: "var(--mono)",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    borderRadius: "100px",
                    textDecoration: "none",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "translateY(-2px)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  Try now <Icon name="arrow-up-right" size={15} />
                </a>
              ) : (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "var(--project-accent)",
                    color: "#000",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "0 32px",
                    minHeight: "52px",
                    fontFamily: "var(--mono)",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    borderRadius: "100px",
                    textDecoration: "none",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "translateY(-2px)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  Learn more <Icon name="arrow-up-right" size={15} />
                </a>
              )}
            </div>

            {/* HIGHLIGHT STATS BAR */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1.5rem",
                paddingTop: "2.5rem",
                borderTop: "1px solid var(--project-border)",
              }}
            >
              {project.highlightStats.map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "var(--project-card-bg)",
                    border: "1px solid var(--project-border)",
                    borderRadius: "14px",
                    padding: "1.5rem 1.75rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.03em",
                      color: "var(--project-accent)",
                      lineHeight: "1",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--project-text-dim)",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT PREVIEW SHOWCASE */}
      <section style={{ padding: "5rem 0", background: "rgba(0,0,0,0.2)" }}>
        <Reveal>
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              padding: "0 24px",
            }}
          >
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid var(--project-border)",
                boxShadow: "0 30px 90px rgba(0,0,0,0.6)",
                background: "#000",
              }}
            >
              <img
                src={project.mainImage}
                alt={`${project.title} interface preview`}
                style={{
                  width: "100%",
                  display: "block",
                  maxHeight: "850px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* HOW IT WORKS (USER JOURNEY) */}
      <section
        className="section-pad"
        style={{
          padding: "8rem 0",
          borderBottom: "1px solid var(--project-border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--project-accent)",
                marginBottom: "1rem",
              }}
            >
              01 &mdash; User Workflow
            </div>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.25rem)",
                marginBottom: "1rem",
                fontWeight: 400,
                letterSpacing: "-0.03em",
              }}
            >
              How it works
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "var(--project-text-dim)",
                maxWidth: "700px",
                marginBottom: "4rem",
                lineHeight: "1.6",
              }}
            >
              A seamless, self-service experience designed for speed, security,
              and team autonomy.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              {project.howItWorks.map((step) => (
                <div
                  key={step.step}
                  style={{
                    background: "var(--project-card-bg)",
                    border: "1px solid var(--project-border)",
                    borderRadius: "18px",
                    padding: "2.75rem 2.25rem",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "var(--project-accent)",
                      marginBottom: "1.75rem",
                    }}
                  >
                    STEP {step.step}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 500,
                      marginBottom: "1rem",
                      letterSpacing: "-0.02em",
                      color: "var(--project-text)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--project-text-dim)",
                      lineHeight: "1.7",
                      fontSize: "1.05rem",
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* KEY PRODUCT CAPABILITIES */}
      <section
        className="section-pad"
        style={{
          padding: "8rem 0",
          background: "rgba(0,0,0,0.15)",
          borderBottom: "1px solid var(--project-border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--project-accent)",
                marginBottom: "1rem",
              }}
            >
              02 &mdash; Key Capabilities
            </div>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.25rem)",
                marginBottom: "1rem",
                fontWeight: 400,
                letterSpacing: "-0.03em",
              }}
            >
              Built for enterprise velocity
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "var(--project-text-dim)",
                maxWidth: "700px",
                marginBottom: "4rem",
                lineHeight: "1.6",
              }}
            >
              Every feature is engineered to eliminate operational friction and
              give stakeholders instant answers.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2.5rem",
              }}
            >
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "var(--project-bg)",
                    border: "1px solid var(--project-border)",
                    borderRadius: "18px",
                    padding: "2.75rem 2.25rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "12px",
                      color: "var(--project-accent)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    FEATURE 0{idx + 1}
                  </div>
                  <h3
                    style={{
                      marginBottom: "1rem",
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      color: "var(--project-text)",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--project-text-dim)",
                      lineHeight: "1.7",
                      margin: 0,
                      fontSize: "1.05rem",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* REAL-WORLD USE CASES */}
      <section
        className="section-pad"
        style={{
          padding: "8rem 0",
          borderBottom: "1px solid var(--project-border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--project-accent)",
                marginBottom: "1rem",
              }}
            >
              03 &mdash; Practical Solutions
            </div>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.25rem)",
                marginBottom: "1rem",
                fontWeight: 400,
                letterSpacing: "-0.03em",
              }}
            >
              Enterprise use cases
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "var(--project-text-dim)",
                maxWidth: "700px",
                marginBottom: "4rem",
                lineHeight: "1.6",
              }}
            >
              See how different departments and teams put this product to work
              every day.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2rem",
              }}
            >
              {project.useCases.map((useCase, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "var(--project-card-bg)",
                    border: "1px solid var(--project-border)",
                    padding: "2.5rem",
                    borderRadius: "18px",
                    borderLeft: "4px solid var(--project-accent)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {useCase.targetRole && (
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "11px",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--project-accent)",
                        marginBottom: "1rem",
                      }}
                    >
                      {useCase.targetRole}
                    </div>
                  )}
                  <h4
                    style={{
                      margin: "0 0 1rem",
                      fontSize: "1.35rem",
                      fontWeight: 500,
                      color: "var(--project-text)",
                    }}
                  >
                    {useCase.title}
                  </h4>
                  <p
                    style={{
                      margin: 0,
                      color: "var(--project-text-dim)",
                      fontSize: "1.05rem",
                      lineHeight: "1.7",
                    }}
                  >
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ENTERPRISE SECURITY & RELIABILITY */}
      <section
        className="section-pad"
        style={{
          padding: "8rem 0",
          background: "rgba(0,0,0,0.15)",
          borderBottom: "1px solid var(--project-border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--project-accent)",
                marginBottom: "1rem",
              }}
            >
              04 &mdash; Enterprise Trust
            </div>
            <h2
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.25rem)",
                marginBottom: "1rem",
                fontWeight: 400,
                letterSpacing: "-0.03em",
              }}
            >
              Security, reliability &amp; compliance
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "var(--project-text-dim)",
                maxWidth: "700px",
                marginBottom: "4rem",
                lineHeight: "1.6",
              }}
            >
              Built to satisfy stringent enterprise security standards and
              zero-trust governance requirements.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2rem",
              }}
            >
              {project.enterpriseGuarantees.map((guarantee, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "var(--project-bg)",
                    border: "1px solid var(--project-border)",
                    borderRadius: "16px",
                    padding: "2.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Icon
                      name="check"
                      size={20}
                      color="var(--project-accent)"
                    />
                    <h4
                      style={{
                        margin: 0,
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        color: "var(--project-text)",
                      }}
                    >
                      {guarantee.title}
                    </h4>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      color: "var(--project-text-dim)",
                      fontSize: "1.05rem",
                      lineHeight: "1.7",
                    }}
                  >
                    {guarantee.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* UI CONCEPT GALLERY (IF AVAILABLE) */}
      {project.aiImages.length > 0 && (
        <section
          className="section-pad"
          style={{
            padding: "8rem 0",
            borderBottom: "1px solid var(--project-border)",
          }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <Reveal>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--project-accent)",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                05 &mdash; Product Interface
              </div>
              <h2
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.25rem)",
                  marginBottom: "1rem",
                  fontWeight: 400,
                  letterSpacing: "-0.04em",
                  textAlign: "center",
                }}
              >
                High-fidelity interface preview
              </h2>
              <p
                style={{
                  textAlign: "center",
                  color: "var(--project-text-dim)",
                  marginBottom: "4rem",
                  fontSize: "1.15rem",
                }}
              >
                Interactive states and focused views built for daily productivity.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
                  gap: "2.5rem",
                }}
              >
                {project.aiImages.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    style={{
                      borderRadius: "18px",
                      overflow: "hidden",
                      border: "1px solid var(--project-border)",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
                      background: "#000",
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={`${project.title} Interface State ${idx + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* MOBILE ARCHITECTURE & INTERFACE SECTION */}
      {project.mobileImage && (
        <section
          className="section-pad"
          style={{
            padding: "8rem 0",
            borderBottom: "1px solid var(--project-border)",
            background: "rgba(0,0,0,0.25)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <Reveal>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--project-accent)",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                06 &mdash; Mobile Architecture &amp; Interface
              </div>
              <h2
                style={{
                  fontSize: "clamp(2.2rem, 4vw, 3.25rem)",
                  marginBottom: "1rem",
                  fontWeight: 400,
                  letterSpacing: "-0.04em",
                  textAlign: "center",
                }}
              >
                Native responsiveness on handheld viewports
              </h2>
              <p
                style={{
                  textAlign: "center",
                  color: "var(--project-text-dim)",
                  marginBottom: "4.5rem",
                  fontSize: "1.15rem",
                  maxWidth: "750px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  lineHeight: "1.6",
                }}
              >
                Engineered for rapid field inquiries, touch interactions, and single-hand accessibility without compromising deep analytical power.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                  gap: "4rem",
                  alignItems: "center",
                }}
              >
                {/* Smartphone Hardware Mockup */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      width: "320px",
                      maxWidth: "100%",
                      background: "#16181e",
                      border: "10px solid #232730",
                      borderRadius: "50px",
                      boxShadow: "0 30px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.12)",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Dynamic Island */}
                    <div
                      style={{
                        width: "84px",
                        height: "22px",
                        background: "#000",
                        borderRadius: "14px",
                        position: "absolute",
                        top: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        paddingRight: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#1a1a2e",
                          border: "1px solid #333",
                        }}
                      />
                    </div>

                    {/* Screenshot */}
                    <img
                      src={project.mobileImage}
                      alt={`${project.title} mobile interface`}
                      style={{
                        width: "100%",
                        display: "block",
                        borderRadius: "38px",
                      }}
                    />
                  </div>
                </div>

                {/* Mobile Engineering Pillars */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div
                    style={{
                      background: "var(--project-card-bg)",
                      border: "1px solid var(--project-border)",
                      borderRadius: "16px",
                      padding: "1.75rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--project-accent)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Touch-First Ergonomics
                    </div>
                    <div style={{ fontSize: "14px", color: "var(--project-text-dim)", lineHeight: "1.6" }}>
                      Thumb-friendly navigation rails, slide-out drawers, and hit targets exceeding WCAG 2.2 SC 2.5.8 touch standards.
                    </div>
                  </div>

                  <div
                    style={{
                      background: "var(--project-card-bg)",
                      border: "1px solid var(--project-border)",
                      borderRadius: "16px",
                      padding: "1.75rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--project-accent)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Adaptive Single-Column Layout
                    </div>
                    <div style={{ fontSize: "14px", color: "var(--project-text-dim)", lineHeight: "1.6" }}>
                      Multi-panel desktop workspaces gracefully collapse into intuitive stacked views and dedicated tab panels tailored for 393px viewports.
                    </div>
                  </div>

                  <div
                    style={{
                      background: "var(--project-card-bg)",
                      border: "1px solid var(--project-border)",
                      borderRadius: "16px",
                      padding: "1.75rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "12px",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--project-accent)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Zero Feature Degradation
                    </div>
                    <div style={{ fontSize: "14px", color: "var(--project-text-dim)", lineHeight: "1.6" }}>
                      Complete access to the live inference models, real-time voice receptionist, multimodal search, and verified evidence sources on mobile.
                    </div>
                  </div>

                  {project.link && (
                    <div style={{ marginTop: "0.75rem" }}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="button button-primary"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "12px 28px",
                          borderRadius: "100px",
                          fontSize: "12px",
                          fontFamily: "var(--mono)",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          textDecoration: "none",
                        }}
                      >
                        Try Mobile on Live URL <Icon name="arrow-up-right" size={14} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ACTION FOOTER */}
      <section
        className="section-pad"
        style={{ padding: "9rem 0", textAlign: "center" }}
      >
        <Reveal>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "100px",
              background: "var(--project-card-bg)",
              border: "1px solid var(--project-border)",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--project-accent)",
              }}
            >
              Get Started
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              marginBottom: "1.5rem",
              fontWeight: 400,
              letterSpacing: "-0.03em",
            }}
          >
            Ready to experience {project.title.split(" — ")[0]}?
          </h2>

          <p
            style={{
              fontSize: "1.25rem",
              color: "var(--project-text-dim)",
              maxWidth: "600px",
              margin: "0 auto 3rem",
              lineHeight: "1.6",
            }}
          >
            Explore the live product interface or inspect documentation.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "var(--project-accent)",
                  color: "#000",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "0 38px",
                  minHeight: "56px",
                  fontFamily: "var(--mono)",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  borderRadius: "100px",
                  textDecoration: "none",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                  transition:
                    "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "translateY(-3px)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                Try now <Icon name="arrow-up-right" size={16} />
              </a>
            ) : (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "var(--project-accent)",
                  color: "#000",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "0 38px",
                  minHeight: "56px",
                  fontFamily: "var(--mono)",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  borderRadius: "100px",
                  textDecoration: "none",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                  transition:
                    "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "translateY(-3px)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                Learn more <Icon name="arrow-up-right" size={16} />
              </a>
            )}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
