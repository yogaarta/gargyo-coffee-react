import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import img
import Logo from "../../assets/img/coffee logo.png"
import Facebook from "../../assets/img/facebook vector.png"
import Twitter from "../../assets/img/twitter vector.png"
import Instagram from "../../assets/img/ig vector.png"

import "./Forgot.css"

export default class Forgot extends Component {
    componentDidMount() {
        document.title = "Forgot Password"
    }
    render() {
        return (
            <div>
                <div className="global-container">
                    <aside className="forgot-aside">
                        <div className="aside-forgot-pict"></div>
                    </aside>
                    <div className="forgot-main-content">
                        <header className="forgot-header-container">
                            <div className="logo-container">
                                <h6 className="coffeeshop-logo"><Link to="/"><img src={Logo}
                                    alt="logo" className="coffee-pict" /></Link>Coffee Shop</h6>
                            </div>
                        </header>
                        <main>
                            <div className="main-container">
                                <div className="forgot-title-container">
                                    <h2 className="forgot-title">Forgot your password?</h2>
                                    <p className="forgot-paragraph">Don't worry, we got your back!</p>
                                </div>
                                <form className="flex-form-container">
                                    <input type="text" name="email" id="email" placeholder="Enter your email address to get link" className='signup-input' />
                                    <div className="signup">Send</div>
                                </form>
                                <div className="resend-container">
                                    <p className="resend-text">Click here if you didn't receive any link in 2 minutes</p>
                                </div>
                                <div className="resend-button">Resend Link</div>
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
