import React from "react";
import Logo from "../../../public/clipboard-website-images/logo.svg";
import Image from "next/image";
import Link from "next/link";
function Hero() {
  return (
    <section id="hero">
      <div className="section-container mb-40 px-10 pt-16 ">
        <Image className="mx-auto my-16" src={Logo} />
        <h3>A history of everything you copy</h3>
        <p className="section-content mb-10 text-2xl">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        {/* Button Container */}
        <div className="button-container">
          <Link
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
          >
            Download for iOS
          </Link>
          <Link
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
          >
            Download for Mac
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
