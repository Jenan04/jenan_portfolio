import { CSSProperties, ReactNode } from "react";
import { T } from "@/lib/tokens";

interface TermWindowProps {
  title: string;
  children: ReactNode;
  style?: CSSProperties;
}

export default function TermWindow({ title, children, style }: TermWindowProps) {
  return (
    <div
      style={{
        background: T.bgCard,
        border: `1px solid ${T.mistDim}55`,
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: `0 0 0 1px ${T.amber}0a, 0 24px 64px #000a`,
        ...style,
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: T.bgSurface,
          borderBottom: `1px solid ${T.mistDim}33`,
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#F85149",
            display: "inline-block",
          }}
        />
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#E8A84C",
            display: "inline-block",
          }}
        />
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "#3FB950",
            display: "inline-block",
          }}
        />
        <span
          style={{
            marginLeft: "auto",
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "12px",
            color: T.mistDim,
          }}
        >
          {title}
        </span>
      </div>

      {children}
    </div>
  );
}

export function renderFormattedLine(text: string, isCmd: boolean, T: any) {
  // 1. إذا كان السطر عبارة عن تعليق يبدأ بـ //
  if (text.trim().startsWith("//")) {
    return <span style={{ color: T.mistDim, fontStyle: "italic" }}>{text}</span>;
  }

  // 2. إذا كان السطر يحتوي على سطر uname الحقيقي ونريد تلوين الجزء الفرعي بالرمادي
  if (text.includes("#1 SMP PREEMPT")) {
    const parts = text.split("#1 SMP PREEMPT");
    return (
      <>
        <span>{parts[0]}</span>
        <span style={{ color: T.mistDim }}>#1 SMP PREEMPT{parts[1]}</span>
      </>
    );
  }

  // 3. إذا كان أمراً عادي يبدأ بـ $
  if (isCmd) {
    return <span style={{ color: T.amber, fontWeight: "600" }}>{text}</span>;
  }

  // 4. باقي النصوص العادية
  return <span style={{ color: T.snowDim }}>{text}</span>;
}