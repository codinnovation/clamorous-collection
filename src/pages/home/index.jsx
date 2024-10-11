import React from "react";
import TopBar from "./top-bar";
import NavigationBar from "./navigation-bar";
import HeroSection from "./hero-section";
import AfterHeroSection from "./after-hero-section";
import FeatureCategory from "./featured-category";

function HomePage() {
  return (
    <>
      <div>
        <TopBar />
        <NavigationBar />
        <HeroSection />
        <AfterHeroSection />
		<FeatureCategory/>
      </div>
    </>
  );
}
export default HomePage;
