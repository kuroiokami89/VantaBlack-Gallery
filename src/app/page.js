"use client";

const Gallery = dynamic(() => import("./Gallery"), { ssr: false });
import Header from "./components/Header";

export default function Home() {
  return (
    <div id="container">
      <Gallery />
      <Header />
    </div>
  );
}
