import React from "react";
import styles from "../../../styles/home/hero-section.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";
import HeroImage from "../../../../public/hero-img.png";

function HeroSection() {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.categoryContainer}>
            <div className={styles.header}>
              <MenuIcon className={styles.icon} />
              <h1>All categories</h1>
              <KeyboardArrowDownIcon className={styles.icon1} />
            </div>

            <div className={styles.category}>
              <Link href="/">Food</Link>
              <Link href="/">Night Wears</Link>
              <Link href="/">Soft Drinks</Link>
              <Link href="/">Sneakers</Link>
              <Link href="/">Food</Link>
              <Link href="/">Food</Link>
              <Link href="/">Food</Link>
            </div>
          </div>

          <div className={styles.heroSectionContainer}>
            <div className={styles.heroPicture}>
              <div className={styles.heroPictureContent}>
                <div className={styles.description}>
                  <p>Fruit Fresh</p>

                  <div className={styles.des1}>
                    <h1>Vegetable</h1>
                    <h1>100% Organic</h1>
                  </div>
                  <div className={styles.des2}>
                    <h1>Free Pickup and Delivery Available</h1>
                  </div>
                  <div className={styles.shopnow}>
                    <h1>Shop now</h1>
                  </div>
                </div>
                <div className={styles.photoContainer}>
                  <Image src={HeroImage} width={900} height={900} alt="photo" />
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
