"use client";

import Navbar from "@/app/component/Navbar";
import Hero from "@/app/component/Hero";
import Card from "@/app/component/CardComponent";
import Video from "@/app/component/Video";
import ZigZag from "@/app/component/ZigZagSection";
import ThreeCards from "@/app/component/ThreeCardSection";
import Testimonials from "@/app/component/Testimonials";
import ChooseYourPlan from "@/app/component/Plan";
import Faqs from "@/app/component/faqs";
import Cal from "@/app/component/Calculator";
import Footer from "./component/Footer";

const Home: React.FC = () => {
  return (
    <div className="">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section Component. This section contains the main hero content of the page   */}
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
        {/*This section displays a calculater with some padding */}
        <Cal />
      </div>
      {/* This section displays content in a zigzag layout*/}
      <div className="p-2 lg:p-9">
        <ZigZag />
      </div>
      {/* This section displays content in three cards layout*/}
      <div className="md:py-8 py-0 lg:py-12">
        <ThreeCards />
      </div>
      {/* This section displays testimonial layout*/}
      <div className="">
        <Testimonials />
      </div>
      {/* This section displays the plan layout*/}
      <ChooseYourPlan />
      {/* This section displays the faqs layout*/}
      <Faqs />
      {/* This section displays the footer layout*/}
      <Footer />
    </div>
  );
};

export default Home;
