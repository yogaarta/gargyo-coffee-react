import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Modal } from "react-bootstrap";
import 'bootstrap'
// import img
import Logo from "../../assets/img/coffee logo.png"
import Google from "../../assets/img/google logo.png"
import Facebook from "../../assets/img/facebook vector.png"
import Twitter from "../../assets/img/twitter vector.png"
import Instagram from "../../assets/img/ig vector.png"
import OpenEye from "../../assets/img/open-eye.png"
import ClosedEye from "../../assets/img/closed-eye.png"

import "./Signup.css"
import axios from 'axios'

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            pass: "",
            mobile_number: "",
            isError: false,
            errorMsg: "",
            isRegistered: false,
            isPasswordShown: false,
            isShow: false,
            isUpdated: false
        };
    };

    componentDidMount() {
        document.title = "Sign Up"
    }

    render() {
        if (this.state.isRegistered === true) {
            return <Navigate to="/login" />
        }
        return (
            <div>
                <div className="global-container">
                    <aside className='signup-aside'>
                        <div className="aside-pict"></div>
                    </aside>
                    <div className="main-content">
                        <header className="header-container">
                            <div>
                                <h6 className="coffeeshop-logo"><Link to="/"><img src={Logo} alt="logo"
                                    className='coffee-pict' /></Link> Coffee Shop</h6>
                            </div>
                            <div>
                                <h3 className="header-signup">Sign Up</h3>
                            </div>
                        </header>
                        <main>
                            <div className="main-container">
                                <form className="flex-form-container">
                                    <label htmlFor="email">Email Address:</label>
                                    <input type="text" name="email" id="email" placeholder="Enter your email address" className='signup-input'
                                        value={this.state.email}
                                        onChange={e => {
                                            this.setState({
                                                email: e.target.value,
                                            })
                                        }}
                                    />
                                    <label htmlFor="password">Password:</label>
                                    <div className='signup-input-pass-container'>
                                        <input type={this.state.isPasswordShown ? "text" : "password"} name="password" id="password" placeholder="Enter your password" className='signup-input-pass'
                                            value={this.state.pass}
                                            onChange={e => {
                                                this.setState({
                                                    pass: e.target.value
                                                })
                                            }}
                                        />
                                        <div className="icon-pass-container"
                                            onClick={() => {
                                                this.setState({
                                                    isPasswordShown: !this.state.isPasswordShown
                                                })
                                            }}>
                                            {this.state.isPasswordShown ? <img src={OpenEye} alt="open-eye" className='pass-icon' /> : <img src={ClosedEye} alt="closed-eye" className='pass-icon' />}
                                        </div>
                                    </div>
                                    <label htmlFor="phone">Phone Number:</label>
                                    <input type="text" name="phone" id="phone" placeholder="Enter your phone number" className='signup-input'
                                        value={this.state.mobile_number}
                                        onChange={e => {
                                            this.setState({
                                                mobile_number: e.target.value
                                            })
                                        }}
                                    />

                                    {/* {this.state.isError ? <div className='signup-error'>{this.state.errorMsg}</div> : <></>} */}

                                    <div className="signup" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        onClick={() => {
                                            this.setState({
                                                isShow: true,
                                            })
                                            const { email, pass, mobile_number } = this.state;
                                            const body = { email, pass, mobile_number };
                                            axios
                                                .post(`${process.env.REACT_APP_BE_HOST}/auth/new`, body)
                                                .then(result => {
                                                    console.log(result.data.data)
                                                    this.setState({
                                                        isUpdated: true,
                                                    })
                                                })
                                                .catch(error => {
                                                    console.log(error.response)
                                                    this.setState({
                                                        isError: true,
                                                        errorMsg: `${error.response.data.err.msg}`
                                                    })
                                                })
                                        }
                                        }
                                    >Sign Up</div>
                                </form>
                                <button className="google-button"><img src={Google} alt="google-logo"
                                    className='google-pict' /> Sign up with Google</button>
                                <div className="have-account-container">
                                    <div className="underline"></div>
                                    <p className="have-account-text">Already have an account?</p>
                                    <div className="underline"></div>
                                </div>
                                <div className="login-button"><Link to="/login">Login Here</Link></div>
                            </div>
                        </main>
                        <footer>
                            <div className="footer-flex-container">
                                <div className="footer-flex-item">
                                    <h6 className="coffeeshop-logo">
                                        <img src={Logo} alt="logo" className='coffee-pict' />Coffee Shop
                                    </h6>
                                    <p>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high
                                        quality
                                        beans</p>
                                    <div>
                                        <img src={Facebook} alt="facebook" />
                                        <img src={Twitter} alt="twitter" />
                                        <img src={Instagram} alt="instagram" />
                                    </div>

                                    <p>&#169;2020CoffeeStore</p>
                                </div>
                                <div className="footer-flex-item-right">
                                    <div>
                                        <h6>Product</h6>
                                        <div className="footer-list">
                                            <div className="footer-list-item">
                                                <p>Download</p>
                                                <p>Locations</p>
                                                <p>Blog</p>
                                            </div>
                                            <div className="footer-list-item">
                                                <p>Pricing</p>
                                                <p>Countries</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h6>Engage</h6>
                                        <div className="footer-list">
                                            <div className="footer-list-item">
                                                <p>Coffee Shop</p>
                                                <p>FAQ</p>
                                                <p>Term of Service</p>
                                            </div>
                                            <div className="footer-list-item">
                                                <p>About Us</p>
                                                <p>Privacy Policy</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                {/* MODAL */}
                {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title profile-modal-title" id="exampleModalLabel">
                                    {this.state.isError ? <p className='profile-modal-title-error'>{this.state.errorMsg}</p> : "Register Success"}
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-footer">
                                {this.state.isError ? <></>
                                    :
                                    <button type="button" className="btn btn-primary profile-btn-primary" data-bs-dismiss="modal"
                                        onClick={() => {
                                            this.setState({
                                                isRegistered: true
                                            })
                                        }}
                                    >Proceed</button>}
                            </div>
                        </div>
                    </div>
                </div> */}
                <Modal
                    show={this.state.isShow}
                    onHide={() => {
                        this.state.isUpdated ? 
                        this.setState({
                            isRegistered: true,
                            isShow: false,
                            isError: false,
                            errorMsg: ""
                        })
                        :
                        this.setState({
                            isUpdated: false,
                            isShow: false,
                            isError: false,
                            errorMsg: ""
                        });
                    }}
                >
                    <Modal.Header>
                        <Modal.Title className='profile-modal-title'>{this.state.isUpdated ? "Register Success" : this.state.isError ? <span>{this.state.errorMsg}</span> : "Processing, please wait.."}</Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body className='new-modal-body'>
                    </Modal.Body> */}
                    <Modal.Footer>
                        {/* <Button></Button> */}
                    </Modal.Footer>
                </Modal>
            </div>

        )
    }
}
