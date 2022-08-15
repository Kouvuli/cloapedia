import { useContext } from "react"
import { authContext } from "../App"

function useAuth() {
  return useContext(authContext)
}

export default useAuth
