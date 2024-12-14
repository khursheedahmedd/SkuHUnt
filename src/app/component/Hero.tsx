import React from "react";
import { FaShieldAlt, FaClock, FaCheckCircle } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-start bg-gradient-to-bl from-indigo-300 via-white to-indigo-200 rounded-[28px] shadow-lg p-6 md:p-10 lg:p-16 mx-auto lg:max-w-[95rem] ">
      {/* Text Section */}
      <div className="flex flex-col md:flex-row items-center text-center md:text-left w-full">
        <div className="flex flex-col  md:items-start w-full md:w-1/2 space-y-6">
          <p className="text-3xl sm:text-[4rem] lg:text-7xl font-extrabold mb-2 lg:mb-0 leading-tight space-x-3">
            <span className="text-gray-700">Start Growing With </span>
            <span className="text-indigo-600">Accurate</span>
            <span className="text-gray-700">TikTok Shop</span>
            <span className="text-indigo-600">Profit Analytics</span>
          </p>
          <div className="text-sm text-[#404040] space-y-6">
            <div className="flex items-start space-x-4 text-left">
              <FaShieldAlt className="text-indigo-500 mt-1 text-xl" />
              <p className="font-satoshi text-md leading-7">
                We Never Sell Your Data. 100% Secure.
              </p>
            </div>
            <div className="flex items-start space-x-4 text-left">
              <FaClock className="text-indigo-500 mt-1 text-xl" />
              <p className="font-satoshi text-sm leading-7">
                Connect Your TikTok Shop in Just 5 Minutes
              </p>
            </div>
            <div className="flex  text-left items-start space-x-4">
              <FaCheckCircle className="text-indigo-500 mt-1 text-2xl md:text-xl" />
              <p className="font-satoshi text-sm leading-7">
                Over 99% accuracy in calculating TikTok Shop Fees & Profits
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-4 space-y-4 md:space-y-0 w-full">
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-indigo-500 transition duration-300 w-full sm:w-3/4 md:w-auto">
              Start Your Free Trial
            </button>
            <a className=" text-indigo-600 border border-indigo-600 py-3 px-6 rounded-full shadow-md hover:bg-indigo-100 transition duration-300 w-full sm:w-3/4 md:w-auto text-center">
              Call us at: 646-566-5500
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 mt-11 md:mt-[3rem] flex justify-center">
          <div className="relative w-full max-w-[712px] ">
            <img
              src="/DashBord.png"
              alt="Dashboard Analytics"
              className="object-cover rounded-lg w-full "
            />
            <div className="absolute lg:flex flex-row gap-4 items-center bottom-[12rem]  left-18 right-auto bg-indigo-400 text-white py-4 px-4 rounded-lg hidden shadow-md ">
              <div className="font-satoshi  text-[18px] font-medium leading-[20px]">
                Samples <br />
                Distributed
              </div>
              <div className="text-5xl"> 68</div>
            </div>
          </div>
          <img
            src="/sales.png"
            alt="Sales Analytics"
            className="absolute top-[-28px] right-[-18px] object-cover rounded-lg  md:w-48 w-32"
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative lg:flex justify-center md:justify-end items-center mt-12 md:mt-16 pb-10 w-full hidden">
        <div className="absolute right-0 sm:right-32 w-full sm:w-auto flex justify-center sm:justify-end bg-white rounded-lg shadow-lg  items-center  space-x-4 py-3 px-6">
          {/* Footer Images (Cards) */}
          <img
            src="/GDPR FRAME.png"
            alt="Footer Image 1"
            className="h-12 w-12 object-cover rounded-full shadow-small sm:h-14 sm:w-14"
          />
          <img
            src="/SSL frame.png"
            alt="Footer Image 2"
            className="h-12 w-12 object-cover rounded-full shadow-small sm:h-14 sm:w-14"
          />
          <img
            src="/Tiktok frame.png"
            alt="Footer Image 3"
            className="h-14 w-17 object-cover rounded-full shadow-small sm:h-14 sm:w-18"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
