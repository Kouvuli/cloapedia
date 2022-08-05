import { Grid } from "@mui/material"
import { useEffect } from "react"
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
import { useDispatch, useSelector } from "react-redux"
import {
  fetchNews,
  fetchSport,
  fetchFashion,
  fetchLifeStyle,
  fetchFood,
  fetchGame,
  fetchTravel
} from "../../redux/reducers/homeSlice"
import { homeSelector } from "../../redux/selectors"
import { toDate } from "../../utils"
import { BASE_URL } from "../../constants"
import Preloader from "../../components/Preloader/Preloader"
const Home = () => {
  const dispatch = useDispatch()
  const {
    news,
    sportNews,
    fashionNews,
    lifeStylesNews,
    foodNews,
    gameNews,
    travelNews,
    loading,
    error
  } = useSelector(homeSelector)
  useEffect(() => {
    dispatch(fetchNews())
    dispatch(fetchSport())
    dispatch(fetchFashion())
    dispatch(fetchLifeStyle())
    dispatch(fetchFood())
    dispatch(fetchGame())
    dispatch(fetchTravel())
  }, [])
  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <>
          {news.length > 0 && (
            <section className={`${styles.section} ${styles["first-section"]}`}>
              <div className={styles["container-fluid"]}>
                <div className={`${styles["masonry-blog"]} ${styles.clearfix}`}>
                  <div className={styles["left-side"]}>
                    <div
                      className={`${styles["masonry-box"]} ${styles["post-media"]}`}
                    >
                      <img
                        src={news[0].fields.thumbnail}
                        alt=""
                        className={styles["img-fluid"]}
                      />
                      <div className={styles["shadoweffect"]}>
                        <div className={styles["shadow-desc"]}>
                          <div className={styles["blog-meta"]}>
                            <span className={styles["bg-aqua"]}>
                              <a href="" title="">
                                {news[0].sectionName}
                              </a>
                            </span>
                            <h4>
                              <a href={`${BASE_URL}/${news[0].id}`} title="">
                                {news[0].fields.headline}
                              </a>
                            </h4>
                            <small>
                              <a>{toDate(news[0].fields.lastModified)}</a>
                            </small>
                            <small>
                              <a>by {news[0].fields.byline}</a>
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
                      <img
                        src={news[1].fields.thumbnail}
                        alt=""
                        className={styles["img-fluid"]}
                      />
                      <div className={styles["shadoweffect"]}>
                        <div className={styles["shadow-desc"]}>
                          <div className={styles["blog-meta"]}>
                            <span className={styles["bg-green"]}>
                              <a href="" title="">
                                {news[1].sectionName}
                              </a>
                            </span>
                            <h4>
                              <a href={`${BASE_URL}/${news[1].id}`} title="">
                                {news[1].fields.headline}
                              </a>
                            </h4>
                            <small>
                              <a title="">
                                {toDate(news[1].fields.lastModified)}
                              </a>
                            </small>
                            <small>
                              <a title="">by {news[1].fields.byline}</a>
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${styles["masonry-box"]} ${styles["small-box"]} ${styles["post-media"]}`}
                    >
                      <img
                        src={news[2].fields.thumbnail}
                        alt=""
                        className={styles["img-fluid"]}
                      />
                      <div className={styles["shadoweffect"]}>
                        <div className={styles["shadow-desc"]}>
                          <div className={styles["blog-meta"]}>
                            <span className="bg-green">
                              <a href="" title="">
                                {news[2].sectionName}
                              </a>
                            </span>
                            <h4>
                              <a href={`${BASE_URL}/${news[2].id}`} title="">
                                {news[2].fields.headline}
                              </a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${styles["masonry-box"]} ${styles["small-box"]} ${styles["post-media"]}`}
                    >
                      <img
                        src={news[3].fields.thumbnail}
                        alt=""
                        className={styles["img-fluid"]}
                      />
                      <div className={styles["shadoweffect"]}>
                        <div className={styles["shadow-desc"]}>
                          <div className={styles["blog-meta"]}>
                            <span className={styles["bg-green"]}>
                              <a href="" title="">
                                {news[3].sectionName}
                              </a>
                            </span>
                            <h4>
                              <a href={`${BASE_URL}/${news[3].id}`} title="">
                                {news[3].fields.headline}
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
                      <img
                        src={news[4].fields.thumbnail}
                        alt=""
                        className={styles["img-fluid"]}
                      />
                      <div className={styles["shadoweffect"]}>
                        <div className={styles["shadow-desc"]}>
                          <div className={styles["blog-meta"]}>
                            <span className={styles["bg-aqua"]}>
                              <a href="" title="">
                                {news[4].sectionName}
                              </a>
                            </span>
                            <h4>
                              <a href={`${BASE_URL}/${news[4].id}`} title="">
                                {news[4].fields.headline}
                              </a>
                            </h4>
                            <small>
                              <a href="" title="">
                                {toDate(news[4].fields.lastModified)}
                              </a>
                            </small>
                            <small>
                              <a href="" title="">
                                by {news[4].fields.byline}
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
          )}
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
                  <a href="/sport" title="">
                    Sports
                  </a>
                </h3>
              </div>
              {sportNews.length > 0 &&
                sportNews.map((news, i) => {
                  return <GridCard data={news} md="12" />
                })}

              {/* <Grid container>
            <Grid item xs={12}></Grid>
          </Grid> */}
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={styles["section-title"]}>
                <h3 className="color-pink">
                  <a href="/fashion" title="">
                    Fashion
                  </a>
                </h3>
              </div>
              <Grid container columnSpacing={3}>
                {fashionNews.length > 0 &&
                  fashionNews.map((news, i) => {
                    return <VerticalCard key={i} data={news} />
                  })}
                {/* <Grid item md={6} xs={12}>
              <VerticalCard />
              <VerticalCard />
            </Grid>

            <Grid item md={6} xs={12}>
              <VerticalCard />
              <VerticalCard />
            </Grid> */}
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
                  <a href="/lifeandstyle" title="">
                    Lifestyle
                  </a>
                </h3>
              </div>
              {lifeStylesNews.length > 0 &&
                lifeStylesNews.map((news, i) => {
                  return <ListCard key={i} data={news} />
                })}

              <div className={styles["section-title"]}>
                <h3 className="color-aqua">
                  <a href="/food" title="">
                    Food
                  </a>
                </h3>
              </div>
              {foodNews.length > 0 &&
                foodNews.map((news, i) => {
                  return <ListCard key={i} data={news} />
                })}
            </Grid>
            <Grid item md={3} xs={12}>
              <div className={styles["section-title"]}>
                <h3 className="color-aqua">
                  <a href="/games" title="">
                    Games
                  </a>
                </h3>
              </div>
              {gameNews.length > 0 &&
                gameNews.map((news, i) => {
                  return <VideoCard key={i} data={news} />
                })}

              <div className={styles["section-title"]}>
                <h3 className="color-aqua">
                  <a href="/travel" title="">
                    Travel
                  </a>
                </h3>
              </div>
              {travelNews.length > 0 &&
                travelNews.map((news, i) => {
                  return <VideoCard key={i} data={news} />
                })}
            </Grid>
          </Grid>
        </>
      )}
    </>
  )
}

export default Home
