import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props;
    let totalPrice = 0;
    let totalShippingPrice =0;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalShippingPrice = totalShippingPrice + product.shipping;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice+ totalShippingPrice+ tax;

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: {totalPrice}</p>
            <p>Total shipping:{totalShippingPrice}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <h6>Grand total: {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;