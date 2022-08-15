import { configureStore } from "@reduxjs/toolkit"
import detailSlice from "./reducers/detailSlice"
import sectionSlice from "./reducers/sectionSlice"
import homeSlice from "./reducers/homeSlice"
import footerSlice from "./reducers/footerSlice"
import searchSlice from "./reducers/searchSlice"
import blogSlice from "./reducers/blogSlice"
import authSlice from "./reducers/authSlice"
const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    section: sectionSlice.reducer,
    detail: detailSlice.reducer,
    footer: footerSlice.reducer,
    search: searchSlice.reducer,
    blog: blogSlice.reducer,
    auth:authSlice.reducer,
  }
})
export default store
