import React, { Component } from 'react'
// import img
import Logo from "../../assets/img/coffee logo.png"
import Google from "../../assets/img/google logo.png"
import Facebook from "../../assets/img/facebook vector.png"
import Twitter from "../../assets/img/twitter vector.png"
import Instagram from "../../assets/img/ig vector.png"

import "./Login.css"

export default class Login extends Component {
    render() {
        return (
            <div>
                <div class="global-container">
        <aside className="signup-aside">
            <div class="aside-pict"></div>
        </aside>
        <div class="main-content">
            <header class="header-container">
                <div class="logo-container">
                    <h6 class="coffeeshop-logo"><a href="/"><img src={Logo}
                        alt="logo" class="coffee-pict"/></a>Coffee Shop</h6>
                </div>
                <div>
                    <h3 class="header-signup">Login</h3>
                </div>
            </header>
            <main>
                <div class="main-container">
                    <form class="flex-form-container">
                        <label for="email">Email Address:</label>
                        <input type="text" name="email" id="email" placeholder="Enter your email address" className='signup-input'/>
                        <label for="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" className='signup-input'/>
                        <p class="forgot">Forgot Password?</p>
                        <div class="signup">Login</div>
                    </form>
                    <button class="google-button"><img src={Google} alt="google-logo"
                            class="google-pict"/> Login with Google</button>
                    <div class="have-account-container">
                        <div class="underline"></div>
                        <p class="have-account-text">Don't have an account?</p>
                        <div class="underline"></div>
                    </div>
                    <div class="login-button"><a href="/signup">Sign Up Here</a></div>
                </div>
            </main>
            <footer>
                <div class="footer-flex-container">
                    <div class="footer-flex-item">
                        <h6 class="coffeeshop-logo"><img src={Logo} alt="logo"
                                class="coffee-pict"/>Coffee Shop</h6>
                        <p class="coffeeshop-footer-text">Coffee Shop is a store that sells some good meals, and
                            especially coffee. We provide high
                            quality
                            beans</p>
                        <img src={Facebook} alt="facebook"/>
                        <img src={Twitter} alt="twitter"/>
                        <img src={Instagram} alt="instagram"/>
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
