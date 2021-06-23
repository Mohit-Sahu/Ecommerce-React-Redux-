
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
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
  render(){
  return (
    <div className="grid-container">
     
      <header>
        <a href="/">Goto home</a>
      </header>
      <main>
       <div className="content">
           <div className="main">
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
