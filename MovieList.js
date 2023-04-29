import { Fragment } from "react";
import LikeButton from "./LikeButton";
import UnlikeButton from "./UnlikeButton";
import { Link } from "react-router-dom";

const MovieList = ({movies,addFavourite,favourites,removeFavourite}) => {

    return (  
        <div className="MovieList">


            <h1>Movies</h1>


            <div className="movie-images">
            
            {movies && movies.map((movie) => ( 

            <div>

                
            
                
            {movie.Poster != "N/A"
            
                
                ? ( 
                <div className="posterTrue">
                <Link to={`/${movie.imdbID}`}>
                <img src={movie.Poster} alt="Movie Poster" />
                </Link>
                <div className="button-with-poster">
                {!favourites.some(e =>e.imdbID === movie.imdbID) && <LikeButton addFavourite={addFavourite} movie={movie} favourites={favourites}/>}
                {favourites.some(e =>e.imdbID === movie.imdbID) && <UnlikeButton removeFavourite={removeFavourite} movie={movie} favourites={favourites}/>}
                </div>
              
                </div>
                )
                    

                    
                : (<div className="posterFalse">
                    <Link to={`/${movie.imdbID}`}>
                    {movie.Title} 
                    <div>{movie.Year}</div>
                    </Link>
                    <div className="button-without-poster">
                    {!favourites.some(e =>e.imdbID === movie.imdbID) && <LikeButton addFavourite={addFavourite} movie={movie} favourites={favourites}/>}
                    {favourites.some(e =>e.imdbID === movie.imdbID) && <UnlikeButton removeFavourite={removeFavourite} movie={movie} favourites={favourites}/>}
                    </div>
                    
                    </div>)}



            



           

        
                    </div>
            
                
                

            ))}

        </div>
    </div>
    )
    

}
 
export default MovieList;