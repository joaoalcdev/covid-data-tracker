const fetchDataFromAPI = require('../services/fetchDataAPI')

const confirmDate = require('../helpers/confirmDate')

async function predictTheNextDays(days) {
  const data = await fetchDataFromAPI()

  const currentData = confirmDate(new Date())
  // const currentData = "2021-08-01";

  try {
    const index = data.findIndex(data => data.date === currentData)

    if (index === -1) {
      throw new Error()
    }

    const { new_cases: currentDayNewCases } = data[index]

    const yesterdayIndex = index - 1
    const { new_cases: yesterdayNewCases } = data[yesterdayIndex]

    const dayBeforeYesterdayIndex = index - 2
    const { new_cases: dayBeforeYesterdayNewCases } =
      data[dayBeforeYesterdayIndex]

    for (let i = 1; i <= days; i++) {
      const dayBeforeNewCases =
        i >= days / 2 ? yesterdayNewCases : dayBeforeYesterdayNewCases
      const margin = 1 + 0.2 * Math.random()

      const proportion = (currentDayNewCases / dayBeforeNewCases) * margin
      const newCases = Math.ceil(currentDayNewCases * proportion)

      console.log(`${i} => ${newCases}`)
    }
  } catch (error) {
    console.log('There was an error displaying the results, please try again!')
  }
}

module.exports = predictTheNextDays
