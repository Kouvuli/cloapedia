import { useEffect, useState } from "react"
import {
  Link,
  MemoryRouter,
  Route,
  Switch,
  useLocation
} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Pagination from "@mui/material/Pagination"
import PaginationItem from "@mui/material/PaginationItem"
import sectionSlice from "../../../redux/reducers/sectionSlice"
import { searchSelector, sectionSelector } from "../../../redux/selectors"
import { styled } from "@mui/material/styles"
import searchSlice from "../../../redux/reducers/searchSlice"
const CustomPaginationItem = styled(PaginationItem)(({ theme }) => ({
  // color: "#ffffff",
  "&.Mui-selected": {
    color: "#fff!important"
  }
}))
const Content = ({ type }) => {
  const dispatch = useDispatch()
  var selector, slice
  if (type === "search") {
    slice = searchSlice
    selector = searchSelector
  } else {
    slice = sectionSlice
    selector = sectionSelector
  }
  const { totalPage, page, data } = useSelector(selector)
  // const [page, setPage] = useState(parseInt(query.get("page") || "1", 10))
  // console.log(page)
  // const page = parseInt(query.get("page") || "1", 10)
  // useEffect(() => {
  //   // console.log(page)
  //   dispatch(slice.actions.changePage(page))
  // }, [dispatch, page])
  // const [currentPage, setCurrentPage] = useState(page)
  // props.handlePage(page)
  const pageHandler = (e, page) => {
    // setCurrentPage(page)
    dispatch(slice.actions.changePage(page))
  }
  return (
    <Pagination
      page={page}
      onChange={pageHandler}
      count={totalPage}
      shape="rounded"
      color="primary"
      renderItem={(item) => (
        <CustomPaginationItem
          size="large"
          component={Link}
          to={`/${item.page === 1 ? "" : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  )
}

export default function Component({ type = "default" }) {
  return (
    <MemoryRouter initialIndex={0}>
      <Switch>
        <Route path="*" render={() => <Content type={type} />} />
      </Switch>
    </MemoryRouter>
  )
}
