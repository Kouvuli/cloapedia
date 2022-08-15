import { useEffect } from "react"

import { Box, Grid } from "@mui/material"

import { useState } from "react"
import BigListCard from "../../components/Card/BigListCard/BigListCard"
import GridCard from "../../components/Card/GridCard"
import ListCard from "../../components/Card/SmallListCard"
import SideBlogCard from "../../components/Card/SideBlogCard"
import BreadCrumb from "../../components/UI/BreadCrumb"
import styles from "./styles.module.css"
import {
  fetchDataBySection,
  fetchTopReadBySection
} from "../../redux/reducers/sectionSlice"
import { useDispatch, useSelector } from "react-redux"
import { sectionSelector } from "../../redux/selectors"
import AdCard from "../../components/Card/AdCard/AdCard"
import { forEach } from "lodash"
import { EXTRA_PATH, PATHS } from "../../routes"
import SmallList from "../../components/List/SmallList"
import CustomPagination from "../../components/UI/CustomPagination"
import ToggleButtons from "../../components/UI/Button/ToggleButton"
import GridList from "../../components/List/GridList/GridList"
import BigList from "../../components/List/BigList/BigList"
// import { fetchSectionCount } from "../../redux/reducers/footerSlice"
const SectionPage = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("")
  const { loading, error, data, page, limit, viewType, mostRead } =
    useSelector(sectionSelector)
  function capitalizeFirstLetter(string) {
    const b = string.toLowerCase()
    return b[0].toUpperCase() + b.slice(1)
  }

  useEffect(() => {
    dispatch(
      fetchDataBySection({
        url: document.location.pathname,
        page,
        limit,
        type: "article",
        "show-fields": "all"
      })
    )
    dispatch(
      fetchTopReadBySection(`/most-read${document.location.pathname}.json`)
    )

    forEach(Object.keys(EXTRA_PATH), (key) => {
      if (document.location.pathname.startsWith(EXTRA_PATH[key])) {
        // const result = capitalizeFirstLetter(key)
        var strArr = key.split("_")
        strArr = strArr.map((str) => {
          return capitalizeFirstLetter(str)
        })
        setTitle(strArr.join(" "))
      }
    })
    forEach(Object.keys(PATHS), (key) => {
      if (document.location.pathname.startsWith(PATHS[key])) {
        // const result = capitalizeFirstLetter(key)
        var strArr = key.split("_")
        strArr = strArr.map((str) => {
          return capitalizeFirstLetter(str)
        })
        setTitle(strArr.join(" "))
      }
    })
  }, [page, viewType])
  // console.log(data)

  return (
    <>
      <div className={`${styles["page-title"]} ${styles.wb}`}>
        <Grid
          container
          maxWidth="1170px"
          marginLeft={{ lg: "auto", xs: "0px" }}
          marginRight={{ lg: "auto", xs: "0px" }}
          padding={{ lg: "0px", md: "0 20px", xs: "0px 10px" }}
          justifyContent="center"
          spacing={0}
        >
          <Grid item xs={12}>
            <h2>
              <i className="bx bxs-food-menu"></i> {title}{" "}
              <small className="hidden-xs-down hidden-sm-down"></small>
            </h2>
          </Grid>
          {/* <Grid item md={4} xs={12}>
            <BreadCrumb />
          </Grid> */}
        </Grid>
      </div>

      <section className={`${styles["section"]} ${styles.wb}`}>
        <Grid
          container
          maxWidth="1170px"
          marginLeft={{ lg: "auto", xs: "0px" }}
          marginRight={{ lg: "auto", xs: "0px" }}
          padding={{ lg: "0px", md: "0 20px", xs: "0px 10px" }}
          justifyContent="center"
          rowSpacing={3}
          columnSpacing={{ lg: "24px" }}
          marginBottom="100px"
        >
          <Grid item lg={9} xs={12}>
            <Box
              sx={{
                marginBottom: "30px",
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <ToggleButtons />
            </Box>
            {viewType === "small" && (
              <SmallList data={data} error={error} loading={loading} />
            )}
            {viewType === "grid" && (
              <GridList data={data} error={error} loading={loading} />
            )}
            {viewType === "big" && (
              <BigList data={data} error={error} loading={loading} />
            )}
            {/* <Grid container columnSpacing={3}>
              {data.map((value, i) => {
                return <ListCard key={i} data={value} />
              })}
             
            </Grid> */}

            <Grid container>
              <Grid item xs={12}>
                <CustomPagination />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3}>
            <div className={styles.sidebar}>
              <div className={styles.widget}>
                <h2 className={styles["widget-title"]}>Most Read</h2>
                <div className={styles["blog-list-widget"]}>
                  <div className={styles["list-group"]}>
                    {mostRead &&
                      mostRead.map((value, index) => {
                        return (
                          <SideBlogCard
                            key={index}
                            type="section"
                            data={value}
                          />
                        )
                      })}
                    {/* <SideBlogCard />

                    <SideBlogCard />
                    <SideBlogCard /> */}
                  </div>
                </div>
              </div>

              {/* <div className={styles.widget}>
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
              </div> */}
            </div>
          </Grid>
        </Grid>
      </section>
    </>
  )
}

export default SectionPage
