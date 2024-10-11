import React from "react";
import styles from "../../../styles/home/top-bar.module.css";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function TopBar() {
  return (
    <>
      <div className={styles.topbarContainer}>
        <div className={styles.topbarContent}>
          <div className={styles.firstContent}>
            <div className={styles.emailContainer}>
              <EmailIcon className={styles.icon} />
              <p>clamorouscollection@gmail.com</p>
            </div>

			<div className={styles.line}></div>

            <div className={styles.shippingInformation}>
              <p>Free Shipping for all Order of Ghc99</p>
            </div>
          </div>

          <div className={styles.secondContent}>
            <FacebookIcon className={styles.icon} />
            <XIcon className={styles.icon} />
            <WhatsAppIcon className={styles.icon} />

            <div className={styles.line}></div>

            <div className={styles.loginContainer}>
              <PersonOutlineIcon className={styles.icon} />
              <p>Login</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TopBar;
