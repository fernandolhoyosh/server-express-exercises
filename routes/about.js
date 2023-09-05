const express = require('express');
const router = express.Router();

router.get('/about-developers', (req, res) => {
    res.status(200).json({
        developers: {
            name: "fernando",
            lastName: "Hoyos",
            age: 27,
            profile: "full stack developer"
        }
    });
});

module.exports = router;