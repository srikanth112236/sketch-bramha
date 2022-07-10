import React from "react";
import axios, * as others from "https://cdn.skypack.dev/axios@0.21.1";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.0";
import {Link} from 'react-router-dom'

const { useState, useEffect } = React;

// Main component -------------------------------
const PageComp = (props) => {
  
  const getPost = async(page = 1) => {
   const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2a75f43539036630c5e2f12e4ed0b677&_page=${page}&_limit=10`)
    .then(response => {
      // console.clear();
      console.log(response.data);
      setMovies(response.data);
      setLoading(false);
    });
  }
  
  const [count, setCount] = useState(0);
  const [movies , setMovies] = useState([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPost();
  }, []);
  
  
  const handlePageClick = (e) => {
    console.log(e.selected);
    setLoading(true);
    getPost(e.selected + 1);
  }
  
//   const genPosts = () => {
//     const allPost = [];
//     movies.map(post => {
//       allPost.push(<Post {...post} />);
//     });
    
//     return allPost;
//   }
  
//   const allPost = genPosts();

const getPosts =()=>{
    movies && movies.length> 0 && movies.map((movieData)=>(
        <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xl-3 m-auto '>
        <Link to={`/movies/${movieData.id}`}>
        
        <div className='card bg-dark rounded'  >
        <img src={"https://image.tmdb.org/t/p/w500/" + movieData.backdrop_path} alt={movieData.title} className='img-fluid rounded' />
        <div className='card-body '>
          <p className='card-title text-white'>{movieData.title}</p>
          <div className='row'>
            <span className='rating'>{movieData.vote_average} / 10</span>
          </div>
        </div>
      </div>
        </Link>
        </div>
    ))
}
const allPost = getPosts()
  
  return (
    <div className='main'>
      <h1 className='main-head'>All posts</h1>
      
      <div className='posts'>
        { loading ? <Loader /> : allPost }
      </div>
      
      <div className='paginate'>
        <ReactPaginate 
          previousLabel={"Back"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={100}
          marginPagesDisplayed={5}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          />
      </div>
    </div>
  )
}



const Post = props => {
  
  return (
    <article className='post'>
      <h1 className='post-head' title={props.overview}>
        <span className='num'>{props.id}.</span>
        <span className='title'>{props.title}</span>
      </h1>
      
      <div className='post-body'>
        <p className='content'>{props.body}...</p>
        <span className='content-link'>Read more</span>
      </div>
    </article>
  )
}


// Loader component -------------------------------
const Loader = props => {
  
  return (
     <div className='loader'>
      Loading...
      <i class="fas fa-sync-alt fa-spin"></i>
    </div>
  )
}
export default PageComp;
