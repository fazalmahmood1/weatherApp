const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/c1c92628ecebfb36e6e11773f3f241fa/${latitude},${longitude}?units=si`;
    request({ url, json: true}, (error, {body}) => {
        if(error){
            callback('Unabled to connect to weather service!', undefined)
        }
        else if(body.error){
            callback('Unabled to find location', undefined)
        }
        else{
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a  ${body.currently.precipProbability}% chance of rain`)
        }
    })
}

module.exports = forecast