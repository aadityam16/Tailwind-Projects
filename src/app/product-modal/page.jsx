import Image from "next/image";
import React from "react";
import HeadphoneImage from "./images/headphone.png";
import WeightImage from "./images/weight.png";
import WishlistImage from "./images/heart.png";

function ProductModalPage() {
  return (
    <div className="flex items-center justify-center bg-slate-100 min-h-screen">
      {/* Card Container */}
      <div className="flex flex-col md:flex-row p-6 md:p-16 m-3 md:m-0 shadow-2xl rounded-2xl bg-white space-y-10 md:space-x-10 md:space-y-0">
        <div>
          <Image
            src={HeadphoneImage}
            className="mx-auto duration-200 hover:scale-105 w-60"
          />
        </div>
        <div className="flex flex-col space-y-6">
          {/* Label and description container */}
          <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <div>
              <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                Free Shipping
              </div>
            </div>
            {/* Title */}
            <div className="max-w-sm text-2xl font-medium">
              Razed Kraken Kitty Edt Gaming Headset Quartz
            </div>
            {/* Price Container */}
            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left ">
              <p className="line-through">$799</p>
              <p className="text-5xl font-bold">$599</p>
              <p className="text-sm font-light text-gray-400">
                This offer is valid until April 3rd or as long as stock lasts!
              </p>
            </div>
            {/* Button group */}
            <div className="group">
              <button className="bg-blue-700 transition-all duration-150 w-full text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:border-t-blue-700 group-hover:shadow-lg group-hover:bg-blue-700">
                <div className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                  Add to Cart
                </div>
              </button>
            </div>
            {/* Stock */}
            <div className="flex items-center space-x-3 group">
              <div className="w-3 h-3 rounded-full bg-green-400 group-hover:animate-ping" />
              <div className="text-sm">50+ pcs. in stock</div>
            </div>
            {/* Bottom Buttons Container */}
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg transition-all duration-150 hover:-translate-y-0.5">
                <Image src={WeightImage} className="w-8" />
                <span>Add to cart</span>
              </button>
              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg transition-all duration-150 hover:-translate-y-0.5">
                <Image src={WishlistImage} className="w-8" />
                <span>Add to wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModalPage;
