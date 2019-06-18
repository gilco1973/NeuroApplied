function getCurrentUser(req, res, next) {
  if (!req.user) {
    return res.status(500).send({
      message: 'Not logged In!'
    })
  }
  return res.status(200).send({
    result: req.user
  });
}
module.exports = getCurrentUser;
