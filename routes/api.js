const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("One more update")
})

router.get('/search', (req, res, next) => {
    res.send(`Just got it!`)
})


console.log(router.post)

router.post('/search', (req, res, next) => {
    console.log(req.body)
    res.send(
        `Post request received! ${req.body}`
    )
})


module.exports = router;