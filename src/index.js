const inputDaysToPredict = require('./controllers/inputDaysToPredict');
const forecastTheNextDays = require('./controllers/forecastTheNextDays');

async function start() {
  const days = inputDaysToPredict()

  await forecastTheNextDays(days)
}

start()