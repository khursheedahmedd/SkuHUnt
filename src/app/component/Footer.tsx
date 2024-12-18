import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="flex flex-col items-start gap-14 py-8 md:py-12 px-6 sm:px-12 lg:px-16 xl:px-24"
      style={{
        borderRadius: "40px 40px 0px 0px",
        background: "linear-gradient(180deg, #6C9CFF 0%, #FCFCFC 100%)",
        width: "100%",
        // maxWidth: "1440px",
        // margin: "0 auto",
      }}
    >
      {/* Footer Header */}
      <div className="text-left md:text-left flex flex-col sm:flex-row justify-between items-center w-full">
        <h2
          className="text-3xl sm:text-4xl lg:text-7xl mb-4"
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

        <div className="flex flex-col  pb-8 gap-4 items-center sm:items-end sm:w-1/3 mt-8 sm:mt-0 ">
          <form className="flex flex-col w-full sm:w-auto justify-end">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border-b-2 md:ml-3 border-white flex flex-grow text-white bg-transparent focus:ring-0 focus:outline-none opacity-80 text-lg placeholder-white w-full sm:w-[400px] md:w-[500px] lg:w-[400px] xl:w-[450px] pb-2 md:pb-6 pr-16  text-left lg:placeholder:text-4xl placeholder:text-xl"
                required
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  letterSpacing: "-0.5px",
                  color: "var(--Neutral-colors-White-text, #FFF)",
                  paddingTop: "20px",
                  // paddingBottom: "20px",
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
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
            Our Address
          </h3>
          <p className="text-gray-600">
            SKUhunt LLC
            <br />
            51-02 21st Fl 4, Suite 105
            <br />
            Long Island City, NY 11109
          </p>
        </div>

        {/* Company & Policies Section */}
        <div className="flex-1 sm:w-2/3 flex flex-col sm:flex-row justify-end gap-16">
          {/* Company Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
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
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
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
      <div className="flex md:flex-row flex-col text-center mt-16 text-gray-600 gap-6 items-start">
        <p>&copy; 2024 Copysright By SKUhunt </p>
        <p>Terms</p>
        <p>Privacy</p>
      </div>
    </footer>
  );
};

export default Footer;
