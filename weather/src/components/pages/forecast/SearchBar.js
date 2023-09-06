import React from "react";
import '../../header/Header.css';

export default function Search(){
    return(
        <form class="form-inline d-flex">
                <input class="form-control mx-2" type="search" placeholder="Search for a city" aria-label="Search"></input>
                <button class="nav-link search-button" type="submit">Search</button>
        </form>
    )
}