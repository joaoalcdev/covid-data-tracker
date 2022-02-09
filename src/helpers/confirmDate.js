const dayjs = require("dayjs");

function confirmDate(date) {
  const yesterday = dayjs(new Date(date)).subtract(1, "day");

  return yesterday.format("YYYY-MM-DD");
}

module.exports = confirmDate;
