import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider.js";
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history= useHistory();
    const [{basket},dispatch]= useStateValue();
   
    return (
        <div className="subtotal">
           <CurrencyFormat 
           renderText={(value) => (
               <>
               <p>
           Subtotal( {basket?.length} items): <strong>{value}</strong>
               </p>
               <small className="subtotal_gift">
                   <input type="checkbox" />This order Contains a gift
               </small>
               </>
           )}
           decimalScale={2}
           value={getBasketTotal(basket)}
           displayType={"text"}
           thousandSeparator={true}
           prefix={"$"}
           /> 
           <button onClick={e => history.push('/payment')} className="">Proceed to CheckOut</button>
        </div>
    )
}

export default Subtotal
