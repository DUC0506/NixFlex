import React ,{useState}from "react";
import styled from 'styled-components';
import momo from'../../assets/images/momo.webp';
import visa from'../../assets/images/visa.webp';
import zalo from'../../assets/images/zalo.webp';
import { useNavigate } from 'react-router-dom';

function CheckoutMovies(props)
{
    const [value, setValue] = useState(1);
    
    const handleChange = (e) => {
        setValue(e.target.value);
      };
    const navigate= useNavigate();
    const payment= ()=>{
        navigate('/product');
    }

    return(
        <Checkout>
            
            <div className="checkout-contain">
                <div className="checkout-title">
                    <div className="title">Payment Methods</div>
                </div>
                <div className="checkout-wrap">
                <div className="checkout-pay">
                    <div className="checkout-pay-contain">
                        <div className="result-pay">
                            {/* <div className="result-pay-packet">
                            <p className="pay-term">Thời hạn gói siêu việt</p>
                            <div className="inputradio">
                                <div className="inputbody">
                                    <input className="radio0" type="radio" id="label0"></input>
                                    <label for="label0" className="des">1 Tháng</label>
                                </div>
                                <div className="totalprice">
                                    <p className="price" for="label0">199.000đ</p>
                                </div>
                            </div>
                            <div className="inputradio">
                                <div className="inputbody">
                                    <input className="radio0" type="radio" id="label1"></input>
                                    <label for="label1" className="des">3 Tháng</label>
                                </div>
                                <div className="totalprice">
                                    <p className="price" for="label1">99.000đ</p>
                                </div>
                            </div>
                            <div className="inputradio">
                                <div className="inputbody">
                                    <input className="radio0" type="radio" id="label2"></input>
                                    <label for="label2" className="des">6 Tháng</label>
                                </div>
                                <div className="totalprice">
                                    <p className="price" for="label2">99.000đ</p>
                                </div>
                            </div>
                            <div className="inputradio">
                                <div className="inputbody">
                                    <input className="radio0" type="radio" id="label3"></input>
                                    <label for="label3" className="des">12 Tháng</label>
                                </div>
                                <div className="totalprice">
                                    <p className="price" for="label3">99.000đ</p>
                                </div>
                            </div>
                            </div> */}
                            <div className="pay-info">
                                <div className="pay-info-header">
                                    <div className="pay-info-header-title">Billing Information</div>
                                </div>
                                <div className="pay-info-contain">
                                    <div className="pay-info-contain-price">
                                        <div className="pay-info-contain-price-label">Price</div>
                                        <div className="pay-info-contain-price-value">7$</div>
                                    </div>
                                    <div className="pay-info-contain-price">
                                        <div className="pay-info-contain-price-label">Discount</div>
                                        <div className="pay-info-contain-price-value">{value}</div>
                                    </div>
                                    <div className="pay-info-contain-total">
                                        <div className="pay-info-contain-total-label">Order Total:</div>
                                        <div className="pay-info-contain-total-value">{7-Number(value) }$</div>
                                    </div>
                                    <div className="pay-info-contain-vou">
                                        <div className="pay-info-contain-vou-label">Apply discount</div>
                                        <form action="#">
                                            <label for="lang"></label>
                                            <select value={value} onChange={handleChange}>
                                            <option className="pay-info-contain-vou-value" value={1}>Discount 1$ </option>
                                            <option className="pay-info-contain-vou-value"  value={2}>Discount 2$ </option>
                                            <option className="pay-info-contain-vou-value"  value={2.5}>Discount 2.5$ </option>
                                           </select>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="payment"></div>
                    </div>
                </div>
                <div className="checkout-method">
                <div className="checkout-method-title">
                    <p>Select a payment method</p>
                </div>
                <div className="method-tab">
                    <div className="momo-method">
                        <div className="momo-image">
                            <p> MoMo</p>
                            <img height="52" src={momo} alt=""></img>
                        </div>
                    </div>
                    <div className="momo-method active-tab">
                        <div className="momo-image">
                            <p>Visa</p>
                            <img height="52" src={visa} alt=""></img>
                        </div>
                    </div>
                    <div className="momo-method">
                        <div className="momo-image">
                            <p> ZaloPay</p>
                            <img height="52" src={zalo} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="pay-tab">
                    <div className="form-input">
                        <div className="form-body">
                            <input type="text" className="input-control" placeholder="Name on the Card"></input>
                            <input type="text" className="input-control" placeholder="Card number"></input>
                        </div>
                        <div className="title-card">
                            <div className="title-date">
                                <span>Expiration date</span>
                            </div>
                            <div className="title-cvv">
                                <span>Security code</span>
                            </div>
                            
                        </div>
                        <div className="input-card">
                            <input type="text" className="form-control left" placeholder="MM/YY"></input>
                            <input type="text" className="form-control right" placeholder="CVV"></input>
                        </div>
                        <div className="btn-pay" onClick={payment}>Payment</div>
                    </div>
                </div>
            </div>
            </div>
            
            </div>
            
        </Checkout>
    )
}
export default CheckoutMovies;
const Checkout = styled.div`


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
                    .inputradio{
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
                }
                .pay-info{
                    padding: 1.5rem;
                    background: #FFFFFF;
                
                    box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
                    border-radius: 1rem;

                    .pay-info-header{

                        .pay-info-header-title{
                            font-size: 1rem;
                            color: #1F2325;
                            font-weight: bold;
                            text-transform: uppercase;
                        }
                    }
                    .pay-info-contain{
                        .pay-info-contain-price{
                            display:flex;
                            min-height: 2rem;
                            justify-content: space-between;
                            margin-bottom: 0.5rem;
                            align-items: center;

                            .pay-info-contain-price-label{
                                color: #1F2325;
                                font-size: 1rem;
                            }
                            .pay-info-contain-price-value{
                            color: #404446;
                                font-size: 1rem;
                                font-weight: bold;
                                width: 50%;
                                text-align: end;
                            }
                        }
                        .pay-info-contain-total
                        {
                            display:flex;
                            min-height: 2rem;
                            justify-content: space-between;
                            margin-bottom: 0.5rem;
                            align-items: center;

                            .pay-info-contain-total-label{
                                color: #E3111F;
                                font-weight:700;

                            }
                            .pay-info-contain-total-value
                            {
                                color: #E3111F;
                                font-size:18px;
                                font-weight:700;
                                width: 50%;
                                text-align: end;
                            }
                        }
                        .pay-info-contain-vou{
                            
                            display:flex;
                            min-height: 2rem;
                            justify-content: space-between;
                            margin-bottom: 0.5rem;
                            align-items: center;
                            border-top:2px;
                            border-style :solid;
                            border-color:black;
                            cursor:pointer;
                            
                            .pay-info-contain-vou-label{
                                color: #1F2325;
                                font-size: 1rem;
                            }
                            .pay-info-contain-vou-value{
                                color: #0A75FF;
                                background-color: #E2F3FF;
                                padding: 0.25rem 0.5rem;
                                border-top: 1px solid #0A75FF;
                                border-bottom: 1px solid #0A75FF;
                            }
                        }
                        
                    }
                }
            }
        }
    }
}
.checkout-method{
    padding-right: 0px;
    z-index: 1;
    width: 55%;
    float: left;
    position: relative;
    

    .checkout-method-title{
        width:100%;
        p{
            font-size: 18px;
        font-weight: bold;
        margin: 0px 0px 20px;
        }
    }
    .method-tab{
       
        margin-bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        
        .momo-method{
            border-radius: 6px;
            cursor: pointer;
            box-shadow: rgb(164 165 167) 0px 0px 0px 1px;
            font-size: 18px;
            opacity: 1;
            margin-bottom: 10px;
            margin-right:10px;

            .momo-image{
                padding: 7px 0px 14px;
                text-align: center;
                color: black;
                margin: 0px 30px;
                box-sizing: border-box;
                flex: 0 0 25%;
                border-radius: 10px;
                width: 80px;
                background: white;

                p{
                    font-weight: bolder;
                    margin: 8px 0px;
                    font-size: 15px;
                 }
            }
        }
        .active-tab{
            box-shadow: #E3111F 0px 0px 0px 2px;
        }
    }
    .pay-tab{
        .form-input{
            .form-body{
                .input-control{
                    margin: 10px 0px 20px;
                    text-transform: uppercase;
                    width: 100%;
                    border: 1px solid rgba(17,17,17,0.3);
                    border-radius: 4px;
                    color: #333333;
                    padding: 20px 23px 8px 23px;
                    font-size: 16px;
                    line-height: 24px;
                    
                    box-sizing: border-box;
                }
            }
            .title-card{
                display:flex;
                .title-date{
                    width:50%;
                }
                .title-cvv{
                    width:50%;
                }
            }
            .input-card{
                display:flex;

                .form-control{
                                    
                    width: 100%;
                    border: 1px solid rgba(17,17,17,0.3);
                    border-radius: 4px;
                    color: #333333;
                    padding: 20px 23px 8px 23px;
                    font-size: 16px;
                    line-height: 24px;
                
                    box-sizing: border-box;

                }
                .left{
                    margin:10px 10px 0px 0px;
                }
                .right{
                    margin:10px 0px 0px 10px;
                }
            }
            .btn-pay{
                
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
        }
    }
}
}

`