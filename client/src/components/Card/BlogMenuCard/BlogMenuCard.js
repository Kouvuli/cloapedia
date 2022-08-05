import { Grid } from "@mui/material"
import React from "react"
import styles from "./styles.module.css"
import pic from "../../../assets/images/upload/menu_01.jpg"
const BlogMenuCard = () => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <div className={styles["blog-box"]}>
        <div className={styles["post-media"]}>
          <a href="single.html" title="">
            <img src={pic} alt="" className="img-fluid" />
            <div className={styles.hovereffect}></div>
            <span className={styles.menucat}>Spa</span>
          </a>
        </div>
        <div className={styles["blog-meta"]}>
          <h4>
            <a href="single.html" title="">
              Top 10+ care advice for your toenails
            </a>
          </h4>
        </div>
      </div>
    </Grid>
  )
}

export default BlogMenuCard
