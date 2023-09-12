import React from "react";
import SingleDay from "./FiveDaySingle";
import '../../content/Content.css'

export default function FiveDay(){
    const imgSrc = "https://via.placeholder.com/640x360";
    return(
        <div className="d-flex row my-3 five-day-sec">
            <SingleDay src={imgSrc}/>
            <SingleDay src={imgSrc}/>
            <SingleDay src={imgSrc}/>
            <SingleDay src={imgSrc}/>
            <SingleDay src={imgSrc}/>
        </div>
    )
}