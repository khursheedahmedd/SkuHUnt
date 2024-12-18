import React from "react";
import { FaShieldAlt, FaClock, FaCheckCircle } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-start bg-mobile-gradient md:bg-tablet-image p-6  bg-cover bg-no-repeat lg:bg-desktop-image rounded-[28px] shadow-lg  md:p-10 lg:py-8 lg:px-16 mx-auto lg:max-w-[99rem] xl:max-w-[200rem]">
      {/* Text Section */}
      <div className="flex flex-col md:flex-row items-center text-center md:text-left w-full md:gap-8">
        <div className="flex flex-col  md:items-start w-full md:w-1/2 space-y-6">
          <p className="text-3xl text-wrap lg:text-[4rem] md:text-[2rem] font-bold font-satoshi leading-tight lg:tracking-[-3.6px] capitalize  mb-2 lg:mb-0  ">
            <span className="text-black lg:space-x-4">Start Growing With </span>
            <span className="text-indigo-600">Accurate</span>
            <span className="text-black lg:space-x-4"> TikTok Shop </span>
            <span className="text-indigo-600 lg:space-x-4">
              Profit Analytics
            </span>
          </p>
          <div className="text-sm text-[#404040] space-y-5">
            <div className="flex items-start space-x-4 text-left rounded-xl">
              <img
                src="/secure-con.jpg"
                alt="Shield Icon"
                className="w-6 h-6 mt-1" /* Adjust width and height as needed */
              />
              <p className="font-satoshi text-lg leading-7">
                We Never Sell Your Data. 100% Secure.
              </p>
            </div>
            <div className="flex items-start space-x-4 text-left">
              <img
                src="/connect-icon.jpg"
                alt="Clock Icon"
                className="w-6 h-6 mt-1"
              />
              <p className="font-satoshi text-lg leading-7">
                Connect Your TikTok Shop in Just 5 Minutes
              </p>
            </div>
            <div className="flex text-left items-start space-x-4">
              <img
                src="/acuurate-icon.jpg"
                alt="Check Icon"
                className="w-6 h-6 mt-1"
              />
              <p className="font-satoshi text-lg leading-7">
                Over 99% accuracy in calculating TikTok Shop Fees & Profits
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-4 space-y-4 md:space-y-0 w-full">
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-indigo-500 transition duration-300 w-full sm:w-3/4 md:w-auto">
              Start Your Free Trial
            </button>
            <button className=" text-indigo-600 border md:mt-8 border-indigo-600 py-3 px-6 rounded-full shadow-md hover:bg-indigo-100 transition duration-300 w-full sm:w-3/4 md:w-auto text-center">
              Call us at: 646-566-5500
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 mt-11 md:mt-[3rem] flex justify-center items-center">
          <div className="relative w-full max-w-[82rem] mx-auto md:mx-0">
            <img
              src="/DashBord.png"
              alt="Dashboard Analytics"
              className="object-cover rounded-lg w-full "
            />
            <div className="absolute lg:flex flex-row gap-4 items-center bottom-[13rem]  left-18 right-auto bg-indigo-400 text-white py-6 px-6 rounded-2xl hidden shadow-md">
              <div className="font-satoshi  text-[18px] font-medium leading-[20px] space-y-2">
                Samples <br />
                Distributed
              </div>
              <div className="text-5xl font-satoshi"> 68</div>
            </div>
          </div>
          <img
            src="/sales.png"
            alt="Sales Analytics"
            className="absolute top-[-28px] right-[-18px] object-cover rounded-lg md:w-[13rem] lg:w-[21rem]  w-32"
          />
        </div>
      </div>

      {/* Footer Section */}
      <div className="relative lg:flex justify-center md:justify-end items-center mt-8 md:mt-14 pb-14 w-full hidden ">
        <div className="absolute right-0 sm:right-32 w-full md:hidden lg:flex mt-3 sm:w-auto flex justify-center border border-indigo-400 sm:justify-end bg-white rounded-lg shadow-lg  items-center  space-x-10 py-3 px-8">
          {/* Footer Images (Cards) */}
          <img
            src="/GDPR FRAME.png"
            alt="Footer Image 1"
            className="h-16 w-16 object-cover rounded-full shadow-small sm:h-20 sm:w-18"
          />
          <img
            src="/SSL frame.png"
            alt="Footer Image 2"
            className="h-12 w-12 object-cover rounded-full shadow-small sm:h-20 sm:w-18"
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
