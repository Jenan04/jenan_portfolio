"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { dict, LangDict } from "@/lib/dict";

interface LangContextValue {
  lang: LangDict;
  setLang: (lang: LangDict) => void;
}

export const LangCtx = createContext<LangContextValue>({
  lang: dict.en,
  setLang: () => {},
});

export function useLang(): LangContextValue {
  return useContext(LangCtx);
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [langState, setLangState] = useState<LangDict>(dict.en);

  return (
    <LangCtx.Provider value={{ lang: langState, setLang: setLangState }}>
      {children}
    </LangCtx.Provider>
  );
}