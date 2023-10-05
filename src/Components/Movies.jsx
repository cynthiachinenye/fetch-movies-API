import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Fragment } from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
import noImage from '../Assets/javier-esteban-8At6XBgVyyY-unsplash.jpg'

function Movies() {
  const [movieData, setMovieData] =useState([])
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
    <Fragment>
      {
        movieData.map((movies)=> {
          return(
            <Fragment>
          <div id='container'>
           <AiFillPlayCircle color='green' fontSize={40} id='play-icon'/>
           <img src= { movies.poster_path ?`${image}${movies.poster_path}`: noImage} alt=''/>
           <h3>{movies.title}</h3>
          </div>
          </Fragment>
          )
        })
      }
    </Fragment>
  )
}

export default Movies
