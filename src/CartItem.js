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
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () =>{
        // set state 1
        // this.setState({
        //     qty : this.state.qty+1
        // });

        // setstate 2
        this.setState((prevState)=>{
            return{
                qty : prevState.qty + 1
            }
        });
    }
    decreaseQuantity = ()=>{
        this.setState((prevState)=>{
            if(prevState.qty===1){
                return;
            }
            else{
                return{
                    qty : prevState.qty - 1
                }
            }
        });

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
                        <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/929/929409.svg" onClick={this.increaseQuantity}/>
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/561/561240.svg" onClick={this.decreaseQuantity}/>
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/812/812853.svg"/>
                    </div>
                </div>
            </div>
        )
    }
}
export default CartItem;