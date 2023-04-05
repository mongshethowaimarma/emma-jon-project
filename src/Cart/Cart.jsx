import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props;
    let total = 0;
    for (const product of cart){
        total = total + product.price;
    }

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: {total}</p>
            <p>Total shipping:</p>
            <p>Tax:</p>
            <h6>Grand total:</h6>
        </div>
    );
};

export default Cart;