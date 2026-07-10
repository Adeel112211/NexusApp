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
          backgroundColor: '#090a0f', /* Deep rich void */
          color: '#F3F4F6',
          fontFamily: 'var(--font-geist-sans), Helvetica, Arial, sans-serif',
          minHeight: '100vh',
          backgroundImage: `
            radial-gradient(circle at 50% 50%, transparent 20%, #090a0f 100%),
            radial-gradient(circle at 50% -20%, rgba(6, 182, 212, 0.12) 0%, transparent 60%),
            radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 28px 28px',
          backgroundAttachment: 'fixed',
        }}
      >
        {children}
      </body>
    </html>
  );
}
