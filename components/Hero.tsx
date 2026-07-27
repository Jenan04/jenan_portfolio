"use client";

import { useState, useEffect } from "react";
import { T } from "@/lib/tokens";
import { useLang } from "@/context/LangContext";
import { useTypewriter } from "@/lib/hooks";
import TermWindow, { renderFormattedLine } from "./TermWindow";
import NeofetchSVG from "./NeofetchSVG";

export default function Hero() {
  const { lang } = useLang();
  const [svgVisible, setSvgVisible] = useState(false);
  const rows = useTypewriter(lang.heroTyped, 30);

  useEffect(() => {
    const t = setTimeout(() => setSvgVisible(true), 1600);
    return () => clearTimeout(t);
  }, [lang]);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 2rem 4rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Status badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          background: `${T.amber}14`,
          border: `1px solid ${T.amber}33`,
          borderRadius: "999px",
          padding: "6px 18px",
          marginBottom: "1.5rem",
          alignSelf: lang.dir === "rtl" ? "flex-end" : "flex-start",
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: T.green,
            display: "inline-block",
            boxShadow: `0 0 6px ${T.green}`,
          }}
        />
        <span
          style={{
            fontFamily: "'Inter',sans-serif",
            fontSize: "13px",
            color: T.amber,
          }}
        >
          {lang.heroBadge}
        </span>
      </div>

      {/* Greeting */}
      {/* <h1
        style={{
          fontFamily: "'Inter',sans-serif",
          fontWeight: 800,
          fontSize: "clamp(32px,6vw,60px)",
          color: T.snow,
          margin: "0 0 1rem",
          lineHeight: 1.15,
          textAlign: lang.dir === "rtl" ? "right" : "left",
        }}
      >
        {lang.heroGreeting}
      </h1>

      <blockquote
        style={{
          margin: "0 0 2rem",
          padding: "0.75rem 0 0.75rem 1.25rem",
          borderLeft: lang.dir === "rtl" ? "none" : `2px solid ${T.amber}55`,
          borderRight: lang.dir === "rtl" ? `2px solid ${T.amber}55` : "none",
          paddingLeft: lang.dir === "rtl" ? 0 : "1.25rem",
          paddingRight: lang.dir === "rtl" ? "1.25rem" : 0,
          fontFamily:
            lang.dir === "rtl" ? "'Noto Sans Arabic',sans-serif" : "'Inter',sans-serif",
          fontSize: "15px",
          color: T.mist,
          fontStyle: "italic",
          textAlign: lang.dir === "rtl" ? "right" : "left",
        }}
      >
        {lang.heroQuote}
      </blockquote> */}

      {/* Boot terminal */}
      {/* <TermWindow title="jenan — bash — 120×30" style={{ marginBottom: "1.75rem" }}>
        <div style={{ padding: "1.5rem 1.5rem 1.75rem", minHeight: "160px", background: T.bg }}>
          {lang.heroTyped.map((line, i) => {
            const text = rows[i];
            if (text === undefined) return null;
            const isCmd = line.startsWith("$");
            return (
              <div
                key={`${lang.lang}-${i}`}
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "14px",
                  lineHeight: "1.8",
                  color: isCmd ? T.amber : T.snowDim,
                  whiteSpace: "pre-wrap",
                  direction: "ltr",
                  textAlign: "left",
                }}
              >
                {text}
                {i === rows.length - 1 && (
                  <span
                    style={{
                      display: "inline-block",
                      width: "2px",
                      height: "16px",
                      background: T.amber,
                      marginLeft: "2px",
                      verticalAlign: "middle",
                      animation: "blink 1s step-end infinite",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </TermWindow> */}

      <TermWindow title="jenan — bash — 120×30" style={{ marginBottom: "1.75rem" }}>
  <div style={{ padding: "1.5rem 1.5rem 1.75rem", minHeight: "160px", background: T.bg }}>
    {lang.heroTyped.map((line: string, i: number) => {
      const text = rows[i];
      if (text === undefined) return null;

      const isCmd = line.startsWith("$");

      return (
        <div
          key={`${lang.lang}-${i}`}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            lineHeight: "1.8",
            whiteSpace: "pre-wrap",
            direction: "ltr",
            textAlign: "left",
          }}
        >
          {/* استدعاء دالة التنسيق الذكية */}
          {renderFormattedLine(text, isCmd, T)}

          {/* المؤشر المعتاد للسطر الأخير */}
          {i === rows.length - 1 && (
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "16px",
                background: T.amber,
                marginLeft: "4px",
                verticalAlign: "middle",
                animation: "blink 1s step-end infinite",
              }}
            />
          )}
        </div>
      );
    })}
  </div>
</TermWindow>

      {/* Neofetch */}
      <div
        style={{
          opacity: svgVisible ? 1 : 0,
          transform: svgVisible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {lang.dir === "rtl" && (
          <div
            style={{
              background: `${T.amber}0f`,
              border: `1px solid ${T.amber}33`,
              borderRadius: "10px",
              padding: "1rem 1.5rem",
              marginBottom: "1rem",
              fontFamily: "'Noto Sans Arabic',sans-serif",
              fontSize: "14px",
              color: T.snowDim,
              lineHeight: "1.7",
              direction: "rtl",
              textAlign: "right",
            }}
          >
            💻 {lang.heroNeofetchCaption}
          </div>
        )}
        <TermWindow title="neofetch — jenan@portfolio">
          <div style={{ background: "#0d1117", padding: "0.5rem 0", direction: "ltr" }}>
            <NeofetchSVG />
          </div>
        </TermWindow>
      </div>
    </section>
  );
}