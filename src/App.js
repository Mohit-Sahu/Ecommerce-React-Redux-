
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Cart from './Components/Cart';
import Filter from './Components/Filter';
import Header from './Components/Header';
import Products from './Components/Products';
import data from './data.json';




class App extends React.Component {
 
  constructor(){
    super();  
    this.state={
      products : data.products,
      cartItems: localStorage.getItem("cartItems ") ? JSON.parse(localStorage.getItem("cartItems")) : [],
      size: "",
      sort: ""
    };
   
  }
  createOrder=(order)=>{
    alert("need to save " + order.name)
  }
  RemoveFromCart=(product)=>{
    const cartItems= this.state.cartItems.slice();
    this.setState({
        cartItems: cartItems.filter((x)=>x.id !== product.id),
    });
    localStorage.setItem("cartItems",JSON.stringify(this.state.cartItems));


  }

  AddtoCart=(products)=>{
    const cartItems= this.state.cartItems.slice();
    let alreadyToCart=false;
    cartItems.forEach(item=>{
      if(item.id === products.id){
        item.count++;
        alreadyToCart = true;
      }
    });
    if(!alreadyToCart){
      cartItems.push({...products,count:1});
    }
    this.setState({cartItems});
    localStorage.setItem("cartItems",JSON.stringify(cartItems));

    
  }
  sortProduct=(event)=>{
    console.log(event.target.value);
    const sort =  event.target.value;
    this.setState((state)=>({
     sort : sort,
     products: this.state.products.slice().sort((a,b)=>
       sort === "lowest"
       ? a.price > b.price ? 1: -1
       :sort === "highest"
       ? a.price < b.price ? 1: -1
       : a.id < b.id ? 1:-1

     )
    
    }));
  };
  filterProduct=(event)=>{
    console.log(event.target.value);
    if(event.target.value === ""){
      this.setState({size: event.target.value,product:data.products});
    }
    else{
      this.setState({
        size: event.target.value,
       products : data.products.filter(
        (product) => product.availableSizes.indexOf(event.target.value) >= 0
       ),
      });
    }
  }
  render(){
  return (
    <div className="grid-container">
     
      <header>
        <a href="/">Goto home</a>
      </header>
      <main>
       <div className="content">
           <div className="main">
             <Filter count={this.state.products.length} 
             sort={this.state.sort}
             size={this.state.size}
             sortProduct={this.sortProduct}
             filterProduct={this.filterProduct}/>
              <Products products={this.state.products} AddtoCart={this.AddtoCart}/>
           </div>
           <div className="sidebar">
           <Cart cartItems={this.state.cartItems}  RemoveFromCart={this.RemoveFromCart}
           createOrder={this.createOrder}/>
           </div>

       </div>
      </main>
      <footer className="text-center">
        All right reserved.
      </footer>
     
    </div>
  );
  }
}

export default App;
