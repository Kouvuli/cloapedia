import { Grid } from "@mui/material"
import React from "react"
import Logo from "../../assets/images/logo.png"
import BlogMenuCard from "../Card/BlogMenuCard/BlogMenuCard"
import styles from "./styles.module.css"
import { BASE_URL } from "../../constants"
const Header = () => {
  return (
    <>
      <div className={styles["header-section"]}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          marginRight="auto"
          marginLeft="auto"
        >
          <Grid item xs={12}>
            <div className={styles.logo}>
              <a href={`${BASE_URL}`}>
                <img src={Logo} alt="" />
              </a>
            </div>
          </Grid>
        </Grid>
      </div>
      <header className={styles.header}>
        <Grid
          container
          justifyContent="center"
          maxWidth="1170px"
          marginLeft="auto"
          marginRight="auto"
          //   className="container"
        >
          <nav
            className={`${styles.navbar} ${styles["navbar-inverse"]} ${styles["navbar-toggleable-md"]}`}
          >
            <button
              className={styles["navbar-toggler"]}
              type="button"
              data-toggle="collapse"
              data-target="#cloapediamenu"
              aria-controls="cloapediamenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className={`bx bx-menu ${styles["navbar-toggler-icon"]}`}></i>
            </button>
            <div
              className={`${styles["navbar-collapse"]} ${styles["justify-content-md-center"]}`}
              id="cloapediamenu"
            >
              <ul className={styles["navbar-nav"]}>
                <li className={`nav-item ${styles.dropdown}`}>
                  <a
                    className={`${styles["nav-link"]} ${styles["dropdown-toggle"]}`}
                    href={`${BASE_URL}/world`}
                    id="dropdown02"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    World News
                  </a>
                  <ul
                    className={`${styles["dropdown-menu"]} ${styles["megamenu"]}`}
                    aria-labelledby="dropdown02"
                  >
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/world/coronavirus-outbreak`}>
                        Coronavirus
                      </a>
                    </li>

                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/world/americas`}>America</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/world/europe-news`}>Europe</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/world/asia`}>Asia</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/australia-news`}>Australia</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/world/africa`}>Africa</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/world/middleeast`}>Middle East</a>
                    </li>
                  </ul>
                </li>
                <li className={`nav-item ${styles.dropdown}`}>
                  <a
                    className={`${styles["nav-link"]} ${styles["dropdown-toggle"]}`}
                    href={`${BASE_URL}/sport`}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sports
                  </a>
                  <ul
                    className={`${styles["dropdown-menu"]} ${styles["megamenu"]}`}
                  >
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/football`}>Football</a>
                    </li>

                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/sport/cricket`}>Cricket</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/sport/rugby-union`}>Rugby</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/sport/tennis`}>Tennis</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/sport/cycling`}>Cycling</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/sport/formulaone`}>F1</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/sport/golf`}>Goft</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/sport/us-sport`}>US Sport</a>
                    </li>
                  </ul>
                </li>
                {/* <li className={`nav-item ${styles.dropdown}`}>
                  <a
                    className={`${styles["nav-link"]} ${styles["dropdown-toggle"]}`}
                    href="#"
                    id="dropdown01"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul
                    className={`${styles["dropdown-menu"]} ${styles["megamenu"]}`}
                    aria-labelledby="dropdown01"
                  >
                    <div
                      className={`${styles["mega-menu-content"]} ${styles["clearfix"]}`}
                    >
                      <div className={styles.tab}>
                        <a className={`${styles.tablinks} ${styles.active}`}>
                          Beauty
                        </a>
                        <a className={styles.tablinks}>Fashion</a>
                        <a className={styles.tablinks}>Travel</a>
                        <a className={styles.tablinks}>Architecture</a>
                        <a className={styles.tablinks}>Recipes</a>
                      </div>

                      <div
                        className={`${styles["tab-details"]} ${styles.clearfix}`}
                      >
                        <div
                          id="cat01"
                          className={`${styles.tabcontent} ${styles.active}`}
                        >
                          <Grid container columnSpacing={2}>
                            <BlogMenuCard />
                            <BlogMenuCard />
                            <BlogMenuCard />
                            <BlogMenuCard />
                          </Grid>
                        </div>
                        <div id="cat02" className={styles.tabcontent}>
                          <Grid container columnSpacing={2}>
                            <BlogMenuCard />
                            <BlogMenuCard />
                            <BlogMenuCard />
                            <BlogMenuCard />
                          </Grid>
                        </div>
                        <div id="cat03" className={styles.tabcontent}>
                          <Grid container columnSpacing={2}>
                            <BlogMenuCard />
                            <BlogMenuCard />
                            <BlogMenuCard />
                            <BlogMenuCard />
                          </Grid>
                        </div>
                        <div id="cat04" className={styles.tabcontent}>
                          <Grid container columnSpacing={2}>
                            <BlogMenuCard />
                            <BlogMenuCard />
                            <BlogMenuCard />
                            <BlogMenuCard />
                          </Grid>
                        </div>
                        <div id="cat05" className={styles.tabcontent}>
                          <Grid container columnSpacing={2}>
                            <BlogMenuCard />
                            <BlogMenuCard />
                            <BlogMenuCard />
                            <BlogMenuCard />
                          </Grid>
                        </div>
                      </div>
                    </div>
                    <li></li>
                  </ul>
                </li> */}

                <li className={styles["nav-item"]}>
                  <a
                    className={styles["nav-link"]}
                    href={`${BASE_URL}/culture`}
                  >
                    Culture
                  </a>
                </li>
                <li className={styles["nav-item"]}>
                  <a
                    className={styles["nav-link"]}
                    href={`${BASE_URL}/fashion`}
                  >
                    Fashion
                  </a>
                </li>
                <li className={styles["nav-item"]}>
                  <a
                    className={styles["nav-link"]}
                    href={`${BASE_URL}/artanddesign`}
                  >
                    Art & Design
                  </a>
                </li>
                <li className={styles["nav-item"]}>
                  <a className={styles["nav-link"]} href={`${BASE_URL}/games`}>
                    Games
                  </a>
                </li>
                <li className={styles["nav-item"]}>
                  <a className={styles["nav-link"]} href={`${BASE_URL}/food`}>
                    Food
                  </a>
                </li>
                <li className={`nav-item ${styles.dropdown}`}>
                  <a
                    className={`${styles["nav-link"]} ${styles["dropdown-toggle"]}`}
                    href={`${BASE_URL}/lifeandstyle`}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Lifestyle
                  </a>
                  <ul
                    className={`${styles["dropdown-menu"]} ${styles["megamenu"]}`}
                  >
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/tone/recipes`}>Recipes</a>
                    </li>

                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/lifeandstyle/health-and-wellbeing`}>
                        Health
                      </a>
                    </li>

                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/lifeandstyle/women`}>Women</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/lifeandstyle/men`}>Men</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/lifeandstyle/family`}>Family</a>
                    </li>
                  </ul>
                </li>
                <li className={`nav-item ${styles.dropdown}`}>
                  <a
                    className={`${styles["nav-link"]} ${styles["dropdown-toggle"]}`}
                    href={`${BASE_URL}/travel`}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Travel
                  </a>
                  <ul
                    className={`${styles["dropdown-menu"]} ${styles["megamenu"]}`}
                  >
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/uk/travel`}>UK</a>
                    </li>

                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/travel/europe`}>Europe</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/travel/usa`}>US</a>
                    </li>
                  </ul>
                </li>
                <li className={`nav-item ${styles.dropdown}`}>
                  <a
                    className={`${styles["nav-link"]} ${styles["dropdown-toggle"]}`}
                    href="#"
                    id="dropdown02"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    More
                  </a>
                  <ul
                    className={`${styles["dropdown-menu"]} ${styles["megamenu"]}`}
                    aria-labelledby="dropdown02"
                  >
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/books`}>Books</a>
                    </li>

                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/music`}>Music</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/music/classical-music-and-opera`}>
                        Classical
                      </a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/tv-and-radio`}>TV & Radio</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/film`}>Film</a>
                    </li>
                    <li className={styles["dropdown-item"]}>
                      <a href={`${BASE_URL}/stage`}>Stage</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </Grid>
      </header>
    </>
  )
}

export default Header
