import moment from "moment"

export const checkTitle = (value) => {
  if (!value || value.trim().length === 0) return "Title is required"
}

export const checkContent = (value) => {
  if (!value || value.trim().length === 0) return "Content is required"
}
export const timeSince = (date) => {
  return moment(date).fromNow()
}

export const toDate = (strDate) => {
  return moment(strDate).format("DD MMM, YYYY")
}
