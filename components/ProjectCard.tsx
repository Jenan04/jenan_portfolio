"use client";

import { useState, useRef } from "react";
import { T } from "@/lib/tokens";
import { useLang } from "@/context/LangContext";
import { useVisible } from "@/lib/hooks";
import { Project, ProjectStatus } from "@/lib/dict";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const STATUS_COLOR: Record<ProjectStatus, string> = {
  shipped: T.green,
  inprogress: T.blue,
  capstone: T.amber,
};

export default function ProjectCard({ project: p, index }: ProjectCardProps) {
  const { lang } = useLang();
  const [ref, visible] = useVisible();
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"plain" | "tech">("plain");
  const isAR = lang.dir === "rtl";

  const statusLabel: Record<ProjectStatus, string> = {
    shipped: lang.statusShipped,
    inprogress: lang.statusInProgress,
    capstone: lang.statusCapstone,
  };

  const content = view === "plain" ? p.plain : p.tech;
  const accentColor = p.color;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
        background: T.bgCard,
        border: `1px solid ${T.mistDim}44`,
        borderRadius: "12px",
        overflow: "hidden",
        marginBottom: "1.25rem",
      }}
    >
      {/* Header row — toggles expand */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          textAlign: isAR ? "right" : "left",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "1.5rem 2rem",
          display: "flex",
          alignItems: "center",
          flexDirection: isAR ? "row-reverse" : "row",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "12px",
            color: T.mistDim,
            minWidth: "24px",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "0.75rem",
              flexWrap: "wrap",
              flexDirection: isAR ? "row-reverse" : "row",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter',sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                color: T.snow,
              }}
            >
              {p.name}
            </span>
            <span
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "10px",
                color: accentColor,
                border: `1px solid ${accentColor}55`,
                padding: "2px 8px",
                borderRadius: "4px",
                letterSpacing: "0.1em",
              }}
            >
              {p.badge}
            </span>
          </div>
          <div
            style={{
              fontFamily: isAR ? "'Noto Sans Arabic',sans-serif" : "'Inter',sans-serif",
              fontSize: "14px",
              color: T.mist,
              marginTop: "2px",
            }}
          >
            {p.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            flexShrink: 0,
            flexDirection: isAR ? "row-reverse" : "row",
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "11px",
              color: STATUS_COLOR[p.status],
              letterSpacing: "0.08em",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: STATUS_COLOR[p.status],
                display: "inline-block",
                boxShadow: `0 0 5px ${STATUS_COLOR[p.status]}`,
              }}
            />
            {statusLabel[p.status]}
          </span>
          <span
            style={{
              color: T.mistDim,
              fontSize: "18px",
              transform: open ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
              display: "inline-block",
            }}
          >
            ›
          </span>
        </div>
      </button>

      {/* Expandable body */}
      <div
        style={{
          maxHeight: open ? "1400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.5s ease",
        }}
      >
        <div style={{ borderTop: `1px solid ${T.mistDim}33`, padding: "1.5rem 2rem 2rem" }}>
          {/* Plain / Tech toggle */}
          <div
            style={{
              display: "flex",
              gap: 0,
              marginBottom: "1.5rem",
              borderRadius: "8px",
              overflow: "hidden",
              border: `1px solid ${T.mistDim}44`,
              width: "fit-content",
              flexDirection: isAR ? "row-reverse" : "row",
            }}
          >
            {(["plain", "tech"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                style={{
                  fontFamily: isAR
                    ? "'Noto Sans Arabic',sans-serif"
                    : "'JetBrains Mono',monospace",
                  fontSize: "12px",
                  padding: "7px 18px",
                  border: "none",
                  cursor: "pointer",
                  background: view === v ? accentColor : "transparent",
                  color: view === v ? T.bg : T.mist,
                  fontWeight: view === v ? 700 : 400,
                  transition: "all 0.2s",
                }}
              >
                {v === "plain" ? lang.togglePlain : lang.toggleTech}
              </button>
            ))}
          </div>

          {/* Summary */}
          <p
            style={{
              fontFamily: isAR ? "'Noto Sans Arabic',sans-serif" : "'Inter',sans-serif",
              fontSize: "15px",
              color: T.snow,
              lineHeight: "1.7",
              margin: "0 0 1.5rem",
              fontWeight: 500,
              textAlign: isAR ? "right" : "left",
            }}
          >
            {content.summary}
          </p>

          {/* Detail grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem 2rem",
              direction: isAR ? "rtl" : "ltr",
            }}
          >
            {/* Motivation */}
            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "11px",
                  color: accentColor,
                  letterSpacing: "0.1em",
                  marginBottom: "0.5rem",
                }}
              >
                {lang.labelMotivation}
              </div>
              <p
                style={{
                  fontFamily: isAR ? "'Noto Sans Arabic',sans-serif" : "'Inter',sans-serif",
                  fontSize: "14px",
                  color: T.snowDim,
                  lineHeight: "1.7",
                  margin: 0,
                  textAlign: isAR ? "right" : "left",
                }}
              >
                {content.motivation}
              </p>
            </div>

            {/* Challenge */}
            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "11px",
                  color: T.red,
                  letterSpacing: "0.1em",
                  marginBottom: "0.5rem",
                }}
              >
                {lang.labelChallenge}
              </div>
              <p
                style={{
                  fontFamily: isAR ? "'Noto Sans Arabic',sans-serif" : "'Inter',sans-serif",
                  fontSize: "14px",
                  color: T.snowDim,
                  lineHeight: "1.7",
                  margin: 0,
                  textAlign: isAR ? "right" : "left",
                }}
              >
                {content.challenge}
              </p>
            </div>

            {/* Architecture (tech view only) */}
            {view === "tech" && content.architecture && (
              <div style={{ gridColumn: "1 / -1" }}>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "11px",
                    color: T.mist,
                    letterSpacing: "0.1em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {lang.labelArchitecture}
                </div>
                <div
                  style={{
                    background: T.bg,
                    border: `1px solid ${T.mistDim}44`,
                    borderRadius: "8px",
                    padding: "1rem 1.25rem",
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "13px",
                    color: T.snowDim,
                    direction: "ltr",
                    textAlign: "left",
                    overflowX: "auto",
                  }}
                >
                  {content.architecture.split(" → ").map((step, i, arr) => (
                    <span key={i}>
                      <span style={{ color: accentColor }}>{step}</span>
                      {i < arr.length - 1 && (
                        <span style={{ color: T.mistDim }}> → </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Outcome */}
            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "11px",
                  color: T.green,
                  letterSpacing: "0.1em",
                  marginBottom: "0.5rem",
                }}
              >
                {lang.labelOutcome}
              </div>
              <p
                style={{
                  fontFamily: isAR ? "'Noto Sans Arabic',sans-serif" : "'Inter',sans-serif",
                  fontSize: "14px",
                  color: T.snowDim,
                  lineHeight: "1.7",
                  margin: 0,
                  textAlign: isAR ? "right" : "left",
                }}
              >
                {content.outcome}
              </p>
            </div>

            {/* Stack */}
            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "11px",
                  color: T.mist,
                  letterSpacing: "0.1em",
                  marginBottom: "0.75rem",
                }}
              >
                {lang.labelStack}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  justifyContent: isAR ? "flex-end" : "flex-start",
                }}
              >
                {p.stack.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "11px",
                      color: T.mist,
                      background: `${T.mistDim}22`,
                      border: `1px solid ${T.mistDim}44`,
                      padding: "3px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div style={{ gridColumn: "1 / -1", marginTop: "0.25rem" }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "11px",
                  color: T.mist,
                  letterSpacing: "0.1em",
                  marginBottom: "0.75rem",
                }}
              >
                {lang.labelLinks}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.6rem",
                  justifyContent: isAR ? "flex-end" : "flex-start",
                }}
              >
                {p.links.map((lnk, i) => (
                  <a
                    key={i}
                    href={lnk.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "12px",
                      color: lnk.primary ? T.bg : accentColor,
                      background: lnk.primary ? accentColor : "transparent",
                      border: `1px solid ${accentColor}`,
                      padding: "6px 16px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      transition: "all 0.2s",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                    onMouseEnter={(e) => {
                      if (!lnk.primary)
                        (e.currentTarget as HTMLElement).style.background = `${accentColor}18`;
                    }}
                    onMouseLeave={(e) => {
                      if (!lnk.primary)
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    {lnk.primary ? "↗" : "⌥"}{" "}
                    {lang[lnk.label as keyof typeof lang] as string}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}