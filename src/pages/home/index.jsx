import React from "react";
import TopBar from "./top-bar";
import NavigationBar from "./navigation-bar";
import HeroSection from "./hero-section";
import AfterHeroSection from "./after-hero-section";
import FeatureCategory from "./featured-category";
import Glance from "./glance";
import Blog from "./blog";
import Footer from "./footer";

function HomePage({ user }) {
  return (
    <>
      <div>
        <TopBar user={user} />
        <NavigationBar user={user} />
        <HeroSection user={user} />
        <AfterHeroSection user={user} />
        <FeatureCategory user={user} />
        <Glance user={user} />
        <Blog user={user} />
        <Footer user={user} />
      </div>
    </>
  );
}
export default HomePage;
