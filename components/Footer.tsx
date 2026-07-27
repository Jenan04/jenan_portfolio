"use client";

import { useState } from "react";
import { T } from "@/lib/tokens";
import { useLang } from "@/context/LangContext";
import { useVisible } from "@/lib/hooks";

const EMAIL = "jenanyasser1@gmail.com";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Jenan04", icon: "⌥", sub: "Jenan04" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jenan-abuhassanein",
    icon: "↗",
    sub: "jenan-abuhassanein",
  },
  { label: "Email", href: `mailto:${EMAIL}`, icon: "✉", sub: EMAIL },
];

export default function Footer() {
  const { lang } = useLang();
  const [ref, visible] = useVisible();
  const [copied, setCopied] = useState(false);
  const isAR = lang.dir === "rtl";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* silent */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      style={{
        background: T.bgSurface,
        borderTop: `1px solid ${T.mistDim}33`,
        padding: "4rem 2rem 3rem",
        direction: lang.dir,
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* CTA block */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            textAlign: isAR ? "right" : "center",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "11px",
              color: T.amber,
              letterSpacing: "0.15em",
              marginBottom: "1rem",
            }}
          >
            {lang.contactEyebrow}
          </div>

          <h2
            style={{
              fontFamily: isAR ? "'Noto Sans Arabic',sans-serif" : "'Inter',sans-serif",
              fontSize: "clamp(22px,4vw,36px)",
              fontWeight: 800,
              color: T.snow,
              margin: "0 0 1rem",
            }}
          >
            {lang.contactTitle}
          </h2>

          <p
            style={{
              fontFamily: isAR ? "'Noto Sans Arabic',sans-serif" : "'Inter',sans-serif",
              fontSize: "15px",
              color: T.mist,
              lineHeight: "1.7",
              maxWidth: "480px",
              margin: isAR ? "0 auto 0 0" : "0 auto 2rem",
              paddingBottom: isAR ? "2rem" : 0,
            }}
          >
            {lang.contactSubtitle}
          </p>

          {/* Email copy row */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: T.bgCard,
              border: `1px solid ${T.mistDim}44`,
              borderRadius: "10px",
              padding: "12px 20px",
              marginBottom: "1.5rem",
              flexDirection: isAR ? "row-reverse" : "row",
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "14px",
                color: T.snowDim,
              }}
            >
              {EMAIL}
            </span>
            <button
              onClick={copyEmail}
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "12px",
                color: copied ? T.green : T.amber,
                background: copied ? `${T.green}18` : T.amberGlow,
                border: `1px solid ${copied ? T.green : T.amber}55`,
                borderRadius: "6px",
                padding: "4px 12px",
                cursor: "pointer",
                transition: "all 0.25s",
              }}
            >
              {copied ? lang.contactCopied : lang.contactCopyEmail}
            </button>
          </div>
        </div>

        {/* Social links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: isAR ? "flex-end" : "center",
            marginBottom: "3rem",
          }}
        >
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                background: T.bgCard,
                border: `1px solid ${T.mistDim}44`,
                borderRadius: "12px",
                padding: "1.25rem 2rem",
                textDecoration: "none",
                transition: "all 0.2s",
                minWidth: "160px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${T.amber}66`;
                el.style.background = T.bgCardHover;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${T.mistDim}44`;
                el.style.background = T.bgCard;
              }}
            >
              <span style={{ fontSize: "20px", color: T.amber }}>{s.icon}</span>
              <span
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: T.snow,
                }}
              >
                {s.label}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "11px",
                  color: T.mist,
                }}
              >
                {s.sub}
              </span>
            </a>
          ))}
        </div>

        {/* Footer bar */}
        <div
          style={{
            borderTop: `1px solid ${T.mistDim}33`,
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
            flexDirection: isAR ? "row-reverse" : "row",
          }}
        >
          <span
            style={{
              fontFamily: isAR ? "'Noto Sans Arabic',sans-serif" : "'Inter',sans-serif",
              fontSize: "13px",
              color: T.mistDim,
            }}
          >
            {lang.footerMade}
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "12px",
              color: T.mistDim,
            }}
          >
            {lang.footerStack}
          </span>
        </div>
      </div>
    </footer>
  );
}