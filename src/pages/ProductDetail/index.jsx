import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './ProductDetail.css'
import withParams from '../../Helper/withParams'
import { counterUp, counterDown } from '../../redux/actionCreator/counter'

// import img
import axios from 'axios'
import { addToCartAction } from '../../redux/actionCreator/addToCart'
import { headerAction } from '../../redux/actionCreator/header';
import { currencyFormatter } from '../../Helper/formater'

class ProductDetail extends Component {
    constructor() {
        super();
        this.state = {
            product: [],
            productId: "",
            size: "",
            delivery: "",
            counter: "",
            allSize: [],
            cart: [],
        }
    }

    cartHandle = (e) => {
        e.preventDefault();
        // this.setState({
        //     allSize: this.state.allSize.push(this.state.size),
        // })
        this.state.allSize.push(this.state.size)
        console.log(this.state.allSize)
    }

    componentDidMount() {
        const { params } = this.props
        axios
            .get(`${process.env.REACT_APP_BE_HOST}/products/${params.id}`)
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
        const { params, counter, doCounterUp, doCounterDown, doAddToCart, addToCart, doChangePage, roles } = this.props
        return (
            <div>
                <Header />
                <section className="pd-main-container">
                    <div className="pd-title-menu"> <Link to={"/product"}>{`${this.state.product.category === "noncoffee" ? "Non Coffee" : this.state.product.category}   `}</Link><span>{`>  ${this.state.product.name}`}</span></div>
                    <section className="pd-main-content">
                        <div className="pd-left-content">
                            <div className="pd-main-img-container">
                                <img src={`${process.env.REACT_APP_BE_HOST}${this.state.product.picture}`} alt="coldbrew" className="pd-main-img" />
                            </div>
                            <div className="pd-main-product-name">
                                <h2>{this.state.product.name}</h2>
                                <p>{currencyFormatter.format(this.state.product.price)}</p>
                            </div>
                            <div className="pd-addcart-button"
                                onClick={() => {
                                    doAddToCart(this.state.size, this.state.delivery, params.id)
                                    // console.log(this.state.size)
                                }}
                            >Add to Cart</div>
                            {roles !== "admin" ?
                                <div className="pd-askstaff-button">Ask a Staff</div>
                                :
                                <>
                                    <div className="pd-askstaff-button">Edit Product</div>
                                    <div className="pd-delete-button">Delete Menu</div>
                                </>
                            }
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
                                            <input type="radio" className='pd-size-input' name='pd-size-input'
                                                onClick={() => {
                                                    this.setState({ size: "Regular" })
                                                }
                                                }
                                            /><span className='pd-size-checkmark'></span>
                                        </label>
                                        <label className="pd-size-vector">L
                                            <input type="radio" className='pd-size-input' name='pd-size-input'
                                                onClick={() => {
                                                    this.setState({ size: "Large" })
                                                }}
                                            /><span className='pd-size-checkmark'></span>
                                        </label>
                                        <label className="pd-size-vector">XL
                                            <input type="radio" className='pd-size-input' name='pd-size-input'
                                                onClick={() => {
                                                    this.setState({ size: "Extra Large" })
                                                }}
                                            /><span className='pd-size-checkmark'></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="pd-delivery-container">
                                <h4 className="pd-delivery-title">Choose Delivery Methods</h4>
                                <div className="pd-delivery-button">
                                    <label className="pd-dm-button-inactive">
                                        <input type="radio" name="pd-dm-input" className='pd-dm-input' />
                                        <span className="pd-dm-checkmark"
                                            onClick={() => {
                                                this.setState({ delivery: "Dine In" })
                                            }}
                                        >Dine in</span>
                                    </label>
                                    <label className="pd-dm-button-inactive">
                                        <input type="radio" name="pd-dm-input" className='pd-dm-input' />
                                        <span className="pd-dm-checkmark"
                                            onClick={() => {
                                                this.setState({ delivery: "Door Delivery" })
                                            }}
                                        >Door Delivery</span>
                                    </label>
                                    <label className="pd-dm-button-inactive">
                                        <input type="radio" name="pd-dm-input" className='pd-dm-input' />
                                        <span className="pd-dm-checkmark"
                                            onClick={() => {
                                                this.setState({ delivery: "Pick Up" })
                                            }}
                                        >Pick up</span>
                                    </label>
                                    {/* <div className="pd-delivery-dinein-button">Dine in</div>
                                    <div className="pd-delivery-door-button">Door Delivery</div>
                                    <div className="pd-delivery-pickup-button">Pick up</div> */}
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
                                <img src={`${process.env.REACT_APP_BE_HOST}${this.state.product.picture}`} alt="coldbrew" className='pd-check-out-img' />
                            </div>
                            <div className="pd-checkout-info">
                                <h4 className="pd-checkout-name">{this.state.product.name}</h4>
                                <div className="pd-checkout-details">
                                    <p>
                                        x{counter} {addToCart.size} <br />{addToCart.delivery}
                                    </p>
                                </div>
                            </div>
                            <div className="pd-checkout-quantity">
                                <div className="pd-minus-button"
                                    onClick={() => {
                                        doCounterDown()
                                        this.setState({
                                            counter: this.props.counter
                                        })
                                    }}
                                >-</div>
                                <div className="pd-quantity">{counter} </div>
                                <div className="pd-plus-button"
                                    onClick={() => {
                                        doCounterUp()
                                        this.setState({
                                            counter: this.props.counter
                                        })
                                    }}
                                >+</div>
                            </div>
                        </div>
                        <div className="pd-checkout-button">
                            <Link to="/payment"
                                onClick={() => {
                                    doChangePage("cart")
                                }}>
                                CHECKOUT
                            </Link>
                        </div>
                    </section>
                </section>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const { counter: { counter }, addToCart, userData: { data: { roles } } } = reduxState
    return {
        counter, addToCart, roles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doCounterUp: () => {
            dispatch(counterUp())
        },
        doCounterDown: () => {
            dispatch(counterDown())
        },
        doAddToCart: (size, delivery, id) => {
            dispatch(addToCartAction(size, delivery, id))
        },
        doChangePage: (page) => {
            dispatch(headerAction(page))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withParams(ProductDetail))