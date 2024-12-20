import React from "react";

const Calculator = () => {
  return (
    <div
      className="flex flex-col items-center text-center justify-center md:mt-12 mt-0 bg-indigo-600 py-[4rem] sm:py-[6rem] px-[3.25rem] lg:py-[8rem] rounded-3xl shadow-lg w-full space-y-5 sm:px-12"
      style={{
        height: "auto",
        // padding: "40px",
        // textAlign: "center",
      }}
    >
      <p
        className="font-extrabold text-white mb-2 gap-6 gap-x-4 text-center lg:text-7xl md:text-4xl text-3xl"
        style={
          {
            // fontFamily: "Satoshi, Arial",
            // fontSize: "40px", // Default for large screens
            // fontWeight: 500,
            // color: "#FFF",
            // lineHeight: "100%",
            // letterSpacing: "-2.88px",
            // textAlign: "center",
            // textTransform: "capitalize",
          }
        }
      >
        Download Your Free Calculator
      </p>
      <p className="text-white text-center mb-6">
        This easy-to-use calculator will help you calculate fees accurately and
        efficiently saving you time and effort.
      </p>
      <a className="mt-4 items-center text-center bg-white text-indigo-800 border border-indigo-600 py-3 px-14 rounded-full shadow-md hover:bg-indigo-50 w-full md:w-auto">
        Download Now
      </a>
    </div>
  );
};

export default Calculator;
