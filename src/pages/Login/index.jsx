import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
// import img
import Logo from "../../assets/img/coffee logo.png"
import Google from "../../assets/img/google logo.png"
import Facebook from "../../assets/img/facebook vector.png"
import Twitter from "../../assets/img/twitter vector.png"
import Instagram from "../../assets/img/ig vector.png"
import OpenEye from "../../assets/img/open-eye.png"
import ClosedEye from "../../assets/img/closed-eye.png"


import "./Login.css"
// import axios from 'axios'
// import { doLogin } from '../../utility/auth'
import { connect } from 'react-redux'
import { loginAction } from '../../redux/actionCreator/auth'

class Login extends Component {
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
    componentDidMount() {
        document.title = "Login"
    }

    render() {
        const { isSuccess } = this.props
        if (isSuccess === true)
            return <Navigate to="/" />
        // if (this.state.isSuccess === true) {
        //     return <Navigate to="/" />
        // }
        // console.log(this.props.)
        return (
            <div>
                <div className="global-container">
                    <aside className="signup-aside">
                        <div className="aside-pict"></div>
                    </aside>
                    <div className="main-content">
                        <header className="header-container">
                            <div className="logo-container">
                                <h6 className="coffeeshop-logo">
                                    <Link to="/"><img src={Logo}
                                        alt="logo" className="coffee-pict" />
                                    </Link>Coffee Shop
                                </h6>
                            </div>
                            <div>
                                <h3 className="header-signup">Login</h3>
                            </div>
                        </header>
                        <main>
                            <div className="main-container">
                                <form className="flex-form-container">
                                    <label htmlFor="email">Email Address:</label>
                                    <input type="text" name="email" id="email" placeholder="Enter your email address" className='signup-input'
                                        onChange={e => {
                                            this.setState({
                                                email: e.target.value,
                                            })
                                        }}
                                    />
                                    <label htmlFor="password">Password:</label>
                                    <div className='signup-input-pass-container'>
                                        <input type={this.state.isPasswordShown ? "text" : "password"} name="password" id="password" placeholder="Enter your password" className='signup-input-pass'
                                            onChange={e => {
                                                this.setState({
                                                    pass: e.target.value,
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
                                    <Link to={"/forgot"}><p className="forgot">Forgot Password?</p></Link>

                                    {/* {isSuccess === false ? <div className='signup-error'>{errorMsg}</div> : <></>} */}


                                    <div className="signup"
                                        onClick={() => {
                                            const { email, pass } = this.state;
                                            const body = { email, pass };
                                            this.props.dispatch(loginAction(body))
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

const mapStateToProps = (reduxState) => {
    const { auth: { userInfo, isSuccess } } = reduxState
    return { userInfo, isSuccess }
}

export default connect(mapStateToProps)(Login)