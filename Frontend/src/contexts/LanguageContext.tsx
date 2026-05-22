"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "ar" | "en";

const titles: Record<Lang, string> = {
  ar: "وصلة | نظام إدارة مواعيد ومرضى العيادات على الواتساب",
  en: "Wasla | Clinic Appointment & Patient Management on WhatsApp",
};

const descriptions: Record<Lang, string> = {
  ar: "وصلة هو مركز عمليات واتساب لعيادتك. صندوق وارد موحد، حجوزات مواعيد، تذكير تلقائي للمرضى، وفريق كامل يدير المحادثات من شاشة واحدة.",
  en: "Wasla is a WhatsApp operations center for your clinic. Unified inbox, appointment booking, automatic patient reminders, and a full team managing conversations from one screen.",
};

interface LanguageContextType {
  lang: Lang;
  dir: "rtl" | "ltr";
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");

  const toggleLang = () => setLang((prev) => (prev === "ar" ? "en" : "ar"));
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    document.title = titles[lang];

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", descriptions[lang]);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", titles[lang]);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", descriptions[lang]);

    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", titles[lang]);

    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", descriptions[lang]);
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
