import axios from 'axios'
import React, { useContext, useEffect,useState } from 'react'
import { container } from '../App'
import {AiFillPlayCircle} from 'react-icons/ai'
import noImage from '../Assets/javier-esteban-8At6XBgVyyY-unsplash.jpg'
import '../Styles/movies.scss'

function Movies() {
  const {toggle}= useContext(container)
  const [movieData, setMovieData] =useState([])
  const [trailer, setTrailer] = useState(true)
  const image = 'https://image.tmdb.org/t/p/w500/'
  
  async function movieShow (){
    const data = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=79d50d0b258ce81609b056767b5f5166",
    {params:{
      api_key: '79d50d0b258ce81609b056767b5f5166'
    }
      
  })
    const results = data.data.results
    setMovieData(results)
  }
 useEffect(()=>{
  movieShow();
 },[])
 console.log(movieData)
  return (
  
   
   <div className={toggle ? 'mainBgColor' : 'secondaryBgColor'}>
   <div className='movie-container'>
     {
       movieData.map((movies)=> {
         return(
           <div className={ trailer ? 'main-container': 'noContainer'}>
         <div id='container'>
          <AiFillPlayCircle color='#fff'  fontSize={40} id='play-icon'/>
          <img src= { movies.poster_path ?`${image}${movies.poster_path}`: noImage} alt=''/>
          <h3 id={movies.title.length > 28? 'smaller-text': ''}>{movies.title}</h3>
         </div>
         </div>
         )
       })
     }

   </div>
   </div>
   
  
  )
}

export default Movies
