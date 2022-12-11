import React from "react";
import { useDispatch } from "react-redux";
//import { useSelector } from "react-redux";
import styled from "styled-components";
import { DeleteMovieCart } from "../store/action";
import Table from 'react-bootstrap/Table';
import {MdDeleteForever} from "react-icons/md"
import {CgTrashEmpty} from "react-icons/cg"
import{CiDiscount1} from "react-icons/ci"
import{BsFillCartCheckFill} from"react-icons/bs"


// const movieList=[
//              "https://m.media-amazon.com/images/I/61Fm+N+NncL._AC_SL1008_.jpg",
//              "https://i.pinimg.com/originals/a9/c7/d3/a9c7d36b3aaee651d8f120257587e27b.jpg",
//              "https://i.pinimg.com/originals/d9/b9/07/d9b9070c855d7c226c9a26a675c93142.jpg",
//             "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289",
//              "http://cdn.shopify.com/s/files/1/0290/5663/0868/products/australianbackpacker999x666_1200x.jpg?v=1618847022",
//              "https://3.bp.blogspot.com/-XU3gtu_wI6g/WpxBFPk1p0I/AAAAAAAACEw/0JoIwjhNmjs-JrTYJddrGaNL2o32M-WEgCLcBGAs/s1600/Screen%2BShot%2B2018-03-04%2Bat%2B18.53.17.png",
//             "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/87108/88101/edge_of_tomorrow_regular_buy_original_movie_posters_at_starstills__48110.1400669257.jpg?c=2",
//              "https://i.pinimg.com/originals/0f/b4/1f/0fb41ff936741bb71415352180b86611.jpg",
//             "https://cdn.shopify.com/s/files/1/0747/3829/products/mL1755_1024x1024.jpg?v=1571445470",
//           "https://i.pinimg.com/originals/6d/6a/6c/6d6a6c1cba5068c1626adedf00db5865.jpg",
//            "https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/tomb-raider-long-neck-691x1024.jpg",
//           ];
function CollectionMovie(props)
{
    const dispatch=useDispatch();
    const {movie}=props;  
    var key=0;
    console.log(movie)

    const handlebtncollection =()=>{
        dispatch(DeleteMovieCart(key));
        console.log( 'Delete' + key );
    }
    return(
        <CollectionDetail>
         {/* <div className="collectionContent">
         {
             movie && movie.length > 0 ?(
                movie.map((movie,index)=>
            {

               
                const imageUrl=`https://image.tmdb.org/t/p/w500/${
                         movie.backdrop_path }`
                
                            return(
                                <div>
                <div className="collectionItem" key={index}>
            <img src={imageUrl}alt=""></img>
            <h3>{movie &&(movie.title||movie.name)}</h3>
            <h4>1.20$</h4>
            <div className="btnCollection" onClick={()=>handlebtncollection(key=index)}>Delete </div>
           </div>
           </div>
           )
             }))
            :(
                <div className="titleCollection">
                    <h1>Your cart not movie</h1>
                </div>
              )
              
}         <div className="totalPrice">Total Price: {(1.2*movie.length).toFixed(2)}$</div>
          <div className="btnBank">Thanh Toán</div>
        </div>  */}

<Table striped bordered hover variant="dark" className="Table">
            <div className="TitleProduct">
                        <h1 >My Cart</h1>
                        <p>
                Inspirational designs,
            illustrations, and graphic elements from the world’s best designers.<br></br>
            Want more inspiration? Browse our search results...
            </p>
                    </div>
{
    movie && movie.length > 0 ?(
    <div className="titleCollection">
        <div className="movieCollection">Movie</div>
        <div className="movieCollectionName">Movie Name</div>
        <div className="movieCollectionPrice">Movie Price</div>
        <div className="movieCollectionDelete">Movie Delete</div>
    </div>) :(<div></div>)
}
 
 {
 
    movie && movie.length > 0 ?(
        movie.map((movie,index)=>
    {
        const imageUrl=`https://image.tmdb.org/t/p/w500/${
                 movie.backdrop_path }`
    return(
        <div>
        <div className="rowMovieCollection" key={index}>
          <div className="imgCollection"><img src={imageUrl}  alt=""></img></div>
          <div className="nameCollection"><h4>{movie &&(movie.title||movie.name)}</h4></div>
          <div className="priceCollection">1.2$</div>
          <div className="btnDelete" onClick={()=>handlebtncollection(key=index)}> <MdDeleteForever/> Delete</div>

        </div>
        


            {/* <thead>
                <tr>
                
            <th className="First">STT</th>
             <th className="Last">Movie</th>
             <th className="User">Name</th>
             <th className="btn"></th>
                </tr>
            </thead>
            <tbody>
        <tr className="listItem">
          <td className="tditem">{index}</td>
          <td className="tditem"><img src={imageUrl} alt=''/></td>
          <td className="tditem">{movie &&(movie.title||movie.name)}</td>
          <td className="tditem"><div className="btnCollection" onClick={()=>handlebtncollection(key=index)}>Delete </div></td>
        </tr>
        </tbody> */}
        </div>
    )

        

    })):(
        <div className="titleCartCollection">
            <h1>Your cart not movie  </h1>
            <CgTrashEmpty className="titleCartCollectionIcon"/>
        </div>
      )
     
    
    }
    {
        movie && movie.length > 0 ?(
    <div className="totalPrice">
            <div className="promotionPrice">
                <div className="voucherPrice"><CiDiscount1 className="iconVoucher"/> Nixflex Voucher</div>
                <div className="middle"></div>
                <div className="codeVoucherPrice">Nhập mã voucher</div>
            </div>
            <div className="MoviePrice">
              <div className="titleMoviePrice">Tổng thanh toán :</div>
              <div className="salePrice">{(1.2*movie.length).toFixed(2)}$</div>
              <div className="btnPrice"><BsFillCartCheckFill className="iconBtnPrice"/> Thanh Toán</div>
            </div>
    </div>):(<div></div>)
}
</Table>
</CollectionDetail>)
    
    
        
}

