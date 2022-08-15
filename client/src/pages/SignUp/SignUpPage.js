import { Grid } from "@mui/material"
import moment from "moment"
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Redirect, useHistory } from "react-router-dom"
import CustomizedSnackbars from "../../components/UI/CustomizedSnackbars/CustomizedSnackbars"
import { SignUp } from "../../redux/reducers/authSlice"
import { authSelector } from "../../redux/selectors"
import styles from "./styles.module.css"
const SignUpPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [username, setUsername] = useState("")
  const [fullname, setFullName] = useState("")
  const [dob, setDob] = useState("")
  const [password, setPassword] = useState("")
  const { signUpSuccess, signUpLoading, signUpError } =
    useSelector(authSelector)

  const signUpHandler = (e) => {
    e.preventDefault()
    if (username !== "" && password !== "" && fullname !== "" && dob !== "")
      dispatch(
        SignUp({
          fullname,
          dob: moment(dob, "YYYY-MM-DD").format("DD/MM/YYYY"),
          username,
          password,
          is_admin: false
        })
      )
  }
  useEffect(() => {
    if (signUpSuccess) {
      setUsername("")
      setFullName("")
      setDob("")
      setPassword("")
    }
  }, [signUpSuccess])
  return (
    <section className={`${styles.signup} ${styles.spad}`}>
      {signUpSuccess && (
        <CustomizedSnackbars title="Sign Up success!" type="success" />
      )}
      {signUpError && (
        <CustomizedSnackbars title="Sign Up failed!" type="error" />
      )}
      <Grid
        container
        maxWidth="1170px"
        marginLeft="auto"
        marginRight="auto"
        padding={{ md: "0px 10px 0px 0px", sm: "0 10px", xs: "0 20px" }}
      >
        <Grid item md={6} xs={12}>
          <div className={styles["login__form"]}>
            <h3>Sign Up</h3>
            <form>
              <div className={styles["input__item"]}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                />
                <span>
                  <i class="bx bxs-user"></i>
                </span>
              </div>
              <div className={styles["input__item"]}>
                <input
                  type="text"
                  placeholder="Your Fullname"
                  value={fullname}
                  onChange={(e) => {
                    setFullName(e.target.value)
                  }}
                />
                <span>
                  <i class="bx bxs-detail"></i>
                </span>
              </div>
              <div className={styles["input__item"]}>
                <input
                  className={styles.birthday}
                  type="date"
                  placeholder="Your birthday"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value)
                  }}
                />
                <span>
                  <i class="bx bxs-cake"></i>
                </span>
              </div>
              <div className={styles["input__item"]}>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
                <span>
                  <i className="bx bxs-lock"></i>
                </span>
              </div>
              <button onClick={signUpHandler} className={styles["site-btn"]}>
                Sign Up
              </button>
            </form>
            <h5>
              Already have an account? <Link to="/login">Log In!</Link>
            </h5>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className={styles["login__social__links"]}>
            <h3>Login With:</h3>
            <ul>
              <li>
                <a href="#" className={styles.facebook}>
                  <i className="fa fa-facebook"></i> Sign in With Facebook
                </a>
              </li>
              <li>
                <a href="#" className={styles.google}>
                  <i className="fa fa-google"></i> Sign in With Google
                </a>
              </li>
              <li>
                <a href="#" className={styles.twitter}>
                  <i className="fa fa-twitter"></i> Sign in With Twitter
                </a>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default SignUpPage
