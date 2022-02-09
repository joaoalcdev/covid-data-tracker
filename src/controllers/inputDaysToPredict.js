const readlineSync = require('readline-sync');

function inputDaysToPredict(){
  return readlineSync.question('Enter the number of days: ', {
    limit: (input) => {
      const numericInput = +input

      return numericInput > 0 && Number.isInteger(numericInput);
    },
    limitMessage: 'Hey, $<input> is a invalid value number!'
  });
}

module.exports = inputDaysToPredict;
