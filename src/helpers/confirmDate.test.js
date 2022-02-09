const confirmDate = require('./confirmDate')

describe('formatted date from 1 day before: (YYYY-MM-DD) = {(yesterday) - 1}', () => {
  test('return yesterday date', () => {
    expect(confirmDate(new Date('10-17-2021'))).toBe('2021-10-16')
  })
})
