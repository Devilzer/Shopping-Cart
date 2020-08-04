import React from 'react';

class CartItem  extends React.Component{
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img id="image" />
                </div>
                <div className="left-block">
                    <div>Name</div>
                    <div style={{color:'gray'}}>rs 9999</div>
                    <div style={{color:'gray'}}>Qty: 1</div>
                    <div className="cart-item-actions">

                    </div>
                </div>
            </div>
        )
    }
}
export default CartItem;