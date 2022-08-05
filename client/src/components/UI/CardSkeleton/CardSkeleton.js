import Skeleton from "@mui/material/Skeleton"
import Stack from "@mui/material/Stack"

import { CARD_TYPES } from "../../../constants"
import "./styles.scss"

const Component = ({ children, className, type, ...props }) => {
  if (type === CARD_TYPES.SMALL) {
    return (
      <Stack direction="row" style={{ marginBottom: "32px", width: "100%" }}>
        <Skeleton
          sx={{ borderRadius: "3px" }}
          variant="rectangular"
          height={140}
          width="45%"
        />
        <Stack style={{ marginLeft: "12px", width: "100%" }}>
          <Skeleton
            sx={{ borderRadius: "3px" }}
            variant="text"
            height={60}
            width="100%"
          />
          <Skeleton
            sx={{ borderRadius: "3px" }}
            variant="text"
            height={25}
            width="100%"
          />
          <Skeleton
            sx={{ borderRadius: "3px" }}
            variant="text"
            height={25}
            width="60%"
          />
        </Stack>
      </Stack>
    )
  }
  if (type === CARD_TYPES.GRID) {
    return (
      <Stack
        alignItems="flex-start"
        style={{ marginBottom: "20px", width: "100%" }}
      >
        <Skeleton
          sx={{ borderRadius: "3px" }}
          variant="rectangular"
          height={240}
          width="100%"
        />
        <Skeleton
          sx={{ marginTop: "12px", borderRadius: "3px" }}
          variant="text"
          width="100%"
          height={40}
        />
        <Skeleton
          sx={{ borderRadius: "3px" }}
          variant="text"
          width="70%"
          height={30}
        />
        <Skeleton
          sx={{ borderRadius: "3px" }}
          variant="text"
          width="50%"
          height={28}
        />
      </Stack>
    )
  }

  return (
    <Stack alignItems="center" style={{ marginBottom: "25px", width: "100%" }}>
      <Skeleton
        sx={{ borderRadius: "3px" }}
        variant="rectangular"
        height={520}
        width="100%"
      />
      <Skeleton
        sx={{ paddingTop: "20px", borderRadius: "3px" }}
        variant="text"
        height={40}
        width="80%"
      />

      <Skeleton
        sx={{ paddingTop: "20px", borderRadius: "3px" }}
        variant="text"
        height={28}
        width="60%"
      />
      <Skeleton
        sx={{ paddingTop: "20px", borderRadius: "3px" }}
        variant="text"
        height={28}
        width="50%"
      />
    </Stack>
  )
}
export default Component
