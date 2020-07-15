module.exports = {
  async login(req, res) {
    try {
      res.send(res, 200, {
        error: false,
      });
    } catch (err) {
      console.error(err);
    }
  },
  async register(req, res) {
    try {
      res.send(res, 200, {
        error: false,
      });
    } catch (err) {
      console.error(err);
    }
  },
};
