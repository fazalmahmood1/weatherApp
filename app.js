const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const serachLocation = process.argv[2];

if(!serachLocation){
    console.log('Please provide a location')
}else{
    geocode(serachLocation, (error, {latitude, longitude, location}) => {
        if(error){
            return console.log(error)
        }
    
        forecast(latitude,longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
        })
    })
}

