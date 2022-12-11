
import React from "react";
import { useSelector } from "react-redux";
import CollectionMovie from "../CollectionMovie/CollectionMovie";

function Collection(props)
{
    
    const {Cart} = useSelector(state =>state.infoMovies);
    console.log(Cart); 
      return(
    <div>
   <CollectionMovie movie={Cart}/>
    </div>
)
}
export default Collection;