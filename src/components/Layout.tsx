import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "./Icon";

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When changing routes, scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location.pathname]);

  const goTo = (id: string) => { 
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); 
    }
    setMenuOpen(false); 
  };

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className={`site-nav ${scrolled ? "nav-scrolled" : ""}`}>
        <button className="brand" onClick={() => goTo("top")} aria-label="Back to top"><span className="brand-mark"><span /></span><span>ABHINAV.V</span></button>
        <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`} aria-label="Main navigation"><button onClick={() => goTo("projects")}>My Work</button><button onClick={() => window.open("/resume.pdf", "_blank")}>Resume</button><button onClick={() => goTo("contact")}>Contact</button></nav>
        <div className="nav-socials" aria-label="Social links"><a href="mailto:vummidichettyabhinav@gmail.com" title="Gmail" aria-label="Gmail"><Icon name="mail" size={16} /></a><a href="https://github.com/pactaccount" target="_blank" rel="noreferrer" title="GitHub" aria-label="GitHub"><Icon name="github" size={16} /></a><a href="https://www.linkedin.com/in/abhinav-vummidichetty/" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="LinkedIn"><Icon name="linkedin" size={16} /></a></div>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}><Icon name={menuOpen ? "close" : "menu"} size={20} /></button>
      </header>

      <Outlet />

      <footer className="site-footer section-pad"><div className="footer-brand"><span className="brand-mark"><span /></span><span>Designed &amp; built by Abhinav Vummidichetty</span></div><div className="footer-links"><a href="https://github.com/pactaccount" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={17} /></a><a href="https://www.linkedin.com/in/abhinav-vummidichetty/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={17} /></a><button onClick={() => goTo("top")} aria-label="Back to top"><Icon name="arrow-up" size={17} /></button></div><span className="footer-year">(c) 2024 / made with intent</span></footer>
    </div>
  );
}
