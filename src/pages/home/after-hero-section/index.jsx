import React from "react";
import styles from "../../../styles/home/after-hero-section.module.css";
import Image from "next/image";
import HeroImage from "../../../../public/hero-img.png";

function AfterHeroSection() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.box}>
            <div className={styles.image}>
              <Image src={HeroImage} width={900} height={900} alt="" />
            </div>

            <div className={styles.description}>
              <h1>Title Goes Here</h1>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.image}>
              <Image src={HeroImage} width={900} height={900} alt="" />
            </div>

            <div className={styles.description}>
              <h1>Title Goes Here</h1>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.image}>
              <Image src={HeroImage} width={900} height={900} alt="" />
            </div>

            <div className={styles.description}>
              <h1>Title Goes Here</h1>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.image}>
              <Image src={HeroImage} width={900} height={900} alt="" />
            </div>

            <div className={styles.description}>
              <h1>Title Goes Here</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AfterHeroSection;
