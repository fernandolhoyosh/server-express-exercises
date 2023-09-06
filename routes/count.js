const express = require('express');
const router = express.Router();

const {limitCount} = require('../middlewares/limitCount')

router.get('/counting/:number', limitCount, (req, res) => {
    const arrayCount = req.countArray;
    console.log(arrayCount);
    res.status(200).send(arrayCount);
});

module.exports = router;