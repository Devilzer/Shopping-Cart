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
        firebase
        .firestore()
        .collection('products')
        .doc(products[index].id)
        .update({ 
            qty : products[index].qty+1
        })
        .then(() =>{
            console.log("updated sucessfully");
        })
        .catch((err)=>{
            console.log("error"+err);
        });
        

    }

//Decrease quantity handler
    handleDecreaseQuantity = (product) => {
        const {products} = this.state;
        const index =products.indexOf(product);
        if(products[index].qty>=1){
        firebase
        .firestore()
        .collection('products')
        .doc(products[index].id)
        .update({ 
            qty : products[index].qty-1
        })
        .then(() =>{
            console.log("updated sucessfully");
        })
        .catch((err)=>{
            console.log("error"+err);
        });
        }
        else{
            return;
        }
    }

// delete Handeler
    handleDeleteProduct = (id) => {
        firebase
        .firestore()
        .collection('products')
        .doc(id)
        .delete()
        .then(() =>{
            console.log("product deleted sucessfully");
        })
        .catch((err)=>{
            console.log("error"+err);
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
                {loading && <h1>LOADING PRODUCTS ..........</h1>}
                <div id="products">
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
               <div id="footer">
                    <div>Total:- {this.getTotal()}</div>
               </div>
            </div>
        )
    }
}

export default Cart;