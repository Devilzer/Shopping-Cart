import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor (){
        super();
        this.state={
            products :[
                {
                    title: 'Phone',
                    price:24999,
                    qty:5,
                    img:'',
                    id:1
                },
                {
                    title: 'Smart Watch',
                    price:4999,
                    qty:10,
                    img:'',
                    id:2
                },
                {
                    title: 'Laptop',
                    price:54999,
                    qty:1,
                    img:'',
                    id:3
                }
            ]
        }
    }
    render(){
        const {products} = this.state;
        return(
            <div className="cart">
               {products.map((product)=>{
                   return <CartItem 
                   product={product}
                    key={product.id}
                   />
               })}
            </div>
        )
    }
}

export default Cart;