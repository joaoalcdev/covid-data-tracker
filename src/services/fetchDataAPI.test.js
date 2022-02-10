const fetchDataFromAPI = require('./fetchDataAPI')
const confirmDate = require('../helpers/confirmDate')

describe('Data from the public API of "Our World In Data"', () => {
  test('yesterday cases greater than 0', async () => {
    const data = await fetchDataFromAPI(new Date('2022/02/09'))
    const yesterdayDate = confirmDate(new Date())

    const yesterday = data.find(data => data.date === yesterdayDate)
    const { new_cases: yesterdayCases } = yesterday

    expect(yesterdayCases).toBeGreaterThan(0)
    // Ok ✅
  })

  test('2022/02/09 cases is equal to 3106504', async () => {
    // Date = YYYY/MM/DD
    const data = await fetchDataFromAPI()
    const date = confirmDate(new Date('2022/02/09'))

    const day = data.find(data => data.date === date)
    const { new_cases: cases } = day

    expect(cases).toEqual(3106504)
    // Ok ✅
  })
  jest.setTimeout(20000)
})
