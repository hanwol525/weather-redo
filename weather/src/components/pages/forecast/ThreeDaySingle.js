import React from "react";

// make this shit a hideable modal when shit gets shrunk

export default function SingleDay(props){
    // col-xl-3 col-lg-7 col-md-5 col-xs-3

    return (
        <div className="container card my-2" id="three-day-single">
            <div className="card-body d-flex row justify-content-center">
                <h4 className="card-title text-center text-decoration-underline" id="three-day-date">{props.day}</h4>
                    <img src={props.src} alt="Today's forecast icon" id="three-day-icon"></img>
                    <p className="text-capitalize three-day-text">Forecast: {props.forecast}</p>
                    <p className="three-day-text">Average Temp: {props.temp}</p>
                    <p className="three-day-text">Average Humidity: {props.hum}%</p>
                    <p className="three-day-text">Average Wind Speed: {props.wind} MPH</p>
            </div>
        </div>
    )
}