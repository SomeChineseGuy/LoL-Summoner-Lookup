const express = require('express');
const app = express();
const router = express.Router();
const axios = require('axios');
require('dotenv').config()

router.get('/', (req, res, next) => {
    res.send("One more update")
})

router.post('/search', (req, res, next) => {
    console.log(req.body)
    res.send(
        `Post request received! ${req.body}`
    )
})


const riotApiTest = async () => {
    let res = await axios
    .get('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Thatguy75?api_key=' + process.env.API_KEY)
    
    let data = res.data
    console.log(data)
}




riotApiTest()

module.exports = router;