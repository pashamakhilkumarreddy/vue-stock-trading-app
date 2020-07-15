const polka = require('polka');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const responeTime = require('response-time');
const send = require('@polka/send-type');

const app = polka();

const {
  server,
} = require('./config');

const PORT = server.PORT || 3000;

app
  .use(helmet())
  .use(cors())
  .use(compression())
  .use(responeTime())
  .use((req, res, next) => {
    res.send = send;
    next();
  })
  .use(require('./routes'))
  .listen(PORT, (err) => {
    if (err) throw err;
    console.info(`The server is up and running on ${PORT}`);
  });
