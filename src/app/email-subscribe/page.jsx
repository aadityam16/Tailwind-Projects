import Image from "next/image";
import React from "react";
import CardImage from "./images/image.jpg";
function EmailSubPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-700">
      {/* Card */}
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
        {/* Flex Container */}
        <div className="flex flex-col md:flex-row rounded-l-xl">
          {/* Image */}
          <Image
            src={CardImage}
            className="object-fit h-80 w-full rounded-xl md:rounded-l-xl md:rounded-r-none md:h-64 hover:rounded-xl hover:scale-105 transform duration-200"
            alt="hello"
          />
          {/* Content */}
          <div className="p-6 md:p-12">
            <h2 className="text-white text-xl font-serif font-medium text-center md:text-left my-4">
              Get diet and fitness tips in your inbox
            </h2>
            <p className="max-w-xs text-white text-center md:text-left my-4 leading-5 tracking-wide text-xs">
              Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter.
            </p>
            <div className="flex flex-col md:flex-row mt-5 space-y-4 md:space-x-3 md:space-y-0">
              <input
                type="text"
                placeholder="Enter your email address"
                className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center placeholder:md:text-left md:text-left focus:outline-none"
              />
              <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailSubPage;
