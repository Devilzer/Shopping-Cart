import React from 'react';
import CartItem from './CartItem';
import Navbar from './Navbar';

class Cart extends React.Component{
    constructor (){
        super();
        this.state={
            products :[
                {
                    title: 'Phone',
                    price:24999,
                    qty:5,
                    img:'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    id:1
                },
                {
                    title: 'Smart Watch',
                    price:4999,
                    qty:10,
                    img:'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    id:2
                },
                {
                    title: 'Laptop',
                    price:54999,
                    qty:1,
                    img:'https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
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
        console.log(this.state.products.length);
        const items = products.filter((item)=> item.id!==id);

        this.setState({
            products : items
        });
    }
// function to get  cart quantity 
    getCartQuantity = () => {
        const {products} = this.state;
        let count =0;
        products.forEach((item)=>{
            count += item.qty;
        })
        return count;
    }
// function to get to price
    getTotal = ()=>{
        const{products}= this.state;
        let total = 0;
        products.forEach((item)=>{
            total += item.price*item.qty;
        })
        return total;

    }

    render(){
        const {products} = this.state;
        const len = this.state.products.length;
        return(
            <div className="cart">
                <Navbar qty={this.getCartQuantity()}/>
               {products.map((product)=>{
                   return <CartItem 
                   product={product}
                    key={product.id}
                    onIncreaseQuantity ={this.handleIncreaseQuantity}
                    onDecreaseQuantity ={this.handleDecreaseQuantity}
                    onDeleteProduct = {this.handleDeleteProduct}
                   />
               })}
               <div id="footer">
                    <div>Total:- {this.getTotal()}</div>
               </div>
            </div>
        )
    }
}

export default Cart;