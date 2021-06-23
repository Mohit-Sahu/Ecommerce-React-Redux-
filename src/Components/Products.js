import React, { Component } from 'react';

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map(products=>(
                        <li key={products.id}>
                            <div className="product">
                                <a href="#">
                                    <img src={products.image} alt={products.title}></img>
                                    <p>
                                        {products.title}
                                    </p>
                                </a>
                                <div className="product-price">
                                    <div>₹.{products.price}</div>
                                    <button className="button primary">Add to Cart</button>

                                </div>
                            </div>

                        </li>
                    ))

                    }

                </ul>
                
            </div>
        )
    }
}
