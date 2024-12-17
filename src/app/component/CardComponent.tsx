import React from "react";

const CardComponent: React.FC = () => {
  return (
    <div className="flex flex-col  items-center p-6 rounded-[30px] bg-gray-100 shadow-lg mx-auto w-full max-w-screen-2xl  sm:w-[85%]">
      {/* Logos Section */}
      <div className="text-center pb-6 text-gray-700 font-medium">
        <p className="text-xl sm:text-2xl">
          Driving Business Decisions for Top TikTok Brands
        </p>
      </div>

      {/* Logos Container */}
      <div className="flex md:flex-row md:px-4  flex-col items-center justify-center gap-6 sm:gap-12 md:gap-12 lg:gap-16 px-4 sm:px-8">
        <img
          src="/ENGISHT LOGO 1.svg"
          alt="Logo 1"
          className="h-28 w-28 sm:h-32 sm:w-32 md:h-32 md:w-32 lg:h-40 lg:w-40 md:ml-18 object-contain max-w-full md:max-w-22"
        />
        <img
          src="/Group.svg"
          alt="Logo 2"
          className="h-28 w-28 sm:h-32 sm:w-32 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain max-w-full md:max-w-42"
        />
        <img
          src="/Asset 4 1.svg"
          alt="Logo 3"
          className="h-28 w-28 sm:h-32 sm:w-32 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain max-w-full md:max-w-32"
        />
        <img
          src="/plexo logo 1.svg"
          alt="Logo 4"
          className="h-28 w-28 sm:h-32 sm:w-32 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain md:mr-18 max-w-full md:max-w-32"
        />
      </div>
    </div>
  );
};

export default CardComponent;
