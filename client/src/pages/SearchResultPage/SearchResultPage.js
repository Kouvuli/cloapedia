import { Grid } from "@mui/material"
import React from "react"
import SearchResultCard from "../../components/Card/SearchResultCard"
import BreadCrumb from "../../components/UI/BreadCrumb"

import styles from "./styles.module.css"
const SearchResultPage = () => {
  return (
    <>
      <div className={`${styles["page-title"]} ${styles.wb}`}>
        <Grid
          container
          maxWidth="1170px"
          marginRight="auto"
          marginLeft="auto"
          justifyContent="center"
        >
          <Grid item md={8} xs={12}>
            <h2>
              <i className="fa fa-shopping-bag bg-red"></i> Search Result{" "}
            </h2>
          </Grid>
          <Grid item md={4} xs={12}>
            <BreadCrumb />
          </Grid>
        </Grid>
      </div>

      <section className={`${styles["section"]} ${styles.wb}`}>
        <Grid
          container
          maxWidth="1170px"
          marginRight="auto"
          marginLeft="auto"
          justifyContent="center"
          columnSpacing={3}
        >
          <Grid item md={4} xs={12}>
            <SearchResultCard />
          </Grid>
          <Grid item md={4} xs={12}>
            <SearchResultCard />
          </Grid>
          <Grid item md={4} xs={12}>
            <SearchResultCard />
          </Grid>
          <Grid item md={4} xs={12}>
            <SearchResultCard />
          </Grid>
          <Grid item md={4} xs={12}>
            <SearchResultCard />
          </Grid>
          <Grid item md={4} xs={12}>
            <SearchResultCard />
          </Grid>
          <Grid item xs={12}>
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-start">
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </Grid>
        </Grid>
      </section>
    </>
  )
}

export default SearchResultPage
