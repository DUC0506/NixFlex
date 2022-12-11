import React from "react";
import { useSelector } from "react-redux";
import MyProduct from "../MyProduct/MyProduct";

function Product(props)
{
    
     const {Cart} = useSelector(state =>state.infoMovies);
     console.log(Cart); 
return(

    <div>
        <MyProduct movie={Cart}/>
    
    </div>
)
}

export default Product;