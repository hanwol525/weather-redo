import React from "react";
import Daily from "./Daily";
import FiveDay from "./FiveDay";
import '../../content/Content.css';

export default function Forecast(){

    const imgSrc = "https://via.placeholder.com/640x360";
    const styles = {
        forecast: {
            paddingTop: 30
        }
    }
    return (
        <div className="sec vh-100" style={styles.forecast}>
            <Daily src={imgSrc} />
            <FiveDay />
        </div>
    )
}