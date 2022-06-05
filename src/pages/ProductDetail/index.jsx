import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import './ProductDetail.css'
import withParams from '../../Helper/withParams'

// import img
import ColdBrew from "../../assets/img/coldbrew.png"
import axios from 'axios'

class ProductDetail extends Component {
    constructor() {
        super();
        this.state = {
            product: [],
        }
    }

    componentDidMount() {
        const { params } = this.props
        console.log(`props ${params}`)
        axios
            .get(`http://localhost:8080/products/${params.id}`)
            .then(result => {
                console.log(this.state.product)
                this.setState({
                    product: result.data.data[0],
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <Header />
                <section className="pd-main-container">
                    <div className="pd-title-menu">{`${this.state.product.category}   `}<span>{`>  ${this.state.product.name}`}</span></div>
                    <section className="pd-main-content">
                        <div className="pd-left-content">
                            <div className="pd-main-img-container">
                                <img src={`http://localhost:8080${this.state.product.picture}`} alt="coldbrew" className="pd-main-img" />
                            </div>
                            <div className="pd-main-product-name">
                                <h2>{this.state.product.name}</h2>
                                <p>IDR. {this.state.product.price}</p>
                            </div>
                            <div className="pd-addcart-button">Add to Cart</div>
                            <div className="pd-askstaff-button">Ask a Staff</div>
                        </div>
                        <div className="pd-right-content">
                            <div className="pd-desc-card">
                                <div className="pd-desc-delivery">
                                    <p>Delivery only on <span>Monday to friday</span>  at <span>1 - 7 pm</span> </p>
                                </div>
                                <div className="pd-desc-info">
                                    <p>
                                        {this.state.product.description}
                                    </p>
                                </div>
                                <div className="pd-choose-size">
                                    <h4 className="pd-size-title">Choose a size</h4>
                                    <div className="pd-size-container">
                                        <label className="pd-size-vector">R
                                            <input type="radio" className='pd-size-input' name='pd-size-input' /><span className='pd-size-checkmark'></span>
                                        </label>
                                        <label className="pd-size-vector">L
                                            <input type="radio" className='pd-size-input' name='pd-size-input' /><span className='pd-size-checkmark'></span>
                                        </label>
                                        <label className="pd-size-vector">XL
                                            <input type="radio" className='pd-size-input' name='pd-size-input' /><span className='pd-size-checkmark'></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="pd-delivery-container">
                                <h4 className="pd-delivery-title">Choose Delivery Methods</h4>
                                <div className="pd-delivery-button">
                                    {/* <label className="radio-container">Dine in
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-container">Door Delivery
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-container">Pick up
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label> */}
                                    <div className="pd-delivery-dinein-button">Dine in</div>
                                    <div className="pd-delivery-door-button">Door Delivery</div>
                                    <div className="pd-delivery-pickup-button">Pick up</div>
                                </div>
                                <form className="pd-settime">
                                    <label htmlFor="settime">Set time:</label>
                                    <input type="text" name="settime" id="settime" placeholder="Enter the time you'll arrived" />
                                </form>
                            </div>
                        </div>
                    </section>
                    <section className="pd-checkout-container">
                        <div className="pd-product-checkout">
                            <div className="pd-checkout-img">
                                <img src={ColdBrew} alt="coldbrew" className='pd-check-out-img' />
                            </div>
                            <div className="pd-checkout-info">
                                <h4 className="pd-checkout-name">COLD BREW</h4>
                                <div className="pd-checkout-details">
                                    <p>x1 (Large)</p>
                                    <p>x1 (Regular)</p>
                                </div>
                            </div>
                            <div className="pd-checkout-quantity">
                                <div className="pd-minus-button">-</div>
                                <div className="pd-quantity">2</div>
                                <div className="pd-plus-button">+</div>
                            </div>
                        </div>
                        <div className="pd-checkout-button">CHECKOUT</div>
                    </section>

                </section>
                <Footer />
            </div>
        )
    }
}

export default withParams(ProductDetail)