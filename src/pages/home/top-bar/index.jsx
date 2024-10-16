import React, { useState } from "react"; // Import useState
import styles from "../../../styles/home/top-bar.module.css";
import EmailIcon from "@mui/icons-material/Email";
import { useRouter } from "next/router";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { toast, ToastContainer } from "react-toastify"; // Import toast for notifications

function TopBar({ user }) {
  const router = useRouter();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  console.log(user)

  const handleLoginOrLogout = async (e) => {
    if (!user) {
      // If there's no user, redirect to login
      router.push("/login");
    } else {
      // If user is logged in, proceed to logout
      setIsButtonClicked(true);
      try {
        const response = await fetch("/api/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (response.ok) {
          toast.success("Logout Successful");
          router.push("/login");
          setIsButtonClicked(false);
        } else {
          toast.error("Logout Failed");
          setIsButtonClicked(false);
        }
      } catch (error) {
        toast.error("Error Occurred");
        setIsButtonClicked(false);
      }
    }
  };

  return (
    <>
      <div className={styles.topbarContainer}>
        <div className={styles.topbarContent}>
          <div className={styles.firstContent}>
            <div className={styles.emailContainer}>
              <EmailIcon className={styles.icon} />
              <p>clamorouscollection@gmail.com</p>
            </div>

            <div className={styles.line}></div>

            <div className={styles.shippingInformation}>
              <p>Free Shipping for all Order of Ghc99</p>
            </div>
          </div>

          <div className={styles.secondContent}>
            <FacebookIcon className={styles.icon} />
            <XIcon className={styles.icon} />
            <WhatsAppIcon className={styles.icon} />

            <div className={styles.line}></div>

            <div
              className={styles.loginContainer}
              onClick={handleLoginOrLogout}
            >
              <PersonOutlineIcon className={styles.icon} />
              <p>{user ? "Logout" : "Login"}</p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default TopBar;
