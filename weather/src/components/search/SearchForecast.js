import React, { useState, useEffect, useRef } from "react";

export default function Search({changePage}){
    const [currentCity, setCurrentCity] = useState('');
    const ref = useRef(null);
    
    const changeCity = (city) => setCurrentCity(city);
    const cityRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/
    // return statement w/ forecast or smth
    const handleClick = async () => {
        // city search
        const searchBar = ref.current;
        let searchVal = searchBar.value
        if (cityRegex.test(searchVal)){
            changeCity(searchVal);
            await localStorage.setItem("city", currentCity);
        } else {
            console.log('oopsyunggravy.mp3');
        }
        
    }
    
    useEffect(() => {console.log(currentCity)});
    useEffect(() => {localStorage.setItem("city", currentCity)})

    return (
        <li className="nav-item">
            <form className="form-inline d-flex">
                <input ref={ref} className="form-control mx-2" type="search" name="search" placeholder="Search for a city" aria-label="Search"></input>
                <button 
                    
                    className="nav-link search-button"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick();
                        changePage('Forecast');
                        // changeCity(props.city);
                    }}
                    >Search</button>
            </form>
        </li>
    )
}

// export default function Search(props){
//     let dailyWeather;
//     let dailyWind;
//     let dailyHum;
//     let tempAvg;
//     let humAvg;
//     let windAvg;

//     const cityNameFetch = (cityName) => {
//         let geocodereqURL = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=1&appid=';
//         fetch(geocodereqURL).then((res) => {return res.json()})
//         .then((data) => {
//             let currentLat = data[0].lat;
//             let currentLon = data[0].lon;
//             if (currentLat === undefined || currentLon === undefined){
//                 console.log("oops");
//             } else {
//                 coordsFetch(currentLat, currentLon)
//             }
//         })
//     }

//     cityNameFetch(props.city)

//     const coordsFetch = (lat, lon) => {
//         let fiveDayCoords = `api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&appid=${apiKey}&units=imperial`;
//         let dailyCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
//         fetch(dailyCoords).then((res) => {
//             return res.json()
//         }).then((data) => {
//             dailyWeather = data.main.temp;
//             dailyWind = data.wind.speed;
//             dailyHum = data.main.humidity;
//             return dailyWeather, dailyWind, dailyHum
//         });

//         // for loop to iterate thru api response for 5 day
//         fetch(fiveDayCoords).then((res) => {
//             return res.json()
//         }).then((data) => {
//             for (let i = 0; i < data.list.length; i++){
//                 tempAvg = data.list[i].temp.day;
//                 humAvg = data.list[i].humidity;
//                 windAvg = data.list[i].speed;
//             }


//         })
//     };

// }