import React from "react";

const ThreeCardSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-8 flex flex-col items-center gap-8">
      {/* Top Heading */}
      <p className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-6xl space-x-1 font-extrabold leading-snug text-gray-800 py-8">
        Accurate Numbers, Bigger Profits
        <br className="hidden sm:block" />
        <span className="text-indigo-400">Just 3-Steps Away</span>
      </p>

      {/* Card Container */}
      <div className="w-full flex flex-wrap justify-center gap-16">
        {/* Card 1 */}
        <div className="flex flex-col space-y-8 w-full sm:w-[300px] h-[24rem] p-6 bg-neutral-100 rounded-2xl border border-indigo-600 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-indigo-400 text-6xl ">Step 01</h2>
          <h3 className="text-neutral-700 text-[24px] font-medium leading-[33.6px]">
            Sign Up & Connect Your TikTok Shop
          </h3>
          <p className="text-neutral-700 text-[18px] font-medium leading-[27px]">
            Get started in minutes. Create a SKUhunt account and link your
            TikTok shop to start pulling in your sales and fees automatically.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col space-y-8 w-full sm:w-[300px] h-[24rem] p-6 bg-neutral-100 rounded-2xl border border-indigo-600 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-indigo-400 text-6xl ">Step 02</h2>
          <h3 className="text-neutral-700 text-[24px] font-medium leading-[33.6px]">
            Enter Your Product Costs
          </h3>
          <p className="text-neutral-700 text-[18px] font-medium leading-[27px]">
            Gain instant clarity on profitability. Add your (COGS) for each
            product to ensure accurate profit calculations.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col space-y-8 w-full sm:w-[300px] h-[24rem] p-6 bg-neutral-100 rounded-2xl border border-indigo-600 shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-indigo-400 text-6xl ">Step 03</h2>
          <h3 className="text-neutral-700 text-[24px] font-medium leading-[33.6px]">
            See Your Profits Instantly
          </h3>
          <p className="text-neutral-700 text-[18px] font-medium leading-[27px]">
            Track performance effortlessly. SKUhunt calculates P&L for every
            SKU, displaying everything in a clear, actionable dashboard.
          </p>
        </div>
      </div>

      {/* Start Signing Now Button */}
      <div className="flex justify-center py-4 mt-6">
        <button className="bg-indigo-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-indigo-500 transition w-full sm:w-auto">
          Start Syncing Now
        </button>
      </div>
    </section>
  );
};

export default ThreeCardSection;
