import { useState } from "react";

const LikeButton = ({addFavourite,movie,favourites}) => {


      
    
      const handleSubmit = (e) => {
        
        addFavourite(movie)
      }

      

    return ( 
        <div className="LikeButton">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        
        <button id="like" class="fa fa-thumbs-up" onClick={handleSubmit}>Add To Favourites</button>
        
        

        </div>

     );
}
 
export default LikeButton;