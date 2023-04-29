import UnlikeButton from "./UnlikeButton";

const Favourites = ({favourites,removeFavourite}) => {
    return ( 
        <div className="Favourites">

            <h1>Favourites</h1>
        

            <div className="favourite-movies">
            {favourites.map((fav) => (

            fav.Poster != "N/A"
            
                ?(
                <div className="posterTrue">
                <img src={fav.Poster} alt="Movie Poster" />
                <div className="button-with-poster">
                <UnlikeButton removeFavourite={removeFavourite} movie={fav} favourites={favourites}/>
                </div>
                </div>
                )

                : (<div className="posterFalse">
                    
                {fav.Title} 
                <div>{fav.Year}</div>
                <div>
    
                </div>
                
                </div>)

            




            )
            )}
            </div>
            
        </div>
     );
}
 
export default Favourites;