import React, { Component } from 'react'

import axios from 'axios'


export default class ProductsCoffee extends Component {
    constructor() {
        super();
        this.state = {
            product: [],
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/products?category=coffee')
            .then(result => {
                this.setState({
                    product: result.data.data,
                });
                console.log(result)
            }).catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className="row row-cols-2 row-cols-md-4 g-4 custom-product-row">
                {this.state.product.length === 0 ? <div>DATA NOT FOUND</div> :
                    this.state.product.map((product) => (
                        <div className="col custom-product-card-container">
                            <div className="card custom-product-card">
                                <div className="custom-card-img-container">
                                    <img key={product.picture} src={`http:localhost:8080${product.picture}`} className="card-img-top" alt={product.name} />

                                </div>
                                <div className="custom-product-promo">0%</div>
                                <div className="card-body custom-product-info">
                                    <h5 key={product.name} className="card-title custom-product-name">{product.name}</h5>
                                    <p key={product.price} className="card-text custom-product-price">IDR. {product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }
}
