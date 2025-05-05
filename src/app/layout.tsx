import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jane Doe | Senior AI Engineer Portfolio",
  description: "Portfolio showcasing skills, experience, and projects of a seasoned AI & Machine Learning Engineer",
  keywords: ["AI Engineer", "Machine Learning", "Portfolio", "Data Science", "Deep Learning", "NLP", "Computer Vision"],
  authors: [
    {
      name: "Jane Doe",
      url: "https://jane-doe-ai.example.com",
    },
  ],
  icons: {
    icon: [
      { url: '/brain-icon.png' }
    ],
    apple: [
      { url: '/brain-icon.png' }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/brain-icon.png" />
        <link rel="apple-touch-icon" href="/brain-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClientBody>{children}</ClientBody>
        </ThemeProvider>
      </body>
    </html>
  );
}
