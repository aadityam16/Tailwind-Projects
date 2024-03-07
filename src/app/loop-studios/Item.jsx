import React from "react";
import Image from "next/image";
function Item({ deskImgSrc, mobImgSrc, text }) {
  return (
    <div className="group item">
      {/* Desktop Image */}
      <Image
        src={deskImgSrc}
        className="hidden w-full duration-200 md:block group-hover:scale-110"
      />
      {/* Mobile Image */}
      <Image src={mobImgSrc} className="w-full md:hidden" />
      {/* Item Gradient */}
      <div className="item-gradient" />
      {/* Item Text */}
      <div className="text-[.83em] my-[1.67em] font-bold absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black font-josefin">
        {text}
      </div>
    </div>
  );
}

export default Item;
