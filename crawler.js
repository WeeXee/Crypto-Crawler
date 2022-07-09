const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const { listenerCount } = require('process')

async function getPriceFeed() {
    try {
        const siteUrl = 'https://coinmarketcap.com/'
        const { data } = await axios({
            method: "GET",
            url: siteUrl,
        })

        const $ = cheerio.load(data)
        const elemSelector = '#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div > div.h7vnx2-1.bFzXgL > table > tbody > tr'
        const keys = [
            'rank',
            'name',
            'price',
            'day',
            'week',
            'marketCap',
            'volume',
            'circulatingSupply'
        ]

        const coinArr = []

        $(elemSelector).each((parentIdx, parentElem) => {
            let keyIdx = 0
            const coinObj = {}
            if (parentIdx <= 9) {
                $(parentElem).children().each((childIdx, childElem) => {
                    let tdValue = $(childElem).text()

                    if (keyIdx === 1 || keyIdx === 6) {
                        tdValue = $('p:first-child', $(childElem).html()).text()
                    }
                    if (tdValue) {
                        coinObj[keys[keyIdx]] = tdValue

                        keyIdx++
                    }
                })
                coinArr.push(coinObj)
            }
        })
        return coinArr
    } catch (err) {
        console.error(err)
    }
}

const app = express()

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});

app.get('/api', async(req, res) => {
    try {
        const priceFeed = await getPriceFeed()

        return res.status(200).json({
            result: priceFeed,
        })
    } catch (err) {
        res.status(500).json({
            err: err.toString(),
        })
    }
})

app.listen(3000, () => {
    console.log("go on URL: http://localhost:3000/api")
})