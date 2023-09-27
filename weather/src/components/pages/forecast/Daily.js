import React from "react";
import '../../content/Content.css';
export default function Daily(props) {
    return(
        <div className="container card col-lg-4 col-md-7 col-sm-2" id="daily-sec">
            <div className="card-body d-flex row justify-content-center">
                <h3 className="card-title text-center my-3">Current Conditions</h3>
                <img src={props.src} alt="Today's forecast icon" id="current-icon"></img>
                <div className="d-flex row justify-content-around my-2">
                    <p className="col-lg-3 col-md-6 forecast-font">Outlook: {props.weather}</p>
                    <p className="col-lg-3 col-md-6 forecast-font">Temperature: {props.temp}</p>
                    <p className="col-lg-3 col-md-6 forecast-font">Humidity: {props.hum}%</p>
                    <p className="col-lg-3 col-md-6 forecast-font"> Wind Speed: {props.wind} MPH</p>
                </div>
            </div>
        </div>
    )
}