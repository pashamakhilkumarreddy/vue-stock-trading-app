const router = require('polka')();

const {
  login,
  register,
} = require('../controllers');

router.post('/login', login);
router.post('/register', register);

module.exports = router;
