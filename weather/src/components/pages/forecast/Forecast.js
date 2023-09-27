import React, {useState, useEffect} from "react";
import Daily from "./Daily";
import SingleDay from "./ThreeDaySingle"
import '../../content/Content.css';
import { data } from "jquery";
import dayjs from "dayjs";
const apiKey = process.env.REACT_APP_API_KEY;

export default function Forecast({currentCity}){
    const imgSrc = "https://via.placeholder.com/640x360";
    const styles = {
        forecast: {
            paddingTop: 30
        }
    }

    const [current, setCurrent] = useState({ src: '', weather: '', temp: '', hum: '', wind: ''})
    const [dayOne, setDayOne] = useState({ src: '', day: 'Today', forecast: '', temp: '', hum: '', wind: ''})
    const [dayTwo, setDayTwo] = useState({ src: '', day: '', forecast: '', high: '', low: '', hum: '', wind: ''})
    const [dayThree, setDayThree] = useState({ src: '', day: '', forecast: '', temp: '', hum: '', wind: ''})


    const weatherFetch = () => {
        let weatherInfo = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${currentCity}&days=3&aqi=no&alerts=no`
        fetch(weatherInfo).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data);
            setCurrent({ src: data.current.condition.icon,
                weather: data.current.condition.text, 
                temp: Math.round(data.current.temp_f), 
                hum: Math.round(data.current.humidity), 
                wind: Math.round(data.current.wind_mph)});
            setDayOne({ src: data.forecast.forecastday[0].day.condition.icon,
                day: 'Today',
                forecast: data.forecast.forecastday[0].day.condition.text,
                temp: Math.round(data.forecast.forecastday[0].day.avgtemp_f),
                hum: Math.round(data.forecast.forecastday[0].day.avghumidity),
                wind: Math.round(data.forecast.forecastday[0].day.maxwind_mph)})
            setDayTwo({ src: data.forecast.forecastday[1].day.condition.icon,
                day: dayjs(data.forecast.forecastday[1].date).format('MM/DD'),
                forecast: data.forecast.forecastday[1].day.condition.text,
                temp: Math.round(data.forecast.forecastday[1].day.avgtemp_f),
                hum: Math.round(data.forecast.forecastday[1].day.avghumidity),
                wind: Math.round(data.forecast.forecastday[1].day.maxwind_mph)})
            setDayThree({ src: data.forecast.forecastday[2].day.condition.icon,
                day: dayjs(data.forecast.forecastday[2].date).format('MM/DD'),
                forecast: data.forecast.forecastday[2].day.condition.text,
                temp: Math.round(data.forecast.forecastday[2].day.avgtemp_f),
                hum: Math.round(data.forecast.forecastday[2].day.avghumidity),
                wind: Math.round(data.forecast.forecastday[2].day.maxwind_mph)})
            
        })
    }

    useEffect(() => weatherFetch(), [currentCity])

    return (
        <div className="sec" style={styles.forecast}>
            <Daily src={current.src} weather={current.weather} temp={current.temp} hum={current.hum} wind={current.wind}/>
            <div className="d-flex row">
                <SingleDay src={dayOne.src} day={dayOne.day} forecast={dayOne.forecast} temp={dayOne.temp} low={dayOne.low} hum={dayOne.hum} wind={dayOne.wind}/>
                <SingleDay src={dayTwo.src} day={dayTwo.day} forecast={dayTwo.forecast} temp={dayTwo.temp} low={dayTwo.low} hum={dayTwo.hum} wind={dayTwo.wind}/>
                <SingleDay src={dayThree.src} day={dayThree.day} forecast={dayThree.forecast} temp={dayThree.temp} low={dayThree.low} hum={dayThree.hum} wind={dayThree.wind}/>
            </div>
        </div>
    )
}