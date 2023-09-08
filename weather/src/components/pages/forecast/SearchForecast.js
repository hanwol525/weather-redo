import React from "react";

export default function Search(props){
    let dailyWeather;
    let dailyWind;
    let dailyHum;
    let tempAvg;
    let humAvg;
    let windAvg;

    const cityNameFetch = (cityName) => {
        let geocodereqURL = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=23116274a5a42433f230b2d7ad947f9a';
        fetch(geocodereqURL).then((res) => {return res.json()})
        .then((data) => {
            let currentLat = data[0].lat;
            let currentLon = data[0].lon;
            if (currentLat === undefined || currentLon === undefined){
                console.log("oops");
            } else {
                coordsFetch(currentLat, currentLon)
            }
        })
    }

    cityNameFetch(props.city)

    const coordsFetch = (lat, lon) => {
        let fiveDayCoords = `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&appid=23116274a5a42433f230b2d7ad947f9a&units=imperial`;
        let dailyCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=23116274a5a42433f230b2d7ad947f9a&units=imperial`;
        fetch(dailyCoords).then((res) => {
            return res.json()
        }).then((data) => {
            dailyWeather = data.main.temp;
            dailyWind = data.wind.speed;
            dailyHum = data.main.humidity;
            return dailyWeather, dailyWind, dailyHum
        });

        // for loop to iterate thru api response for 5 day
        fetch(fiveDayCoords).then((res) => {
            return res.json()
        }).then((data) => {
            for (let i = 0; i < data.list.length; i++){
                tempAvg = data.list[i].temp.day;
                humAvg = data.list[i].humidity;
                windAvg = data.list[i].speed;
            }


        })
    };

}