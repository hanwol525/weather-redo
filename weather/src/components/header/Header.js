import React from "react";
import './Header.css'

// make btns and stuff a dropdown menu on shrink

export default function Header({ currentPage, changePage }){
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
                <li className="nav-item">
                    <form class="form-inline d-flex">
                        <input class="form-control mx-2" type="search" placeholder="Search for a city" aria-label="Search"></input>
                        <button 
                            class="nav-link search-button"
                            type="submit"
                            onClick={() => changePage('Forecast')}
                            >Search</button>
                    </form>
                </li>
            </ul>
        </nav>
    )
}