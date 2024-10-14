import React from "react";
import styles from "../../../styles/home/glance..module.css";
import Image from "next/image";
import GlanceImage from "../../../../public/hero-img.png";
import HairClip from "../../../../public/hairclip.png";
import HairBand from "../../../../public/hairband.png";

function Glance() {
  return (
    <>
      <div className={styles.glanceContainer}>
        <div className={styles.glanceContent}>
          <div className={styles.glance}>
            <div className={styles.glanceImage}>
              <Image src={HairClip} width={900} height={900} alt="" />
            </div>

            <div className={styles.glanceDescription}>
              <h1>Hair Clips</h1>
              <p>100% Quality</p>
              <button>Shop Now</button>
            </div>
          </div>
          <div className={styles.glance}>
            <div className={styles.glanceDescription}>
              <h1>Hair Band</h1>
              <p>100% Quality</p>
              <button>Shop Now</button>
            </div>
            <div className={styles.glanceImage}>
              <Image src={HairBand} width={900} height={900} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Glance;
