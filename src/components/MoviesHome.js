import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Banner from './Banner';
 import '../App.css';
 import Header from './HomeHeader';
 import videoIcon from  '../assets/images/video-player.png';
 import NextIcon from '../assets/images/next-arrow.png'
 import PrevIcon from '../assets/images/prev-arrow.png'

const MoviesHome = () => {
    
    const [movies , setMovies] = useState([]);
    const [pageNumber , setPageNumber] = useState(1)
  
    useEffect(()=>{
       const getData = async()=>{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2a75f43539036630c5e2f12e4ed0b677&page=${pageNumber}`)
        // console.log(response);
        const {data} = response;
        console.log(data)
        setMovies(data.results)
       }
       getData(pageNumber);
    },[pageNumber])


// implementing Search Functionality;





  return (
    <div>
    < Header />
   <Banner / >
<div className='bg-dark movie-comp'>
<div className='container'>
<div className='title pb-3 mb-0 pt-5'>
<h3 className='text-white text-center '>Trending</h3>
</div>
<div className='row'>

{
    movies && movies.length > 0 && movies.map((data)=>(
      <div className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xl-3 m-auto ' key={data.id}>
      <Link to={`/movies/${data.id}`} className='text-decoration-none'>
      
      <div className='card bg-dark rounded'  >
      <img src={"https://image.tmdb.org/t/p/w500/" + data.backdrop_path} alt={data.title} className='img-fluid rounded' />
      <div className='card-body '>
        <p className='card-title text-white'>{data.title}</p>
        <div className='d-flex justify-content-between'>
          <span className='rating'><i className="fa fa-star text-warning  "></i> {data.vote_average} / 10</span>
         <i className=""><img src={videoIcon} className='img-fluid play-button' / > </i>
        </div>
      </div>
    </div>
      </Link>
      </div>
     ))
 }
 < div className='buttons text-center'>
 < button className=' btn btn-outline-light'
 onClick={()=>{
  if(pageNumber > 1){
    setPageNumber(pageNumber -1)
  }
 }}
 > <i className="fa fa-angle-left text-white prev-icon"></i></button>
 
<span className='text-white ms-3'> {pageNumber}</span>
 
 < button className='btn btn-outline-light ms-3'
 onClick={()=>{
  if(pageNumber <= 100){
    setPageNumber(pageNumber+1)
  }
 }}
 > <i className="fa fa-angle-right  prev-icon"></i></button>
 </div>
 </div>

</div>

</div>
    </div>
  )
}

export default MoviesHome