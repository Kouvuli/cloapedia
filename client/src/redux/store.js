import { configureStore } from "@reduxjs/toolkit"
import detailSlice from "./reducers/detailSlice"
import sectionSlice from "./reducers/sectionSlice"
const store = configureStore({
  reducer: {
    section: sectionSlice.reducer,
    detail: detailSlice.reducer
  }
})
export default store
