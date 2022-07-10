import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom';
 

const Movies = (moviesData) => {
    
    const [movies , setMovies] = useState([]);
  
    useEffect(()=>{
       const getData = async()=>{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2a75f43539036630c5e2f12e4ed0b677`)
        // console.log(response);
        const {data} = response;
        console.log(data)
        setMovies(data.results)
       }
       getData();
    },[])


// implementing Search Functionality;



  return (
    <div>
<div className='bg-dark movie-comp'>
<div className='container'>
<div className='title pb-3 mb-0 pt-5'>
<h3 className='text-white'>Trending</h3>
</div>
<div className='row'>

{
    movies && movies.length > 0 && movies.map((data)=>(
      <div className='col-12 col-sm-4 col-md-6 col-lg-4 col-xl-3 col-xl-3 m-auto '>
      <Link to={`${data.id}`}>
      
      <div className='card bg-dark rounded'  >
      <img src={"https://image.tmdb.org/t/p/w500/" + data.poster_path} alt={data.title} className='img-fluid rounded' />
      <div className='card-body '>
        <p className='card-title text-white'>{data.title}</p>
        <div className='row'>
          <span className='rating'>{data.vote_average} / 10</span>
        </div>
      </div>
    </div>
      </Link>
      </div>
     ))
 }
 </div>
</div>
</div>
    </div>
  )
}

export default Movies