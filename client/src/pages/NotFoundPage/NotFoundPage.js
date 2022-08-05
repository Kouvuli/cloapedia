import { Grid } from "@mui/material"
import React from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import TopBar from "../../components/TopBar"
import TopSearch from "../../components/TopSearch"
import BreadCrumb from "../../components/UI/BreadCrumb"
import RectangleButton from "../../components/UI/Button/RectangleButton"
import styles from "./styles.module.css"
const NotFoundPage = () => {
  return (
    <>
      <TopSearch />
      <TopBar />
      <Header />
      <div className={styles["page-title"]}>
        <Grid container className="container">
          <Grid item md={8} xs={12}>
            <h2>
              <i className="fa fa-question"></i> Not Found
            </h2>
          </Grid>
          <Grid item md={4} xs={12}>
            <BreadCrumb />
          </Grid>
        </Grid>
      </div>

      <section className={styles.section}>
        <Grid container>
          <Grid item xs={12}>
            <div className={styles["page-wrapper"]}>
              <div className={styles.notfound}>
                <div className={styles["text-center"]}>
                  <h2>404</h2>
                  <h3>Oh no! Page Not Found</h3>
                  <p>
                    The page you are looking for no longer exists. Perhaps you
                    can return back to the site's homepage and see if you can
                    find what you are looking for. Or, you can try finding it
                    with the information below.
                  </p>
                  <RectangleButton href="/">Back to Home</RectangleButton>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </section>
      <Footer />
    </>
  )
}

export default NotFoundPage
