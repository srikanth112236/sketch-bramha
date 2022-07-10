import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import '../App.css'
import Header from './Header';



const Movie = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams()

    useEffect(() => {
        const getMovie = async () => {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2a75f43539036630c5e2f12e4ed0b677`)
            console.log(response);
            const { data } = response;
            console.log(data)
            setMovie(data)
        }
        getMovie();
    }, [])

    return (
        <>

        <div className='movie-details  '>
        {
            Object.keys(movie).length > 0 ? (
                <>
                <Header />
                <div className=''>
                                <div className='movie-img w-100'>
                                    <img src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path} alt={movie.title} className=' d-block w-100'  />

                                    < div className='movie-body-text container'>
                                    <Link to='/' className='text-decoration-none text-white '> <i class="fa fa-arrow-left mb-4 mt-2"></i></Link>
                                        <h1>{movie.title}</h1>
                                        <p className=' vote-avg lead mt-3'>Rating : {movie.vote_average} / 10</p>
                                        <p className='text-justify description lead mt-3 mb-3'>{movie.overview}</p>
                                        <div className='d-flex justify-content-between mt-3 mb-3'>
                                        <p className='h4 lead' >Release </p>
                                        <p className='h4 lead' >{movie.release_date}</p>
                                        </div>

                                        <div className='d-flex justify-content-between  languages'>
                                        <p className='lead mt-3 mb-3'>Original Languages </p>
                                       
                                        <span className='lead mt-3 mb-3'>{
                                    movie.spoken_languages.map((languages)=>(
                                        
                                        <span className='me-4 ms-0'>{languages.english_name}</span>
                                    ))

                                        } </span>
                                        </div>  
                                    </div>
                                </div>
                                </div>

                            </>
                        ) : null
                    }
                    <>
                    </>
            </div>
        </>
    )
}

export default Movie