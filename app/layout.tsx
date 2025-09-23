import type { Metadata } from "next";
import "./globals.css";
import TipCalcContextProvider from "@/context/TipCalcContext";

export const metadata: Metadata = {
  title: {
    default: 'Tip Calculator',
    template: '%s | Tip Calculator'
  },
  description: 'Calculate tips and split bills easily with our accurate tip calculator. Perfect for restaurants, bars, and group dining.',
  keywords: ['tip calculator', 'bill splitter', 'restaurant tip', 'gratuity calculator', 'dining calculator'],
  authors: [{ name: 'Ken Cedrick A. Jimeno' }],
  creator: 'Ken Cedrick A. Jimeno',
  publisher: 'Ken Cedrick A. Jimeno',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jimeno-tip-calculator.vercel.app'), 
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`antialiased`}
      >
        <TipCalcContextProvider>
          {children}
        </TipCalcContextProvider>
      </body>
    </html>
  );
}
