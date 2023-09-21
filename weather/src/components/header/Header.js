import React, {useState} from "react";
import Search from "../search/SearchForecast";
import './Header.css'

// make btns and stuff a dropdown menu on shrink

export default function Header({ currentPage, changePage, currentCity, changeCity }){
    return(
        <nav className="navbar navbar-light justify-content-between header d-flex">
            <h2 className="mx-4">Weather Forecast</h2>
            <ul className="nav nav-pills mx-4">
                <li className="nav-item mx-2">
                    <a 
                        href="#home"
                        onClick={() => changePage('Home')}
                        className={currentPage === 'Home' ? 'nav-link nav-button-active' : 'nav-link nav-button'}
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item mx-4">
                    <a 
                        href="#Random"
                        onClick={() => changePage('Random')}
                        className={currentPage === 'Random' ? 'nav-link nav-button-active' : 'nav-link nav-button'}
                    >
                        Get Random Forecast!
                    </a>
                </li>
                <Search changePage={changePage} changeCity={changeCity} currentCity={currentCity}/>
            </ul>
        </nav>
    )
}