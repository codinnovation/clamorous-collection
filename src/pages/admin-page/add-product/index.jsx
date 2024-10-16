import React, { useState } from "react";
import styles from "../../../styles/admin-page/add-product.module.css";
import SideBar from "../sidebar";
import { db } from "../../../../firebase.config";
import { ref, push } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProduct() {
  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImage: "",
    productCategory: ""
  });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [message, setMessage] = useState("");

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
    if (!productData.productCategory || !productData.productImage || !productData.productName || !productData.productPrice || !productData.productDescription) {
      setMessage("Please fill all fields.");
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
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress); // Set the upload progress
      },
      (error) => {
        console.error("Upload error:", error);
        setMessage("Upload failed. Please try again.");
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
          setMessage("Product added successfully!");
          setUploadProgress(0); // Reset upload progress
        } catch (error) {
          console.error("Database error:", error);
          setMessage("Database error. Please try again.");
        }
      }
    );
  };

  return (
    <>
      <SideBar />
      <div className={styles.addContainer}>
        <div className={styles.addContent}>
          <form onSubmit={handleSubmitProduct}>
            <div className={styles.inputFieldContainer}>
              <div className={styles.inputField}>
                <label>Product Category</label>
                <select name="productCategory" value={productData.productCategory} onChange={handleInputChange}>
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

              <div className={styles.inputField}>
                <label>Product Name</label>
                <input 
                  name="productName" 
                  placeholder="" 
                  value={productData.productName} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className={styles.inputField}>
                <label>Product Price</label>
                <input 
                  name="productPrice" 
                  type="number" 
                  placeholder="" 
                  value={productData.productPrice} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className={styles.inputField}>
                <label>Product Description</label>
                <input 
                  name="productDescription" 
                  placeholder="" 
                  value={productData.productDescription} 
                  onChange={handleInputChange} 
                />
              </div>

              <div className={styles.inputField}>
                <label>Product Image</label>
                <input 
                  name="productImage" 
                  type="file" 
                  accept="image/*" 
                  onChange={handleInputChange} 
                />
              </div>
            </div>

            {uploadProgress > 0 && (
              <div className={styles.uploadProgress}>
                <div className={styles.progressContainer}>
                  <div 
                    className={styles.progressBar} 
                    style={{ width: `${uploadProgress}%` }} 
                  />
                </div>
                <span>{uploadProgress.toFixed(0)}%</span>
              </div>
            )}

            {message && <div className={styles.message}>{message}</div>}

            <div className={styles.submitButton}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
