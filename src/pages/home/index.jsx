import React from "react";
import TopBar from "./top-bar";
import NavigationBar from "./navigation-bar";
import HeroSection from "./hero-section";

function HomePage() {
  return (
    <>
      <div>
        <TopBar />
        <NavigationBar />
        <HeroSection />
      </div>
    </>
  );
}
export default HomePage;
