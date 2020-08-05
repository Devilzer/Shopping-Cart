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
//Increase quantity handler
    handleIncreaseQuantity = (product)=>{
        const {products} = this.state;
        const index =products.indexOf(product);
        products[index].qty+= 1;
         this.setState({
            products : products
         });
    }

//Decrease quantity handler
    handleDecreaseQuantity = (product) => {
        const {products} = this.state;
        const index =products.indexOf(product);
        if(products[index].qty>=1){
        products[index].qty-= 1;
        this.setState({
            products : products
         });
        }
        else{
            return;
        }
    }

// delete Handeler
    handleDeleteProduct = (id) => {
        const {products} = this.state;
        const items = products.filter((item)=> item.id!==id);

        this.setState({
            products : items
        });
    }


    render(){
        const {products} = this.state;
        return(
            <div className="cart">
               {products.map((product)=>{
                   return <CartItem 
                   product={product}
                    key={product.id}
                    onIncreaseQuantity ={this.handleIncreaseQuantity}
                    onDecreaseQuantity ={this.handleDecreaseQuantity}
                    onDeleteProduct = {this.handleDeleteProduct}
                   />
               })}
            </div>
        )
    }
}

export default Cart;