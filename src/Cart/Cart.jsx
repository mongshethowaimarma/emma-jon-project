import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // const cart = props.cart;
    // const {cart} = props;
    let totalPrice = 0;
    let totalShippingPrice =0;
    let quantity= 0;
    for (const product of cart){
        // if(product.quantity === 0){
        //     product.quantity =1;
        // }
        // // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price + product.quantity;
        totalShippingPrice = totalShippingPrice + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice+ totalShippingPrice+ tax;

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${totalPrice}</p>
            <p>Total shipping:${totalShippingPrice}</p>
            <p>tax: ${tax.toFixed(2)}</p>
            <h6>Grand total: {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;