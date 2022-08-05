import { Grid } from "@mui/material"
import { useState } from "react"
import TopSearch from "../TopSearch"
import styles from "./styles.module.css"
const TopBar = () => {
  const [isSearch, setIsSearch] = useState(false)

  const searchHandler = () => {
    setIsSearch((isSearch) => !isSearch)
  }
  return (
    <>
      <TopSearch isSearch={isSearch} />
      <div className={styles["topbar-section"]}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          marginLeft="auto"
          marginRight="auto"
        >
          <Grid item lg={4} sm={6} display={{ sm: "block", xs: "none" }}>
            <div className={styles["topsocial"]}>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Facebook"
              >
                <i class="bx bxl-facebook-square"></i>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Youtube"
              >
                <i class="bx bxl-youtube"></i>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Twitter"
              >
                <i class="bx bxl-twitter"></i>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Instagram"
              >
                <i class="bx bxl-instagram-alt"></i>
              </a>
            </div>
          </Grid>

          <Grid
            item
            lg={4}
            display={{ lg: "block", md: "none", xs: "none" }}
            // className="col-lg-4 hidden-md-down"
          >
            <div className={`${styles["topmenu"]} ${styles["text-center"]}`}>
              <ul className={styles["list-inline"]}>
                <li className={styles["list-inline-item"]}>
                  <a href="blog-category-01.html">
                    <i className="fa fa-star"></i> Trends
                  </a>
                </li>
                <li className={styles["list-inline-item"]}>
                  <a href="blog-category-02.html">
                    <i className="fa fa-bolt"></i> Hot Topics
                  </a>
                </li>
                <li className={styles["list-inline-item"]}>
                  <a href="page-contact.html">
                    <i className="fa fa-user-circle-o"></i> Write for us
                  </a>
                </li>
              </ul>
            </div>
          </Grid>

          <Grid item lg={4} sm={6} xs={12}>
            <div className={`${styles["topsearch"]} ${styles["text-right"]}`}>
              <a
                data-toggle="collapse"
                aria-expanded="false"
                aria-controls="collapseExample"
                onClick={searchHandler}
              >
                <i class="bx bx-search"></i> Search
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default TopBar
