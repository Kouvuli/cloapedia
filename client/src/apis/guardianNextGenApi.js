import axiosClient from "./axiosClient"
import { GUARDIAN_NEXT_GEN_API } from "./baseURL"

const request = axiosClient(GUARDIAN_NEXT_GEN_API)
const guardianNextGenApi = {
  getTopRead: (params) => {
    // const url = "/sections"
    // console.log(url)
    const url = "/most-read-geo.json"
    return request.get(url, { params })
  },
  getTopReadSection: (url, params) => {
    return request.get(url, { params })
  }
}

export default guardianNextGenApi