export default CollectionMovie


const CollectionDetail=styled.div`

display:flex;
width:100%;
padding-top:100px;
min-height:92vh;
background:var(--color-background);
transition: all 0.3s linear;
justify-content: center;
        

.Table{
   
    width:90%;
    color:white;
    text-align:center;
    .titleCartCollection{
        display:flex;
        align-items:center;
        justify-content:center;
    .titleCartCollectionIcon{
            font-size:32px;
            margin-left:10px;
        }
    }
    .totalPrice{
    position: sticky;
    bottom:0;
     align-items:center;
     background-color:var(--color-white);
     display: grid;
     grid-template-columns:50% 50%;
     grid-template-rows: 44px  50px ;
     width:100%;
     color:black;  
     .promotionPrice{
        display:flex;
        grid-area: 1 / 2 / 1 / 2;
        align-items:center;
        .middle{
            flex:1;
        }
        .voucherPrice{
            display:flex;
            align-items:center;
            color: #888888;
            font-size: 16px;
            font-weight:500;
            line-height: 16.8px;
            .iconVoucher{
                font-size:20px ;
                margin-right:4px;
                color:#ee4d2d;
            }
        }
        .codeVoucherPrice{
            color: #888888;
            font-size: 16px;
            font-weight:500;
            margin:18px;
            cursor:pointer;
        }
     } 
     .MoviePrice{
        display:flex;
        grid-area: 2 / 2/ 2/ 2;
        align-items:center;

        .titleMoviePrice{
            
            margin-left:12px;
        }
        .salePrice{
            margin: 0px 2px 0px 2px;
            color:#ee4d2d;
            font-size:22px;
            flex:1;
            @media screen and (max-width:600px)
                {
                    
                    font-size:16px;
                   

                    
                }
        }
        .btnPrice{
            align-items:center;
            display:flex;
            background-color:#f05d40;
            border-radius:2px;
            box-shadow:#000000 0px 1px 1px 0px;
            color:#ffffff;
            
            padding:10px 30px;
         
            text-align:center;
            justify-content:center;
            margin-right:10px;
            margin-left:10px;
            font-size:16px;
            cursor:pointer;
            .iconBtnPrice{
                font-size:16px;
                margin-right:2px;
            }
            &:hover{
                opacity:0.7;
            }
            @media screen and (max-width:800px)
                {
                    flex-wrap: wrap;
                    font-size:14px;
                    padding:6px;
                }
            @media screen and (max-width:600px)
                {
                    flex-wrap: wrap;
                    font-size:12px;
                    padding:2px;

                    
                }
        }
     }

    }
    .TitleProduct{
        width:100%;
        h1{
           
            color:var(--color-white);
            
            font-size:32px;
            font-weight:700;
            line-height:56px;
            margin:0px 0px 10px;
            text-align:center;
        }
        p{
            color:var(--color-white); 
            margin:0px 0px 40px;
            text-align:center;
        }
    }
    .titleCollection{
        
        display:flex;
        flex-directionL:column;
        justify-content: center;
        align-items:center;
        background-color:var(--color-white);
        border-radius:2px;
        box-shadow:#000000 0px 1px 1px 0px;
        color:#000000;
        font-size:16px;
        line-height:16.8px;
        margin:0px 0px 15px 0px;
        width:100%;
        padding:10px 0px 10px 0px;
        .movieCollection{
        width:100px;
        
        margin:0px 15px 0px 10px;
        }
        .movieCollectionName
        {
            width:40%;
            color:#888888;
            font-size:14px;
            line-height: 16.8px;
        }
        .movieCollectionPrice
        {
            width:25%;
            color:#888888;ne-height: 16.8px;
            font-size:14px;
            line-height: 16.8px;
        }
        .movieCollectionDelete
        {
            color:#888888;
            font-size:14px;
            line-height: 16.8px;
        }
    </div>

    }
    .rowMovieCollection{
        display:flex;
        flex-directionL:column;
        justify-content: center;
        align-items:center;
        background-color:var(--color-white);
        border-radius:2px;
        box-shadow:#000000 0px 1px 1px 0px;
        color:#000000;
        font-size:16px;
        line-height:16.8px;
        margin:0px 0px 15px 0px;
        width:100%;
        padding:10px 0px 10px 0px;

     .imgCollection{
        position:relative;
        margin:0px 15px 0px 10px;
        img{
        height:100px;
        width:100px;     
        }
        
      }

     .nameCollection{
        width:40%;
     } 
     .priceCollection{
        width:25%
        
     } 
     .btnDelete{
        display:flex;
        cursor:pointer;
        
        font-size:18px;
        justify-content:center;
        align-items:center;
        border-width:1px;
        border-radius:24px;
        border-color:#000000;

        border-style: solid;
        padding: 10px 24px 10px 16px;
        
        &:hover{
           
                color:#ee4d2d;
            opacity:0.7;
        }
     } 
     }
}
`


