import React from "react"
import pic from "../../../assets/images/upload/menu_06.jpg"
import styles from "./styles.module.css"
const MoreBlogCard = () => {
  return (
    <div className={styles["blog-box"]}>
      <div className={styles["post-media"]}>
        <a href="single.html" title="">
          <img src={pic} alt="" className={styles["img-fluid"]} />
          <div className={styles.hovereffect}>
            <span className=""></span>
          </div>
        </a>
      </div>
      <div className={styles["blog-meta"]}>
        <h4>
          <a href="single.html" title="">
            We are guests of ABC Design Studio
          </a>
        </h4>
        <small>
          <a href="blog-category-01.html" title="">
            Trends
          </a>
        </small>
        <small>
          <a href="blog-category-01.html" title="">
            21 July, 2017
          </a>
        </small>
      </div>
    </div>
  )
}

export default MoreBlogCard
