const express = require('express');
const router = express.Router();

router.get('/greetings', (req, res) => {
    res.status(200).json({
        greet:{
            english:"Hello user. Welcome",
            german: "Hallo Benutzer. Willkomm",
            french: "Bonjour utilisateur. Bienvenue à l'utilisateur"
        }
    })
});

module.exports = router;