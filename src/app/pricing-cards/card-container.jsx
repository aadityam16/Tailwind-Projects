import React from "react";
import Card from "./card";

function CardsContainer() {
  const cards = [
    {
      plan: "Basic",
      price: "$1.99",
      storage: "100 GB",
      benifits: [
        "100 GB of storage",
        "Option to add members",
        "Extra member benifits",
      ],
    },
    {
      plan: "Standard",
      price: "$3.99",
      storage: "200 GB",
      benifits: [
        "200 GB of storage",
        "Option to add members",
        "Extra member benifits",
      ],
    },
    {
      plan: "Premium",
      price: "$8.99",
      storage: "2 TB",
      benifits: [
        "2 TB of storage",
        "Option to add members",
        "Extra member benifits",
      ],
    },
  ];
  return (
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 my-6 md:my-0">
      {cards.map((card, index) => (
        <Card key={index} details={card} />
      ))}
    </div>
  );
}

export default CardsContainer;
