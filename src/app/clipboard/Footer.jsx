import React from "react";
import IconFacebook from "../../../public/images/icon-facebook.svg";
import IconInstagram from "../../../public/images/icon-instagram.svg";
import IconTwitter from "../../../public/images/icon-twitter.svg";
import Logo from "../../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="section-container">
        <div className="flex flex-col justify-between items-center md:flex-row">
          {/* Image */}
          <Image src={Logo} className="scale-50" />
          {/* Container for Menus and Social */}
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
            {/* Menu */}
            <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
              {/* Menu 1 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <Link href="#" className="hover:text-strongCyan">
                    FAQs
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-strongCyan">
                    Contact Us
                  </Link>
                </div>
              </div>
              {/* Menu 2 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <Link href="#" className="hover:text-strongCyan">
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <Link href="#" className="hover:text-strongCyan">
                    Press Kit
                  </Link>
                </div>
              </div>
              {/* Menu 3 */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <Link href="#" className="hover:text-strongCyan">
                    Install Guide
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-between w-32 py-1">
              <Link href="#">
                <Image src={IconFacebook} className="duration-200 ficon" />
              </Link>
              <Link href="#">
                <Image src={IconInstagram} className="duration-200 ficon" />
              </Link>
              <Link href="#">
                <Image src={IconTwitter} className="duration-200 ficon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
