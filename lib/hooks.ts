"use client";

import { useState, useEffect, useRef } from "react";

// ─── Typewriter hook ──────────────────────────────────────────────────────────
export function useTypewriter(lines: string[], speed = 32): string[] {
  const [rows, setRows] = useState<string[]>([]);
  const [li, setLi] = useState(0);
  const [ci, setCi] = useState(0);

  useEffect(() => {
    setRows([]);
    setLi(0);
    setCi(0);
  }, [JSON.stringify(lines)]);

  useEffect(() => {
    if (li >= lines.length) return;
    const line = lines[li];
    if (ci <= line.length) {
      const t = setTimeout(() => {
        setRows((prev) => {
          const n = [...prev];
          n[li] = line.slice(0, ci);
          return n;
        });
        setCi((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLi((l) => l + 1);
        setCi(0);
      }, speed * 3);
      return () => clearTimeout(t);
    }
  }, [ci, li, lines, speed]);

  return rows;
}

// ─── Intersection Observer hook ───────────────────────────────────────────────
export function useVisible(threshold = 0.12): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}