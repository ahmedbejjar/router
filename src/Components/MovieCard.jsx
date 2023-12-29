import React from 'react'
import StarRating from './StarRating'
import EditMovie from './EditMovie'
import { Link } from 'react-router-dom'
// import StarRating from '../StarRating'

const MovieCard = ({ movie,handleDelete,handleEdit}) => {
    return(
        <div className='movie-card'>
            <h3>{movie.name}</h3>
            <img src={movie.image} alt={movie.name}/>
            <StarRating rating={movie.rating}/>
            <p>{movie.data}</p>
<div>
    <button className='btn' onClick={()=>handleDelete(movie.id)}>delete</button>
    <EditMovie movie={movie} handleEdit={handleEdit}/>
    <Link to={`/info/${movie.id}`}>
       <button className="btn">Info</button></Link> 
</div>

        </div>
    )
}
export default MovieCard