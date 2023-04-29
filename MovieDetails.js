    
import { useEffect, useState } from "react";
import {useParams} from "react-router";




const MovieDetails = () => {

    const {id} = useParams();

    const[movieDetail,setMovieDetail] = useState("");


    const getMovieRequestById = async (id) => {
    
        const url = "http://www.omdbapi.com/?i=" + id +"&apikey=297696a4";
    
        const response = await fetch(url);
        const responseJson = await response.json();
        setMovieDetail(responseJson);
        
      };

    
    useEffect(() =>{
    getMovieRequestById(id)
    
    },[])
 

    return ( 
        <div className="MovieDetails">

            {movieDetail && (
                <div className="movie-all-info">
                <h1>{movieDetail.Title}</h1>

                <img src={movieDetail.Poster} alt="Movie Poster" />

                <div className="movie-text-info">
                    <h2>Release Date:</h2>
                    <h3>{movieDetail.Released}</h3>
                    <div>
                    <h2>Genres:</h2>
                        <span>{movieDetail.Genre}</span>
                    <h2>Polt:</h2>                       
                        <p>{movieDetail.Plot}</p>
                    </div>

                </div>



                </div>
                



            ) }


        </div>
     );
}
 
export default MovieDetails;