import React from "react";
import styles from "../../../styles/home/after-hero-section.module.css";
import Image from "next/image";
import HeroImage from "../../../../public/hero-img.png";
import HeroImage1 from "../../../../public/hero1.png";
import HeroImage2 from "../../../../public/hero2.png";
import HeroImage3 from "../../../../public/hero3.png";
import HeroImage4 from "../../../../public/hero4.png";

function AfterHeroSection() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.box}>
            <div className={styles.image}>
              <Image src={HeroImage1} width={900} height={900} alt="" />
            </div>

            <div className={styles.description}>
              <h1>Bedsheets</h1>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.image}>
              <Image src={HeroImage2} width={900} height={900} alt="" />
            </div>

            <div className={styles.description}>
              <h1>Nightwear</h1>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.image}>
              <Image src={HeroImage3} width={900} height={900} alt="" />
            </div>

            <div className={styles.description}>
              <h1>Perfume</h1>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.image}>
              <Image src={HeroImage4} width={900} height={900} alt="" />
            </div>

            <div className={styles.description}>
              <h1>Nightwear</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AfterHeroSection;
