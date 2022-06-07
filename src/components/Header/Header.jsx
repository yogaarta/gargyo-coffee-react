import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Header.css"

//import img
import Logo from "../../assets/img/coffee logo.png"
import MagnGlass from "../../assets/img/Magn Glass Vector.png"
import ChatLogo from "../../assets/img/chat logo.png"
import MiniPict from "../../assets/img/profile photo.png"

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: localStorage.getItem("user-info") ? true : false,
            isSearch: true,
            setSearchName: props,
            pageActive: "home"
        }
    }
    render() {
        return (
            <header>
                <nav className="custom-nav-container row">
                    <div className="col-3">
                        <h6 className="coffeeshop-logo"><img src={Logo} alt="logo" className="logo-pict" />
                            Coffee Shop</h6>
                    </div>
                    <div className="custom-nav-list col-6">
                        <ul>
                            <li><Link to="/" className={this.state.pageActive === "home" ? "custom-active-nav" :"custom-inactive-nav"} 
                            onClick={()=>{
                                this.setState({
                                    pageActive: "home"
                                })
                            }}
                            >Home</Link></li>
                            <li><Link to="/product" className={this.state.pageActive === "product" ? "custom-active-nav" :"custom-inactive-nav"}
                            onClick={()=>{
                                this.setState({
                                    pageActive: "product"
                                })
                            }}
                            >Product</Link></li>
                            <li><Link to="/payment" className={this.state.pageActive === "cart" ? "custom-active-nav" :"custom-inactive-nav"}
                            onClick={()=>{
                                this.setState({
                                    pageActive: "cart"
                                })
                            }}
                            >Your Cart</Link></li>
                            <li><Link to="/history" className={this.state.pageActive === "history" ? "custom-active-nav" :"custom-inactive-nav"}
                            onClick={()=>{
                                this.setState({
                                    pageActive: "history"
                                })
                            }}
                            >History</Link></li>
                        </ul>
                    </div>
                    {this.state.isLoggedIn ?
                        <div className="custom-nav-icon col-3 row">
                            <div className="col header-search-container">
                                { this.state.isSearch ? 

                                    <img src={MagnGlass} alt="magnifying-glass" className='magn-glass'
                                    onClick={() => {
                                        this.setState({
                                            isSearch: false
                                        })
                                    }}
                                    />
                                :
                                <input type="text" id="header-search" name="search" className='header-search' placeholder="Search" 
                                // onKeyUp={(e)=>{
                                //     if(e.key === 'Enter'){
                                //         console.log(this.state.searchName)
                                //     }
                                // }} onChange={e=>{
                                //     this.props.setSearchName(e.target.value)
                                // }}
                                />
                                }

                            </div>
                            <div className="col">
                                <img src={ChatLogo} alt="chat-logo" className='chat-logo' />
                            </div>
                            <div className="col">
                                <Link to="/profile">
                                    <img src={MiniPict} alt="mini-pict" className="mini-photo" />
                                </Link>
                            </div>
                        </div>
                        :
                        <div className="custom-nav-icon col-3 row">
                            <div className="col custom-login-button"><Link to="/login">Login</Link></div>
                            <div className="col custom-signup-button"><Link to="/signup">Sign Up</Link></div>
                        </div>
                    }
                </nav>
            </header>
        )
    }
}