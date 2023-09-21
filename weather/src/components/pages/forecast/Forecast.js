import React, {useState} from "react";
import Daily from "./Daily";
import SingleDay from "./FiveDaySingle"
import '../../content/Content.css';
import { data } from "jquery";
const apiKey = process.env.REACT_APP_API_KEY;

export default function Forecast({currentCity}){
    const imgSrc = "https://via.placeholder.com/640x360";
    const styles = {
        forecast: {
            paddingTop: 30
        }
    }

    // daily forecast
    const [dailyWeather, setDailyWeather] = useState('');
    const [dailyHum, setDailyHum] = useState('');
    const [dailyWind, setDailyWind] = useState('');
    const [dailyLow, setDailyLow] = useState('');
    const [dailyHigh, setDailyHigh] = useState('');
    const changeDailyWeather = (temp) => setDailyWeather(temp);
    const changeDailyHum = (hum) => setDailyHum(hum);
    const changeDailyWind = (wind) => setDailyWind(wind);
    const changeDailyLow = (low) => setDailyLow(low);
    const changeDailyHigh = (high) => setDailyHigh(high);

    // 5-day forecast

    // get daily data
    const dailyCoordsFetch = (lat, lon) => {
        let dailyCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
        fetch(dailyCoords).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data);
            const dailyWeatherRound = Math.floor(data.main.temp);
            const dailyHumRound = Math.floor(data.main.humidity);
            const dailyWindRound = Math.floor(data.wind.speed);
            const dailyLowRound = Math.floor(data.main.temp_min);
            const dailyHighRound = Math.floor(data.main.temp_max);
            changeDailyWeather(dailyWeatherRound);
            changeDailyHum(dailyHumRound);
            changeDailyWind(dailyWindRound);
            changeDailyLow(dailyLowRound);
            changeDailyHigh(dailyHighRound);
        })
    }

    // get five day data
    const fiveDayCoordsFetch = (lat, lon) => {
        let fiveDayCoords = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
        fetch(fiveDayCoords).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data);
            // basically pushing everything to arrays and sorting w/ reduce fxn; take high and low?
        })
    }

    // geocode for daily and five day
    const cityNameFetch = () => {
        const geocodeReqURL = `https://api.openweathermap.org/geo/1.0/direct?q=${currentCity}&limit=1&appid=${apiKey}`;
        fetch(geocodeReqURL).then((res) => {return res.json()})
        .then((data) => {
            let currentLat = data[0].lat;
            let currentLon = data[0].lon;
            dailyCoordsFetch(currentLat, currentLon);
            fiveDayCoordsFetch(currentLat, currentLon);
        })
    }

    cityNameFetch();

    return (
        <div className="sec" style={styles.forecast}>
            <Daily src={imgSrc} temp={dailyWeather} hum={dailyHum} wind={dailyWind} low={dailyLow} high={dailyHigh}/>
            <div className="d-flex row my-3 five-day-sec">
                <SingleDay src={imgSrc}/>
                <SingleDay src={imgSrc}/>
                <SingleDay src={imgSrc}/>
                <SingleDay src={imgSrc}/>
                <SingleDay src={imgSrc}/>
            </div>
        </div>
    )
}