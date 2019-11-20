const request = require('request');

const url = 'https://api.darksky.net/forecast/c1c92628ecebfb36e6e11773f3f241fa/37.8267,-122.4233?units=si&lang=de';

request({ url: url, json: true}, (error, response) => {
    console.log(response.body.currently)
    console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a  ${response.body.currently.precipProbability}% chance of rain`)
})



