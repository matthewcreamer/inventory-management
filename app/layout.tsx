import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PrimeReactProvider } from 'primereact/api';
// import "primereact/resources/themes/lara-light-cyan/theme.css";
// import 'primereact/resources/primereact.min.css';
import "./globals.css";
import 'primeicons/primeicons.css';
import Tailwind from 'primereact/passthrough/tailwind';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
