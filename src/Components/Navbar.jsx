import React, { useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import '../Styles/navbar.scss'

function Navbar() {
    const [toggle, setToggle] = useState([])
    return (
        <div className='navbar'>
            <nav className='nav'>
                <div className='nav-opt hide '>
                    <h1 id={toggle ? "" : 'heading'}>LOGO..</h1>
                    <span id={toggle ? "movies" : "movie-light"}>Movies</span>
                    <span id={toggle ? "movies" : "tv-light"}>Tv Shows</span>
                    <span id={toggle ? "movies" : "trend-light"}>Trending</span>
                    <span id={toggle ? "movies" : "price-light"}>Pricing</span>
                </div>
                <div className='search-input'>
                    <input type='text' placeholder='Search for Movies' />
                    <HiSearch className='icon' />
                </div>
                <div id='color-switch' onClick={() => setToggle(!toggle)}>
                    <div id={toggle ? 'color-switcher-move' : 'color-switcher-moved'}></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar