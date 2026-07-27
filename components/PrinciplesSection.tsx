"use client";

import { T } from "@/lib/tokens";
import { useLang } from "@/context/LangContext";
import { useVisible } from "@/lib/hooks";
import SectionHeader from "./SectionHeader";

export default function PrinciplesSection() {
  const { lang } = useLang();
  const [ref, visible] = useVisible();

  return (
    <section
      id="principles"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "6rem 2rem",
        direction: lang.dir,
      }}
    >
      <SectionHeader
        eyebrow={lang.sectionPrinciples}
        title={lang.sectionPrinciplesTitle}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "1.25rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        {lang.principles.map((p) => (
          <div
            key={p.title}
            style={{
              background: T.bgCard,
              border: `1px solid ${T.mistDim}44`,
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "1.25rem 1.5rem 0" }}>
              <div
                style={{
                  fontFamily:
                    lang.dir === "rtl"
                      ? "'Noto Sans Arabic',sans-serif"
                      : "'Inter',sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: T.snow,
                  marginBottom: "1rem",
                  textAlign: lang.dir === "rtl" ? "right" : "left",
                }}
              >
                {p.title}
              </div>
            </div>

            <pre
              style={{
                margin: 0,
                padding: "0 1.5rem 1.25rem",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "12px",
                lineHeight: "1.7",
                color: T.mist,
                background: "none",
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                direction: "ltr",
                textAlign: "left",
              }}
            >
              {p.code}
            </pre>

            <div
              style={{
                borderTop: `1px solid ${T.mistDim}33`,
                padding: "1rem 1.5rem",
                fontFamily:
                  lang.dir === "rtl"
                    ? "'Noto Sans Arabic',sans-serif"
                    : "'Inter',sans-serif",
                fontSize: "13px",
                color: T.amber,
                lineHeight: "1.6",
                fontStyle: "italic",
                textAlign: lang.dir === "rtl" ? "right" : "left",
              }}
            >
              {lang.dir === "rtl" ? "" : "// "}
              {p.note}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}