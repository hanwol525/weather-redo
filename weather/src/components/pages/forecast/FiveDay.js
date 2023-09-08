import React from "react";
import SingleDay from "./FiveDaySingle";

export default function FiveDay(){
    return(
        <div className="d-flex row my-3">
            <SingleDay />
            <SingleDay />
            <SingleDay />
            <SingleDay />
            <SingleDay />
        </div>
    )
}