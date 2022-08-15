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
                <i className="bx bxl-facebook-square"></i>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Youtube"
              >
                <i className="bx bxl-youtube"></i>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Twitter"
              >
                <i className="bx bxl-twitter"></i>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Instagram"
              >
                <i className="bx bxl-instagram-alt"></i>
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
                  <a href="/blog">
                    <i className="bx bx-bold"></i> Our blogs
                  </a>
                </li>
                <li className={styles["list-inline-item"]}>
                  <a href="/blog/editor/new">
                    <i className="bx bxs-pen"></i> Write for us
                  </a>
                </li>
                <li className={styles["list-inline-item"]}>
                  <a href="/profile">
                    <i className="bx bxs-user"></i> Your account
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
                <i className="bx bx-search"></i> Search
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default TopBar
