import React from "react";
import Layout from "../layout";
import styles from "../../styles/category/category.module.css";
import Image from "next/image";
import CategoryImage from "../../../public/img2.jpg";
import CategoryImage1 from "../../../public/img3.jpg";

function Category() {
  return (
    <>
      <Layout>
        <div className={styles.categoryContainer}>
          <div className={styles.categoryHeader}>
            <h1>Viewing</h1>
            <h1>Food & Drinks</h1>
            <hr />
          </div>
          <div className={styles.categoryContent}>
            <div className={styles.productContainer}>
              <div className={styles.productImage}>
                <Image src={CategoryImage} width={900} height={900} alt="" />
              </div>

              <div className={styles.productInformation}>
                <p>Crab Pool Security</p>
                <div className={styles.priceContainer}>
                  <h1>Ghc</h1>
                  <h1>30.00</h1>
                </div>

                <div className={styles.productDescription}>
                  <p>Description</p>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa error vel autem minus fugiat suscipit dignissimos
                    sequi quis voluptas. Animi veniam architecto perspiciatis
                    reiciendis ipsa placeat doloribus eligendi saepe ea.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.productContainer}>
              <div className={styles.productImage}>
                <Image src={CategoryImage} width={900} height={900} alt="" />
              </div>

              <div className={styles.productInformation}>
                <p>Crab Pool Security</p>
                <div className={styles.priceContainer}>
                  <h1>Ghc</h1>
                  <h1>30.00</h1>
                </div>

                <div className={styles.productDescription}>
                  <p>Description</p>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa error vel autem minus fugiat suscipit dignissimos
                    sequi quis voluptas. Animi veniam architecto perspiciatis
                    reiciendis ipsa placeat doloribus eligendi saepe ea.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.productContainer}>
              <div className={styles.productImage}>
                <Image src={CategoryImage1} width={900} height={900} alt="" />
              </div>

              <div className={styles.productInformation}>
                <p>Crab Pool Security</p>
                <div className={styles.priceContainer}>
                  <h1>Ghc</h1>
                  <h1>30.00</h1>
                </div>

                <div className={styles.productDescription}>
                  <p>Description</p>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa error vel autem minus fugiat suscipit dignissimos
                    sequi quis voluptas. Animi veniam architecto perspiciatis
                    reiciendis ipsa placeat doloribus eligendi saepe ea.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.productContainer}>
              <div className={styles.productImage}>
                <Image src={CategoryImage} width={900} height={900} alt="" />
              </div>

              <div className={styles.productInformation}>
                <p>Crab Pool Security</p>
                <div className={styles.priceContainer}>
                  <h1>Ghc</h1>
                  <h1>30.00</h1>
                </div>

                <div className={styles.productDescription}>
                  <p>Description</p>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa error vel autem minus fugiat suscipit dignissimos
                    sequi quis voluptas. Animi veniam architecto perspiciatis
                    reiciendis ipsa placeat doloribus eligendi saepe ea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Category;
