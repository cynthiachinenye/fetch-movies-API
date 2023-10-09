import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from './Components/Movies'
import TvShow from './Components/TvShow'
import Pricing from './Components/Pricing'
import Trends from './Components/Trends'
import React,{useContext, useState} from "react";
import'./Styles/app.css'

export const container = React.createContext() 

function App() {
  const [toggle,setToggle] = useState(true);
  // console.log(toggle)

  return (
    <container.Provider value={{toggle}}>
    <div className="app">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Movies/>}/>
    <Route path='TvShow' element={<TvShow/>}/>
    <Route path='Pricing' element={<Pricing/>}/>
    <Route path='Trends' element={<Trends/>}/>
    
  </Routes>
   
    
</BrowserRouter>

    </div>
    </container.Provider>
  );
}

export default App;
