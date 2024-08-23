const authorized = (req, res, next) => {
  const { user } = req.query;
  if (user === 'Dumi') {
    req.user = { name: 'Dumisani', id: 668 };
    next();
  } else {
    res.status(401).send('<h1>Unauthorized user⛔</h1>');
  }
};

module.exports = authorized;
