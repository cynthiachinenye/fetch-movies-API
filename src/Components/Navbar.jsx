import React,{Fragment} from 'react'
import {HiSearch} from 'react-icons/hi'

function Navbar() {
  return (
    <Fragment>
    <nav className='nav'>
      <div className='nav-options'>
      <h1>LOGO..</h1>
      <span>Movies</span>
      <span>Tv Shows</span>
      <span>Trending</span>
      <span>Pricing</span>
      </div>
      <input type='text' placeholder='Search for Movies'/>
      <HiSearch/>
      <div id='color-switch'>
      <div id='color-switcher-move'></div>
      </div>
    </nav>
 </Fragment>
  )
}

export default Navbar