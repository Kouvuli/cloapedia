import { useEffect, useState } from "react"
import cloapediaApi from "../apis/cloapediaApi"
import moment from "moment"
import { timeDiffFromNow } from "../utils"
function useProvideAuth() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  // useEffect(() => {
  //   if (
  //     timeDiffFromNow(
  //       JSON.parse(localStorage.getItem("user"))["expired_date"]
  //     ) < 0
  //   ) {
  //     console.log("hello")
  //     setUser(JSON.parse(localStorage.getItem("user")))
  //   }
  //   console.log(
  //     timeDiffFromNow(
  //       JSON.parse(localStorage.getItem("user"))["expired_date"]
  //     ) < 0
  //   )
  // }, [])

  //   const signin = (cb) => {
  //     return fakeAuth.signin(() => {
  //       setUser("user")
  //       cb()
  //     })
  //   }

  //   const signout = (cb) => {
  //     return fakeAuth.signout(() => {
  //       setUser(null)
  //       cb()
  //     })
  //   }
  return {
    user
  }
}
export default useProvideAuth
