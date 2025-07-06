import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import NavbarBanner from "../components/Navbar/NavbarBanner.jsx";
import Hero from "../components/Hero/Hero.jsx";
import NumberCounter from "../components/NumberCounter/NumberCounter.jsx";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs.jsx";
import Banner from "../components/Banner/Banner.jsx";
import SubjectCard from "../components/SubjectCard/SubjectCard.jsx";

import Testimonial from "../components/Testimonial/Testimonial.jsx";
import Footer from "../components/Footer/Footer.jsx";

import Img1 from "../assets/banner11.png";
import Img2 from "../assets/banner22.png";

const BannerData = {
  image: Img1,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Personalized Professional Online Tutor on Your Schedule",
  subtitle:
    "Join a growing community of learners and professionals. Get certified, stay ahead, and achieve your goals with us.",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Talented and Qualified Tutors to Serve You for Help",
  subtitle:
    "Join a growing community of learners and professionals. Get certified, stay ahead, and achieve your goals with us.",
  link: "#",
};

const HomePage = () => {
  return (
    <main className="overflow-x-hidden">
     
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <SubjectCard />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default HomePage;
