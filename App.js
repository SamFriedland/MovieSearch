import React, {useEffect, useState} from 'react';
import './App.css';
import MovieList from './MovieList';
import Searchbar from './Searchbar';
import Favourites from './Favourites';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';


function App() {

  const [movies,setMovies] = useState([]);
  const [search,setSearch] = useState('Star Wars');
  const [favourites,setFavourites] = useState([]);


  const addFavourite = (movie) => {
    setFavourites([...favourites,movie])
  }

  const removeFavourite = (movie) => {
    const newFavourites = favourites.filter(item => item.imdbID !== movie.imdbID);
    setFavourites(newFavourites);

      
  }



  const getMovieRequest = async (searchVal) => {
    
    const url = "http://www.omdbapi.com/?apikey=297696a4&s=" + searchVal;

    const response = await fetch(url);
    const responseJson = await response.json();
    setMovies(responseJson.Search);
    
  };



  useEffect(() =>{
    
    getMovieRequest(search);

    
  },[search])

  return (
    <div className="App">
      <Routes>
      <Route strict exact path = "/" element = {(

        <div>
        <Searchbar setSearch={setSearch}/>
        <MovieList movies={movies} addFavourite={addFavourite} favourites={favourites} removeFavourite={removeFavourite} />
        <Favourites favourites={favourites} removeFavourite={removeFavourite}/>
        </div>


      )} />
        
  

      <Route strict exact path = "/:id" element = {<MovieDetails/>} />
      </Routes>
      
      
    
    </div>
  );
}

export default App;
