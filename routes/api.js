const app = require('express');
const router = app.Router();

router.get('/', (req, res, next) => {
    res.send("One more update")
})

router.post('/search',req, res, next) => {
    console.log(req.body)
    res.send(
        `Post request received! ${req.body}`
        )
})


module.exports = router;