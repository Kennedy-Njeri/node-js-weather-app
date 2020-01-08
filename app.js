const request = require("request")

const url = 'https://api.darksky.net/forecast/1a2ac66cd0792407548da2d4da7e2301/37.8267,-122.4233'

request({ url:url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently.time)
})