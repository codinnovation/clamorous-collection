import React from "react";
import styles from "../../../styles/home/glance..module.css";
import Image from "next/image";
import GlanceImage from "../../../../public/hero-img.png";

function Glance() {
  return (
    <>
      <div className={styles.glanceContainer}>
        <div className={styles.glanceContent}>
          <div className={styles.glance}>
            <div className={styles.glanceImage}>
              <Image src={GlanceImage} width={900} height={900} alt="" />
            </div>

            <div className={styles.glanceDescription}>
              <h1>Summer Fruit</h1>
              <p>100% Pure Natural Fruit Juice</p>
              <button>Shop Now</button>
            </div>
          </div>
          <div className={styles.glance}>
            <div className={styles.glanceDescription}>
              <h1>Summer Fruit</h1>
              <p>100% Pure Natural Fruit Juice</p>
              <button>Shop Now</button>
            </div>
            <div className={styles.glanceImage}>
              <Image src={GlanceImage} width={900} height={900} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Glance;
