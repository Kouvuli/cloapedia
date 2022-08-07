import { Collapse, Grid, List } from "@mui/material"
import { useState } from "react"
import Logo from "../../assets/images/logo.png"
import BlogMenuCard from "../Card/BlogMenuCard/BlogMenuCard"
import styles from "./styles.module.css"
import { BASE_URL } from "../../constants"
const Header = () => {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropDown] = useState(false)
  const [dropdown1, setDropDown1] = useState(false)
  const [dropdown2, setDropDown2] = useState(false)
  const [dropdown3, setDropDown3] = useState(false)
  const [dropdown4, setDropDown4] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  const handleDropDown = () => {
    setDropDown(!dropdown)
  }
  const handleDropDown1 = () => {
    setDropDown1(!dropdown1)
  }
  const handleDropDown2 = () => {
    setDropDown2(!dropdown2)
  }
  const handleDropDown3 = () => {
    setDropDown3(!dropdown3)
  }
  const handleDropDown4 = () => {
    setDropDown4(!dropdown4)
  }
  const mobileMenu = (
    <Collapse className={styles["toggleable-md"]} in={open}>
      <List>
        <li className={styles["nav-item"]}>
          <a
            className={`${styles["nav-link"]}`}
            href={`${BASE_URL}/world`}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            World News
          </a>
          <i className="bx bxs-chevron-down" onClick={handleDropDown}></i>
          <Collapse in={dropdown}>
            <li className={styles["dropdown-item"]}>
              <a href={`${BASE_URL}/world/coronavirus-outbreak`}>Coronavirus</a>
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
          </Collapse>
        </li>
        <li className={styles["nav-item"]}>
          <a
            className={`${styles["nav-link"]} `}
            href={`${BASE_URL}/sport`}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sports
          </a>

          <i className="bx bxs-chevron-down" onClick={handleDropDown1}></i>
          <Collapse in={dropdown1}>
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
          </Collapse>
        </li>
        <li className={styles["nav-item"]}>
          <a className={styles["nav-link"]} href={`${BASE_URL}/culture`}>
            Culture
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a className={styles["nav-link"]} href={`${BASE_URL}/fashion`}>
            Fashion
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a className={styles["nav-link"]} href={`${BASE_URL}/artanddesign`}>
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
        <li className={styles[`nav-item`]}>
          <a
            className={`${styles["nav-link"]}`}
            href={`${BASE_URL}/lifeandstyle`}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Lifestyle
          </a>
          <i className="bx bxs-chevron-down" onClick={handleDropDown2}></i>
          <Collapse in={dropdown2}>
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
          </Collapse>
        </li>
        <li className={styles["nav-item"]}>
          <a
            className={`${styles["nav-link"]}`}
            href={`${BASE_URL}/travel`}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Travel
          </a>
          <i className="bx bxs-chevron-down" onClick={handleDropDown3}></i>
          <Collapse in={dropdown3}>
            <li className={styles["dropdown-item"]}>
              <a href={`${BASE_URL}/uk/travel`}>UK</a>
            </li>

            <li className={styles["dropdown-item"]}>
              <a href={`${BASE_URL}/travel/europe`}>Europe</a>
            </li>
            <li className={styles["dropdown-item"]}>
              <a href={`${BASE_URL}/travel/usa`}>US</a>
            </li>
          </Collapse>
        </li>
        <li className={styles["nav-item"]}>
          <a
            className={`${styles["nav-link"]} `}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            More
          </a>
          <i className="bx bxs-chevron-down" onClick={handleDropDown4}></i>
          <Collapse in={dropdown4}>
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
          </Collapse>
        </li>
      </List>
    </Collapse>
  )
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
          // display={{ md: "flex", xs: "none" }}
          justifyContent={{ md: "center", xs: "left" }}
          maxWidth="1170px"
          marginLeft="auto"
          marginRight="auto"
          //   className="container"
        >
          <nav className={`${styles.navbar} ${styles["navbar-inverse"]} `}>
            <button
              className={styles["navbar-toggler"]}
              type="button"
              onClick={handleClick}
              aria-controls="cloapediamenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className={`bx bx-menu ${styles["navbar-toggler-icon"]}`}></i>
            </button>
            <div
              className={`${styles["navbar-collapse"]} ${styles["navbar-toggleable-md"]}`}
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
            {mobileMenu}
          </nav>
        </Grid>
      </header>
    </>
  )
}

export default Header
