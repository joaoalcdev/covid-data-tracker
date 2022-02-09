const axios = require("axios");

async function fetchDataAPI() {
  console.log("Processing data, please wait...");

  try {
    const { data } = await axios.get(
      "https://covid.ourworldindata.org/data/owid-covid-data.json"
    );
    const { OWID_WRL: worldData } = data;

    return worldData.data;
  } catch (error) {
    console.log(
      "We're sorry about your data not being loaded, please try again later!"
    );
  }
}

module.exports = fetchDataAPI;
