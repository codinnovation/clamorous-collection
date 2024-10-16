import React, { useState, useEffect } from "react";
import styles from "../../../styles/home/navigation-bar.module.css";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from "@mui/material";
import Image from "next/image";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { db } from "../../../../firebase.config";
import { get, ref, push } from "firebase/database";

// Dynamically import the PaystackButton with no SSR
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

function NavigationBar() {
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [openPayModal, setOpenPayModal] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [first_name, setFirst_Name] = useState("");
  const publicKey = process.env.NEXT_PUBLIC_PAY_STACK_API;

  useEffect(() => {
    const fetchCart = JSON.parse(localStorage.getItem("clamorousCart")) || [];
    const fetchFav = JSON.parse(localStorage.getItem("clamorousFav")) || [];

    setCartItems(fetchCart);
    setFavItems(fetchFav);
  }, []);

  const handleOpenCart = () => {
    setOpenCartModal(true);
  };

  const handleCloseCart = () => {
    setOpenCartModal(false);
  };

  const handleOpenPayModal = () => {
    setOpenPayModal(true);
  };

  const handleClosePayModal = () => {
    setOpenPayModal(false);
  };

  const amount =
    cartItems.reduce((total, item) => total + item.productPrice, 0) * 100;

  const handleSaveOrderToDB = (orderDetails) => {
    const ordersRef = ref(db, "orders"); // Reference to the 'orders' section in Firebase
    push(ordersRef, orderDetails)
      .then(() => {
        toast.success("Order placed successfully!");
      })
      .catch((error) => {
        toast.error("Error saving order: " + error.message);
      });
  };

  const componentProps = {
    email,
    amount,
    currency: "GHS",
    phone,
    last_name,
    first_name,
    metadata: {},
    publicKey,
    text: "Pay Now",
    onSuccess: (response) => {
      // Payment successful, proceed to save the order
      const orderDetails = {
        customer: {
          firstName: first_name,
          lastName: last_name,
          email: email,
          phone: phone
        },
        products: cartItems, // Array of items from the cart
        totalAmount: amount / 100, // Convert amount back to actual value
        paymentInfo: {
          transactionRef: response.reference,
          status: response.status,
          paymentMethod: "Paystack",
          amountPaid: amount / 100,
          currency: "GHS"
        },
        orderDate: new Date().toISOString() // Record the date of the order
      };

      // Save order details to Firebase
      handleSaveOrderToDB(orderDetails);

      // Clear the cart in local storage
      localStorage.removeItem("clamorousCart");
      setCartItems([]); // Update state to reflect the empty cart
      // Show success message
      
      toast.success("Thanks for doing business with us! Come back soon!!");
    },
    onClose: () => toast.warning("Wait! Don't leave :(")
  };
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
              <div className={styles.itemCount}>{favItems?.length}</div>
            </div>

            <div className={styles.cart}>
              <ShoppingCartIcon
                className={styles.icon}
                onClick={handleOpenCart}
              />
              <div className={styles.itemCount}>{cartItems?.length}</div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={openCartModal} onClose={handleCloseCart}>
        <DialogTitle>Shopping Cart</DialogTitle>
        <DialogContent>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "15px",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <Image
                  src={item.productImage}
                  alt={item.productName}
                  width={100}
                  height={100}
                  style={{ borderRadius: "8px", marginRight: "10px" }}
                  unoptimized
                />
                <div>
                  <Typography variant="h6">{item.productName}</Typography>
                  <Typography variant="body1">{`Price: Ghc${item.productPrice}`}</Typography>
                  <Typography variant="body2">
                    {item.productDescription}
                  </Typography>
                </div>
              </div>
            ))
          ) : (
            <Typography>No items in the cart.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCart} color="primary">
            Close
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenPayModal}
          >
            Proceed to Checkout
          </Button>
        </DialogActions>
      </Dialog>

      <ToastContainer />

      <Modal
        open={openPayModal}
        onClose={handleClosePayModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            type="text"
            id="first_name"
            onChange={(e) => setFirst_Name(e.target.value)}
            placeholder="First Name"
            style={{ marginBottom: "10px", width: "100%" }}
          />

          <input
            type="text"
            id="last_name"
            onChange={(e) => setLast_Name(e.target.value)}
            placeholder="Last Name"
            style={{ marginBottom: "10px", width: "100%" }}
          />

          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={{ marginBottom: "10px", width: "100%" }}
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            style={{ marginBottom: "10px", width: "100%" }}
          />
          <PaystackButton {...componentProps} />
        </Box>
      </Modal>
    </>
  );
}

export default NavigationBar;
