//import { type } from "@testing-library/user-event/dist/type";
import axios from "axios"; 
import * as Types from '../type';


const API_KEY='5bdccc5981534661a014ffd5e0b8b32c'

const BASE_URL='https://api.themoviedb.org/3';

export const getNetflixOriginals=() => async dispatch =>{

    try{
     
        const result= await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
        );
        dispatch({type: Types.GET_NETFLIX_ORIGINALS ,payload :result.data.results})
    }
    catch(error)
    {
        console.log('Get Netflix API:' ,error);
    }
}
export const getTrendingMovies=() => async dispatch =>{

    try{
     
        const result= await axios.get(
            `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
        );
        dispatch({type: Types.GET_TRENDING_MOVIES ,payload :result.data.results})
    }
    catch(error)
    {
        console.log('Get Trending API:' ,error);
    }
}
export const getTopRatedMovies=() => async dispatch =>{

    try{
     
        const result= await axios.get(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`
        );
        dispatch({type: Types.GET_TOP_RATED_MOVIES ,payload :result.data.results})
    }
    catch(error)
    {
        console.log('Get Top Rated API:' ,error);
    }
}
export const getActionMovies=() => async dispatch =>{

    try{
     
        const result= await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
        );
        dispatch({type: Types.GET_ACTION_MOVIES ,payload :result.data.results})
    }
    catch(error)
    {
        console.log('Get Action API:' ,error);
    }
}
export const getComedyMovies=() => async dispatch =>{

    try{
     
        const result= await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
        );
        dispatch({type: Types.GET_COMEDY_MOVIES ,payload :result.data.results})
    }
    catch(error)
    {
        console.log('Get Comedy API:' ,error);
    }
}
export const getHorrorMovies=() => async dispatch =>{

    try{
     
        const result= await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        );
        dispatch({type: Types.GET_HORROR_MOVIES ,payload :result.data.results})
    }
    catch(error)
    {
        console.log('Get Horror API:' ,error);
    }
}
export const getRomanceMovies=() => async dispatch =>{

    try{
     
        const result= await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        );
        dispatch({type: Types.GET_ROMANCE_MOVIES ,payload :result.data.results})
    }
    catch(error)
    {
        console.log('Get Romance API:' ,error);
    }
}
export const getDocumentaries=() => async dispatch =>{

    try{
     
        const result= await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
        );
        dispatch({type: Types.GET_DOCUMENTARIES_MOVIES ,payload :result.data.results})
    }
    catch(error)
    {
        console.log('Get Documentaries API:' ,error);
    }
}
export const setMovieDetail= (movie) => dispatch =>{
    dispatch({type:Types.SET_MOVIE_DETAIL, payload:movie})
}
export const getSearchMovies=(keyword) => async (dispatch) =>{

    try {
        const result = await axios.get(
            `
            ${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keyword}`
        )
        dispatch({type:Types.GET_SEARCH_MOVIES, payload : result.data.results})
    } catch (error) {
        console.log('Get Search API:' ,error);
    }
}
export const getRecommendMovies=(id,name) => async (dispatch) =>{
 console.log(`${BASE_URL}/movie/${id}${name}/recommendations?api_key=${API_KEY}&language=en-US`)
    try {
        const result = await axios.get(
            
            `
            ${BASE_URL}/tv/${id}${name}/recommendations?api_key=${API_KEY}&language=en-US`
        )
        dispatch({type:Types.GET_RECOMMEND_MOVIES, payload : result.data.results})
    } catch (error) {
        console.log('Get Recommend API:' ,error);
    }
}

export const setMovieCard= (movie) => dispatch =>{
     
    dispatch({type:Types.SET_MOVIE_CARD, payload:movie})
    
}
export const DeleteMovieCart= (key) => dispatch =>{
     
    dispatch({type:Types.DELETE_MOVIE_CART, payload:key})
    
}