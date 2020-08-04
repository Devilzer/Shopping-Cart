import React from 'react';

class CartItem  extends React.Component{
    constructor ()
    {
        super();
        this.state={
            title: 'Phone',
            price : 999,
            qty: 1,
            img : ''
        }
    }
    render() {
        const {title,price, qty, img} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img id="image" />
                </div>
                <div className="right-block">
                    <div>{title}</div>
                    <div style={{color:'gray'}}>Rs {price}</div>
                    <div style={{color:'gray'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/929/929409.svg"/>
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/561/561240.svg"/>
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/812/812853.svg"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default CartItem;