import Link from "next/link";
import React from "react";
import ListItem from "./list-item";

function Card({ details }) {
  return (
    <div
      className={` rounded-xl text-white ${
        details.plan === "Standard" ? "bg-violet-600" : "bg-slate-700"
      }`}
    >
      {/* Upper Container */}
      <div className="p-8 mx-3 mt-3 bg-slate-800 rounded-t-xl">
        <div className="text-center uppercase"> {details.plan}</div>
        <h2 className="mt-10 text-5xl font-serif text-center">
          {details.storage}
        </h2>
        <h3 className="mt-2 text-center">{details.price}/Month</h3>
        <div className="flex justify-center">
          <Link
            href="#"
            className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800"
          >
            Purchase
          </Link>
        </div>
      </div>
      {/* Border */}
      <div className="border-t border-slate-700" />
      {/* Lower Container */}
      <div className="mx-3 mb-3 p-8 rounded-b-xl bg-slate-800">
        <div className="flex flex-col space-y-2">
          {details.benifits.map((benifit) => (
            <ListItem content={benifit} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
