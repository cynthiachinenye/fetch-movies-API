import axios from 'axios'
import React from 'react'

function Movies() {
  async function movieShow (){
    const data = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=79d50d0b258ce81609b056767b5f5166",
    {

    })
  }
  return (
    <div>
      <h1>movies </h1>
    </div>
  )
}

export default Movies
