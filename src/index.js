const inputDaysToPredict = require('./controllers/inputDaysToPredict');
const predictTheNextDays = require('./controllers/predictTheNextDays');

async function start() {
  const days = inputDaysToPredict()

  await predictTheNextDays(days)
}

start()