import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jenan Y. AbuHasanein — Full-Stack Engineer",
  description:
    "Portfolio of Jenan Y. AbuHasanein — Full-Stack Software Engineer & CS Student at Al-Azhar University, Gaza. Building secure, clean, and real software.",
  keywords: [
    "Jenan AbuHasanein",
    "Full-Stack Engineer",
    "Gaza",
    "Next.js",
    "Laravel",
    "PHP",
    "TypeScript",
    "React",
    "DevSecOps",
    "Software Engineer",
  ],
  authors: [{ name: "Jenan Y. AbuHasanein" }],
  openGraph: {
    title: "Jenan Y. AbuHasanein — Full-Stack Engineer",
    description:
      "Engineer, builder, problem solver. Building software that earns its complexity — from Gaza, Palestine.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenan Y. AbuHasanein — Full-Stack Engineer",
    description: "Engineer, builder, problem solver. From Gaza, Palestine.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#0C0F1A" }}>{children}</body>
    </html>
  );
}