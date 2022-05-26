import React, { Component } from 'react'

import "./Footer.css"
// img import
import Logo from "../../assets/img/coffee logo.png"
import Facebook from "../../assets/img/facebook vector.png"
import Twitter from "../../assets/img/twitter vector.png"
import Instagram from "../../assets/img/ig vector.png"


export default class Footer extends Component {
  render() {
    return (
        <footer>
        <div className="row footer-container">
            <div className="col-7 footer-flex-item">
                <h6 className="coffeeshop-logo"><img src={Logo} alt="logo"
                        className='logo-pict'/>Coffee Shop</h6>
                <p className="coffeeshop-footer-text">Coffee Shop is a store that sells some good meals, and especially
                    coffee. We provide high
                    quality
                    beans</p>
                <img src={Facebook} alt="facebook"/>
                <img src={Twitter} alt="twitter"/>
                <img src={Instagram} alt="instagram"/>
                <p className="copyright">&#169;2020CoffeeStore</p>
            </div>
            <div className="row col footer-flex-item-right">
                <div className="col footer-list">
                    <h6 className="footer-list-header">Product</h6>
                    <div className="footer-list-item">
                        <p>Download</p>
                        <p>Locations</p>
                        <p>Blog</p>
                        <p>Pricing</p>
                        <p>Countries</p>

                    </div>
                </div>
                <div className="col footer-list">
                    <h6 className="footer-list-header">Engage</h6>
                    <div className="footer-list-item">
                        <p>Coffee Shop</p>
                        <p>FAQ</p>
                        <p>Term of Service</p>
                        <p>About Us</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
  }
}
