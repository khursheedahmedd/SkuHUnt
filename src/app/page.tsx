"use client";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/CardComponent";
import Video from "./component/Video";
import ZigZag from "./component/ZigZagSection";
import ThreeCards from "./component/ThreeCardSection";
import Testimonials from "./component/Testimonials";
import ChooseYourPlan from "./component/Plan";
import Faqs from "./component/faqs";
import Cal from "./component/Calculator";
import Footer from "./component/Footer";

const Home: React.FC = () => {
  return (
    <div className="">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section Component */}
      <div className="p-3 py-8">
        <Hero />

        {/* Card Component with top and bottom padding */}
        <div className="pt-8 pb-6 sm:pt-8 sm:pb-8 py-6">
          <Card />
        </div>
      </div>

      {/* Video Component */}
      <Video />
      <div className="pt-[5rem] pb-[7rem] p-4 lg:p-9">
        <Cal />
      </div>
      <div className="p-2 lg:p-9">
        <ZigZag />
      </div>

      <div className="py-8  lg:py-12">
        <ThreeCards />
      </div>
      <div className="p-3">
        <Testimonials />
      </div>
      <ChooseYourPlan />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
