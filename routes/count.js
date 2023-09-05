const express = require('express');
const router = express.Router();

router.get('/counting/:number', (req, res) => {
    const limit = parseInt(req.params.number);
    const arrayCount = [];
    for (let i = 1; i <= limit; i++) {
        arrayCount[i-1] = i;
    }
    res.status(200).send(arrayCount);
});

module.exports = router;