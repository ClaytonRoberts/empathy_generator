import moment from "moment";

export const timeCalc = (timezoneSecs) => {
  let time = moment()
    .utc()
    .add(timezoneSecs / 60 / 60, "hours")
    .format("MMM DD h:mm A");

  return time;
};
