import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../../styles/admin-page/category.module.css";
import Image from "next/image";
import { db } from "../../../../firebase.config";
import { ref, get, remove } from "firebase/database";
import SideBar from "../sidebar";

function Category() {
  const [productDataArray, setProductDataArray] = useState([]);
  const router = useRouter();
  const { category } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!category) return; // Wait until category is selected

        const dbRef = ref(db, `products/${category}`);
        const response = await get(dbRef);
        const data = response.val();

        if (data && typeof data === "object") {
          const dataArray = Object.entries(data).map(([key, value]) => ({
            key,
            ...value
          }));
          setProductDataArray(dataArray);
        } else {
          setProductDataArray([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setProductDataArray([]);
      }
    };

    fetchData();
  }, [category]);

  // Function to delete a product
  const handleDeleteProduct = async (productKey) => {
    try {
      const productRef = ref(db, `products/${category}/${productKey}`);
      await remove(productRef); // Remove the product from the database
      setProductDataArray((prevData) => prevData.filter((product) => product.key !== productKey)); // Update local state
      alert("Product deleted successfully!"); // Feedback to user
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    }
  };

  return (
    <>
      <SideBar />
      <div className={styles.categoryContainer}>
        <div className={styles.categoryContent}>
          {productDataArray.length > 0 ? (
            productDataArray.map((product) => (
              <div key={product.key} className={styles.productContainer}>
                <div className={styles.productImage}>
                  <Image
                    src={product.productImage}
                    width={900}
                    height={900}
                    alt={product.productName}
                    unoptimized
                  />
                </div>

                <div className={styles.productInformation}>
                  <p>{product.productName}</p>
                  <div className={styles.priceContainer}>
                    <h1>Ghc</h1>
                    <h1>{product.productPrice}</h1>
                  </div>

                  <div className={styles.productDescription}>
                    <p>Description</p>
                    <hr />
                    <p>{product.productDescription}</p>
                  </div>

                  <div className={styles.actions}>
                    <button onClick={() => handleDeleteProduct(product.key)}>Delete</button>
                    <button>Edit</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found for this category</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Category;
