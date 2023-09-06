import React from "react";

export default function Daily(props) {
    let dailyWeather
    let dailyWind
    let dailyHum

    const coordsSearch = (lat, lon) => {
        let fiveDayCoords = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=23116274a5a42433f230b2d7ad947f9a&units=imperial';
        let dailyCoords = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=23116274a5a42433f230b2d7ad947f9a&units=imperial';
        fetch (dailyCoords).then((res) => {
            return res.json()
        }).then((data) => {
            dailyWeather = data.main.temp;
            dailyWind = data.wind.speed;
            dailyHum = data.main.humidity;
        });

        return dailyWeather, dailyWind, dailyHum
    };

    // gotta find the way to set this shit up for the daily and 5 day
    // thoughts: get the geocoding fxn in here, also get some way to see if like...
    // the info can transfer in and i can use it in the fuckin return statement??

    return(
        <div>
            <p>{dailyWeather}</p>
            <p>{dailyWind}</p>
            <p>{dailyHum}</p>
        </div>
    )
}