
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Filter from './Components/Filter';
import Header from './Components/Header';
import Products from './Components/Products';
import data from './data.json';




class App extends React.Component {
 
  constructor(){
    super();  
    this.state={
      products : data.products,
      size: "",
      sort: ""
    };
   
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
              <Products products={this.state.products}/>
           </div>
           <div className="sidebar">
             Sidebar
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
