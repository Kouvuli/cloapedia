import { Box } from "@mui/material"
import { Route } from "react-router-dom"
import TopBar from "../components/TopBar"
import TopSearch from "../components/TopSearch"
import ScrollToTop from "../components/ScrollToTop"
import Header from "../components/Header"
import Footer from "../components/Footer"
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
const PagesTemplate = ({ Component, ...props }) => {
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
export default PagesTemplate
