import React, { Component } from 'react'
// import img
import Logo from "../../assets/img/coffee logo.png"
import Google from "../../assets/img/google logo.png"
import Facebook from "../../assets/img/facebook vector.png"
import Twitter from "../../assets/img/twitter vector.png"
import Instagram from "../../assets/img/ig vector.png"

import "./Signup.css"
// import axios from 'axios'

export default class SignUp extends Component {
    state = {
        email: "",
        pass: "",
        mobile_number: "",
        isPasswordShown: false,
        isError: false,
        errorMsg: ""
    };

    render() {
        // const userInfo = JSON.parse(localStorage.getItem("newuserinfo"));
        // console.log(userInfo.token);
        return (
            <div>
                <div className="global-container">
                    <aside className='signup-aside'>
                        <div className="aside-pict"></div>
                    </aside>
                    <div className="main-content">
                        <header className="header-container">
                            <div>
                                <h6 className="coffeeshop-logo"><a href="/"><img src={Logo} alt="logo"
                                    className='coffee-pict' /></a> Coffee Shop</h6>
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
                                    // onChange={e => {
                                    //     this.setState({
                                    //         email: e.target.value,
                                    //     })
                                    // }} 
                                    />
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" name="password" id="password" placeholder="Enter your password" className='signup-input'
                                        // onChange={e => {
                                        //     this.setState({
                                        //         pass: e.target.value
                                        //     })
                                        // }} 
                                        />
                                    <label htmlFor="phone">Phone Number:</label>
                                    <input type="text" name="phone" id="phone" placeholder="Enter your phone number" className='signup-input'
                                        // onChange={e => {
                                        //     this.setState({
                                        //         mobile_number: e.target.value
                                        //     })
                                        // }} 
                                        />

                                    {/* {this.state.isError ? <p>{this.state.errorMsg}</p> : <></>} */}

                                    <div className="signup"
                                        // onClick={() => {
                                        //     const { email, pass, mobile_number } = this.state;
                                        //     const body = { email, pass, mobile_number };
                                        //     axios
                                        //         .post("http://localhost:8080/auth/new", body)
                                        //         .then(result => {
                                        //             console.log(result);
                                        //         })
                                        //         .catch(error => {
                                        //             console.log(error)
                                        //         })
                                        // }
                                        // }
                                    >Sign Up</div>
                                </form>
                                <button className="google-button"><img src={Google} alt="google-logo"
                                    className='google-pict' /> Sign up with Google</button>
                                <div className="have-account-container">
                                    <div className="underline"></div>
                                    <p className="have-account-text">Already have an account?</p>
                                    <div className="underline"></div>
                                </div>
                                <div className="login-button"><a href="/login">Login Here</a></div>
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
            </div>

        )
    }
}
