"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import localFont from "next/font/local";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import i18n from "./i18n";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

const SFProText = localFont({
  src: [
    {
      path: "../public/fonts/SF-Pro-Text-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/SF-Pro-Text-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/SF-Pro-Text-Semibold.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/SF-Pro-Text-Bold.otf",
      weight: "700",
    },
    {
      path: "../public/fonts/SF-Pro-Text-Heavy.otf",
      weight: "900",
    },
  ],
  variable: "--font-sfprotext",
});

export default function RootLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I18nextProvider i18n={i18n}>
      <html className={`${SFProText.variable} font-sfpro`}>
        <body>
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </I18nextProvider>
  );
}
