import moment from "moment";

export function formatDate(...date) {
  return moment(new Date(...date))
    .locale("ru")
    .format("DD MMMM YYYY");
}
