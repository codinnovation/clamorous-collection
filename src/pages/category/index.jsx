import React, { useState, useEffect } from "react";
import Layout from "../layout";
import styles from "../../styles/category/category.module.css";
import Image from "next/image";
import CategoryImage from "../../../public/img2.jpg";
import CategoryImage1 from "../../../public/img3.jpg";
import { db } from "../../../firebase.config";
import { ref, get } from "firebase/database";
import { useRouter } from "next/router";

function Category() {
  const router = useRouter();
  const { category, title } = router.query;
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(db, `products/${category}`);
        const response = await get(dbRef);
        const data = response.val();

        if (data && typeof data === "object") {
          const dataArray = Object.entries(data).map(([key, value]) => ({
            key,
            ...value
          }));
          setProductData(dataArray);
        } else {
          setProductData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setProductData([]);
      }
    };

    fetchData();
  }, [category]);

  return (
    <>
      <Layout>
        <div className={styles.categoryContainer}>
          <div className={styles.categoryHeader}>
            <h1>Viewing</h1>
            <h1>{title}</h1>
            <hr />
          </div>
          <div className={styles.categoryContent}>
            {productData.length > 0 ? (
              productData.map((product) => (
                <div className={styles.productContainer} key={product.key}>
                  <div className={styles.productImage}>
                    <Image
                      src={product.productImage || CategoryImage}
                      width={900}
                      height={900}
                      alt={product.name || "Product Image"}
                      unoptimized
                    />
                  </div>

                  <div className={styles.productInformation}>
                    <p>{product.productName || "Unnamed Product"}</p>
                    <div className={styles.priceContainer}>
                      <h1>Ghc</h1>
                      <h1>{product.productPrice || "0.00"}</h1>
                    </div>

                    <div className={styles.productDescription}>
                      <p>Description</p>
                      <hr />
                      <p>
                        {product.productDescription ||
                          "No description available"}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found for {category}</p>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
export default Category;
