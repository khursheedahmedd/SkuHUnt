import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="">
      <section className="flex flex-col items-center bg-mobile-gradient md:bg-tablet-image p-10 bg-cover bg-no-repeat lg:bg-desktop-image rounded-[28px] md:p-20 lg:py-8 lg:px-16 mx-auto lg:max-w-[100rem] xl:max-w-[200rem]">
        {/* Text Section */}
        <div className=" flex flex-col lg:flex-row items-center text-center lg:text-left w-full lg:gap-8">
          <div className="flex flex-col lg:items-start w-full lg:w-1/2 space-y-6">
            <p className="text-3xl text-wrap lg:text-[3.0rem] md:text-[3rem] font-bold font-satoshi leading-tight lg:tracking-[-3.6px] capitalize  mb-2 lg:mb-0">
              <span className="text-gray-950 lg:space-x-4">
                Start Growing With{" "}
              </span>
              <span className="text-indigo-600">Accurate</span>
              <span className="text-black lg:space-x-4"> TikTok Shop </span>
              <span className="text-indigo-600 lg:space-x-4">
                Profit Analytics
              </span>
            </p>
            <div className="text-sm text-[#272727] space-y-5">
              <div className="flex items-start space-x-4 text-left rounded-xl">
                <img
                  src="/secure-icon.png"
                  alt="Shield Icon"
                  className="w-6 h-6 mt-1" /* Adjust width and height as needed */
                />
                <p className="font-satoshi text-lg leading-7">
                  We never sell your data, 100% secure.
                </p>
              </div>
              <div className="flex items-start space-x-4 text-left">
                <img
                  src="/connect-icon.png"
                  alt="Clock Icon"
                  className="w-6 h-6 mt-1"
                />
                <p className="font-satoshi text-lg leading-7">
                  Connect your TikTok shop in just 5 minutes
                </p>
              </div>
              <div className="flex text-left items-start space-x-4">
                <img
                  src="/acuurate-icon.png"
                  alt="Check Icon"
                  className="w-6 h-6 mt-1"
                />
                <p className="font-satoshi text-lg leading-7">
                  Over 99% accuracy in calculating TikTok Shop Fees & Profits
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-4 space-y-4 md:space-y-0 w-full ">
              <button className="bg-indigo-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-indigo-500 transition md:mt-6 duration-300 w-full sm:w-3/4 md:w-auto">
                Start Your Free Trial
              </button>
              <div className="flex flex-col items-center md:mt-8 w-full sm:w-3/4 md:w-auto ">
                <p className="text-gray-600 mb-2 font-satoshi text-xs hidden md:block">
                  Have a question?
                </p>
                <button className="text-indigo-600 border border-indigo-600 py-3 px-6 rounded-full shadow-md hover:bg-indigo-100 transition duration-300 w-full text-center">
                  Call us at: 646-566-5500
                </button>
              </div>
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
              <div className="relative max-w-[13rem] responsive-container lg:flex flex-row mx-0 gap-4 items-center md:bottom-20 lg:bottom-[19rem]  left-18 right-auto bg-indigo-400 text-white py-5 px-6 rounded-2xl hidden shadow-md">
                <div className="font-satoshi  text-[18px] font-medium leading-[20px] space-y-2">
                  Samples <br />
                  Distributed
                </div>
                <div className="text-5xl font-satoshi"> 68</div>
              </div>
              <div className="absolute responsive-image tiktok mt-[-5rem] right-[-18px] object-cover rounded-lg w-[7rem] lg:hidden block ">
                <div className="absolute right-2  w-full mt-8 sm:w-auto flex  justify-center border border-indigo-200 sm:justify-end bg-white rounded-lg shadow-lg  items-center  space-x-2 py-3 px-2">
                  {/* Footer Images (Cards) for md and sm*/}
                  <img
                    src="/GDPR FRAME.png"
                    alt="Footer Image 1"
                    className="h-5 w-5 object-cover rounded-full shadow-small"
                  />
                  <img
                    src="/SSL frame.png"
                    alt="Footer Image 2"
                    className="h-5 w-5 object-cover rounded-full shadow-small "
                  />
                  <img
                    src="/Tiktok frame.png"
                    alt="Footer Image 3"
                    className="h-5 w-9 object-cover rounded-full shadow-small "
                  />
                </div>
              </div>
            </div>
            <img
              src="/sales.png"
              alt="Sales Analytics"
              className="absolute responsive-image top-[-28px] right-[-18px] object-cover rounded-lg md:max-w-[8rem] lg:max-w-[21rem]  max-w-32"
            />
          </div>
        </div>

        {/* Footer Section */}
        <div className="relative lg:flex justify-center md:justify-end items-center tiktok-container pb-24 w-full hidden ">
          <div className="absolute right-0 sm:right-32 w-full md:hidden lg:flex mt-3 sm:w-auto flex justify-center border border-indigo-400 sm:justify-end bg-white rounded-lg shadow-lg  items-center  space-x-10 py-3 px-8 object-cover">
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
    </div>
  );
};

export default Hero;
