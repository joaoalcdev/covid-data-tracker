const confirmDate = require('./confirmDate')

describe('formatted date from 1 day before: (YYYY-MM-DD) = {(yesterday) - 1}', () => {
  test('return yesterday date', () => {
    expect(confirmDate(new Date('10-17-2021'))).toBe('2021-10-16')
    // Ok ✅
  })

  test('when send giving 08/11/2021, returning 08/10/2021 formatted date', () => {
    expect(confirmDate(new Date('08/11/2021'))).toBe('2021-08-10')
    // Ok ✅
  })

  test('when send giving 02/15/2021 returning 02/14/2021 date', () => {
    expect(confirmDate(new Date('02/15/2021'))).toBe('2021-02-14')
    // Ok ✅
  })
  
})
