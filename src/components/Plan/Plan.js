import React from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
function PlanMovies(props)
{
    const navigate= useNavigate();
    

   const handlepay=()=>{
    navigate('/checkout');
   }
    

    return(
        <Plan>
            
            <div className="checkout-contain">
                <div className="checkout-title">
                    <div className="title">Mova package</div>
                </div>
                <div className="checkout-wrap">
                <div className="checkout-pay">
                    <div className="checkout-pay-contain">
                        <div className="result-pay">
                            <div className="result-pay-packet">
                            <p className="pay-term">Package term</p>
                            <div className="inputradio">
                                <div className="inputbody">
                                    <input className="radio0" type="radio" id="label0"></input>
                                    <label for="label0" className="des">1 Month</label>
                                </div>
                                <div className="totalprice">
                                    <p className="price" for="label0">9$</p>
                                </div>
                            </div>
                            <div className="inputradio">
                                <div className="inputbody">
                                    <input className="radio0" type="radio" id="label1"></input>
                                    <label for="label1" className="des">3 Month</label>
                                </div>
                                <div className="totalprice">
                                    <p className="price" for="label1">19$</p>
                                </div>
                            </div>
                            <div className="inputradio">
                                <div className="inputbody">
                                    <input className="radio0" type="radio" id="label2"></input>
                                    <label for="label2" className="des">6 Month</label>
                                </div>
                                <div className="totalprice">
                                    <p className="price" for="label2">29$</p>
                                </div>
                            </div>
                            <div className="inputradio">
                                <div className="inputbody">
                                    <input className="radio0" type="radio" id="label3"></input>
                                    <label for="label3" className="des">12 Month</label>
                                </div>
                                <div className="totalprice">
                                    <p className="price" for="label3">39$</p>
                                </div>
                            </div>
                            <div className="btn-continue" onClick={handlepay}>Continue</div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </Plan>
                            
    )
}
export default PlanMovies;    
const Plan = styled.div`
.checkout-contain{
    background:white;
    min-height: 96vh;
    color: black;
    box-sizing: initial;
  

    .checkout-title{
        text-align: center;
        max-width: 1050px;
        margin: 0px auto;
       padding-top:100px;

        .title{
            font-size: 24px;
            font-weight: bold;
            margin: 8px 0px 16px;
        }
        }
    }
    .checkout-wrap{

        display:flex;
        justify-content:center;
        align-items:center;
        margin:0px 8%;
    .checkout-pay{
        animation: 1s ease 0s 1 normal none running fadeIn;
        display: block;
        max-width: 1210px;
        margin: 0px 24px 0px 0px;
        padding-bottom: 3rem;

        .checkout-pay-contain{
            display:flex;

            .result-pay{

                .result-pay-packet{
                    padding: 1.5rem;
                    margin: 0px auto 1.5rem;
                    border-radius: 6px;
                    box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px 0px;
                
                    .pay-term{
                        margin: 0px 0px 20px;
            
                        font-size: 18px;
                        font-weight: bold;
                    }
                    .btn-continue{
                        display: flex;
                width: 100%;
                margin: 25px 0px;
                background-color: #E3111F;
                cursor: pointer;
                color: #fff;
                white-space: nowrap;
                padding:10px 0px 10px 0px;
                justify-content:center;
                align-items:center;
                border-radius:10px;
                    }
                    .inputradio
                    {
                        animation: 0.7s ease 0s 1 normal none running fadeIn;
                        min-height: 40px;
                    
                        width: 100%;
                        font-size: 14px;
                        
                        display: inline-block;
                        position: relative;
                        cursor: pointer;
                        box-sizing: initial;
                     .inputbody{
                        display: inline-block;
                        width: 55%;

                        input{
                            width: 20px;
                            height: 20px;
                            z-index: 1;
                            left: -4px;
                            top: -1px;
                            position: absolute;
                            
                            cursor: pointer;
                        }
                        .des{
                            text-transform: capitalize;
                            cursor: pointer;
                            font-size: 16px;
                            font-weight: bold;
                            position: relative;
                            margin-left: 34px;
                            display: flex;
                            
                            align-items: center;
                        }
                    }
                    
                    .totalprice{
                        float: right;

                        p{
                            font-size: 18px;
                            text-align: right;
                            font-weight: bold;
                        }
                    }
                    
                }
                    `        