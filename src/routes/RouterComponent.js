import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Movie from '../components/Movie'
import Movies from '../components/Movies'
import MovieSearch from '../components/MovieSearch'
import MoviesHome from '../components/MoviesHome'
import PageNotFound from '../components/PageNotFound'
const RouterComponent = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={< MoviesHome / >} exact / >
    <Route path='/movies' element={< Movies / >}  exact/ >
 
    // Dynamic Routing 

< Route path='/search' element={ <MovieSearch / > } / >
    < Route path='/movies/:id' element={< Movie / >} exact / >
    < Route path='*' element={< PageNotFound / >} exact /  >


    </Routes>
    </>
  )
}

export default RouterComponent