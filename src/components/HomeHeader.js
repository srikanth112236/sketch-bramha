import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg'
import SearchIcon from '../assets/images/search-icon.png'

const HomeHeader = () => {

// implementing Search Functionality
const [movies , setMovies] = useState([])
const [query,setQuery] = useState('')
  const searchMovies = async(e)=>{
    e.preventDefault();
    console.log("Searching....");
   try{
    const url = `https://api.themoviedb.org/3/search/movie?api_key=2a75f43539036630c5e2f12e4ed0b677&query=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results)
    console.log(data.results)
   }catch{
    console.log(e)
   }
   
    }
    const handleChange = (e)=>{
      setQuery(e.target.value)
     }
  return (
    <>
    <nav className="navbar navbar-expand-lg p-3">
    <div className="container d-flex align-items-center">
    
    <Link to='/' className='text-decoration-none text-white lead fw-bolder'>< img src={logo} /></Link>
      
      
        <form className="d-flex align-items-center form" onSubmit={searchMovies}>
          <Link to='/search' className='text-decoration-none'><input className="form-control me-2 w-100" type="search" placeholder="Search movies" aria-label="Search" 

          name='query'
          value={query}
          onChange={handleChange}
          />
<span  >          <button className='search-btn-home' onChange={handleChange} type="submit"><Link to='/search' className='text-decoration-none'>< img src={SearchIcon} className='search-icon' / > </Link> </button>
</span>
          </Link>
        </form>
    
    </div>
  </nav>
 
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
        <div className='row'>
          <span className='rating'>{moviesData.vote_average} / 10</span>
        </div>
      </div>
    </div>
      </Link>
      </div>
    ))
  }
  </div>
  </div>


</>
  )
}

export default HomeHeader