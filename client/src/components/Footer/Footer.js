import { Grid } from "@mui/material"
import React from "react"
import styles from "./styles.module.css"
import pic from "../../assets/images/upload/blog_square_01.jpg"
import pic1 from "../../assets/images/upload/blog_square_04.jpg"
import logo from "../../assets/images/flogo.png"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Grid container className="container">
        <Grid item lg={4} sm={12}>
          <div className={styles.widget}>
            <h2 className={styles["widget-title"]}>Recent Posts</h2>
            <div className={styles["blog-list-widget"]}>
              <div className={styles["list-group"]}>
                <a href="single.html" className={styles["list-group-item"]}>
                  <div
                    className={`${styles["w-100"]} ${styles["justify-content-between"]}`}
                  >
                    <img
                      src={pic}
                      alt=""
                      className={`${styles["img-fluid"]} ${styles["float-left"]}`}
                    />
                    <h5 className={styles["mb-1"]}>
                      5 Beautiful buildings you need to before dying
                    </h5>
                    <small>12 Jan, 2016</small>
                  </div>
                </a>

                <a href="single.html" className={styles["list-group-item"]}>
                  <div
                    className={`${styles["w-100"]} ${styles["justify-content-between"]}`}
                  >
                    <img
                      src={pic}
                      alt=""
                      className={`${styles["img-fluid"]} ${styles["float-left"]}`}
                    />
                    <h5 className={styles["mb-1"]}>
                      5 Beautiful buildings you need to before dying
                    </h5>
                    <small>12 Jan, 2016</small>
                  </div>
                </a>

                <a href="single.html" className={styles["list-group-item"]}>
                  <div
                    className={`${styles["w-100"]} ${styles["justify-content-between"]}`}
                  >
                    <img
                      src={pic}
                      alt=""
                      className={`${styles["img-fluid"]} ${styles["float-left"]}`}
                    />
                    <h5 className={styles["mb-1"]}>
                      5 Beautiful buildings you need to before dying
                    </h5>
                    <small>12 Jan, 2016</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item lg={4} sm={12}>
          <div className={styles.widget}>
            <h2 className={styles["widget-title"]}>Popular Posts</h2>
            <div className={styles["blog-list-widget"]}>
              <div className={styles["list-group"]}>
                <a href="single.html" className={styles["list-group-item"]}>
                  <div
                    className={`${styles["w-100"]} ${styles["justify-content-between"]}`}
                  >
                    <img
                      src={pic1}
                      alt=""
                      className={`${styles["img-fluid"]} ${styles["float-left"]}`}
                    />
                    <h5 className={styles["mb-1"]}>
                      Banana-chip chocolate cake recipe with customs
                    </h5>
                    <span className={styles.rating}>
                      <i class="bx bxs-star" style={{ color: "#feda03" }}></i>
                      <i class="bx bxs-star" style={{ color: "#feda03" }}></i>
                      <i class="bx bxs-star" style={{ color: "#feda03" }}></i>
                      <i class="bx bxs-star" style={{ color: "#feda03" }}></i>
                      <i class="bx bxs-star" style={{ color: "#feda03" }}></i>
                    </span>
                  </div>
                </a>

                <a href="single.html" className={styles["list-group-item"]}>
                  <div
                    className={`${styles["w-100"]} ${styles["justify-content-between"]}`}
                  >
                    <img
                      src={pic1}
                      alt=""
                      className={`${styles["img-fluid"]} ${styles["float-left"]}`}
                    />
                    <h5 className={styles["mb-1"]}>
                      Banana-chip chocolate cake recipe with customs
                    </h5>
                    <span className={styles.rating}>
                      <i class="bx bxs-star" style={{ color: "#feda03" }}></i>
                      <i class="bx bxs-star" style={{ color: "#feda03" }}></i>
                      <i class="bx bxs-star" style={{ color: "#feda03" }}></i>
                      <i class="bx bxs-star" style={{ color: "#feda03" }}></i>
                      <i class="bx bxs-star" style={{ color: "#feda03" }}></i>
                    </span>
                  </div>
                </a>
                <a href="single.html" className={styles["list-group-item"]}>
                  <div
                    className={`${styles["w-100"]} ${styles["justify-content-between"]}`}
                  >
                    <img
                      src={pic1}
                      alt=""
                      className={`${styles["img-fluid"]} ${styles["float-left"]}`}
                    />
                    <h5 className={styles["mb-1"]}>
                      Banana-chip chocolate cake recipe with customs
                    </h5>
                    <span className={styles.rating}>
                      <i class="bx bxs-star" style={{ color: "#feda03" }}></i>
                      <i class="bx bxs-star" style={{ color: "#feda03" }}></i>
                      <i class="bx bxs-star" style={{ color: "#feda03" }}></i>
                      <i class="bx bxs-star" style={{ color: "#feda03" }}></i>
                      <i class="bx bxs-star" style={{ color: "#feda03" }}></i>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item lg={4} sm={12}>
          <div className={styles["widget"]}>
            <h2 className={styles["widget-title"]}>Popular Categories</h2>
            <div className={styles["link-widget"]}>
              <ul>
                <li>
                  <a href="#">
                    Fahsion <span>(21)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Lifestyle <span>(15)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Art & Design <span>(31)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Health Beauty <span>(22)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Clothing <span>(66)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Entertaintment <span>(11)</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    Food & Drink <span>(87)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Grid>

        <Grid marginTop="4rem" item lg={12}>
          <div className={styles.widget}>
            <div
              className={`${styles["footer-text"]} ${styles["text-center"]}`}
            >
              <a href="index.html">
                <img src={logo} alt="" className={styles["img-fluid"]} />
              </a>
              <p>
                Cloapedia is a personal blog for handcrafted, cameramade
                photography content, fashion styles from independent creatives
                around the world.
              </p>
              <div className={styles.social}>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Facebook"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Twitter"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Instagram"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Google Plus"
                >
                  <i className="fa fa-google-plus"></i>
                </a>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Pinterest"
                >
                  <i className="fa fa-pinterest"></i>
                </a>
              </div>

              <hr className={styles.invis} />
            </div>
          </div>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
