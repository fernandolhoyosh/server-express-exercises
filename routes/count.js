const express = require('express');
const router = express.Router();

const {limitCount} = require('../middlewares/limitCount')

router.get('/counting/:number', limitCount, (req, res) => {
    const test = req.countArray;
    console.log(test)
    res.status(200).send(test);
});

module.exports = router;