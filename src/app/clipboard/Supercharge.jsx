import React from "react";
import IconBlacklist from "../../../public/images/icon-blacklist.svg";
import IconPreview from "../../../public/images/icon-preview.svg";
import IconText from "../../../public/images/icon-text.svg";
import Image from "next/image";
function Supercharge() {
  return (
    <section id="supercharge">
      <div className="section-container my-20">
        <h3>Supercharge your workflow</h3>
        <p className="section-content mb-16 text-xl">
          We've got the tools to boost your productivity.
        </p>
        {/* Items Container */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-16 md:space-y-0 md:space-x-12">
          {/* Item 1 */}
          <div className="flex flex-col space-y-5 items-center">
            <Image src={IconBlacklist} className="mb-6" />
            <h5>Create Blacklists</h5>
            <p className="max-w-md text-grayishBlue">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col space-y-5 items-center">
            <Image src={IconText} className="mb-6" />
            <h5>Plain Text Snippets</h5>
            <p className="max-w-md text-grayishBlue">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col space-y-5 items-center">
            <Image src={IconPreview} className="mb-6" />
            <h5>Sneak Preview</h5>
            <p className="max-w-md text-grayishBlue">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Supercharge;
