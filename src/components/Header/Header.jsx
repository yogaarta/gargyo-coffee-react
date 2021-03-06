import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Header.css"

//import img
import Logo from "../../assets/img/coffee logo.png"
import MagnGlass from "../../assets/img/Magn Glass Vector.png"
import ChatLogo from "../../assets/img/chat logo.png"
import MiniPict from "../../assets/img/default-pict.jpg"
import { connect } from 'react-redux';
import { searchProductAction } from '../../redux/actionCreator/searchProduct';

class Header extends Component {
    constructor(props) {
        super(props);
        const { isSuccess } = this.props
        this.state = {
            isLoggedIn: isSuccess ? true : false,
            setSearchName: props,
        }
    }

    render() {
        const { roles, profile_picture, pageActive } = this.props
        return (
            <header>
                <nav className="custom-nav-container ">
                    <div className="custom-coffeeshop-logo">
                        <h6 className="coffeeshop-logo"><img src={Logo} alt="logo" className="logo-pict" />
                            Coffee Shop</h6>
                    </div>
                    <div className="custom-nav-list ">
                        {roles !== "admin" ?
                            <ul>
                                <li><Link to="/" className={pageActive === "home" ? "custom-active-nav" : "custom-inactive-nav"}
                                >Home</Link></li>
                                <li><Link to="/product" className={pageActive === "product" ? "custom-active-nav" : "custom-inactive-nav"}
                                >Product</Link></li>
                                <li><Link to="/payment" className={pageActive === "cart" ? "custom-active-nav" : "custom-inactive-nav"}
                                >Your Cart</Link></li>
                                <li><Link to="/history" className={pageActive === "history" ? "custom-active-nav" : "custom-inactive-nav"}
                                >History</Link></li>
                            </ul>
                            : <ul>
                                <li><Link to="/" className={pageActive === "home" ? "custom-active-nav" : "custom-inactive-nav"}
                                >Home</Link></li>
                                <li><Link to="/product" className={pageActive === "product" ? "custom-active-nav" : "custom-inactive-nav"}
                                >Product</Link></li>
                                <li><Link to="/payment" className={pageActive === "order" ? "custom-active-nav" : "custom-inactive-nav"}
                                >Order</Link></li>
                                <li><Link to="/dashboard" className={pageActive === "dashboard" ? "custom-active-nav" : "custom-inactive-nav"}
                                >Dashboard</Link></li>
                            </ul>
                        }
                    </div>
                    <div className="custom-nav-right">
                        {this.state.isLoggedIn ?
                            <div className="custom-nav-icon">
                                <div className=" header-search-container">
                                    {this.props.pageActive !== "product" ?
                                        <Link to="/product">
                                            <img src={MagnGlass} alt="magnifying-glass" className='magn-glass' />
                                        </Link>
                                        :
                                        <div className='header-search-input-container'>
                                            <input type="text" id="header-search" name="search" className='header-search' placeholder="Search"
                                                onChange={(e) => this.props.setSearchName(e.target.value)}
                                            />
                                            <img src={MagnGlass} alt="magnifying-glass" className='magn-glass2'
                                                onClick={() => { this.props.doAxios() }}
                                            />
                                        </div>
                                    }

                                </div>
                                <div className="header-chat-logo">
                                    <img src={ChatLogo} alt="chat-logo" className='chat-logo' />
                                </div>
                                <div className="header-profile">
                                    <Link to="/profile">
                                        <img src={profile_picture ? `${profile_picture}` : MiniPict} alt="mini-pict" className="mini-photo"
                                        />
                                    </Link>
                                </div>
                            </div>
                            :
                            <div className="custom-nav-icon ">
                                <div className="custom-login-button" ><Link to="/login">Login</Link></div>
                                <div className="custom-signup-button"><Link to="/signup">Sign Up</Link></div>
                            </div>
                        }
                    </div>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const { auth: { isSuccess }, userData: { data: { roles, profile_picture } } } = reduxState
    return { isSuccess, roles, profile_picture }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doSearch: (element) => {
            dispatch(searchProductAction(element))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)