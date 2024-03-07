import Image from "next/image";
import React from "react";
import Logo from "../../../public/loopstudios-website-images/logo.svg";
import Link from "next/link";
import IconFacebook from "../../../public/loopstudios-website-images/icon-facebook.svg";
import IconInstagram from "../../../public/loopstudios-website-images/icon-instagram.svg";
import IconTwitter from "../../../public/loopstudios-website-images/icon-twitter.svg";
import IconPinterest from "../../../public/loopstudios-website-images/icon-pinterest.svg";

function Footer() {
  return (
    <footer className="bg-black">
      {/* Container */}
      <div className="container max-w-6xl py-10 mx-auto">
        {/* Footer Flex Container */}
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          {/* Menu & Logo Container */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4 ">
            <div className="h-8">
              <Image src={Logo} className="w-44 md:ml-3" />
            </div>
            {/* Menu Container */}
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {/* Item 1 */}
              <div className="h-10 group">
                <Link href="#" className="font-alata font-light">
                  About
                </Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
              </div>
              {/* Item 2 */}
              <div className="h-10 group">
                <Link href="#" className="font-alata font-light">
                  Careers
                </Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
              </div>
              {/* Item 3 */}
              <div className="h-10 group">
                <Link href="#" className="font-alata font-light">
                  Events
                </Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
              </div>
              {/* Item 4 */}
              <div className="h-10 group">
                <Link href="#" className="font-alata font-light">
                  Products
                </Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
              </div>
              {/* Item 5 */}
              <div className="h-10 group">
                <Link href="#" className="font-alata font-light">
                  Support
                </Link>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50" />
              </div>
            </div>
          </div>
          {/* Social & Copy Container */}
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            {/* Icons Container */}
            <div className="flex items-center justify-center space-x-4 md:justify-end mx-auto md:mx-0">
              {/* Icon 1 */}
              <div className="group h-8">
                <Link href="#">
                  <Image src={IconFacebook} className="h-6" />
                </Link>
              </div>
              {/* Icon 2 */}
              <div className="group h-8">
                <Link href="#">
                  <Image src={IconTwitter} className="h-6" />
                </Link>
              </div>
              {/* Icon 3 */}
              <div className="group h-8">
                <Link href="#">
                  <Image src={IconPinterest} className="h-6" />
                </Link>
              </div>
              {/* Icon 4 */}
              <div className="group h-8">
                <Link href="#">
                  <Image src={IconInstagram} className="h-6" />
                </Link>
              </div>
            </div>
            {/* Copy */}
            <div className="font-bold">
              &copy; 2024 Loopstudions. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
