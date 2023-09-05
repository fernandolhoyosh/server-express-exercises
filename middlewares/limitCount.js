const limitCount = (req, res, next) => {
  const limit = parseInt(req.params.number);
  const arrayCount = [];

  for (let i = 1; i <= limit; i++) {
    arrayCount[i - 1] = i;
  }

  if (limit >= 10) {
    const prueba = arrayCount.slice(0, 10);
    req.countArray = prueba;
  } else {
    req.countArray = arrayCount;
  }
  next();
};

module.exports = { limitCount };
