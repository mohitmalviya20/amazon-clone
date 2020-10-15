import { Button } from '@material-ui/core'
import React from 'react'
import "./css/Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer'
function Subtotal() {
    const [{basket}] = useStateValue() 
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                <>
                  <p>
               
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                  </small>
                </>
              )}
             decimalScale={2}
             value={getBasketTotal(basket)}
             displayType={"text"}
             thousandSeparator={true}
             prefix={"$"}
            
            />
           <Button className="product_button">Proceed to Checkout</Button>
        </div>
    )
}

export default Subtotal
