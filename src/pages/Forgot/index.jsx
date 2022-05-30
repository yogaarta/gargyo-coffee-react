import React, { Component } from 'react'
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
                <div class="global-container">
                    <aside className="forgot-aside">
                        <div class="aside-forgot-pict"></div>
                    </aside>
                    <div class="forgot-main-content">
                        <header class="forgot-header-container">
                            <div class="logo-container">
                                <h6 class="coffeeshop-logo"><a href="/"><img src={Logo}
                                    alt="logo" class="coffee-pict" /></a>Coffee Shop</h6>
                            </div>
                        </header>
                        <main>
                            <div class="main-container">
                                <div class="forgot-title-container">
                                    <h2 class="forgot-title">Forgot your password?</h2>
                                    <p class="forgot-paragraph">Don't worry, we got your back!</p>
                                </div>
                                <form class="flex-form-container">
                                    <input type="text" name="email" id="email" placeholder="Enter your email address to get link" className='signup-input' />
                                    <div class="signup">Send</div>
                                </form>
                                <div class="resend-container">
                                    <p class="resend-text">Click here if you didn't receive any link in 2 minutes</p>
                                </div>
                                <div class="resend-button">Resend Link</div>
                            </div>
                        </main>
                        <footer>
                            <div class="footer-flex-container">
                                <div class="footer-flex-item">
                                    <h6 class="coffeeshop-logo"><img src={Logo} alt="logo"
                                        class="coffee-pict" />Coffee Shop</h6>
                                    <p class="coffeeshop-footer-text">Coffee Shop is a store that sells some good meals, and
                                        especially coffee. We provide high
                                        quality
                                        beans</p>
                                    <img src={Facebook} alt="facebook" />
                                    <img src={Twitter} alt="twitter" />
                                    <img src={Instagram} alt="instagram" />
                                    <p class="copyright">&#169;2020CoffeeStore</p>
                                </div>
                                <div class="footer-flex-item-right">
                                    <div class="footer-list-item-right-title">
                                        <h6 class="footer-list-header">Product</h6>
                                        <div class="footer-list">
                                            <div class="footer-list-item">
                                                <p>Download</p>
                                                <p>Locations</p>
                                                <p>Blog</p>
                                            </div>
                                            <div class="footer-list-item">
                                                <p>Pricing</p>
                                                <p>Countries</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="footer-list-item-right-title">
                                        <h6 class="footer-list-header">Engage</h6>
                                        <div class="footer-list">
                                            <div class="footer-list-item">
                                                <p>Coffee Shop</p>
                                                <p>FAQ</p>
                                                <p>Term of Service</p>
                                            </div>
                                            <div class="footer-list-item">
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
