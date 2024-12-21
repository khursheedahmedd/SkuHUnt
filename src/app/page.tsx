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
      <div className=" md:p-3 p-3 py-4 ">
        <Hero />
      </div>

      {/* Card Component with top and bottom padding */}
      <div className="mb-4 md:px-0 px-3 py-0 pb-4 ">
        <Card />
      </div>
      {/* Video Component */}
      <Video />
      <div className="md:pt-[3rem] pt-0 md:pb-[7rem] pb-[2rem] p-4 lg:p-9">
        <Cal />
      </div>
      <div className="p-2 lg:p-9">
        <ZigZag />
      </div>

      <div className="md:py-8 py-0 lg:py-12">
        <ThreeCards />
      </div>
      <div className="">
        <Testimonials />
      </div>
      <ChooseYourPlan />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
