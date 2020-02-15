const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("One more update")
})

module.exports = router;