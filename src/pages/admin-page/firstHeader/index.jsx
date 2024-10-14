import React, { useState } from "react";
import styles from "../../../styles/admin-page/firstHeader.module.css";
import Image from "next/image";
import CategoryImage from "../../../../public/img2.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { db } from "../../../../firebase.config";
import { ref, push } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

function FirstHeader() {
  const [openActionModal, setOpenActionModal] = useState(false);
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImage: "",
    productCategory: "" // New field for category
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "productImage" && files && files.length > 0) {
      setProductData({
        ...productData,
        productImage: files[0] // Store the image file
      });
    } else {
      setProductData({
        ...productData,
        [name]: value // Update other inputs like name, price, description
      });
    }
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!productData.productCategory || !productData.productImage) {
      return;
    }

    const storage = getStorage();
    const imageFile = productData.productImage;
    const categoryFolder = productData.productCategory.toLowerCase();
    const imageRef = storageRef(storage, `images/${categoryFolder}/${imageFile.name}`);

    // Upload image to Firebase Storage within the category folder
    const uploadTask = uploadBytesResumable(imageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress function, can be used to show progress indicator
      },
      (error) => {
        toast.error("Error uploading image");
        console.error("Upload error:", error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // Prepare product data including the image URL and category
          const productToSave = {
            productName: productData.productName,
            productPrice: productData.productPrice,
            productDescription: productData.productDescription,
            productImage: downloadURL, // Store the image URL
            productCategory: productData.productCategory // Store the selected category
          };

          // Save product information to Realtime Database under the category node
          await push(ref(db, `products/${categoryFolder}`), productToSave);

          // Reset form after submission
          setProductData({
            productName: "",
            productPrice: "",
            productDescription: "",
            productImage: "",
            productCategory: ""
          });
        } catch (error) {
          console.error("Database error:", error);
        }
      }
    );
  };

  const handleCloseActionModal = () => {
    setOpenActionModal(false);
  };

  const handleCloseAddProduct = () => {
    setOpenAddProduct(false);
  };

  return (
    <>
      <div className={styles.firstheaderContainer}>
        <div className={styles.firstheaderContent}>
          <div className={styles.showCategories}>
            <h1>Choose your Category</h1>
            <select
              name="productCategory"
              value={productData.productCategory}
              onChange={handleInputChange}
              required
            >
              <option value="">Select your category</option>
              <option value="nightwears">Night wears</option>
              <option value="bedsheets">Bedsheets</option>
              <option value="perfumes">Perfumes</option>
              <option value="scrunchies">Scrunchies</option>
              <option value="hairbands">Hair bands</option>
              <option value="hairclips">Hair clips</option>
              <option value="ladiesaccessories">Ladies accessories</option>
              <option value="totesbag">Totes bags</option>
              <option value="atomizers">Atomizers</option>
            </select>
          </div>

          <div className={styles.adminActions}>
            <button onClick={() => setOpenAddProduct(true)}>Add Product</button>
            <button>Logout</button>
          </div>

          <div
            className={styles.menuContainer}
            onClick={() => setOpenActionModal(true)}
          >
            <MenuIcon />
          </div>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  error vel autem minus fugiat suscipit dignissimos sequi quis
                  voluptas. Animi veniam architecto perspiciatis reiciendis ipsa
                  placeat doloribus eligendi saepe ea.
                </p>
              </div>
            </div>

            <div className={styles.actions}>
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={openActionModal} onClose={handleCloseActionModal}>
        <Box sx={style}>
          <Button variant="outlined" onClick={() => setOpenAddProduct(true)}>
            Add Product
          </Button>
          <Button variant="outlined">Logout</Button>
        </Box>
      </Modal>

      <Modal open={openAddProduct} onClose={handleCloseAddProduct}>
        <Box sx={style}>
          <form onSubmit={handleSubmitProduct}>
            <input
              name="productName"
              placeholder="Product name"
              value={productData.productName}
              onChange={handleInputChange}
              required
            />
            <input
              name="productImage"
              placeholder="Product image"
              type="file"
              onChange={handleInputChange}
              required
            />
            <input
              name="productDescription"
              placeholder="Product description"
              value={productData.productDescription}
              onChange={handleInputChange}
              required
            />
            <input
              name="productPrice"
              placeholder="Product price"
              value={productData.productPrice}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Add Product</button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default FirstHeader;
