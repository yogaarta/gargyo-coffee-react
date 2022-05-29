import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Header.css"

//import img
import Logo from "../../assets/img/coffee logo.png"

export default class Header extends Component {
  render() {
    return (
        <header>
        <nav className="custom-nav-container row">
            <div className="col-3">
                <h6 className="coffeeshop-logo"><img src={Logo} alt="logo" className="logo-pict"/>
                    Coffee Shop</h6>
            </div>
            <div className="custom-nav-list col-6">
                <ul>
                    <li><Link to="/" className="custom-inactive-nav">Home</Link></li>
                    <li><Link to="/product" className="custom-inactive-nav">Product</Link></li>
                    <li><Link to="#" className="custom-inactive-nav">Your Cart</Link></li>
                    <li><Link to="#" className="custom-inactive-nav">History</Link></li>
                </ul>
            </div>
            <div className="custom-nav-icon col-3 row">
                <div className="col custom-login-button"><Link to="/login">Login</Link></div>
                <div className="col custom-signup-button"><Link to="/signup">Sign Up</Link></div>
            </div>
        </nav>
    </header>
    )
  }
}