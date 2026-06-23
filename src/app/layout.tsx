import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syry AI Engine — Pitch Deck",
  description: "Do design ao aplicativo pronto, com inteligência artificial custando uma fração do normal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-full antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
