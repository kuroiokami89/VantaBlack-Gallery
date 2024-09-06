"use client";

import { NexaBold, Nexa, Eger } from "./fonts";

export default function Header() {
  return (
    <div className="header-container">
      <span className={`menu-btn ${Nexa.className}`}>MENU</span>
      <header id="header" className={`${Nexa.className}`}>
        <div className="header-container blocco">
          <span id="logo" className={`${Eger.className}`}>
            VANTABLACK
          </span>
          <div className="header-anchors">
            <a className="link" href="#projects">
              MY WORKS
            </a>
            <a className="link" href="#about">
              ABOUT
            </a>
            <a className="link" href="#footer">
              CONTACTS
            </a>
          </div>
        </div>
        <a className="link-me" href="https://vanta-black-website.vercel.app/">
          DEVELOPED BY @vantablack
        </a>
      </header>
    </div>
  );
}
