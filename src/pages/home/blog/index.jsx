import React from "react";
import styles from "../../../styles/home/blog.module.css";
import Image from "next/image";
import BlogImage from "../../../../public/hero-img.png";
import CalendarMonth from "@mui/icons-material/CalendarMonth";

function Blog() {
  return (
    <>
      <div className={styles.blogContainer}>
        <div className={styles.blogHeader}>
          <h1>From The Blog</h1>
          <hr />
        </div>
        <div className={styles.blogContent}>
          <div className={styles.blog}>
            <div className={styles.blogImage}>
              <Image src={BlogImage} width={900} height={900} alt="" />
            </div>

            <div className={styles.blogDescription}>
              <div className={styles.blogDate}>
                <CalendarMonth className={styles.icon} />
                <h1>2025/05/05</h1>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                expedita quos itaque autem rem at, esse, minima labore velit
                porro aliquam facilis reprehenderit laboriosam cupiditate vel
                soluta numquam suscipit atque?
              </p>
            </div>
          </div>

          <div className={styles.blog}>
            <div className={styles.blogImage}>
              <Image src={BlogImage} width={900} height={900} alt="" />
            </div>

            <div className={styles.blogDescription}>
              <div className={styles.blogDate}>
                <CalendarMonth className={styles.icon} />
                <h1>2025/05/05</h1>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                expedita quos itaque autem rem at, esse, minima labore velit
                porro aliquam facilis reprehenderit laboriosam cupiditate vel
                soluta numquam suscipit atque?
              </p>
            </div>
          </div>

          <div className={styles.blog}>
            <div className={styles.blogImage}>
              <Image src={BlogImage} width={900} height={900} alt="" />
            </div>

            <div className={styles.blogDescription}>
              <div className={styles.blogDate}>
                <CalendarMonth className={styles.icon} />
                <h1>2025/05/05</h1>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
                expedita quos itaque autem rem at, esse, minima labore velit
                porro aliquam facilis reprehenderit laboriosam cupiditate vel
                soluta numquam suscipit atque?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Blog;
