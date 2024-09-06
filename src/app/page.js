"use client";

const Gallery = dynamic(() => import("./components/Gallery"), { ssr: false });
import Header from "./components/Header";

export default function Home() {
  return (
    <div id="container">
      <Gallery />
      <Header />
    </div>
  );
}
