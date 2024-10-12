import React from "react";
import TopBar from "./top-bar";
import NavigationBar from "./navigation-bar";
import HeroSection from "./hero-section";
import AfterHeroSection from "./after-hero-section";
import FeatureCategory from "./featured-category";
import Glance from "./glance";
import Blog from "./blog";
import Footer from "./footer";

function HomePage() {
  return (
    <>
      <div>
        <TopBar />
        <NavigationBar />
        <HeroSection />
        <AfterHeroSection />
        <FeatureCategory />
        <Glance />
        <Blog/>
        <Footer/>
      </div>
    </>
  );
}
export default HomePage;
