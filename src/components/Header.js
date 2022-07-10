import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg'

const Header = () => {

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
    <nav className="navbar navbar-expand-lg p-4">
    <div className="container">
      <Link to='/' className='text-decoration-none text-white lead fw-bolder'>< img src={logo} /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item m-3">
            <Link to='/'className='text-decoration-none text-white lead fw-bolder visually-hidden'>Trending</Link>
          </li>
         
        
        </ul>
       
      </div>
    </div>
  </nav>


</>
  )
}

export default Header