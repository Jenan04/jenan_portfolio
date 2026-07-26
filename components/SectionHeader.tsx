import { T } from "@/lib/tokens";
import { useLang } from "@/context/LangContext";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
}

export default function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  const { lang } = useLang();
  const isAR = lang.dir === "rtl";

  return (
    <div style={{ marginBottom: "2.5rem", textAlign: isAR ? "right" : "left" }}>
      <div
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: "11px",
          color: T.amber,
          letterSpacing: "0.15em",
          marginBottom: "0.5rem",
        }}
      >
        {eyebrow}
      </div>
      <h2
        style={{
          fontFamily: isAR ? "'Noto Sans Arabic',sans-serif" : "'Inter',sans-serif",
          fontSize: "clamp(24px,4vw,36px)",
          fontWeight: 800,
          color: T.snow,
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
    </div>
  );
}