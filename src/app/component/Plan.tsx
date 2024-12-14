import React, { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    duration: "per month",
    description:
      "Just starting your business or looking for the basics? This is the place.",
    features: [
      "1 TikTok Shop",
      "250 Orders /per month",
      "100 Products",
      "1 User",
      "Profit & Loss Dashboard",
      "Expense Tracker",
    ],
  },
  {
    name: "Growing",
    price: "$59",
    duration: "per month",
    description:
      "Want to look more polished, save more time, and conquer cash flow? It's Pro time.",
    features: [
      "Everything in Starter Plan",
      "3500 Orders /per month",
      "500 Products",
      "Sample Tracking",
      "2 Users",
      "Affiliate Order Dashboard",
      "Automated Custom Reporting",
      "Automated Reporting",
    ],
    isHighlighted: true,
  },
  {
    name: "Business",
    price: "$99",
    duration: "per month",
    description:
      "For established businesses looking to scale and optimize their operations.",
    features: [
      "Everything in Growing Plan",
      "3 TikTok Shops",
      "5000 Orders /per month",
      "1000 Products",
      "LTV Insights",
      "4 Users",
    ],
  },
  {
    name: "Enterprise",
    price: "$249",
    duration: "per month",
    description:
      "Custom solutions and premium support for large organizations.",
    features: [
      "Everything in Business Plan",
      "Multiple TikTok Shops",
      "15000 Orders /per month",
      "Unlimited Products",
    ],
  },
];

const ChooseYourPlan = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const toggleDuration = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-8 lg:px-16">
      {/* Title */}
      <h2 className="lg:text-6xl text-3xl font-bold text-center text-gray-900">
        Simple Pricing For TikTok Sellers
      </h2>
      <p className="text-center text-gray-600 mt-4">
        Start building your best business today
      </p>

      {/* Toggle Button */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Monthly</span>
          <button
            onClick={toggleDuration}
            className="relative flex items-center w-16 h-8 bg-gray-200 rounded-full cursor-pointer"
          >
            <div
              className={`absolute w-6 h-6 bg-indigo-500 rounded-full shadow-md transform transition-transform duration-300 ${
                isMonthly ? "translate-x-1" : "translate-x-8"
              }`}
            ></div>
          </button>
          <span className="text-gray-700">
            Yearly <span className="text-indigo-500 text-sm">20% off</span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg p-6 border transition-transform duration-300 transform ${
              plan.isHighlighted
                ? "bg-indigo-100 scale-105 border-indigo-500"
                : "bg-white border-gray-200"
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
            <div className="mt-4">
              <span className="text-5xl font-bold text-gray-900">
                {plan.price}
              </span>
              <span className="text-lg text-gray-500">
                {" "}
                /{isMonthly ? "month" : "year"}
              </span>
            </div>
            <p className="text-gray-600 mt-4">{plan.description}</p>
            <button className="w-full py-3 mt-6 text-white bg-indigo-500 rounded-full hover:bg-indigo-600 transition">
              Get Started
            </button>
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Free Trial Button */}
      <div className="flex justify-center mt-12">
        <button className="py-3 px-8 text-lg font-semibold text-white bg-indigo-500 rounded-full hover:bg-indigo-600 transition">
          Start Your Free Trial
        </button>
      </div>
    </div>
  );
};

export default ChooseYourPlan;
