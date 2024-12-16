import React from "react";

const Video: React.FC = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center p-12 lg:p-[6rem] justify-between w-full h-auto bg-gradient-to-l from-indigo-300 via-white to-white"
      style={{
        // padding: "65px", // Increased padding for more space
        boxSizing: "border-box",
      }}
    >
      {/* Left Section */}
      <div className="flex flex-col justify-center gap-6 gap-x-8 w-full md:w-1/2  md:text-left text-center">
        <p className="text-2xl md:text-4xl lg:text-6xl text-gray-700 font-extrabold">
          How the 7th Largest TikTok Shop Seller Built A{" "}
          <span className="text-indigo-400">$34M Empire</span> with SKUhunt.
        </p>

        <div className="flex flex-col items-center md:items-start space-y-2 w-full md:w-auto">
          <a
            href="tel:+16465665500"
            className=" text-indigo-400 border border-indigo-600 py-3 px-6 rounded-full shadow-md hover:bg-indigo-50 transition duration-300 w-full md:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center md:justify-end items-center w-full md:w-1/2 mt-6 md:mt-0">
        <video
          src="/image.mp4" // Replace with your actual video path
          className="w-full sm:w-[700px] md:w-[700px] h-auto sm:h-[450px] md:h-[400px] object-cover rounded-lg"
          autoPlay // Optional: mutes the video so it plays automatically without sound
          loop // Optional: to loop the video continuously
          controlsList="nodownload noplaybackrate" // Hides controls like download and playback rate
        />
      </div>
    </div>
  );
};

export default Video;
