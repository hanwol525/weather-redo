import React, { useRef } from "react";

export default function Search({ changePage, changeCity }){
    // const [currentCity, setCurrentCity] = useState('');
    const ref = useRef(null);
    const cityRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/
    // return statement w/ forecast or smth
    const handleClick = async () => {
        // city search
        const searchBar = ref.current;
        let searchVal = searchBar.value
        if (cityRegex.test(searchVal)){
            await changeCity(searchVal);
            return
        } else {
            console.log('not a valid city name');
        }
        
    }
    
    return (
        <li className="nav-item">
            <form className="form-inline d-flex">
                <input ref={ref} className="form-control mx-2" type="search" name="search" placeholder="Search for a city" aria-label="Search"></input>
                <button 
                    
                    className="nav-link search-button"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick();
                        changePage('Forecast');
                    }}
                    >Search</button>
            </form>
        </li>
    )
}