import React from "react";
import styles from "../../../styles/home/footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.firstContent}>
            <div className={styles.companyName}>
              <h1>Clamo</h1>
              <h1>rous</h1>
            </div>

            <div className={styles.firstContentDescription}>
              <p>Phone: +233 500 976 882</p>
              <p>Email: hello@gmail.com</p>
            </div>
          </div>

          <div className={styles.secondContent}>
            <h1>Useful Links</h1>
            <div className={styles.secondContentDescription}>
              <Link href="/">Home</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Blog</Link>
            </div>
          </div>

          <div className={styles.thirdContent}>
            <h1>Join Our WhatsApp Group</h1>
            <p>Get E-mail updates about our latest shop and special offers.</p>
            <div className={styles.button}>
              <button>Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
