const request = require('request');

const geocode = (address, callback) => {
    const token = 'pk.eyJ1Ijoic2l4bG9naWNzIiwiYSI6ImNrMzc4aG1mcTAzZ2EzY25vYWJhYXBjZnIifQ.GWVrMolpJ3xyX8j3_cE7PQ'
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${token}`

    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback('Unabled to connect to location services!', undefined)
        }
        else if(response.body.features.length === 0){
            callback('Unabled to find location, Try another search.', undefined)
        }
        else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode