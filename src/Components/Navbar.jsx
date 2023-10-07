import React, { useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import '../Styles/navbar.scss'
import { NavLink } from 'react-router-dom'


function Navbar() {
    const [toggle, setToggle] = useState(true)
    return (
        <div className='navbar'>
            <nav className='nav'>
                <div className='nav-opt hide '>
                
                    <h1 id={toggle ? " " : 'heading'}>LOGO..</h1>
            
                    <NavLink to='/' className='link' style={({isActive}) => {return {color:isActive ? '#fff' : '#ee9b00'}}}>
                    <span id={toggle ? "movies" : "movie-light"}>Movies</span>
                    </NavLink>
                    <NavLink to='/TvShow' className='link'  style={({isActive}) => {return {color:isActive ? '#fff' : '#ee9b00'}}}>
                    <span id={toggle ? "movies" : "tv-light"}>Tv Shows</span>
                    </NavLink>
                    <NavLink to='/Trends' className='link'  style={({isActive}) => {return {color:isActive ? '#fff' : '#ee9b00'}}}>
                    <span id={toggle ? "movies" : "trend-light"}>Trending</span>
                    </NavLink>
                    <NavLink to='/Pricing' className='link'  style={({isActive}) => {return {color:isActive ? '#fff' : '#ee9b00'}}}>
                    <span id={toggle ? "movies" : "price-light"}>Pricing</span>
                    </NavLink>
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