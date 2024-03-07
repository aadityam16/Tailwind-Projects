import Image from "next/image";
import React from "react";
import Logo from "../../../public/loopstudios-website-images/logo.svg";
import Link from "next/link";
function Hero() {
  return (
    <section
      id="hero"
      className="bg-[url('/loopstudios-website-images/mobile/image-hero.jpg')] mob:bg-[url('/loopstudios-website-images/desktop/image-hero.jpg')] bg-no-repeat bg-cover"
    >
      {/* Hero Container */}
      <div className="container max-w-6xl mx-auto px-6 py-12 md:px-0">
        {/* Menu/Logo Container */}
        <nav
          className="flex justify-between items-center 
        font-bold text-white"
        >
          {/* Logo */}
          <Image src={Logo} />
          {/* Menu */}
          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            <div className="group">
              <Link href="#">About</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
            </div>
            <div className="group">
              <Link href="#">Careers</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
            </div>
            <div className="group">
              <Link href="#">Events</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
            </div>
            <div className="group">
              <Link href="#">Products</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
            </div>
            <div className="group">
              <Link href="#">Support</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
            </div>
          </div>
          {/* Hamburger menu button */}
        </nav>

        <div className="max-w-lg my-32 p-4 font-josefin text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl ">
          Impressive Experiences that deliver
        </div>
      </div>
    </section>
  );
}

export default Hero;
