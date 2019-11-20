const request = require('request');
const geocode = require('./utils/geocode');

// const url = 'https://api.darksky.net/forecast/c1c92628ecebfb36e6e11773f3f241fa/37.8267,-122.4233?units=si&lang=de';

// request({ url: url, json: true}, (error, response) => {
//     if(error){
//         console.log('Unabled to connect to weather service!')
//     }
//     else if(response.error){
//         console.log('Unabled to find location')
//     }
//     else{
//         console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a  ${response.body.currently.precipProbability}% chance of rain`)
//     }
// })

geocode('Los Angeles', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
