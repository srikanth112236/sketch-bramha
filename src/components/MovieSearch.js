import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import Header from './Header';
import SearchIcon from '../assets/images/search-icon.png'
import videoIcon from  '../assets/images/video-player.png';


const MovieSearch = () => {
    const [movies , setMovies] = useState([])
const [query,setQuery] = useState('')
  const searchMovies = async(e)=>{
    e.preventDefault();
    console.log("Searching....");
   try{
    const url = `https://api.themoviedb.org/3/search/movie?api_key=2a75f43539036630c5e2f12e4ed0b677&query=${query}&`;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results)
    console.log(data.results)
   }catch{
    console.log(e)
   }
   
    }
    const handleChange = (e)=>{
      setQuery(e.target.value,...query)
     }
  return (
    <>
<Header / >
   <div className='bg-dark search-comp'>
   <h2 className='lead display-6 text-white text-center pt-5'>search for your favourite movie</h2>
   <form className="d-flex justify-content-center mb-5 pt-5 pb-3" onSubmit={searchMovies}>
   <input className="form-control  w-50 mx-auto" type="search" placeholder="Search movies" aria-label="Search" 

   name='query'
   value={query}
   onChange={handleChange}
   />
   <button className='search-button' onChange={handleChange} type="submit"><Link to='/search' className='text-decoration-none'>< img src={SearchIcon} className='search-icon' / > </Link> </button>

 </form>
 
 <div className='container'>
 <div className='row'>

 {
   movies&& movies.length>0 && movies.map((moviesData)=>(
     <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xl-3 m-auto '>
     <Link to={`/movies/${moviesData.id}`}>
     
     <div className='card bg-dark rounded'  >
     <img src={"https://image.tmdb.org/t/p/w500/" + moviesData.poster_path} alt={moviesData.title} className='img-fluid rounded' />
     <div className='card-body '>
       <p className='card-title text-white'>{moviesData.title}</p>
       <div className='d-flex justify-content-between'>
         <span className='rating'><i className="fa fa-star text-warning  "></i> {moviesData.vote_average} / 10</span>
         <i className=""><img src={videoIcon} className='img-fluid play-button' / > </i>
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

    </>
  )
}

export default MovieSearch