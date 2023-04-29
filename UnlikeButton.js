const UnlikeButton = ({removeFavourite,movie,favourites}) => {

    
    const handleSubmit = (e) => {
      removeFavourite(movie)
      console.log(favourites)
    }


  return ( 
      <div className="UnlikeButton">


      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      
      <button id="unlike" class="fa fa-thumbs-down" onClick={handleSubmit}>Remove From Favourites</button>
      
      
      

      </div>

   );
}

export default UnlikeButton;