import React from "react";
import { FiCircle } from "react-icons/fi"; // Circle icon
import { AiFillStar, AiFillHeart } from "react-icons/ai"; // Star and Heart icons
import { BsEmojiSmile } from "react-icons/bs"; // Smile Emoji icon

const Testimonials: React.FC = () => {
  return (
    <section
      className="relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 w-full min-h-[600px] flex flex-col items-center justify-center p-6 sm:p-10 bg-gradient-to-tr from-indigo-300 via-white to-indigo-200 rounded-lg shadow-lg"
      style={{
        boxShadow:
          "0px 4px 6px -2px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Grid Lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {/* Horizontal Lines */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={`horizontal-${index}`}
            className="absolute w-full h-[1px] bg-gray-400 opacity-15"
            style={{
              top: `${(100 / 12) * index}%`, // Position each line evenly
            }}
          ></div>
        ))}
        {/* Vertical Lines */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={`vertical-${index}`}
            className="absolute h-full w-[1px] bg-gray-400 opacity-15"
            style={{
              left: `${(100 / 24) * index}%`, // Position each line evenly
            }}
          ></div>
        ))}
      </div>

      {/* Buttons */}
      <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-indigo-500 text-white rounded-full shadow-md cursor-pointer z-20">
        <AiFillStar size={20} />
      </div>
      <div className="absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 bg-indigo-500 text-white rounded-full shadow-md cursor-pointer z-20">
        <AiFillHeart size={20} />
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-indigo-500 text-white rounded-full shadow-md cursor-pointer z-20">
        <BsEmojiSmile size={20} />
      </div>

      <h2 className="text-[50px] font-bold text-neutral-700 text-center leading-[60px] tracking-[-2.88px] capitalize">
        Hear What Sellers <br />
        <span className="text-neutral-700">Have to Say</span>
      </h2>

      <div className="flex flex-col items-center lg:flex-row justify-center pt-8 gap-10 w-full z-10">
        {/* Testimonial 1 */}
        <div className="w-full sm:w-[350px] lg:w-[350px] h-auto p-6 flex flex-col items-center gap-4 bg-indigo-100 rounded-lg border-2 border-indigo-300 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-indigo-300 flex items-center justify-center">
              <FiCircle className="text-white text-3xl" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Shaff Qureshi</h3>
              <span className="text-gray-600 text-sm">CEO of Ensight</span>
            </div>
          </div>
          <p className="text-sm text-gray-800 text-left mb-4">
            "SKUhunt has completely transformed how I manage my inventory. It
            helps me quickly identify my best-performing products and weed out
            the underperformers. Now, I focus on scaling what works—and my
            profits show it."
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="w-full sm:w-[350px] lg:w-[350px] h-auto p-6 flex flex-col items-center gap-4 bg-indigo-100 rounded-lg border-2 border-indigo-300 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
              <FiCircle className="text-white text-3xl" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Sherpa Pasang</h3>
              <span className="text-gray-600 text-sm">
                CEO of American Sears
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-800 text-left mb-4">
            "As a TikTok seller, I used to struggle with tracking product
            performance. SKUhunt makes it effortless to pinpoint my top SKUs and
            adjust my strategy. It’s a game-changer for anyone serious about
            growing their business."
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="w-full sm:w-[350px] lg:w-[350px] h-auto p-6 flex flex-col items-center gap-4 bg-indigo-100 rounded-lg border-2 border-indigo-300 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
              <FiCircle className="text-white text-3xl" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Liam Thompson</h3>
              <span className="text-gray-600 text-sm">
                Co-founder of GlowUp Skincare
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-800 text-left mb-4">
            "With SKUhunt, I finally have the insights I need to make smarter
            decisions. It’s easy to spot which products are driving sales and
            which ones need to be cut, saving me time and money."
          </p>
        </div>
      </div>
      <div className="mt-10">
        <a className="bg-indigo-600 text-white border border-indigo-600 py-3 px-6 rounded-full shadow-md hover:bg-indigo-50 transition duration-300 w-full md:w-auto">
          Start Your Free Trial
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
