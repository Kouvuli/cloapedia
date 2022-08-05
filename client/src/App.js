import "./assets/css/boxicons-2.1.1/css/boxicons.min.css"
import "./assets/css/reset.css"
import "./assets/css/bootstrap/bootstrap.css"
import "./assets/css/font-awesome.css"
import { Suspense } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Preloader from "./components/Preloader/Preloader"
import { routes, EXTRA_PATH } from "./routes"

import NotFoundPage from "./pages/NotFoundPage"
import PagesTemplate from "./pages"
import _ from "lodash"
import SectionPage from "./pages/SectionPage/SectionPage"
import BlogDetail from "./pages/BlogDetail"
function App() {
  const showExtraSubRoutes = (EXTRA_PATH) => {
    if (!_.isEmpty(EXTRA_PATH)) {
      return Object.keys(EXTRA_PATH).map((key, index) => {
        return (
          <PagesTemplate
            key={index}
            exact={true}
            path={`${EXTRA_PATH[key]}/:year/:month/:day/:id`}
            Component={BlogDetail}
          />
        )
      })
    }
  }
  const showExtraRoutes = (EXTRA_PATH) => {
    if (!_.isEmpty(EXTRA_PATH)) {
      return Object.keys(EXTRA_PATH).map((key, index) => {
        return (
          <PagesTemplate
            key={index}
            exact={true}
            path={EXTRA_PATH[key]}
            Component={SectionPage}
          />
        )
      })
    }
  }
  const showPages = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <PagesTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        )
      })
    }
  }
  return (
    <Suspense fallback={<Preloader />}>
      <BrowserRouter>
        <Switch>
          {showExtraRoutes(EXTRA_PATH)}
          {showExtraSubRoutes(EXTRA_PATH)}
          {showPages(routes)}
          <Route path="" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
