import React from "react";
import Daily from "./Daily";
import FiveDay from "./FiveDay";
import '../../content/Content.css';
const apiKey = process.env.REACT_APP_API_KEY;

export default function Forecast(){
    // set search stuff here?
    // YES bc then you can set daily and 5 day props

    const imgSrc = "https://via.placeholder.com/640x360";
    const styles = {
        forecast: {
            paddingTop: 30
        }
    }
        const cityNameFetch = () => {
            const searchCity = JSON.stringify(localStorage.getItem('city'));
            const geocodeReqURL = `https://api.openweathermap.org/geo/1.0/direct?q=${searchCity}&limit=1&appid=${apiKey}`;
            fetch(geocodeReqURL).then((res) => {return res.json()})
            .then((data) => {
                console.log(data);
                // let currentLat = data[0].lat;
                // let currentLon = data[0].lon;
                // console.log(currentLat, currentLon);
                // if (currentLat === undefined || currentLon === undefined){
                //     console.log("oops");
                // } else {
                //     coordsFetch(currentLat, currentLon)
                // }
            })
        }

        cityNameFetch();


    return (
        <div className="sec" style={styles.forecast}>
            <Daily src={imgSrc} />
            <FiveDay />
        </div>
    )
}