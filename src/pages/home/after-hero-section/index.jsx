import React from "react";
import styles from "../../../styles/home/after-hero-section.module.css";
import Image from "next/image";
import HeroImage from "../../../../public/hero-img.png";
import Fade from "react-reveal/Fade";

function AfterHeroSection() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <Fade right>
            <div className={styles.box}>
              <div className={styles.image}>
                <Image src={HeroImage} width={900} height={900} alt="" />
              </div>

              <div className={styles.description}>
                <h1>Title Goes Here</h1>
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <div className={styles.box}>
              <div className={styles.image}>
                <Image src={HeroImage} width={900} height={900} alt="" />
              </div>

              <div className={styles.description}>
                <h1>Title Goes Here</h1>
              </div>
            </div>
          </Fade>

          <Fade top>
            <div className={styles.box}>
              <div className={styles.image}>
                <Image src={HeroImage} width={900} height={900} alt="" />
              </div>

              <div className={styles.description}>
                <h1>Title Goes Here</h1>
              </div>
            </div>
          </Fade>

          <Fade left>
            <div className={styles.box}>
              <div className={styles.image}>
                <Image src={HeroImage} width={900} height={900} alt="" />
              </div>

              <div className={styles.description}>
                <h1>Title Goes Here</h1>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
export default AfterHeroSection;
