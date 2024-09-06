"use client";

import "./style.css";
import "./mediaquery.css";
import "./fonts.css";
import HeadComponent from "./components/HeadComponent";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <HeadComponent />
      <body>{children}</body>
    </html>
  );
}
