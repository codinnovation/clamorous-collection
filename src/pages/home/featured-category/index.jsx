import React from "react";
import styles from "../../../styles/home/feature-category.module.css";
import HeroImage from "../../../../public/hero-img.png";
import Image from "next/image";

function FeatureCategory() {
  return (
    <>
      <div className={styles.featureContainer}>
        <div className={styles.featureContainerHeader}>
          <h1>Featured Product</h1>
          <hr />
        </div>
        <div className={styles.featureContent}>
          <div className={styles.productContainer}>
            <div className={styles.productImage}>
              <Image src={HeroImage} width={900} height={900} alt="" />
            </div>

            <div className={styles.productInformation}>
              <p>Crab Pool Security</p>
              <h1>Ghc 30.00</h1>
            </div>
          </div>

		  <div className={styles.productContainer}>
            <div className={styles.productImage}>
              <Image src={HeroImage} width={900} height={900} alt="" />
            </div>

            <div className={styles.productInformation}>
              <p>Crab Pool Security</p>
              <h1>Ghc 30.00</h1>
            </div>
          </div>

		  <div className={styles.productContainer}>
            <div className={styles.productImage}>
              <Image src={HeroImage} width={900} height={900} alt="" />
            </div>

            <div className={styles.productInformation}>
              <p>Crab Pool Security</p>
              <h1>Ghc 30.00</h1>
            </div>
          </div>

		  <div className={styles.productContainer}>
            <div className={styles.productImage}>
              <Image src={HeroImage} width={900} height={900} alt="" />
            </div>

            <div className={styles.productInformation}>
              <p>Crab Pool Security</p>
              <h1>Ghc 30.00</h1>
            </div>
          </div>

		  <div className={styles.productContainer}>
            <div className={styles.productImage}>
              <Image src={HeroImage} width={900} height={900} alt="" />
            </div>

            <div className={styles.productInformation}>
              <p>Crab Pool Security</p>
              <h1>Ghc 30.00</h1>
            </div>
          </div>

		  <div className={styles.productContainer}>
            <div className={styles.productImage}>
              <Image src={HeroImage} width={900} height={900} alt="" />
            </div>

            <div className={styles.productInformation}>
              <p>Crab Pool Security</p>
              <h1>Ghc 30.00</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureCategory;
