import React from 'react';

class CartItem  extends React.Component{
    render() {
        const {title,price, qty, img} = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img id="image" src={img} alt={title}/>
                </div>
                <div className="right-block">
                    <div>{title}</div>
                    <div style={{color:'gray'}}>Rs {price}</div>
                    <div style={{color:'gray'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/929/929409.svg" onClick={()=>{
                            this.props.onIncreaseQuantity(this.props.product);
                        }}/>
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/561/561240.svg" onClick={()=>{
                            this.props.onDecreaseQuantity(this.props.product);
                        }}/>
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/812/812853.svg" onClick={()=>{
                            this.props.onDeleteProduct(this.props.product.id);
                        }}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default CartItem;