import React from "react";
import styles from "../../../styles/home/navigation-bar.module.css";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

function NavigationBar() {
  return (
    <>
      <div className={styles.navigationContainer}>
        <div className={styles.navigationContent}>
          <div className={styles.storeNameContainer}>
            <h1>Clamo</h1>
            <h1>rous</h1>
          </div>

          <div className={styles.linkContainer}>
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Pages</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Contact</Link>
          </div>

          <div className={styles.menuBurger}>
            <MenuIcon className={styles.icon} />
          </div>

          <div className={styles.cartContainer}>
            <div className={styles.cart}>
              <FavoriteIcon className={styles.icon} />
              <div className={styles.itemCount}>5</div>
            </div>

            <div className={styles.cart}>
              <ShoppingCartIcon className={styles.icon} />
              <div className={styles.itemCount}>9</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NavigationBar;
