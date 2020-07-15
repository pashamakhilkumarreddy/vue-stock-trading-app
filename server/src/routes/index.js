const router = require('polka')();
const auth = require('./auth');

router.use('/', auth);

module.exports = router;
