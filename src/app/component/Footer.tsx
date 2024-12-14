import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="flex flex-col items-start py-32 px-16 w-full"
      style={{
        borderRadius: "40px 40px 0px 0px",
        background: "linear-gradient(180deg, #6C9CFF 0%, #FCFCFC 100%)",
        width: "100%",
        margin: "0 auto",
      }}
    >
      {/* Footer Header */}
      <div className="text-center md:text-left py-12 flex flex-col md:flex-row justify-between items-center w-full">
        {/* Left Section */}
        <h2
          className="text-4xl md:text-6xl font-bold"
          style={{
            fontFamily: "Satoshi, sans-serif",
            color: "white",
            lineHeight: "1.2",
            letterSpacing: "-2px",
          }}
        >
          Let’s Sit & Talk
        </h2>

        {/* Right Section */}
        <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end md:w-auto w-full">
          <form className="w-full md:w-auto">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border-b-2 text-2xl lg:text-4xl border-white text-white bg-transparent focus:ring-0 focus:outline-none opacity-80 py-4 placeholder-white w-full md:w-[400px] lg:w-[500px] pr-16"
                required
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 400,
                  lineHeight: "48px",
                  letterSpacing: "-1px",
                }}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl lg:text-4xl">
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
      <div className="flex flex-col md:flex-row justify-between w-full gap-10">
        {/* Address Section */}
        <div className="md:w-1/3">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Address</h3>
          <p className="text-gray-700 leading-relaxed">
            SKUhunt LLC
            <br />
            51-02 21st Fl 4, Suite 105, Long Island
            <br />
            City, NY 11109
          </p>
        </div>

        {/* Company and Policies Columns */}
        <div className="md:w-2/3 flex flex-col md:flex-row justify-between">
          {/* Company Links */}
          <div className="md:w-1/2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="hover:text-indigo-600 cursor-pointer transition duration-200">
                About
              </li>
              <li className="hover:text-indigo-600 cursor-pointer transition duration-200">
                Pricing
              </li>
              <li className="hover:text-indigo-600 cursor-pointer transition duration-200">
                Jobs
              </li>
              <li className="hover:text-indigo-600 cursor-pointer transition duration-200">
                Blog
              </li>
            </ul>
          </div>

          {/* Policies Links */}
          <div className="md:w-1/2">
            <h3 className="text-lg mt-10 md:mt-0 font-semibold text-gray-900 mb-4">
              Policies
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="hover:text-indigo-600 cursor-pointer transition duration-200">
                Data Protection Policy
              </li>
              <li className="hover:text-indigo-600 cursor-pointer transition duration-200">
                Information Security Policy
              </li>
              <li className="hover:text-indigo-600 cursor-pointer transition duration-200">
                Terms & Conditions
              </li>
              <li className="hover:text-indigo-600 cursor-pointer transition duration-200">
                Privacy Policy
              </li>
              <li className="hover:text-indigo-600 cursor-pointer transition duration-200">
                Incident Response Policy
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-16 text-center text-gray-700 text-sm">
        <p>
          &copy; 2024 Copyright by SKUhunt | <span>Terms</span> |{" "}
          <span>Privacy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
