import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Forecast from "../pages/forecast/Forecast";
import Home from "../pages/Home";
import Random from "../pages/Random";

export default function Content(){
    const [currentPage, setCurrentPage] = useState('Home');
    const [currentCity, setCurrentCity] = useState('');
    const renderPage = () => {
        if (currentPage === 'Home'){
            return <Home />
        }
        if (currentPage === 'Forecast'){
            return <Forecast currentCity={currentCity}/>
        }
        if (currentPage === 'Random'){
            return <Random />
        }
    };

    const changePage = (page) => setCurrentPage(page);
    const changeCity = (city) => setCurrentCity(city);

    return(
        <div className="sec justify-content-center">
            <Header currentPage={currentPage} changePage={changePage} changeCity={changeCity} currentCity={currentCity}/>
            {renderPage()}
            <Footer />
        </div>
    )
}