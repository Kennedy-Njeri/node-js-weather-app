const request = require("request")

const url = 'https://api.darksky.net/forecast/1a2ac66cd0792407548da2d4da7e2301/37.8267,-122.4233'

// json sets body to json representation
request({ url:url, json: true }, (error, response) => {
    let degrees = response.body.currently.temperature
    let chance = response.body.currently.precipProbability
    let today = response.body.daily.data[0].summary
    console.log(`${today}It is currently ${degrees} degrees out. There is a ${chance}% chance of rain`)
    // const data = JSON.parse(response.body)
    // console.log(data.currently.time)
})