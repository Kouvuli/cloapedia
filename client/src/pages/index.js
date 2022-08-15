import { Box } from "@mui/material"
import { Redirect, Route } from "react-router-dom"
import TopBar from "../components/TopBar"
import TopSearch from "../components/TopSearch"
import ScrollToTop from "../components/ScrollToTop"
import Header from "../components/Header"
import Footer from "../components/Footer"
import useAuth from "../hooks/useAuth"
import { timeDiffFromNow } from "../utils"
const PagesLayout = (props) => {
  //   let isLogin = false;
  //   if (localStorage.getItem("User")) {
  //     isLogin = true;
  //   }

  return (
    <>
      {/* <LandingSlider /> */}

      <Box sx={{ flexGrow: 1, backgroundColor: "background.default" }}>
        <TopBar />
        <Header />
        {/* <Header /> */}
        {props.children}
        <Footer />
        <ScrollToTop />
      </Box>
    </>
  )
}
export const PagesTemplate = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        return (
          <PagesLayout>
            <Component {...propsComponent} />
          </PagesLayout>
        )
      }}
    />
  )
}

export const AuthPageTemplate = ({ Component, ...rest }) => {
  let auth = useAuth()
  return (
    <Route
      {...rest}
      render={(propsComponent) =>
        auth.user && timeDiffFromNow(auth.user["expired_date"]) > 0 ? (
          <PagesLayout>
            <Component {...propsComponent} />
          </PagesLayout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}
