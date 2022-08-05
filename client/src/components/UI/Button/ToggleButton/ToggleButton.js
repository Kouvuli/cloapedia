import * as React from "react"

import TableRowsIcon from "@mui/icons-material/TableRows"
import ViewListIcon from "@mui/icons-material/ViewList"
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { useSelector, useDispatch } from "react-redux"
import sectionSlice from "../../../../redux/reducers/sectionSlice"
import { sectionSelector } from "../../../../redux/selectors"
const ToggleButtons = () => {
  //   const { viewType } = useSelector(sectionSelector)
  const [cardType, setCardType] = React.useState("small")
  const dispatch = useDispatch()

  const handleToggle = (event, newCardType) => {
    dispatch(sectionSlice.actions.changeViewType(newCardType))
    setCardType(newCardType)
  }

  return (
    <ToggleButtonGroup
      value={cardType}
      size="small"
      color="primary"
      exclusive
      onChange={handleToggle}
      aria-label="text alignment"
    >
      <ToggleButton value="small" aria-label="small">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="big" aria-label="big">
        <TableRowsIcon />
      </ToggleButton>
      <ToggleButton value="grid" aria-label="grid">
        <GridViewSharpIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
export default ToggleButtons
