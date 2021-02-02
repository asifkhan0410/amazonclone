import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    const[{basket, user},dispatch]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad"
                src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt=""/>
                <div>
    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">Your Shopping basket</h2>            
                {basket.map(item => (
                <CheckoutProduct
                id={item.id}                
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}/>
                ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
