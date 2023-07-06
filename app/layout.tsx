"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import i18n from "./i18n";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

export default function RootLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I18nextProvider i18n={i18n}>
      <html>
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
