import React from "react";
import mova from'../../assets/images/mova.png';
import {MdSearch,MdOutlineCollections} from 'react-icons/md';
import gif from'../../assets/images/gif-bg.webp';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {BsCalendarCheck,BsGift} from 'react-icons/bs';
import styled from 'styled-components';
import { useScrollY } from '../hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {AiOutlineCaretDown,AiOutlineUser,AiOutlineShoppingCart,AiOutlineClose} from 'react-icons/ai'
import{GiUpgrade} from 'react-icons/gi'


const days=["Day 1",
"Day 2","Day 3","Day 4","Day 5","Day 6","Day 7","Day 8","Day 9","Day 10",

]

function Navbar(props)
{
    const[scrollY]= useScrollY();
    
    var num=0;

    const[keywords,setKeywords]=useState('')
    const navigate= useNavigate();

 const gifcheck = document.getElementById("gifcheck");
 //const gifimg=document.getElementsByClassName("check-body-day")
 const listNotify=document.getElementById("list-notify")
 
 const imgvou=document.getElementById("check-week-day-vou-img")
 
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
const handlecheck =()=>{
    if(gifcheck.style !== null)    
    gifcheck.style.display = 'flex';
   
    

}
const handleclose=()=>{

    gifcheck.style.display = 'none';
    }

const handleimg=()=>{
    console.log(num)
    imgvou.src="https://assets.glxplay.io/static/files/day-active_1673957326716.png"

}
const handlenotify =()=>{
    if(listNotify.classList.contains("showsuccess"))
    {
    listNotify.classList.remove("showsuccess")
    listNotify.classList.add("hidesuccess")
    
    }
    else
    {
    listNotify.classList.remove("hidesuccess")
    listNotify.classList.add("showsuccess")
    }
   
}

const handlepay=()=>{
    navigate('/checkout');
    listNotify.classList.remove("showsuccess")
    listNotify.classList.add("hidesuccess")
}
const handleupgrade=()=>{
    navigate('/plan');
}

    

    return(
        <Navigation style={scrollY < 50 ?{backgroundColor:'var(--color-background)'}:{backgroundColor:'var(--color-background)'}}>
        <div className='navContainer'>
           
            <div className='logo' onClick={goHome}>
                <img src={mova} alt=""></img>
            </div>
            <div className='middle'>
                <div className='middle-home' onClick={goHome}>Home</div>
                <div className='middle-home'>Explore</div>
                <div className='middle-home' onClick={handleProduct}>My List</div>
                
            </div>
            
            <div className='navSearch'>
            <MdSearch className='iconSearch'></MdSearch>
            <input
            onChange={handleChangeInput}
            value={keywords}
            type="text" placeholder='Input title, genres, people'/>
            </div>
            <div className='iconCart-vs1' onClick={handlename}><AiOutlineShoppingCart /></div>
            <div className='iconCart-vs1 game' onClick={handlenotify} ><IoMdNotificationsOutline /></div>
            <ul className="listNotify hidesuccess " id="list-notify" >
                
                <li className="itemNotify">
                    <BsGift className="icon"/>
                    <div className="intemNotify-title" onClick={handlepay}>
                        <h3>Daily Check-in gifts</h3>
                        <p>Congratulations on receiving a 1$ Voucher to buy any package when paying on the Web</p>

                    </div>
                </li>
                <li className="itemNotify">
                    <BsGift className="icon"/>
                    <div className="intemNotify-title" onClick={handlepay}>
                        <h3>Daily Check-in gifts</h3>
                        <p>Congratulations on receiving a 2$ Voucher to buy any package when paying on the Web</p>

                    </div>
                </li>
                <li className="itemNotify">
                    <BsGift className="icon"/>
                    <div className="intemNotify-title" onClick={handlepay}>
                        <h3>Daily Check-in gifts</h3>
                        <p>Congratulations on receiving a 2.5$ Voucher to buy any package when paying on the Web</p>

                    </div>
                </li>
            </ul>
            <div className='iconCart-vs1 checkin' onClick={handlecheck}  ><BsCalendarCheck /></div>
            <div className="gif hidesuccess " id="gifcheck">
                <div className="gif-contain">
                    <img src={gif} alt="" ></img>
                
                <div className="gif-close" onClick={handleclose}><AiOutlineClose/></div>
                <div className="gif-check">
                    <div className="gif-check-day">

                        <div className="check-body">
                        {
                        days && days.length >0 && days.map((day,index) =>{
                            return(
                                <div className="check-body-day" key={num=index} >
                                   <div className="check-week" onClick={handleimg}>
                                    
                                        <img className="check-week-day-vou" id="check-week-day-vou-img" src="https://assets.glxplay.io/static/files/day-inactive_1673957326871.png" alt=""></img>
                                        
                                        <div className="check-week-day-title">{day}</div>
                                    
                                    </div>
                                
                                </div>
                            )
                        })}
                            
                            {/* <div className="check-body-day">
                                <div className="check-week" onClick={handleimg}>
                                    
                                <img className="check-week-day-vou" id="check-week-day-vou-img" src="https://assets.glxplay.io/static/files/day-inactive_1673957326871.png" alt=""></img>
                                        
                                        <div className="check-week-day-title">Ngày 2</div>
                                    
                                </div>
                                
                            </div>
                            <div className="check-body-day">
                                <div className="check-week" onClick={handleimg}>
                                    
                                        
                                <img className="check-week-day-vou" id="check-week-day-vou-img" src="https://assets.glxplay.io/static/files/day-inactive_1673957326871.png" alt=""></img>
                                        
                                        <div className="check-week-day-title">Ngày 2</div>
                                    
                                </div>
                                
                            </div>
                            <div className="check-body-day">
                                <div className="check-week" onClick={handleimg}>
                                    
                                        
                                <img className="check-week-day-vou" id="check-week-day-vou-img" src="https://assets.glxplay.io/static/files/day-inactive_1673957326871.png" alt=""></img>
                                       
                                        <div className="check-week-day-title">Ngày 3</div>
                                    
                                </div>
                                
                            </div>
                            <div className="check-body-day">
                                <div className="check-week" onClick={handleimg}>
                                    
                                        
                                <img className="check-week-day-vou" id="check-week-day-vou-img" src="https://assets.glxplay.io/static/files/day-inactive_1673957326871.png" alt=""></img>
                                        
                                        <div className="check-week-day-title">Ngày 4</div>
                                    
                                </div>
                                
                            </div>
                            <div className="check-body-day">
                                <div className="check-week" onClick={handleimg}>
                                    
                                        
                                <img className="check-week-day-vou" id="check-week-day-vou-img" src="https://assets.glxplay.io/static/files/day-inactive_1673957326871.png" alt=""></img>
                                       
                                        <div className="check-week-day-title">Ngày 5</div>
                                    
                                </div>
                                
                            </div>
                            <div className="check-body-day">
                                <div className="check-week" onClick={handleimg}>
                                    
                                        
                                <img className="check-week-day-vou" id="check-week-day-vou-img" src="https://assets.glxplay.io/static/files/day-inactive_1673957326871.png" alt=""></img>
                                        
                                        <div className="check-week-day-title">Ngày 6</div>
                                    
                                </div>
                                
                            </div>
                            <div className="check-body-day">
                                <div className="check-week" onClick={handleimg}>
                                    
                                        
                                <img className="check-week-day-vou" id="check-week-day-vou-img" src="https://assets.glxplay.io/static/files/day-inactive_1673957326871.png" alt=""></img>
                                        
                                        <div className="check-week-day-title">Ngày 7</div>
                                    
                                </div>
                                
                            </div>
                            <div className="check-body-day">
                                <div className="check-week" onClick={handleimg}>
                                    
                                        
                                <img className="check-week-day-vou" id="check-week-day-vou-img" src="https://assets.glxplay.io/static/files/day-inactive_1673957326871.png" alt=""></img>
                                        
                                        <div className="check-week-day-title">Ngày 9</div>
                                    
                                </div>
                                
                            </div>
                            <div className="check-body-day">
                                <div className="check-week" onClick={handleimg}>
                                    
                                       
                                <img className="check-week-day-vou" id="check-week-day-vou-img"  src="https://assets.glxplay.io/static/files/day-inactive_1673957326871.png" alt=""></img>
                                        
                                        <div className="check-week-day-title">Ngày 10</div>
                                    
                                </div>
                                
                            </div> */}
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>


            {/* <div className='namerandom' onClick={handlename}>Bam vao day</div>
            <div className='myProduct' onClick={handleProduct}>My Product</div> */}
            
            <div className='profileUser'>
                
                <div className='imgProfile'>
                    <img src='https://assets.glxplay.io/static/avatars/Avatar%20Profile-06.png' alt=''/>
                    <div><AiOutlineCaretDown className='iconProfile'/> </div>
                 </div>
                <ul className='itemProfile'>
                    <li className='itemProfileUser'> <AiOutlineUser className='iconUser'/>Profile </li>
                    <li><div className='btnCart' onClick={handlename} ><AiOutlineShoppingCart className='iconCart'/>My Cart</div></li>
                    <li><div className='btnCollection' onClick={handleProduct}><MdOutlineCollections className='iconCollection'/> My List</div></li>
                    <li><div className='btnCart btnUpgrade' onClick={handleupgrade} ><GiUpgrade className='iconCart'/>Upgrade</div></li>
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

@media screen and (max-width:600px)
    {
       
        height:40px;
    }

.navContainer
{
    background-color:transparent;
    display: flex;
    justify-content:space-around;
    align-items: center;
    flex-direction:row;
    position:relative;
    height:100%;
    .iconCart-vs1{
        position:absolute;
        display:flex;
        align-items:center;
        margin-right:2%;
        font-size:22px;
        margin-top:10px;
        right:6%;
        
        cursor: pointer;
        
        color:#bbb;
        
    }
    .game{
        right:8%;

       
    }
    .listNotify{
        position:absolute;
        width:400px;
       
        position:absolute;
        right:4%;
        color:var(--color-white);
        top:88px;
        margin-right:6%;
        background-color:var( --color-background);
        list-style: none;
        cursor:pointer;
        border-radius:8px;

           &:after{
            content:"";
            position:absolute;
            
            right:-20px;
            top:-32px;
            width: 200px;
            height: 40px;
            background-color:red;
            opacity:0;
            
            
            
            
          }
        .itemNotify{
            display:flex;
            align-items:center;
            justify-content:center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);  
            padding:10px 0px;

            &:hover{
                background-color:#404446;
            }
           
            .icon{
                display:flex;
                font-size:40px;
                color:#E3111F;
                align-items:center;
                justify-content:center;
                margin:0px 10px;
            }
            .intemNotify-title{

                h3{
                    font-size: 1rem;
                    font-weight: bold;
                    color: rgb(255, 255, 255);
                    margin-bottom: 0.5rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                p{
                    font-size: 0.875rem;
                    color: rgb(255, 255, 255);
                    margin-bottom: 0.5rem;
                
                    overflow: hidden;
                    
                    line-height: 1rem;
                    max-height: 2rem;
                }
            }
        }

    }
    .checkin{
        right:10%;
    }
    .showsuccess{
        display:block;
    }
    .hidesuccess{
        display:none;
    }
    .gif{
        position: fixed;
        z-index: 9999;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.7);
        top: 0px;
        left: 0px;
        padding: 0px 1rem;
        
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;

        .gif-contain{
            
            position: relative;
            border-radius: 0.5rem;

            img{
                position: absolute;
                width:100%;
                height:100%;
                left: 0px;
                top: 0px;
                border-radius: 0.5rem;
                object-fit: cover;
                object-position: center center;
            }
        }
        .gif-close{
            position: absolute;
            cursor: pointer;
            top: 0.75rem;
            right: 0.75rem;
            z-index: 9999;
        }
        .gif-check{
            max-height: 100%;
            overflow: auto;
            width: 57.0625rem;
            height: 46.4375rem;
            max-width: 100%;
            padding: 2rem 0px 2.5rem;
            box-sizing: border-box;

            .gif-check-day{
                display: flex;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: center;
                justify-content: center;
                padding: 0px 4.3125rem 0px 4rem;
                position: relative;
                z-index: 1;

                .check-body{
                    display: flex;
                    align-items: flex-start;
                    flex-wrap: wrap;
                    margin: 0px -0.5rem;
                    -webkit-box-flex: 1;
                    flex-grow: 1;

                    .check-body-day{

                        width: 20%;
                        padding: 0px 0.5rem 1rem;

                        .check-week{
                            position: relative;
                            padding-top: 150%;
                            background: rgb(51, 51, 51);

                            .check-week-day-vou{
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                top: 0px;
                                left: 0px;
                            }
                            .check-week-day-gif{
                                position: absolute;
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                                top: 0px;
                                left: 0px;
                            }
                            .check-week-day-title{
                                    font-size: 1rem;
                                    font-weight: bold;
                                    position: absolute;
                                    bottom: 0.25rem;
                                    color: rgb(255, 255, 255);
                                    text-align: center;
                                    left: 50%;
                                    transform: translateX(-50%);
                                    white-space: nowrap;
                            }
                        }
                    }
                }
            }
}
        }
    }
    @media screen and (max-width:600px)
    {
        flex-direction:column;
        
    }
    .middle{
        flex:1;
        font-size:18px;
        display:flex;
        position:relative;
        margin:16px 0px 12px 50px;
        align-items: center;
        color:var(--color-white);
        @media screen and (max-width:1024px)
        {
          display:none;
        }
        .middle-home{
            display:flex;
            
            justify-content:center;
            text-transform:capitalize;
            align-items: center;
            color:var(--color-white);
            margin:0px 14px;
            cursor:pointer;
            &:hover .icon-home {
                opacity:0.7;
            }
            &:hover {
                opacity:0.7;
            }
            .icon-home{
               color:var(--color-white);
               margin-right:2px;
               
            }
        }
        
    }
    .profileUser{
        position:absolute;
        right:2%;
        color:var(--color-white);
        margin-top:8px;
        margin-right:2%;

        &:hover .itemProfile
            {
                display:block;
            }
        
        .imgProfile{
            display:flex;
            align-items:center; 
            width:32px;
            height:32px;
            border-radius:50%;
            border:1px;
            
            cursor:pointer;
            
            
            
            img{
                width:100%;
                height:100%;
                border-radius:50%;
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
            .btnUpgrade{
                border-top: 1px ;
                border-style:solid;
                border-color:white;
                color:#E3111F;
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
         padding-right:22px;
         position: absolute;
         right:13%;
        
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