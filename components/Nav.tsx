"use client";

import { T } from "@/lib/tokens";
import { useLang } from "@/context/LangContext";
import { dict } from "@/lib/dict";

interface NavProps {
  activeSection: string;
}

export default function Nav({ activeSection }: NavProps) {
  const { lang, setLang } = useLang();
  const isAR = lang.lang === "ar";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >

      <nav
        style={{
          width: "100%",

          maxWidth: "1100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2rem",
          height: "52px",
          background: "rgba(15, 15, 20, 0.75)",       
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",         
          border: "1px solid rgba(255, 255, 255, 0.08)", 
          borderRadius: "9999px",
          direction: "ltr",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: T.amber,
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "0.05em",
          }}
        >
          jenan<span style={{ color: T.mist }}>@</span>portfolio
        </span>

        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {lang.navLinks.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                color: activeSection === l ? T.amber : T.mist,
                textDecoration: "none",
                transition: "color 0.2s",
                fontWeight: activeSection === l ? 500 : 400,
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = T.snow)
              }
              onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color =
                activeSection === l ? T.amber : T.mist)
              }
            >
              {lang.navLabels[l]}
            </a>
          ))}
        </div>

        <button
          onClick={() => setLang(isAR ? dict.en : dict.ar)}
          title={isAR ? "Switch to English" : "التحويل إلى العربية"}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            color: T.amber,
            background: "none",
            border: `1px solid ${T.amber}55`,
            borderRadius: "6px",
            padding: "4px 10px",
            cursor: "pointer",
            letterSpacing: "0.05em",
            transition: "all 0.2s",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = T.amberGlow)
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "none")
          }
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
          </svg>
          <span>{isAR ? "EN" : "AR"}</span>
        </button>
      </nav>
    </header>
  );
}