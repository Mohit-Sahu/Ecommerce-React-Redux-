import React, { Component } from 'react'

export default class Cart extends Component {
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
                    {cartItems.length !== 0 && (
                        <div className="cart">
                        <div className="total">
                            <div className="text-center mt-2">
                            Total: ₹.{"  "}
                            {cartItems.reduce((a,c)=>a+c.price*c.count,0)}
                            </div>
                            <button className="button primary">Proceed</button>
                        </div>
                       
                    </div>
                    )}
                    
                </div>
            
         </>
        )
    }
}
