const request = require("request")





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

module.exports = geoCode