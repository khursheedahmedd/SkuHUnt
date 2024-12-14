import React from "react";

const Calculator = () => {
  return (
    <div
      className="flex flex-col items-center text-center justify-center mt-12 bg-indigo-600 py-[6rem] px-[2rem] lg:py-[8rem] rounded-2xl shadow-lg w-full space-y-6 sm:px-12"
      style={{
        height: "auto",
        // padding: "40px",
        // textAlign: "center",
      }}
    >
      <p
        className="font-extrabold text-white mb-2 gap-6 gap-x-4 text-center lg:text-7xl text-3xl "
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
        Download your Free Calculator
      </p>
      <p className="text-white text-center mb-6">
        This easy-to-use calculator will help you calculate fees accurately and
        efficiently—saving you time and effort.
      </p>
      <a className=" items-center text-center bg-white text-indigo-600 border border-indigo-600 py-3 px-6 rounded-full shadow-md hover:bg-indigo-50 w-full md:w-auto">
        Download Now
      </a>
    </div>
  );
};

export default Calculator;
