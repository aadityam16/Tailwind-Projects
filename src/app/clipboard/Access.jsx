import React from "react";
import ImageDevices from "../../../public/clipboard-website-images/image-devices.png";
import Image from "next/image";
function Access() {
  return (
    <section id="access">
      <div className="section-container my-20">
        <h3>Access Clipboard Anywhere</h3>
        <p className="section-content mb-24 text-xl">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <Image src={ImageDevices} className="mx-auto" />
      </div>
    </section>
  );
}

export default Access;
