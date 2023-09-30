import React, {  useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import '../Styles/navbar.scss'

function Navbar() {
    const [toggle, setToggle] = useState([])
    return (
        <div className='navbar'>
            <nav className='nav'>
                <div className='nav-options'>
                    <h1>LOGO..</h1>
                    <span>Movies</span>
                    <span>Tv Shows</span>
                    <span>Trending</span>
                    <span>Pricing</span>
                </div>
                <div className='search-input'>
                <input type='text' placeholder='Search for Movies' />
                <HiSearch className='icon' />
                </div>
                <div id='color-switch' onClick={()=> setToggle(!toggle)}>
                    <div id={ toggle? 'color-switch' : 'color-switcher-move'}></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar