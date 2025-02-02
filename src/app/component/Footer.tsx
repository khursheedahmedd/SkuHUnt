"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

{
  /*Footer component */
}
const Footer: React.FC = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <footer
      className="flex flex-col items-start  md:gap-24 gap-20 py-8 md:py-12 px-6 sm:px-12 lg:px-16 xl:px-24" //Footer background styling
      style={{
        borderRadius: "40px 40px 0px 0px",
        background: "linear-gradient(180deg, #6C9CFF 0%, #FCFCFC 100%)",
        width: "100%",
      }}
    >
      {/* Footer Header */}
      <div className="text-left flex flex-col md:flex-row justify-between sm:gap-8 gap-4 md:items-center items-start w-full">
        <h2
          className="text-4xl sm:text-5xl lg:text-7xl mb-4"
          style={{
            fontFamily: "Satoshi, sans-serif",
            color: "white",
            lineHeight: "1.2",
            letterSpacing: "-1px",
            width: "100%",
            // paddingBottom: "12px",
          }}
        >
          Let’s Sit & Talk
        </h2>
        {/*Email section */}
        {/*Email background and alignemnt adjustment */}
        <div className="flex flex-col sm:flex-row mb-8 items-start sm:items-center gap-4 w-full sm:w-auto sm:justify-between">
          {/*Email Form styling */}
          <form className="flex flex-col w-full sm:w-auto justify-start sm:justify-center items-start sm:items-center">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border-b-2 border-white text-white bg-transparent focus:ring-0 focus:outline-none text-lg placeholder-white w-full sm:w-[400px] md:w-[500px] lg:w-[400px] xl:w-[450px] pb-2 md:pb-6 pr-16"
                required
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: "1.4rem",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "-0.5px",
                  color: "#FFF",
                  paddingTop: "20px",
                }}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                >
                  <path
                    d="M11.516 34.4834L34.4837 11.5156M34.4837 11.5156H19.1719M34.4837 11.5156V26.8275"
                    stroke="white"
                    strokeWidth="2.87097"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col sm:flex-row justify-between w-full gap-10 sm:gap-16">
        {/* Address Section */}
        <div className="flex-1 sm:w-1/3">
          <h3 className="text-xl sm:text-xl font-semibold text-gray-600 mb-4">
            Address
          </h3>
          <p className="text-gray-600">
            SKUhunt LLC
            <br />
            51-02 21st Fl 4, Suite 105 Long Island <br />
            City, NY 11109
          </p>
        </div>

        {/* Company & Policies Section */}
        <div className="flex-1 sm:w-2/3 flex md:flex-row flex-row lg:justify-end md:justify-between justify-start gap-16 ">
          {/* Company Section */}
          <div>
            <h3 className="text-xl sm:text-xl font-semibold text-gray-600 mb-4">
              Company
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="hover:text-indigo-600 cursor-pointer transition duration-200">
                  About
                </span>
              </li>
              <li>
                <span className="hover:text-indigo-600 cursor-pointer transition duration-200">
                  Pricing
                </span>
              </li>
              <li>
                <span className="hover:text-indigo-600 cursor-pointer transition duration-200">
                  Jobs
                </span>
              </li>
              <li>
                <span className="hover:text-indigo-600 cursor-pointer transition duration-200">
                  Blog
                </span>
              </li>
            </ul>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="text-xl sm:text-xl font-semibold font-satoshi text-gray-600 mb-4">
              Policies
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="hover:text-indigo-600 cursor-pointer transition duration-200">
                  Data Protection Policy
                </span>
              </li>
              <li>
                <span className="hover:text-indigo-600 cursor-pointer transition duration-200">
                  Information Security Policy
                </span>
              </li>
              <li>
                <span className="hover:text-indigo-600 cursor-pointer transition duration-200">
                  Terms & Conditions
                </span>
              </li>
              <li>
                <span className="hover:text-indigo-600 cursor-pointer transition duration-200">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-indigo-600 cursor-pointer transition duration-200">
                  Incident Response Policy
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex md:flex-row flex-col text-center md:mt-16 mt-2 text-gray-600 gap-6 items-start">
        <p>&copy; 2024 Copysright By SKUhunt </p>
        <Link href="/">
          <p className="cursor-pointer hover:underline">Terms</p>
        </Link>
        <p
          onClick={() => navigateTo("/privacy")}
          className="cursor-pointer hover:underline"
        >
          Privacy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
