import React from "react";

const CardComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 flex-shrink-0 rounded-[30px] bg-gray-100 shadow-lg mx-auto w-full max-w-screen-2xl sm:w-[85%]">
      {/* Logos Section */}
      <div className="text-center pb-6 text-gray-700 font-medium">
        <p className="text-xl sm:text-2xl">
          Driving Business Decisions for Top TikTok Brands
        </p>
      </div>

      {/* Logos Container */}
      <div className="flex flex-col sm:flex-row items-center justify-center  px-8 md:gap-12 lg:gap-40 scrollbar-hide">
        <img
          src="/ENGISHT LOGO 1.svg"
          alt="Logo 1"
          className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 object-contain"
        />
        <img
          src="/Group.svg"
          alt="Logo 2"
          className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 object-contain"
        />
        <img
          src="/Asset 4 1.svg"
          alt="Logo 3"
          className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 object-contain"
        />
        <img
          src="/plexo logo 1.svg"
          alt="Logo 4"
          className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 object-contain"
        />
      </div>
    </div>
  );
};

export default CardComponent;
