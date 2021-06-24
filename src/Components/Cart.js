import React, { Component } from 'react'

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state={
        email :"",
        name :"",
        address : "",
    showCheckout: false,
};
      
 }
    HandleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }
    createOrder = (e)=>{
        e.preventDefault();
        const order = {
            name : this.state.name,
            email : this.state.email,
            address : this.state.address,
            cartItems : this.state.cartItems

        }
        this.props.createOrder(order);
    }
    render() {
    const { cartItems} = this.props;

        return (
            <>
               <div>
                {cartItems.length === 0 ? <div className="cart cart-header">Cart is Empty</div> 
                :<div className="cart cart-header">You have {cartItems.length} in the cart </div>
                }
                </div>
                
                <div className="mt-3">
                    <div className="cart mt-2">
                        <ul className="cart-item">
                            {cartItems.map(item=>(
                                <li key={item.id}>
                                    <div>
                                        <img src={item.image} alt={item.title}></img>
                                    </div>
                                    <div>
                                        {item.title}<br/>
                                    </div>
                                    <div>
                                    ₹.{item.price}x{item.count} {"       "}
                                    <button  classname="btn primary" onClick={()=>this.props.RemoveFromCart(item) }>Remove</button>

                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                    {cartItems.length !== 0 && (
                        <div className="cart">
                        <div className="total">
                            <div className="text-center mt-2">
                            Total: ₹.{"  "}
                            {cartItems.reduce((a,c)=>a+c.price*c.count,0)}
                            </div>
                            <button className="button primary" onClick={()=>{this.setState({showCheckout:true})}}>Proceed</button>
                        </div>
                       
                    </div>
                    )}
                    
                </div>
                {this.state.showCheckout  && (
                    <div className="cart">
                        <form onSubmit={this.createOrder}>
                           <ul className="form-container">
                               <li>
                                   <label>Email:</label>
                                   <input type="email" name="email" required onChange={this.HandleInput}></input>
                                   <label>Name:</label>
                                   <input type="text" name="name" required onChange={this.HandleInput}></input>
                                   <label>Address:</label>
                                   <input type="address" name="address" required onChange={this.HandleInput}></input>
                               </li>

                           </ul>
                            <button className="button primary" type="submit">Checkout</button>
                        </form>

                    </div>
                )  }
                </div>
            
         </>
        )
    }
}
