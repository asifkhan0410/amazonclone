import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image, title, price, rating, hideButton}) {
    const[{basket},dispatch]= useStateValue();
    const removeFromBasket =()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };
    return (
        <div className="checkout_product">
             <img className="checkout_productimage" src={image} alt=""/>
             <div className="checkout_productinfo">
                <p className="checkout_producttitle">{title}</p>
                <p className="checkout_productprice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout_productrating">
                   {Array(rating).fill().map(()=> (
                       <p>⭐</p>
                   )) }
                </div>
                {!hideButton && (
                <button onClick={removeFromBasket}>Remove from Cart</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
