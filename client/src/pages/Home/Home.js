import { Grid } from "@mui/material"
import React from "react"
import styles from "./styles.module.css"
import mapic1 from "../../assets/images/upload/blog_masonry_01.jpg"
import mapic2 from "../../assets/images/upload/blog_masonry_02.jpg"
import mapic3 from "../../assets/images/upload/blog_masonry_03.jpg"
import mapic4 from "../../assets/images/upload/blog_masonry_04.jpg"
import mapic5 from "../../assets/images/upload/blog_masonry_05.jpg"
import GridCard from "../../components/Card/GridCard"
import VerticalCard from "../../components/Card/VerticalCard"
import AdCard from "../../components/Card/AdCard/AdCard"
import ListCard from "../../components/Card/SmallListCard"
import VideoCard from "../../components/Card/VideoCard"

const Home = () => {
  return (
    <>
      <section className={`${styles.section} ${styles["first-section"]}`}>
        <div className={styles["container-fluid"]}>
          <div className={`${styles["masonry-blog"]} ${styles.clearfix}`}>
            <div className={styles["left-side"]}>
              <div
                className={`${styles["masonry-box"]} ${styles["post-media"]}`}
              >
                <img src={mapic1} alt="" className={styles["img-fluid"]} />
                <div className={styles["shadoweffect"]}>
                  <div className={styles["shadow-desc"]}>
                    <div className={styles["blog-meta"]}>
                      <span className={styles["bg-aqua"]}>
                        <a href="blog-category-01.html" title="">
                          Lifestyle
                        </a>
                      </span>
                      <h4>
                        <a href="single.html" title="">
                          The golden rules you need to know for a positive life
                        </a>
                      </h4>
                      <small>
                        <a href="single.html" title="">
                          24 July, 2017
                        </a>
                      </small>
                      <small>
                        <a href="blog-author.html" title="">
                          by Amanda
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["center-side"]}>
              <div
                className={`${styles["masonry-box"]} ${styles["post-media"]}`}
              >
                <img src={mapic2} alt="" className={styles["img-fluid"]} />
                <div className={styles["shadoweffect"]}>
                  <div className={styles["shadow-desc"]}>
                    <div className={styles["blog-meta"]}>
                      <span className={styles["bg-green"]}>
                        <a href="blog-category-01.html" title="">
                          Travel
                        </a>
                      </span>
                      <h4>
                        <a href="single.html" title="">
                          5 places you should see
                        </a>
                      </h4>
                      <small>
                        <a href="single.html" title="">
                          24 July, 2017
                        </a>
                      </small>
                      <small>
                        <a href="blog-author.html" title="">
                          by Amanda
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["masonry-box"]} ${styles["small-box"]} ${styles["post-media"]}`}
              >
                <img src={mapic3} alt="" className={styles["img-fluid"]} />
                <div className={styles["shadoweffect"]}>
                  <div className={styles["shadow-desc"]}>
                    <div className={styles["blog-meta"]}>
                      <span className="bg-green">
                        <a href="blog-category-01.html" title="">
                          Travel
                        </a>
                      </span>
                      <h4>
                        <a href="single.html" title="">
                          Separate your place with exotic hotels
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`${styles["masonry-box"]} ${styles["small-box"]} ${styles["post-media"]}`}
              >
                <img src={mapic4} alt="" className={styles["img-fluid"]} />
                <div className={styles["shadoweffect"]}>
                  <div className={styles["shadow-desc"]}>
                    <div className={styles["blog-meta"]}>
                      <span className={styles["bg-green"]}>
                        <a href="blog-category-01.html" title="">
                          Travel
                        </a>
                      </span>
                      <h4>
                        <a href="single.html" title="">
                          What you need to know for child health
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${styles["right-side"]} ${styles["hidden-md-down"]}`}
            >
              <div
                className={`${styles["masonry-box"]} ${styles["post-media"]}`}
              >
                <img src={mapic5} alt="" className={styles["img-fluid"]} />
                <div className={styles["shadoweffect"]}>
                  <div className={styles["shadow-desc"]}>
                    <div className={styles["blog-meta"]}>
                      <span className={styles["bg-aqua"]}>
                        <a href="blog-category-01.html" title="">
                          Lifestyle
                        </a>
                      </span>
                      <h4>
                        <a href="single.html" title="">
                          The rules you need to know for a happy union
                        </a>
                      </h4>
                      <small>
                        <a href="single.html" title="">
                          03 July, 2017
                        </a>
                      </small>
                      <small>
                        <a href="blog-author.html" title="">
                          by Jessica
                        </a>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Grid
        container
        maxWidth="1170px"
        paddingTop="4rem"
        justifyContent="center"
        marginRight="auto"
        marginLeft="auto"
        columnSpacing={3}
      >
        <Grid item md={6} xs={12}>
          <div className={styles["section-title"]}>
            <h3 className="color-aqua">
              <a href="blog-category-01.html" title="">
                Lifestyle
              </a>
            </h3>
          </div>
          <GridCard md="12" />
          <GridCard md="12" />
          {/* <Grid container>
            <Grid item xs={12}></Grid>
          </Grid> */}
        </Grid>
        <Grid item md={6} xs={12}>
          <div className={styles["section-title"]}>
            <h3 className="color-pink">
              <a href="blog-category-01.html" title="">
                Fashion
              </a>
            </h3>
          </div>
          <Grid container columnSpacing={3}>
            <Grid item md={6} xs={12}>
              <VerticalCard />
              <VerticalCard />
            </Grid>

            <Grid item md={6} xs={12}>
              <VerticalCard />
              <VerticalCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr className={styles.invis1}></hr>
      <AdCard />
      <hr className={styles.invis1}></hr>

      <Grid
        container
        maxWidth="1170px"
        justifyContent="center"
        marginRight="auto"
        marginLeft="auto"
        columnSpacing={3}
      >
        <Grid item md={9} xs={12}>
          <div className={styles["section-title"]}>
            <h3 className="color-aqua">
              <a href="blog-category-01.html" title="">
                Lifestyle
              </a>
            </h3>
          </div>
          <ListCard />
          <ListCard />
          <ListCard />
          <div className={styles["section-title"]}>
            <h3 className="color-aqua">
              <a href="blog-category-01.html" title="">
                Food
              </a>
            </h3>
          </div>
          <ListCard />
          <ListCard />
          <ListCard />
        </Grid>
        <Grid item md={3} xs={12}>
          <div className={styles["section-title"]}>
            <h3 className="color-aqua">
              <a href="blog-category-01.html" title="">
                Vlog
              </a>
            </h3>
          </div>
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <div className={styles["section-title"]}>
            <h3 className="color-aqua">
              <a href="blog-category-01.html" title="">
                Health
              </a>
            </h3>
          </div>
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
