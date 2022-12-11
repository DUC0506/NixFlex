
import logo from'../../assets/images/logo (1).png';
import {MdSearch,MdOutlineCollections} from 'react-icons/md';
import styled from 'styled-components';
import { useScrollY } from '../hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {AiOutlineCaretDown,AiOutlineUser,AiOutlineShoppingCart} from 'react-icons/ai'

function Navbar(props)
{
    const[scrollY]= useScrollY();
    

    const[keywords,setKeywords]=useState('')
    const navigate= useNavigate();
const handleChangeInput=(e)=>{
  let keywords=e.target.value;
  setKeywords(keywords);
//   if(keywords.length>0)
//   {
//     navigate(`/search?keywords=${keywords.trim()}`)
//   }
//   else{
//     navigate(`/`);
//   }
(keywords.length>0)
     ? navigate(`/search?keywords=${keywords.trim()}`)
     :navigate(`/`);
  }
const goHome =()=>{
    navigate('/');
    setKeywords('');
}
const handlename=()=>
{
    navigate('/cart');
}
const handleProduct=()=>
{
    navigate('/product');
}

    return(
        <Navigation style={scrollY < 50 ?{backgroundColor:'transparent'}:{backgroundColor:'var(--color-background)'}}>
        <div className='navContainer'>
           
            <div className='logo' onClick={goHome}>
                <img src={logo} alt=""></img>
            </div>
            <div className='navSearch'>
            <MdSearch className='iconSearch'></MdSearch>
            <input
            onChange={handleChangeInput}
            value={keywords}
            type="text" placeholder='Input title, genres, people'/>
            </div>
            {/* <div className='namerandom' onClick={handlename}>Bam vao day</div>
            <div className='myProduct' onClick={handleProduct}>My Product</div> */}
            <div className='middle'></div>
            <div className='profileUser'>
                <div className='imgProfile'>
                    <img src='https://img.freepik.com/free-icon/pikachu_318-196537.jpg' alt=''/>
                    <div><AiOutlineCaretDown className='iconProfile'/> </div>
                 </div>
                <ul className='itemProfile'>
                    <li className='itemProfileUser'> <AiOutlineUser className='iconUser'/>Tài khoản </li>
                    <li><div className='btnCart' onClick={handlename} ><AiOutlineShoppingCart className='iconCart'/>   Giỏ hàng</div></li>
                    <li><div className='btnCollection' onClick={handleProduct}><MdOutlineCollections className='iconCollection'/> Bộ sưu tập</div></li>
                </ul>
            </div>
           
        </div>
        </Navigation>
    )
}

export default Navbar;


const Navigation= styled.div`
width:100%;
height:80px;
position:fixed;
top:0;
transition-timing-function: ease-in;
transition: all 1s;
z-index:10;

@media only screen and(max-width:600px)
    {
       
        height:100px;
    }

.navContainer
{
    background-color:transparent;
    display: flex;
    align-items: center;
    flex-direction:row;
    justify-content: flex-start;
    height:100%
    
    @media only screen and(max-width:600px)
    {
        flex-direction:column;
        
    }
    .middle{
        flex:1;
        
    }
    .profileUser{
        position:relative;
        color:var(--color-white);
        margin-top:20px;
        margin-right:40px;

        &:hover .itemProfile
            {
                display:block;
            }
        
        .imgProfile{
            display:flex;
            align-items:center; 
            width:40px;
            height:40px;
            border-radius:50%;
            border:1px;
            border-style:solid;
            border-color:white;
            cursor:pointer;
            
            
            
            img{
                width:100%;
                height:100%;
                
            }
            .iconProfile{
                
                color:#ffffff;
                font-size:14px;
                margin-left:4px;
            }
        }
        .itemProfile{
            position:absolute;
            list-style: none;
            width:100px;
            background-color:#000000;
            color:#ffffff;
            font-size:13px;
            right:8px;
            margin-top:20px;
            width:140px;    
            opacity:0.7;
            border-radius:4px;
            cursor:pointer;
            display:none;
            transition:all 0.3s ease;
            &:before{
                content:"";
                position:absolute;
                
                right:10px;
                top:-10px;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0 10px 10px 10px;
                border-color: transparent transparent white transparent;
                
            }
            &:after{
                content:"";
                position:absolute;
                
                right:-20px;
                top:-22px;
                width: 120px;
                height: 30px;
                background-color:red;
                opacity:0;
                
                
                
            }
            .itemProfileUser{
                display:flex;
                align-items:center;
                padding:12px;
                border-bottom: 1px ;
                border-style:solid;
                border-color:white;
                transition:all 0.3s ease;
                .iconUser{
                    font-size:18px;
                    margin-right:4px;
                }
                &:hover{
                    background-color:rgba(0,0,0,0.5);
                    color:var(--color-white);
                    
                }
            }
            .btnCart{
                display:flex;
                align-items:center;
                padding:12px;
                border-bottom: 1px ;
                border-style:solid;
                border-color:white; 
                .iconCart{
                    font-size:18px;
                    margin-right:4px;
                }
                &:hover{
                    background-color:rgba(0,0,0,0.5);
                    color:var(--color-white);
                    
                }
            }
            .btnCollection{
                display:flex;
                align-items:center;
                padding:12px;
                margin-bottom:10px;
                .iconCollection{
                    font-size:18px;
                    margin-right:4px;
                }
                &:hover{
                    background-color:rgba(0,0,0,0.5);
                    color:var(--color-white);
                    
                }
                
            }

        }
    }
    .namerandom{
        color:var(--color-white);
        cursor:pointer;
    }
    .myProduct{
        color:var(--color-white);
        cursor:pointer;
    }
    .logo
    {
        width:120px;
        cursor:pointer;
        margin-left:12px;
        img
        {
            width:100%;
        }
        
        padding-top:10px;
        
    }
    .navSearch
    {
         color: var(--color-white);
         padding-right:20px;
         display:flex;
         justify-content:flex-end;
        padding-top:10px;
         &:hover .iconSearch
         {
            color:var(--color-white);
         }
         .iconSearch
         {
            width:20px;
            height:20px;
            cursor: pointer;
            transform: translateX(24px) translateY(10px);
            color:#bbb;
         }
         input
         {
            font-size:14px;
            border:1px solid #fff;
            color: var(--color-white);
            outline:none;
            padding:10px;
            width:0;
            cursor:pointer;
            opacity:0;
            background:var(--color-background);
              transition: width 0.5s;
            &:focus
            {
                padding-left:26px;
                width:300px;
                cursor:text;
                opacity:1;
                border-radius:4px;
            }

         }
    }
}
`;