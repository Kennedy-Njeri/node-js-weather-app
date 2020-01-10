const request = require("request")

//const url = 'https://api.darksky.net/forecast/1a2ac66cd0792407548da2d4da7e2301/37.8267,-122.4233'

// json sets body to json representation
//request({ url:url, json: true }, (error, response) => {
    //
    // let degrees = response.body.currently.temperature
    // let chance = response.body.currently.precipProbability
    // let today = response.body.daily.data[0].summary

    // if (error) {
    //     console.log("Could not be able to connect to the weather service!")
    // } else if (response.body.error){
    //     console.log("Unable to find location")
    // } else {
    //     console.log(`${response.body.daily.data[0].summary}It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain`)
    // }

    // const data = JSON.parse(response.body)
    // console.log(data.currently.time)
// })


// Geocoding

// const map = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2VubmVkeTI1NCIsImEiOiJjazU1azYyczIwYXpwM25wbTJlOG9rcndkIn0.UjLXXvYXcGK0cHY6I23Brw&limit=1"
//
// request({url: map, json: true }, (error, response) => {
//     if(error) {
//         console.log("Unable to connect to weather service!")
//     } else if (response.body.features.length === 0) {
//         console.log("Unable to find location. Please try another search!")
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(`The latitude is ${latitude} and the longitude is ${longitude}`)
//     }
//
//
// })

const geoCode = (address, callback) => {

    const map = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2VubmVkeTI1NCIsImEiOiJjazU1azYyczIwYXpwM25wbTJlOG9rcndkIn0.UjLXXvYXcGK0cHY6I23Brw&limit=1'

    request({url: map, json: true }, (error, response) => {
        if(error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (response.body.features.length === 0) {
            callback("Unable to find location. Please try another search!", undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })


}


geoCode('Nairobi', (error, data) => {
    console.log("Error", error)
    console.log("Data", data)
})