import React, { useState } from "react";
import styles from "../../../styles/admin-page/firstHeader.module.css";
import Image from "next/image";
import CategoryImage from "../../../../public/img2.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

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

  const handleCloseActionModal = () => {
    setOpenActionModal(false);
  };
  return (
    <>
      <div className={styles.firstheaderContainer}>
        <div className={styles.firstheaderContent}>
          <div className={styles.showCategories}>
            <h1>Choose your Category</h1>
            <select>
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
            <button>Add Product</button>
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
          <Button variant="outlined">Add Product</Button>
          <Button variant="outlined">Logout</Button>
        </Box>
      </Modal>
    </>
  );
}

export default FirstHeader;
