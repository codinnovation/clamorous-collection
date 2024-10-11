import React from "react";
import TopBar from "./top-bar";
import NavigationBar from "./navigation-bar";
import HeroSection from "./hero-section";
import AfterHeroSection from "./after-hero-section";

function HomePage() {
  return (
    <>
      <div>
        <TopBar />
        <NavigationBar />
        <HeroSection />
        <AfterHeroSection />
      </div>
    </>
  );
}
export default HomePage;
