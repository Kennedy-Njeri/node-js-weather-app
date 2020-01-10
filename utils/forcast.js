const request = require("request")


const forecast = (latitude, longitude, callback) => {

    const url = `https://api.darksky.net/forecast/1a2ac66cd0792407548da2d4da7e2301/${latitude},${longitude}`

    request({url: url, json: true }, (error, response) => {

        if (error) {
            callback("Could not be able to connect to the weather service!", undefined)
        } else if (response.body.error){
            callback("Unable to find location", undefined)
        } else {
            //callback(undefined,`${response.body.daily.data[0].summary}It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain`)
            callback(undefined, {
                summary: response.body.daily.data[0].summary,
                temperature: response.body.currently.temperature,
                precipProbability: response.body.currently.precipProbability
            })
        }
    })

}




module.exports = forecast