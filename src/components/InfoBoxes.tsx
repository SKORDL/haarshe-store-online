import React from "react";
import { Truck, RefreshCw, Globe, DollarSign } from "lucide-react";

const InfoBoxes = () => {
  const boxes = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free shipping",
      description: "On orders over $50.00",
      bgColor: "bg-pink-50",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Very easy to return",
      description: "Just phone number.",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Nationwide Delivery",
      description: "Fast delivery nationwide.",
      bgColor: "bg-green-50",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Refunds policy",
      description: "60 days return for any reason",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto pt-4">
      <div className="grid grid-cols-2 gap-4">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`${box.bgColor} p-6 rounded-lg flex flex-col items-start space-y-2 transition-transform hover:scale-105`}
          >
            <div className="text-gray-800">{box.icon}</div>
            <h3 className="font-semibold text-lg text-gray-900">{box.title}</h3>
            <p className="text-gray-600 text-sm">{box.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBoxes;
