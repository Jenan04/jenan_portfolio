"use client";

import { useEffect, useState } from "react";
import { T } from "@/lib/tokens";
import { LangProvider, useLang } from "@/context/LangContext";
import Nav from "./Nav";
import Hero from "./Hero";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import PrinciplesSection from "./PrinciplesSection";
import Footer from "./Footer";

const SECTIONS = ["about", "projects", "principles", "contact"] as const;

// ─── Inner shell (needs lang context) ────────────────────────────────────────
function PortfolioInner() {
  const { lang } = useLang();
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  const isAR = lang.lang === "ar";
  const bodyFont = isAR
    ? "'Noto Sans Arabic','Inter',sans-serif"
    : "'Inter',sans-serif";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;700;800&family=Noto+Sans+Arabic:wght@400;500;700;800&display=swap');
        *,*::before,*::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: ${T.bg};
          color: ${T.snow};
          font-family: ${bodyFont};
        }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: ${T.bg}; }
        ::-webkit-scrollbar-thumb { background: ${T.mistDim}; border-radius: 3px; }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        @media (max-width: 680px) {
          [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div dir={lang.dir} lang={lang.lang} style={{ fontFamily: bodyFont }}>
        <Nav activeSection={activeSection} />
        <Hero />

        <section
          id="projects"
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "4rem 2rem 2rem",
            direction: lang.dir,
          }}
        >
          <SectionHeader
            eyebrow={lang.sectionProjects}
            title={lang.sectionProjectsTitle}
          />
          {lang.projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </section>

        <PrinciplesSection />
        <Footer />
      </div>
    </>
  );
}

// ─── Public export (provides context) ────────────────────────────────────────
export default function Portfolio() {
  return (
    <LangProvider>
      <PortfolioInner />
    </LangProvider>
  );
}