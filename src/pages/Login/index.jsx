import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
// import img
import Logo from "../../assets/img/coffee logo.png"
import Google from "../../assets/img/google logo.png"
import Facebook from "../../assets/img/facebook vector.png"
import Twitter from "../../assets/img/twitter vector.png"
import Instagram from "../../assets/img/ig vector.png"

import "./Login.css"
import axios from 'axios'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            pass: "",
            isSuccess: false,
            isPasswordShown: false,
            isError: false,
            errorMsg: "",
            isLoggedin: false
        };
    };



    render() {
        if(this.state.isSuccess === true){
            return <Navigate to="/"/>
        }
        return (
            <div>
                <div className="global-container">
                    <aside className="signup-aside">
                        <div className="aside-pict"></div>
                    </aside>
                    <div className="main-content">
                        <header className="header-container">
                            <div className="logo-container">
                                <h6 className="coffeeshop-logo"><a href="/"><img src={Logo}
                                    alt="logo" className="coffee-pict" /></a>Coffee Shop</h6>
                            </div>
                            <div>
                                <h3 className="header-signup">Login</h3>
                            </div>
                        </header>
                        <main>
                            <div className="main-container">
                                <form className="flex-form-container">
                                    <label forHtml="email">Email Address:</label>
                                    <input type="text" name="email" id="email" placeholder="Enter your email address" className='signup-input'
                                        onChange={e => {
                                            this.setState({
                                                email: e.target.value,
                                            })
                                        }}
                                    />
                                    <label forHtml="password">Password:</label>
                                    <input type="password" name="password" id="password" placeholder="Enter your password" className='signup-input'
                                        onChange={e => {
                                            this.setState({
                                                pass: e.target.value,
                                            })
                                        }}
                                    />
                                    <Link to={"/forgot"}><p className="forgot">Forgot Password?</p></Link>

                                    {this.state.isError ? <div className='signup-error'>{this.state.errorMsg}</div> : <></>}


                                    <div className="signup"
                                        onClick={() => {
                                            const { email, pass } = this.state;
                                            const body = { email, pass };
                                            axios
                                                .post("http://localhost:8080/auth", body)
                                                .then(result => {
                                                    console.log(result.data);
                                                    localStorage.setItem("user-info", JSON.stringify(result.data.data));
                                                    this.setState({
                                                        isSuccess: true
                                                    })
                                                })
                                                .catch(error => {
                                                    console.log(error.response.data);
                                                    this.setState({
                                                        isError: true,
                                                        errorMsg: `${error.response.data.err.msg}`
                                                    })
                                                })
                                        }}
                                    >Login</div>
                                </form>
                                <button className="google-button"><img src={Google} alt="google-logo"
                                    className="google-pict" /> Login with Google</button>
                                <div className="have-account-container">
                                    <div className="underline"></div>
                                    <p className="have-account-text">Don't have an account?</p>
                                    <div className="underline"></div>
                                </div>
                                <div className="login-button">
                                    <Link to="/signup">Sign Up Here</Link>
                                </div>
                            </div>
                        </main>
                        <footer>
                            <div className="footer-flex-container">
                                <div className="footer-flex-item">
                                    <h6 className="coffeeshop-logo"><img src={Logo} alt="logo"
                                        className="coffee-pict" />Coffee Shop</h6>
                                    <p className="coffeeshop-footer-text">Coffee Shop is a store that sells some good meals, and
                                        especially coffee. We provide high
                                        quality
                                        beans</p>
                                    <img src={Facebook} alt="facebook" />
                                    <img src={Twitter} alt="twitter" />
                                    <img src={Instagram} alt="instagram" />
                                    <p className="copyright">&#169;2020CoffeeStore</p>
                                </div>
                                <div className="footer-flex-item-right">
                                    <div className="footer-list-item-right-title">
                                        <h6 className="footer-list-header">Product</h6>
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
                                    <div className="footer-list-item-right-title">
                                        <h6 className="footer-list-header">Engage</h6>
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
