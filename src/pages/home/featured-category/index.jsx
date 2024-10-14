import React from "react";
import styles from "../../../styles/home/feature-category.module.css";
import HeroImage from "../../../../public/hero-img.png";
import Nightwear from "../../../../public/nightwear.png";
import Bedsheet from "../../../../public/bedsheet.png";
import Perfume from "../../../../public/perfume.png";
import Scrunchies from "../../../../public/scrunchies.png";
import Totesbag from "../../../../public/totesbag.png";
import Atomizers from "../../../../public/atomizers.png";
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
              <Image src={Nightwear} width={900} height={900} alt="" />
            </div>

            <div className={styles.productInformation}>
              <p>Night wears</p>
            </div>
          </div>

          <div className={styles.productContainer}>
            <div className={styles.productImage}>
              <Image src={Bedsheet} width={900} height={900} alt="" />
            </div>

            <div className={styles.productInformation}>
              <p>Bedsheets</p>
            </div>
          </div>

          <div className={styles.productContainer}>
            <div className={styles.productImage}>
              <Image src={Perfume} width={900} height={900} alt="" />
            </div>

            <div className={styles.productInformation}>
              <p>Perfumes</p>
            </div>
          </div>

          <div className={styles.productContainer}>
            <div className={styles.productImage}>
              <Image src={Scrunchies} width={900} height={900} alt="" />
            </div>

            <div className={styles.productInformation}>
              <p>Butterfly Scrunchies</p>
            </div>
          </div>

          <div className={styles.productContainer}>
            <div className={styles.productImage}>
              <Image src={Totesbag} width={900} height={900} alt="" />
            </div>

            <div className={styles.productInformation}>
              <p>Totes Bags</p>
            </div>
          </div>

          <div className={styles.productContainer}>
            <div className={styles.productImage}>
              <Image src={Atomizers} width={900} height={900} alt="" />
            </div>

            <div className={styles.productInformation}>
              <p>Atomizers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureCategory;
