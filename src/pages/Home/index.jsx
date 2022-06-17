import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
// import axios from 'axios'

// import Header from './components/Header/Header';
import "./Home.css"

// import img
import MagnGlass from "../../assets/img/magn glass homepage.png"
import Person from "../../assets/img/person vector.png"
import Location from "../../assets/img/location Vector.png"
import Love from "../../assets/img/love vector.png"
import Check from "../../assets/img/Vectorcheck.png"
import SimpleCheck from "../../assets/img/Vectorsimplecheck.png"
import WorldMap from "../../assets/img/world-map.PNG"
import LeftArrow from "../../assets/img/Vectorleftarrow.png"
import RightArrow from "../../assets/img/Vectorrightarrow.png"
import Star from "../../assets/img/Vectorstar.png"
import Teamwork from "../../assets/img/teamwork.jpg"
import Favorite1 from "../../assets/img/creamyice.png"
import Favorite2 from "../../assets/img/pinkypromise.png"
import Favorite3 from "../../assets/img/chickenwing.png"
import Netflix from "../../assets/img/netflix.png"
import Reddit from "../../assets/img/reddit.png"
import Amazon from "../../assets/img/amazon.png"
import Discord from "../../assets/img/discord.png"
import Spotify from "../../assets/img/spotify.png"
import Profil1 from "../../assets/img/profil1.png"
import Profil2 from "../../assets/img/profil2.png"
import Profil3 from "../../assets/img/profil3.png"

import { getUserDataAction } from '../../redux/actionCreator/userData'

