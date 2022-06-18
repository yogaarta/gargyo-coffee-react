import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import axios from 'axios'

import "./Payment.css"

// import img
// import Hazelnut from "../../assets/img/hazelnutlatte.png"
import Card from "../../assets/img/card.png"
import Bank from "../../assets/img/bank.png"
import Cod from "../../assets/img/cod.png"
import { connect } from 'react-redux'
import { currencyFormatter } from '../../Helper/formater'
import { resetCartAction } from '../../redux/actionCreator/addToCart'
import { Navigate } from 'react-router-dom'

class Payment extends Component {
    constructor() {
        super();
        this.state = {
            product: [],
            payment: "",
            isSuccess: false,
            pageActive: "cart"
        }
    }

    confirmAndPay = () => {
        const { counter, addToCart: { delivery, productId }, id } = this.props
        const product_id = productId
        const total_price = (this.state.product.price * counter) + (this.state.product.price * counter * 10 / 100) + (delivery === "Door Delivery" ? 10000 : 0)
        const quantity = counter
        const user_id = id
        const payment_method = this.state.payment
        const delivery_method = delivery

        const { token } = this.props.userInfo
        const config = { headers: { Authorization: `Bearer ${token}` } }

        const body = { product_id, total_price, quantity, user_id, payment_method, delivery_method }
        axios
            .post(`${process.env.REACT_APP_BE_HOST}/transactions`, body, config)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
        // dispatch(resetCartAction())
    }

    componentDidMount() {
        document.title = "Payment"
        window.scroll(0, 0)
        const { addToCart: { productId, delivery, size } } = this.props
        if (delivery !== "" && size !== "") {
            axios
                .get(`${process.env.REACT_APP_BE_HOST}/products/${productId}`)
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
    }
    render() {
        const { counter, addToCart: { size, delivery }, address, mobile_number, display_name, email } = this.props
        if (this.state.isSuccess === true) {
            return <Navigate to="/product" />
        }
        return (
            <div>
                <Header pageActive={this.state.pageActive} />
                <main className="pm-main-container">
                    <div className="pm-title">Checkout your item now!</div>
                    <section className="pm-main-content">
                        {delivery !== "" && size !== "" ?
                            <section className="pm-left-content">
                                <div className="pm-order-summary">Order Summary</div>
                                <div className="pm-all-order">
                                    <div className="pm-order-item">
                                        <div className="pm-item-img"><img src={`${process.env.REACT_APP_BE_HOST}${this.state.product.picture}`} alt="product-info" className="pm-product-img" /></div>
                                        <div className="pm-item-detail">
                                            <p>{this.state.product.name}</p>
                                            <p>x{counter}</p>
                                            <p>{size}</p>
                                        </div>
                                        <div className="pm-item-price">{currencyFormatter.format(this.state.product.price)}</div>
                                    </div>
                                    {/* <div className="pm-order-item">
                                    <div className="pm-item-img"><img src={Hazelnut} alt="" className="pm-product-img" /></div>
                                    <div className="pm-item-detail">
                                        <p>Hazelnut Latte</p>
                                        <p>x 1</p>
                                        <p>Regular</p>
                                    </div>
                                    <div className="pm-item-price">IDR 24.0</div>
                                </div> */}

                                </div>
                                <div className="pm-border"></div>
                                <div className="pm-all-order-info">
                                    <div className="pm-subtotal">
                                        <div className="pm-info">SUBTOTAL</div>
                                        <div className="pm-price">{currencyFormatter.format(this.state.product.price * counter)}</div>
                                    </div>
                                    <div className="pm-tax">
                                        <div className="pm-info">TAX {'&'} FEES</div>
                                        <div className="pm-price">{currencyFormatter.format(this.state.product.price * counter * 10 / 100)}</div>
                                    </div>
                                    <div className="pm-shipping">
                                        <div className="pm-info">SHIPPING</div>
                                        <div className="pm-price">{currencyFormatter.format(delivery === "Door Delivery" ? 10000 : 0)}</div>
                                    </div>
                                </div>
                                <div className="pm-total-order-price">
                                    <div className="pm-total-info-title">TOTAL</div>
                                    <div className="pm-total-info-price">
                                        {currencyFormatter.format((this.state.product.price * counter) + (this.state.product.price * counter * 10 / 100) + (delivery === "Door Delivery" ? 10000 : 0))}
                                    </div>
                                </div>
                            </section>
                            :
                            <section className="pm-left-content pm-empty-left-content">
                                Your Cart is Empty, <br />
                                <span>please add product to cart</span>
                            </section>
                        }
                        <section className="pm-right-content">
                            <div className="pm-right-content-card">
                                <div className="pm-address-detail-section">
                                    <div className="pm-address-detail-container">
                                        <div className="pm-address-detail-title">Address details</div>
                                        <div className="pm-address-detail-edit">edit</div>
                                    </div>
                                    <div className="address-detail-card">
                                        <div className="pm-address-detail">
                                            <span>{delivery === "Door Delivery" ? "Delivery to" : delivery} </span> {display_name ? display_name : email}
                                        </div>
                                        <div className="pm-border"></div>
                                        <div className="pm-address-detail">
                                            {address}
                                        </div>
                                        <div className="pm-border"></div>
                                        <div className="pm-address-detail">
                                            {mobile_number}
                                        </div>
                                    </div>
                                </div>
                                <div className="pm-payment-method">
                                    <div className="pm-payment-method-title">
                                        Payment method
                                    </div>
                                    <div className="pm-payment-method-card">
                                        <form>
                                            <label className="pm-radio-method-container"
                                                onClick={() => {
                                                    this.setState({
                                                        payment: "card"
                                                    })
                                                }}
                                            >
                                                <div className='pm-card-vector-container'>
                                                    <img src={Card} alt="card" className='pm-card-vector' />
                                                </div>
                                                <p>Card</p>
                                                <input type="radio" name="pm-method-input" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <div className="pm-border"></div>
                                            <label className="pm-radio-method-container"
                                                onClick={() => {
                                                    this.setState({
                                                        payment: "bank account"
                                                    })
                                                }}
                                            >
                                                <div className='pm-bank-vector-container'>
                                                    <img src={Bank} alt="" className='pm-bank-vector' />
                                                </div>
                                                <p>Bank account</p>
                                                <input type="radio" name="pm-method-input" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <div className="pm-border"></div>
                                            <label className="pm-radio-method-container"
                                                onClick={() => {
                                                    this.setState({
                                                        payment: "cash on delivery"
                                                    })
                                                }}
                                            >
                                                <div className='pm-cod-vector-container'>
                                                    <img src={Cod} alt="" className='pm-cod-vector' />
                                                </div>
                                                <p>Cash on Delivery</p>
                                                <input type="radio" name="pm-method-input" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {delivery === "" && size === "" ?
                            <div className="pm-disable-confirm-button"></div>
                            :
                            <div className="pm-confirm-button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                onClick={() => this.confirmAndPay()}
                            >Confirm and Pay</div>
                        }
                        </section>
                    </section>
                </main>
                <Footer />
                {/* MODAL */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title profile-modal-title" id="exampleModalLabel">
                                    Transaction Success
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary profile-btn-primary" data-bs-dismiss="modal"
                                    onClick={() => {
                                        this.props.dispatch(resetCartAction())
                                        this.setState({
                                            isSuccess: true
                                        })
                                    }}
                                >Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const { addToCart, auth: { userInfo }, counter: { counter }, userData: { data: { address, mobile_number, id, display_name, email } } } = reduxState
    return { addToCart, counter, address, mobile_number, id, userInfo, display_name, email }
}

export default connect(mapStateToProps)(Payment)