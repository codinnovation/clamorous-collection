import React, { useState, useEffect } from "react";
import styles from "../../../styles/home/hero-section.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "../../../../public/hero-img.png";
import HeroImage1 from "../../../../public/bedsheet.png";
import HeroImage2 from "../../../../public/hairclip.png";

function HeroSection() {
  const [showcategories, setShowcategories] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [HeroImage, HeroImage1, HeroImage2];

  const openShowcategories = () => {
    setShowcategories(!showcategories);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.categoryContainer}>
            <div className={styles.header} onClick={openShowcategories}>
              <MenuIcon className={styles.icon} />
              <h1>All categories</h1>
              <KeyboardArrowDownIcon className={styles.icon1} />
            </div>

            {showcategories && (
              <div className={styles.category}>
                <Link href="/admin-page">Admin Page</Link>

                <Link
                  href={{
                    pathname: "/category",
                    query: { category: "nightwears", title: "Night Wears" }
                  }}
                >
                  Night wears
                </Link>

                <Link href="/">Bedsheets</Link>
                <Link href="/">Perfumes</Link>
                <Link href="/">Scrunchies</Link>
                <Link href="/">Hair Bands</Link>
                <Link href="/">Hair clips</Link>
                <Link href="/">Ladies accessories</Link>
                <Link href="/">Totes bags</Link>
                <Link href="/">Atomizers</Link>
              </div>
            )}
          </div>

          <div className={styles.heroSectionContainer}>
            <div className={styles.heroPicture}>
              <div className={styles.heroPictureContent}>
                <div className={styles.description}>
                  <p>Clamorous</p>

                  <div className={styles.des1}>
                    <h1>Where Beauty Meets </h1>
                    <h1>Comfort</h1>
                  </div>
                  <div className={styles.des2}>
                    <h1>
                      Shop our range of perfumes, nightwear, and home essentials
                      for the perfect balance of elegance and relaxation.
                    </h1>
                  </div>
                  <div className={styles.shopnow}>
                    <h1>Shop now</h1>
                  </div>
                </div>
                <div className={styles.photoContainer}>
                  <Image
                    src={images[currentImageIndex]}
                    width={900}
                    height={900}
                    alt="photo"
                    key={currentImageIndex}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