class Home extends Component {
    constructor(){
        super();
        this.state = {
            pageActive: "home"
        }
    }
    componentDidMount() {
        document.title = "Gargyo Coffee"
        window.scrollTo(0, 0);
        const { isLoggedIn, dispatch } = this.props
        if (isLoggedIn) {
            const { token = null } = this.props.userInfo || {}
            dispatch(getUserDataAction(token))
        }
    }
    render() {
        return (
            <div>
                <Header pageActive={this.state.pageActive}/>
                <main>
                    <div className="row custom-banner">
                        <div className="col custom-banner-left">
                            <h2>Start Your Day with Coffee and Good Meals</h2>
                            <p>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your
                                day with us for a bigger smile!</p>
                            <div className="custom-get-started-button">Get Started</div>
                            <div className="custom-additional-bg"></div>
                        </div>
                        <div className="col custom-banner-right">
                            <div className="custom-search">
                                <div className="custom-search-img"><img src={MagnGlass} alt="search" /></div>
                                <form action="search">
                                    <input type="text" id="search" name="search" placeholder="Search" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="custom-store-info row">
                        <div className="col row">
                            <div className="col custom-vector-container">
                                <div className="custom-vector"><img src={Person} alt="person-vector" className='person-vector' /></div>
                            </div>
                            <div className="col custom-store-info-text">
                                <div className="custom-store-info-number">90+</div>
                                <div className="custom-store-info-obj">Staff</div>
                            </div>
                        </div>
                        <div className="col row custom-store-info-box">
                            <div className="col custom-vector-container">
                                <div className="custom-vector"><img src={Location} alt="location-vector" className='loc-vector' /></div>
                            </div>
                            <div className="col custom-store-info-text">
                                <div className="custom-store-info-number">30+</div>
                                <div className="custom-store-info-obj">Stores</div>
                            </div>
                        </div>
                        <div className="col row">
                            <div className="col custom-vector-container">
                                <div className="custom-vector"><img src={Love} alt="love-vector" className='love-vector' /></div>
                            </div>
                            <div className="col custom-store-info-text">
                                <div className="custom-store-info-number">800+</div>
                                <div className="custom-store-info-obj">Customers</div>
                            </div>
                        </div>
                    </div>
                    <div className="custom-teamwork row">
                        <div className="custom-teamwork-left col"><img
                            src={Teamwork}
                            alt="teamwork" className='teamwork-pict' /></div>
                        <div className="custom-teamwork-right col">
                            <h3 className="custom-teamwork-header">We Provide Good Coffee and Healthy Meals</h3>
                            <p className="custom-teamwork-paragraph">You can explore the menu that we provide with fun and have their
                                own taste and make your day better.</p>
                            <p className="custom-teamwork-list"><img src={Check} alt="check" /> High quality beans
                            </p>
                            <p className="custom-teamwork-list"><img src={Check} alt="check" /> Healthy meals, you
                                can request the ingredients</p>
                            <p className="custom-teamwork-list"><img src={Check} alt="check" /> Chat with our
                                staff to get better experience for ordering</p>
                            <p className="custom-teamwork-list"><img src={Check} alt="check" /> Free member card
                                with a minimum purchase of IDR 200.000.</p>
                        </div>
                    </div>
                    <div className="custom-favorite">
                        <div className="custom-favorite-title">Here is People's Favorite</div>
                        <div className="custom-favorite-paragraph">Let's choose and have a bit taste of poeple's favorite. It might be
                            yours too!</div>
                        <div className="custom-favorite-menu row">
                            <div className="custom-favorite-menu-card col">
                                <div className="custom-favorite-picture"><img
                                    src={Favorite1}
                                    alt="hazelnut-latte" className="hazelnut-latte-pict" /></div>
                                <div className="custom-favorite-name">Hazelnut Latte</div>
                                <div className="custom-favorite-list">
                                    <p><img src={SimpleCheck} alt="simple-check" />Hazelnut Syrup</p>
                                    <p><img src={SimpleCheck} alt="simple-check" />Vanilla Whipped Cream</p>
                                    <p><img src={SimpleCheck} alt="simple-check" />Ice / Hot</p>
                                    <p><img src={SimpleCheck} alt="simple-check" />Sliced Banana on Top</p>
                                </div>
                                <div className="custom-favorite-price">IDR 25.000</div>
                                <div className="custom-favorite-button">Order Now</div>
                            </div>
                            <div className="custom-favorite-menu-card col">
                                <div className="custom-favorite-picture"><img
                                    src={Favorite2}
                                    alt="pinky-promise" className="pinky-promise-pict" /></div>
                                <div className="custom-favorite-name">Pinky Promise</div>
                                <div className="custom-favorite-list">
                                    <p><img src={SimpleCheck} alt="simple-check" /> 1 Shot of Coffee</p>
                                    <p><img src={SimpleCheck} alt="simple-check" /> Vanilla Whipped Cream</p>
                                    <p><img src={SimpleCheck} alt="simple-check" /> Chocolate Biscuits</p>
                                    <p><img src={SimpleCheck} alt="simple-check" /> Strawberry Syrup</p>
                                    <p><img src={SimpleCheck} alt="simple-check" /> Sliced strawberry on Top
                                    </p>
                                </div>
                                <div className="custom-favorite-price">IDR 30.000</div>
                                <div className="custom-favorite-button">Select</div>
                            </div>
                            <div className="custom-favorite-menu-card-selected col">
                                <div className="custom-favorite-picture"><img
                                    src={Favorite3}
                                    alt="chicken-wings" className="chicken-wings-pict" /></div>
                                <div className="custom-favorite-name">Chicken Wings</div>
                                <div className="custom-favorite-list">
                                    <p><img src={SimpleCheck} alt="" /> Wings</p>
                                    <p><img src={SimpleCheck} alt="" /> Drum Sticks</p>
                                    <p><img src={SimpleCheck} alt="" /> Mayonaise and Lemon</p>
                                    <p><img src={SimpleCheck} alt="" /> Hot Fried</p>
                                    <p><img src={SimpleCheck} alt="" /> Secret Recipe</p>
                                    <p><img src={SimpleCheck} alt="" /> Buy 1 Get 1 only for Dine in</p>
                                </div>
                                <div className="custom-favorite-price">IDR 40.000</div>
                                <div className="custom-favorite-button-selected">Select</div>
                            </div>
                        </div>
                    </div>
                    <div className="custom-store-loc">
                        <div className="custom-store-loc-title">Visit Our Store in the Spot on the Map Below</div>
                        <div className="custom-store-loc-paragraph">See our store in every city on the spot and spen your good day
                            there. See you soon!</div>
                        <div className="custom-store-map"><img src={WorldMap} alt="map" /></div>
                    </div>
                    <div className="custom-main-title">Our Partner</div>
                    <div className="row custom-partner-logo">
                        <div className="col"><img
                            src={Netflix}
                            alt="netflix" className="custom-partner-logo-netflix" /></div>
                        <div className="col custom-partner-logo-img"><img
                            src={Reddit}
                            alt="reddit" className="custom-partner-logo-reddit" /></div>
                        <div className="col"><img
                            src={Amazon}
                            alt="amazon" className="custom-partner-logo-amazon" /></div>
                        <div className="col custom-partner-logo-img"><img
                            src={Discord}
                            alt="discord" className="custom-partner-logo-discord" /></div>
                        <div className="col custom-partner-logo-img"><img
                            src={Spotify}
                            alt="spotify" className="custom-partner-logo-spotify" /></div>
                    </div>
                    <div className="custom-testimony">
                        <div className="custom-testimony-title">Loved by Thousands of Happy Customer</div>
                        <div className="custom-testimony-paragraph">These are the stories of our customers who have visited us with
                            great pleasure.</div>

                    </div>
                    <div className="row custom-review">
                        <div className="col custom-review-card-selected">
                            <div className="row custom-review-identity">
                                <div className="col-2 custom-review-profpict"><img
                                    src={Profil1}
                                    alt="viezh-robert" className="custom-review-profpict-viezh" /></div>
                                <div className="col-7">
                                    <div className="custom-review-name">Viezh Robert</div>
                                    <div className="custom-review-from">Warsaw, Poland</div>
                                </div>
                                <div className="col-3 custom-review-rating">4.5 <img src={Star} alt="" /></div>
                            </div>
                            <div className="custom-review-testimony">"Wow... I am very happy to spend my whole day here. the Wi-fi is
                                good, and the coffee and meals tho. I like it here!! Very recommended!</div>
                        </div>
                        <div className="col custom-review-card">
                            <div className="row custom-review-identity">
                                <div className="col-2 custom-review-profpict"><img
                                    src={Profil2}
                                    alt="yessica" className="custom-review-profpict-viezh" /></div>
                                <div className="col-7">
                                    <div className="custom-review-name">Yessica Christy</div>
                                    <div className="custom-review-from">Shanxi, China</div>
                                </div>
                                <div className="col-3 custom-review-rating">4.5 <img src={Star} alt="" /></div>
                            </div>
                            <div className="custom-review-testimony">"I like it because I like to travel far and still can make my day
                                better just by drinking their Hazelnut Latte</div>
                        </div>
                        <div className="col custom-review-card">
                            <div className="row custom-review-identity">
                                <div className="col-2 custom-review-profpict"><img
                                    src={Profil3}
                                    alt="yessica" className="custom-review-profpict-viezh" /></div>
                                <div className="col-7">
                                    <div className="custom-review-name">Kim Young Jou</div>
                                    <div className="custom-review-from">Seoul, South Korea</div>
                                </div>
                                <div className="col-3 custom-review-rating">4.5 <img src={Star} alt="" /></div>
                            </div>
                            <div className="custom-review-testimony">"This is very unusual for my taste, I haven't liked coffee before
                                but their coffee is the best! and yup, you have to order the chicken wings, the best in town!</div>
                        </div>
                        <div className="row">
                            <div className="col-2 row">
                            </div>
                            <div className="col"></div>
                            <div className="col-1">
                                <div className="custom-leftarrow">
                                    <img src={LeftArrow} alt="" />
                                </div>
                            </div>
                            <div className="col-1">
                                <div className="custom-rightarrow">
                                    <img src={RightArrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="custom-promo row">
                        <div className="col custom-promo-title">
                            <h3 className="custom-promo-title-head">Check our promo today!</h3>
                            <p className="custom-promo-title-paragraph">Let's see the deals and pick yours!</p>
                        </div>
                        <div className="col"></div>
                        <div className="col custom-see-promo-button-container">
                            <div className="custom-see-promo-button">See Promo</div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>

        )
    }
}

const mapStateToProps = (reduxState) => {
    const { auth: { isLoggedIn, userInfo } } = reduxState
    return { isLoggedIn, userInfo }
}


export default connect(mapStateToProps)(Home)