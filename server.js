const app = require('./app');
const ENV = require('./config/env');

// PORT
const PORT = ENV.PORT || 3000

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
})