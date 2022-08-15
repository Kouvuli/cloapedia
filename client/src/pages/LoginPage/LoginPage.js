import { Grid } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import RectangleButton from "../../components/UI/Button/RectangleButton"
import styles from "./styles.module.css"
import { useDispatch, useSelector } from "react-redux"
import { Login } from "../../redux/reducers/authSlice"
import { authSelector } from "../../redux/selectors"
import CustomizedSnackbars from "../../components/UI/CustomizedSnackbars/CustomizedSnackbars"
const LoginPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { loginSuccess, loginLoading, loginError, data } =
    useSelector(authSelector)
  const handleLogin = (e) => {
    e.preventDefault()
    if (username !== "" && password !== "")
      dispatch(Login({ username, password }))
  }
  // useEffect(() => {
  //   if (loginSuccess && !loginLoading) {
  //     history.goBack()
  //   }
  // }, [loginSuccess])
  const usernameHandler = (e) => {
    setUsername(e.target.value)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }
  return (
    <section className={`${styles.login} ${styles.spad}`}>
      {data === null && (
        <CustomizedSnackbars title="Login with your account!" type="info" />
      )}
      {loginSuccess && (
        <CustomizedSnackbars title="Login success!" type="success" />
      )}
      {loginError && <CustomizedSnackbars title="Login failed" type="error" />}

      <Grid
        container
        maxWidth="1170px"
        marginLeft="auto"
        marginRight="auto"
        padding={{ md: "0px", sm: "0 10px", xs: "0 20px" }}
      >
        <Grid item md={6} xs={12}>
          <div className={styles["login__form"]}>
            <h3>Login</h3>
            <form>
              <div className={styles["input__item"]}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={usernameHandler}
                />

                <span>
                  <i class="bx bxs-user"></i>
                </span>
              </div>
              <div className={styles["input__item"]}>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={passwordHandler}
                />
                <span>
                  <i className="bx bxs-lock"></i>
                </span>
              </div>
              <button onClick={handleLogin} className={styles["site-btn"]}>
                Login Now
              </button>
            </form>
            {/* <a href="#" className={styles["forget_pass"]}>
              Forgot Your Password?
            </a> */}
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className={styles["login__register"]}>
            <h3>Dont’t Have An Account?</h3>
            <RectangleButton href="/signup" className={styles["primary-btn"]}>
              Register Now
            </RectangleButton>
          </div>
        </Grid>

        {/* <div className="login__social">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <div className="login__social__links">
                            <span>or</span>
                            <ul>
                                <li><a href="#" className="facebook"><i className="fa fa-facebook"></i> Sign in With
                                Facebook</a></li>
                                <li><a href="#" className="google"><i className="fa fa-google"></i> Sign in With Google</a></li>
                                <li><a href="#" className="twitter"><i className="fa fa-twitter"></i> Sign in With Twitter</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  */}
      </Grid>
    </section>
  )
}

export default LoginPage
