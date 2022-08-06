import { Grid } from "@mui/material"
import { useEffect } from "react"
import styles from "./styles.module.css"
import pic from "../../assets/images/upload/blog_square_01.jpg"
import pic1 from "../../assets/images/upload/blog_square_04.jpg"
import logo from "../../assets/images/flogo.png"
import {
  fetchMostReadAcrossCleopedia,
  fetchMostReadAll,
  fetchSectionCount
} from "../../redux/reducers/footerSlice"
import { footerSelector } from "../../redux/selectors"
import { useDispatch, useSelector } from "react-redux"
import FooterCard from "../Card/FooterCard"
import { BASE_URL } from "../../constants"
const Footer = () => {
  const dispatch = useDispatch()
  const {
    mostReadAll,
    mostReadAcrossCleopedia,
    mostCommented,
    mostShared,
    count
  } = useSelector(footerSelector)
  useEffect(() => {
    dispatch(fetchMostReadAll())
    dispatch(fetchMostReadAcrossCleopedia())
    dispatch(fetchSectionCount())
  }, [])
  return (
    <footer className={styles.footer}>
      <Grid
        maxWidth="1170px"
        marginLeft="auto"
        marginRight="auto"
        container
        columnSpacing={3}
      >
        <Grid item lg={4} sm={12}>
          <div className={styles.widget}>
            <h2 className={styles["widget-title"]}>Most Popular</h2>
            <div className={styles["blog-list-widget"]}>
              <div className={styles["list-group"]}>
                {mostReadAll &&
                  mostReadAll.map((value, index) => {
                    return <FooterCard key={index} data={value} />
                  })}
              </div>
            </div>
          </div>
        </Grid>

        <Grid item lg={4} sm={12}>
          <div className={styles.widget}>
            <h2 className={styles["widget-title"]}>Most Views</h2>
            <div className={styles["blog-list-widget"]}>
              <div className={styles["list-group"]}>
                {mostReadAcrossCleopedia.length > 0 &&
                  mostReadAcrossCleopedia.map((value, index) => {
                    return <FooterCard key={index} data={value} />
                  })}
              </div>
            </div>
          </div>
        </Grid>

        <Grid item lg={4} sm={12}>
          <div className={styles["widget"]}>
            <h2 className={styles["widget-title"]}>Popular Categories</h2>
            <div className={styles["link-widget"]}>
              <ul>
                <li>
                  <a href={`${BASE_URL}/world`}>
                    World News <span>{count.world}</span>
                  </a>
                </li>
                <li>
                  <a href={`${BASE_URL}/sport`}>
                    Sport <span>{count.sport}</span>
                  </a>
                </li>
                <li>
                  <a href={`${BASE_URL}/fashion`}>
                    Fashion <span>{count.fashion}</span>
                  </a>
                </li>
                <li>
                  <a href={`${BASE_URL}/lifeandstyle`}>
                    Lifestyle <span>{count.lifestyle}</span>
                  </a>
                </li>
                <li>
                  <a href={`${BASE_URL}/artanddesign`}>
                    Art & Design <span>{count.art}</span>
                  </a>
                </li>
                <li>
                  <a href={`${BASE_URL}/games`}>
                    Games <span>{count.game}</span>
                  </a>
                </li>
                <li>
                  <a href={`${BASE_URL}/food`}>
                    Food <span>{count.food}</span>
                  </a>
                </li>
                <li>
                  <a href={`${BASE_URL}/travel`}>
                    Travel <span>{count.travel}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Grid>

        <Grid marginTop="4rem" item lg={12}>
          <div className={styles.widget}>
            <div
              className={`${styles["footer-text"]} ${styles["text-center"]}`}
            >
              <a href="index.html">
                <img src={logo} alt="" className={styles["img-fluid"]} />
              </a>
              <p>
                Cloapedia is a personal blog for handcrafted, cameramade
                photography content, fashion styles from independent creatives
                around the world.
              </p>
              <div className={styles.social}>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Facebook"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Twitter"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Instagram"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Google Plus"
                >
                  <i className="fa fa-google-plus"></i>
                </a>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Pinterest"
                >
                  <i className="fa fa-pinterest"></i>
                </a>
              </div>

              <hr className={styles.invis} />
            </div>
          </div>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer
