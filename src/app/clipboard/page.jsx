import React from "react";
import Hero from "./Hero";
import Snippets from "./Snippets";
import Features from "./Features";
import Access from "./Access";
import Supercharge from "./Supercharge";
import References from "./References";
import CTA from "./CTA";
import Footer from "./Footer";

function ClipBoard() {
  return (
    <main className="font-baijamjuree bg-[url('/clipboard-website-images/bg-header-mobile.png')] mob:bg-[url('/clipboard-website-images/bg-header-desktop.png')] bg-no-repeat bg-contain">
      <Hero />
      <Snippets />
      <Features />
      <Access />
      <Supercharge />
      <References />
      <CTA />
      <Footer />
    </main>
  );
}

export default ClipBoard;
