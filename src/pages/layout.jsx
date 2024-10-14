import React from "react";
import TopBar from "./home/top-bar";
import NavigationBar from "./home/navigation-bar";
import HeroSection from "./home/hero-section";
import Footer from "./home/footer";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <TopBar />
        <NavigationBar />
        <HeroSection />
        {children}
        <Footer />
      </div>
    </>
  );
}
