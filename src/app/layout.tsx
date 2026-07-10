import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"] });
const dancingScript = Dancing_Script({ variable: "--font-dancing-script", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AppNexus - Find & Download the Best Apps",
  description: "Your trusted source for safe APK downloads and professional app reviews since 2024.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${dancingScript.variable}`}>
      <body
        style={{
          backgroundColor: '#0b0c10',
          color: '#F3F4F6',
          fontFamily: 'var(--font-geist-sans), Helvetica, Arial, sans-serif',
          minHeight: '100vh',
          backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(6,182,212,0.08) 0%, transparent 60%)',
        }}
      >
        {children}
      </body>
    </html>
  );
}
