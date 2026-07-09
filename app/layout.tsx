import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { UserProvider } from "@/context/userContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Islamic Donation Management System - Zakat, Fitra & Sadqa Platform",
  description: "A comprehensive platform for managing Islamic charitable donations including Zakat, Fitra, Sadqa, and general donations. Connect donors with verified campaigns and organizations.",
  keywords: "donation, zakat, fitra, sadqa, charity, islamic, fundraising",
  openGraph: {
    title: "Islamic Donation Management System",
    description: "Support Islamic charities and causes with transparent, verified donations",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserProvider>
          <div className="flex flex-col">
            <Navbar />
          </div>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
