import React from 'react';
import CartItem from './CartItem';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class Cart extends React.Component{
    constructor (){
        super();
        this.state={
            products :[],
            loading : true
        }
    }

// adding firebase databse
componentDidMount(){
    firebase
    .firestore()
    .collection('products')
    .onSnapshot((snapshot)=>{
        const products = snapshot.docs.map((doc)=>{
            const data = doc.data();
            data['id']= doc.id;
            return data;
        });

        this.setState({ 
            products,
            loading:false
        });
    });
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
        const {products,loading} = this.state;
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
               {loading && <h1>LOADING PRODUCTS ..........</h1>}
               <div id="footer">
                    <div>Total:- {this.getTotal()}</div>
               </div>
            </div>
        )
    }
}

export default Cart;