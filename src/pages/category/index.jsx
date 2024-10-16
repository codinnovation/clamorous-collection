import React, { useState, useEffect } from "react";
import Layout from "../layout";
import styles from "../../styles/category/category.module.css";
import Image from "next/image";
import CategoryImage from "../../../public/img2.jpg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { db } from "../../../firebase.config";
import { ref, get } from "firebase/database";
import { useRouter } from "next/router";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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


const addCart = (product) => {
  const existingCart = JSON.parse(localStorage.getItem("clamorousCart")) || [];

  // Check if the product already exists in the cart
  const isProductInCart = existingCart.some(item => item.key === product.key);

  if (isProductInCart) {
    // Show a message if the product is already in the cart
    toast.warn(`${product.productName} is already in the cart`);
    return; // Exit the function if the product is already in the cart
  }

  // Add the product to the cart if it doesn't exist
  const updatedCart = [...existingCart, product];
  localStorage.setItem("clamorousCart", JSON.stringify(updatedCart));
  toast.success(`${product.productName} added to cart`);

  // Optionally reload the page or update state here
  window.location.reload(); // Reload the page after the item is added to the cart
};

  

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
                    <div className={styles.productName}>
                      <h1>{product?.productName} </h1>
                      <p>{`Ghc${product?.productPrice}`}</p>
                    </div>

                    <div className={styles.addCart}>
                      <AddShoppingCartIcon
                        className={styles.icon}
                        onClick={() => addCart(product)}
                      />
                      <FavoriteIcon className={styles.icon1} />
                    </div>
                    <p>{product?.productDescription}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found for {category}</p>
            )}
          </div>
        </div>
      </Layout>
      <ToastContainer />
    </>
  );
}
export default Category;
