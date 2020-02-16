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

const summonerSearch = async (summoner) => {
    let res = await axios
        .get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${process.env.API_KEY}`);
    let accountId = await res.data.accountId
    return accountId
}

const matchListSearch = async (summonerID) => {
    let res = await axios
        .get(`https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${summonerID}?endIndex=5&api_key=${process.env.API_KEY}`);
    let matchList = await res.data.matches
    return matchList
    
}

const fiveMatchesAndTimeStamp = async(summoner) => {
    let user = await summonerSearch(summoner);
    let matches = await matchListSearch(user);
    let results = await [...matches.map(match => ({game: match.gameId, time: match.timestamp}))];
    return results;
}

const singleMatch = async(matches) => {
    let space = []
    for(let i = 0; i < matches.length; i++) {
        space.push(
            await axios
            .get(`https://na1.api.riotgames.com/lol/match/v4/matches/${matches[i].game}?api_key=${process.env.API_KEY}`);
        )
    }
    return space;
    
}

const search = async (summoner) => { 
    let user = await summonerSearch(summoner);
    let list = await fiveMatchesAndTimeStamp(summoner);
    let single = await singleMatch(list);

}

search("thatguy75")

module.exports = router;