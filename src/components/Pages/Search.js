import React from "react";
import { useSelector } from "react-redux";
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import SearchMovies from "../SearchMovies/SearchMovies";

function Search(props)
{
    const {MovieDetail} = useSelector(state =>state.infoMovies);
    // const {Cart} = useSelector(state =>state.infoMovies);
    // console.log(Cart); 
return(

    <div>
    <SearchMovies/>
    <MoviesDetail movie={MovieDetail} showModal={MovieDetail ? true : false}/>
    
    </div>
)
}

export default Search;