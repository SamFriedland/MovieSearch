import { useEffect, useState } from "react";

const Searchbar = ({setSearch}) => {



    const handleChange = (e) => {
        setSearch(e.target.value)
        

    
    }



    return ( 
        <div className="Searchbar">
            <input type="text" placeholder="Search..." onChange={handleChange} ></input>
        
        </div>



     );
}
 
export default Searchbar;