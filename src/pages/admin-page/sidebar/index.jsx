import React from "react";
import styles from "../../../styles/admin-page/sidebar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function SideBar({ children }) {
  const router = useRouter();
  return (
    <>
      <div className={styles.sidebarContainer}>
        <div className={styles.sidebarContent}>
          <div className={styles.storeNameContainer}>
            <h1>Clamo</h1>
            <h1>rous</h1>
          </div>

          <div className={styles.categoryContainer}>
            <div className={styles.categoryHeader}>
              <h1>Categories</h1>
            </div>
            <div className={styles.categoryLink}>
              <Link
                href={{
                  pathname: "/admin-page/category",
                  query: { category: "nightwears" }
                }}
              >
                Night Wear
              </Link>{" "}
              <Link href="/">Bedsheets</Link>
              <Link href="/">Perfumes</Link>
              <Link href="/">Scrunchies</Link>
              <Link href="/">Hair Bands</Link>
              <Link href="/">Hair clips</Link>
              <Link href="/">Ladies accessories</Link>
              <Link href="/">Totes bags</Link>
              <Link href="/">Atomizers</Link>
            </div>
          </div>

          <div className={styles.ordersContainer}>
            <div className={styles.ordersHeader}>
              <h1>Orders</h1>
              <div className={styles.orderLink}>
                <Link href="/admin-page/add-product">Add Product</Link>

                <Link href="/">Orders</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}
export default SideBar;
