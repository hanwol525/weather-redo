import React from "react";
import Search from "./SearchBar";

export default function Forecast(){

    let dailyWeather
    let dailyWind
    let dailyHum

    const dailyCoordsSearch = (lat, lon) => {
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

    return (
        <div className="sec vh-100">
        </div>
    )
}