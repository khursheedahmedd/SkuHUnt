import React, { useState } from "react";

const faqs = [
  {
    question: "How does SKUHunt ensure profit accuracy?",
    answer:
      "SKUHunt accounts for TikTok-specific fees like settlements, refunds, and adjustments that often don't appear immediately in transaction reports. We integrate directly with TikTok's API to ensure real-time data accuracy and provide you with the most precise profit calculations possible.",
  },
  {
    question: "What is SKU-level tracking, and why is it important?",
    answer:
      "SKU-level tracking provides profitability insights for each product, helping you identify your most and least profitable items.",
  },
  {
    question: "How does SKUHunt track sample costs?",
    answer:
      "You can log samples sent for specific SKUs along with their costs. SKUHunt aggregates this data so you know how much you're spending on promotional activities.",
  },
  {
    question: "Can I customize operational expenses in SKUHunt?",
    answer:
      "Yes, you can add, modify, and track operational costs like employee wages, software subscriptions, and marketing expenses.",
  },
  {
    question: "Is my data safe with SKUHunt?",
    answer:
      "Absolutely. We take data security seriously and employ industry-standard encryption and security measures to protect your business information. Your data is stored securely, and we never share your sensitive business information with third parties. We comply with all relevant data protection regulations.",
  },
  {
    question: "Can SKUHunt handle multiple TikTok Shop accounts?",
    answer:
      "Yes, you can connect multiple TikTok Shop accounts to your SKUHunt dashboard. This allows you to consolidate data from all your TikTok shops in one place, providing a comprehensive view of your business performance across all accounts.",
  },
];

const FaqComponent = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 p-6 sm:p-8 md:p-10 lg:p-16">
      {/* H2 with updated styles */}
      <h2
        className="text-6xl text-center pt-4 py-3 md:text-4xl lg:text-7xl font-bold text-gray-700 tracking-tight"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        FAQs
      </h2>

      {/* Updated P tag with FAQ-style text */}
      <p
        className="text-center mb-6"
        style={{
          color: "var(--Monochrome-700, #4F4F4F)", // Color for FAQ text
          // fontFamily: "var(--Destop-Type-Satoshi-Font-Family, Satoshi)",
          fontSize: "var(--Destop-Type-Size-Body-Body, 18px)",
          fontWeight: "var(--Destop-Type-Weight-Body-Regular, 400)",
          lineHeight: "var(--Destop-Type-Line-Height-Body-Body, 27px)",
          textAlign: "center",
        }}
      >
        We provide answers to common questions about our products/services
      </p>

      {/* Increased width of the FAQ container */}
      <div className="w-full max-w-5xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 p-4 border rounded-lg shadow-md transition-all"
            style={{
              borderColor: openFaqIndex === index ? "#4F46E5" : "#667eea",
              backgroundColor: openFaqIndex === index ? "#EEF0FFFF" : "white",
            }}
          >
            <div
              className="flex justify-between items-center cursor-pointer "
              onClick={() => toggleFaq(index)}
            >
              <h3
                className="text-lg sm:text-xl font-semibold"
                style={{
                  color: "var(--Monochrome-950, #222)", // FAQ question color
                  fontSize: "var(--Destop-Type-Size-Body-Body-Heading, 20px)",
                  fontWeight: "var(--Destop-Type-Weight-Body-Medium, 500)",
                  lineHeight:
                    "var(--Destop-Type-Line-Height-Body-Body-Heading, 30px)",
                }}
              >
                {faq.question}
              </h3>
              <span
                className={`ml-4 transform transition-transform ${
                  openFaqIndex === index ? "rotate-180" : ""
                }`}
                style={{ transition: "transform 0.3s ease" }}
              >
                &#x25BC; {/* This is the arrow for toggling */}
              </span>
            </div>
            {openFaqIndex === index && (
              <div className="mt-3 text-gray-600 text-sm sm:text-base">
                <p
                  style={{
                    color: "var(--Monochrome-700, #7A7A7AFF)", // FAQ answer color
                    fontSize: "var(--Destop-Type-Size-Body-Body, 18px)",
                    fontWeight: "var(--Destop-Type-Weight-Body-Regular, 400)",
                    lineHeight:
                      "var(--Destop-Type-Line-Height-Body-Body, 27px)",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to action section */}
      <div
        className="flex flex-col items-center justify-center mt-12 bg-indigo-600 rounded-3xl lg:py-[6.25rem] py-12 shadow-lg w-full px-8 sm:px-6 md:px-8 lg:px-12"
        style={{
          height: "auto",
          // padding: "65px",
          textAlign: "center",
        }}
      >
        <p
          className="gap-2 text-white mb-4 text-center text-2xl lg:text-6xl font-extrabold "
          style={{
            // fontFamily: "Satoshi",
            // fontSize: "65px",
            // fontWeight: 500,
            // color: "#FFF",
            // lineHeight: "100%",
            // letterSpacing: "-2.90px",
            // textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          Do what you love, Sell More.
          <br />
          Leave the rest to us
        </p>
        <p className="text-white text-center mb-6">
          Join SKUHunt today to make financial decisions with confidence.
        </p>
        <a className="bg-white text-indigo-600 border border-indigo-600 py-3 px-6 rounded-full shadow-md hover:bg-indigo-50 transition duration-300 w-full md:w-auto">
          Start Your Free Trial
        </a>
      </div>
    </div>
  );
};

export default FaqComponent;
