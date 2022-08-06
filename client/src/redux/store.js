import { configureStore } from "@reduxjs/toolkit"
import detailSlice from "./reducers/detailSlice"
import sectionSlice from "./reducers/sectionSlice"
import homeSlice from "./reducers/homeSlice"
import footerSlice from "./reducers/footerSlice"
const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    section: sectionSlice.reducer,
    detail: detailSlice.reducer,
    footer: footerSlice.reducer
  }
})
export default store
