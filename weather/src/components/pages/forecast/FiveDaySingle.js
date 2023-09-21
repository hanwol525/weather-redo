import React from "react";

// make this shit a hideable modal when shit gets shrunk

export default function SingleDay(props){

    return (
        <div className="container card col-xl-2 col-lg-7 col-md-5 col-xs-3 my-2" id="five-day-single">
            <div className="card-body d-flex row justify-content-center">
                <img src={props.src} alt="Today's forecast icon" id="five-day-icon"></img>
                <h4 className="card-title text-center">{props.day}</h4>
                    <p>High: {props.high}</p>
                    <p>Low: {props.low}</p>
                    <p>Average Humidity: {props.hum}</p>
                    <p>Average Wind Speed: {props.wind}</p>
            </div>
        </div>
    )
}