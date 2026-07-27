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
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: `1px solid ${T.mistDim}22`,
        backdropFilter: "blur(14px)",
        background: `${T.bg}d0`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        height: "56px",
        direction: "ltr",
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          color: T.amber,
          fontSize: "14px",
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
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "13px",
              color: activeSection === l ? T.amber : T.mist,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = T.snow)}
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color =
                activeSection === l ? T.amber : T.mist)
            }
          >
            {lang.navLabels[l]}
          </a>
        ))}

       <button
  onClick={() => setLang(isAR ? dict.en : dict.ar)}
  style={{
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: "12px",
    color: T.amber,
    background: "none",
    border: `1px solid ${T.amber}66`,
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
  title={isAR ? "Switch to English" : "التحويل إلى العربية"}
>
  {/* أيقونة الترجمة من Google / Material Icons */}
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ color: T.amber }}
  >
    <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
  </svg>

  <span>{isAR ? "EN" : "عربي"}</span>
</button>
      </div>
    </nav>
  );
}