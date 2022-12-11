import React from "react";
import { useSelector } from "react-redux";
import WatchMovie from "../WatchMovies/WatchMovies";

function Watch(props)
{
    const {RecommendMovies} = useSelector(state =>state.infoMovies);
    // const {Cart} = useSelector(state =>state.infoMovies);
    // console.log(Cart); 
return(

    <div>

    <WatchMovie movie={RecommendMovies}/>
    
    </div>
)
}

export default Watch;