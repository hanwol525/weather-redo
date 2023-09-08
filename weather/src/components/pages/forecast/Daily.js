import React from "react";
import '../../content/Content.css'

export default function Daily(props) {


    

    // gotta find the way to set this shit up for the daily and 5 day
    // thoughts: get the geocoding fxn in here, also get some way to see if like...
    // the info can transfer in and i can use it in the fuckin return statement??
    // HALF BAKED THOUGHT: basically putting the fetch in the main forecast page and using
    // THAT as a way to get the info and slot it into the components; can use props on this component

    return(
        <div className="container card col-lg-4 col-med-3 col-sm-2">
            <div className="card-body d-flex row justify-content-center">
                <img src={props.src} alt="Today's forecast icon"></img>
                <h3 className="card-title text-center my-3">Daily Forecast</h3>
                <div className="d-flex row justify-content-around my-2">
                    <p className="col-lg-3 col-med-4 forecast-font">Temperature: {props.temp}</p>
                    <p className="col-lg-3 col-med-4 forecast-font">Humidity: {props.hum}</p>
                    <p className="col-lg-3 col-med-4 forecast-font"> Wind Speed: {props.wind}</p>
                    <p className="col-lg-3 col-med-4 forecast-font">Daily High: {props.high}</p>
                    <p className="col-lg-3 col-med-4 forecast-font">Daily Low: {props.low}</p>
                </div>
            </div>
        </div>
    )
}