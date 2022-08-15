import { useEffect } from "react"

import { Box, Grid } from "@mui/material"

import { useState } from "react"
import BigListCard from "../../components/Card/BigListCard/BigListCard"
import GridCard from "../../components/Card/GridCard"
import ListCard from "../../components/Card/SmallListCard"
import SideBlogCard from "../../components/Card/SideBlogCard"
import BreadCrumb from "../../components/UI/BreadCrumb"
import RectangleButton from "../../components/UI/Button/RectangleButton"
import styles from "./styles.module.css"
import {
  fetchDataBySection,
  fetchTopReadBySection
} from "../../redux/reducers/sectionSlice"
import { useDispatch, useSelector } from "react-redux"
import { blogSelector, sectionSelector } from "../../redux/selectors"
import AdCard from "../../components/Card/AdCard/AdCard"
import { forEach } from "lodash"
import { EXTRA_PATH, PATHS } from "../../routes"
import SmallList from "../../components/List/SmallList"
import CustomPagination from "../../components/UI/CustomPagination"
import ToggleButtons from "../../components/UI/Button/ToggleButton"
import GridList from "../../components/List/GridList/GridList"
import BigList from "../../components/List/BigList/BigList"
import blogSlice, { fetchAllBlog } from "../../redux/reducers/blogSlice"
// import { fetchSectionCount } from "../../redux/reducers/footerSlice"
const Blog = () => {
  const dispatch = useDispatch()

  const {
    currentUserError,
    loading,
    currentUser,
    error,
    hasNext,
    data,
    page,
    limit,
    viewType
  } = useSelector(blogSelector)

  // const posts = data.data.documents
  useEffect(() => {
    dispatch(
      blogSlice.actions.addUser(JSON.parse(localStorage.getItem("user")))
    )
  }, [dispatch])
  useEffect(() => {
    dispatch(fetchAllBlog({ page, limit }))
  }, [viewType, page])

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
              <i className="bx bxs-food-menu"></i> Blog{" "}
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
          <Grid item xs={12}>
            <Box
              sx={{
                marginBottom: "30px",
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <RectangleButton href="/blog/editor/new">
                CREATE BLOG
              </RectangleButton>
            </Box>
            <Box
              sx={{
                marginBottom: "30px",
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <ToggleButtons type="blog" />
            </Box>
            {viewType === "small" && (
              <SmallList
                data={data}
                type="blog"
                error={error}
                loading={loading}
              />
            )}
            {viewType === "grid" && (
              <GridList
                data={data}
                type="blog"
                error={error}
                loading={loading}
              />
            )}
            {viewType === "big" && (
              <BigList
                data={data}
                type="blog"
                error={error}
                loading={loading}
              />
            )}
            {/* <Grid container columnSpacing={3}>
              {data.map((value, i) => {
                return <ListCard key={i} data={value} />
              })}
             
            </Grid> */}

            <Grid container justifyContent={{ xs: "center", md: "left" }}>
              <Grid item xs={12}>
                <CustomPagination type="blog" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </>
  )
}

export default Blog
