import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

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

export default class Home extends Component {
    componentDidMount(){
        document.title="Gargyo Coffee"
    }

    render() {
        return (
            <div>
                <Header />
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
                            src="https://s3-alpha-sig.figma.com/img/8f54/38af/1614e4f251061e5ddda15a8106a888d0?Expires=1655078400&Signature=f9aLA4rFvWnBb5-ojH4iPiWw8u6T6slhRoPC~KjwiF9zAdwSTkNjVTOpUzM3lkxI2qfxo~izBtzeb5aqpngZNXhwCwxFFrAnq293BxhE3XU3CFvSYm7MtVJz0QKzmqVljIKcqcE4nsL4MOR8VJU2uwH0bSGhMHZKjqg7DhVTy1e1ZNsNDtxBiO5CLrmLcLyW4WnAPS5plsoCTgIdU7B9pNnuPWLsGvYTTSeuYkv09AKD-7r0vKqOQiBenlaJP23mAn2OpT5jU4rI0Z7XdMBy-h45-EzKM4yBocAzqEh0Lcw3pSmZZK~hVseHlHXdDHt9LAB4og1HOEVCJ5DYxo9Sfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                                    src="https://s3-alpha-sig.figma.com/img/b8f7/0e2a/0d98dd6a1ea259209e5b715734ee5a22?Expires=1655078400&Signature=Ku5NwlHq7DY42~Gf49T-6vE75VbqmAlctzuxIAyFuBJOYarY7nY-qKLqe5OB~RDnJ~6Wzf1PHnJyE-l-drIUFxKxoY~tBRHNWAxk21bxNZ8PYJZvJDK5drHUEo05g7LGW-PhLOCYo~nLqBMbpqwrV2Frglh4Zu7QvmDB1kyH8StAEhjSGPlEmVYaQaBl4eyCilzQ0b-1PqB-P47oy4OFd8RQbu1DajDODy5CbIH9~C8wycytHd~gqS4TOSHpl~8Jfunx2p9yob-GopL-qzZRgOt2bwGlwh7eW~wmPE5he5MxaVQyrnoSGEhbuHbescHb7i1EZ7ZRZ7yAU9QyYLKfCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                                    src="https://s3-alpha-sig.figma.com/img/1195/e3b7/a63f096d3edcb57b0bc937039acae071?Expires=1655078400&Signature=PllLg0cxmf16Ywhe21EYuZ~AgXZYelBK4qIsRMhP47E1dYbs7P0uJrAJIFvLl~ccwGhF~2zVFMoU9lq0dHlsBM7S5OGQXQyLu1yktpyAI8jz3aDoqypdxe2H9NHtjKUcxDpAlHsqQDeGdLWKgnYajrz9exSaUWPoVXfO2zA4~c81X8bdnC~IjOshDGtlyDOc38~CkcRvtLxU3jJdhjxE6Ck9Te3MOCXlLiHobZGclLlaVZFRlFLmxNbvE47pFB46ZwRe4zAkcQni9WXJHGsut8Mc8w3gxxwngTLAPcXgdQcwhVO9GWWcbLVhXju8OnMqlHlT43HZg1ldpsky6kyNaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                                    src="https://s3-alpha-sig.figma.com/img/01c2/516d/130f4255d3fd6c5a42948d74ac2a14f4?Expires=1655078400&Signature=JOuvq4K-bHg4GIiQvqfcc6ys~J3ItwbJS1dOp81ah6UxrsJEG5uWQNeAdh6P8r7zfQ7Spk~Fi9AEBeDF9GKXQp7uRkH2g9rNmL6klaAd1qVIYe7HJkLQyulHuK5x9OQZ9wrucOTIFgxqapPJhMMFSI0YUB84sDPvhESCTS10~N~ziCPsL2l1B1CxQ6fvdfPuQ~FRYlxwWOzhhZi9-vRu1DIFqJCTivjQzbCIL3clPR6RiQ7qthuVmcAtMoHsC2JUxDmoBpBPD8MlxqltzsBTlzUizl7Sj2ZHNXXVnuisI3t4Lc~DMebFP8Sg35gb0dwI0Yw0Z--AFlBqZJMdUKDnmg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                            src="https://s3-alpha-sig.figma.com/img/fbb6/95dd/8c01553b064b0be13807f8af91e5941b?Expires=1655078400&Signature=ecWx5rByJl2tMKr5UlKzcEm8HzrQt2J21PGt0vVoHL-0yzZawTTzL8YJTXaKo8Q0LtH8A1MhKKHiQSMBCS2KHvlnJs4YHLLcT4GCQtaPh4ZXdandTjjQogLLhcNQ25dLTZfz0swVXie1h2fcxqFu0N1gDdBneIgbBBwmHw2VpI~6EkSCIviO5XduYjLUDjmkhGeDqOOCOYgpj1ZeYr6iCk1CurAnaUzC9~SLGapnqs2MpkLKz4lBiJYSV3F~dLkPDgX2tF4qCQlAGWKwsRLibyKbx25QOloK9QU6GFSVQyZ1ZsLLLYLNxTOOA4xrSJWiO4bewREorXQelP0ws3HO8A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            alt="netflix" className="custom-partner-logo-netflix" /></div>
                        <div className="col custom-partner-logo-img"><img
                            src="https://s3-alpha-sig.figma.com/img/e7e9/7f2a/15a82cbac8fde655da7a0b48b4a0d093?Expires=1655078400&Signature=TLvJ3r4H6Yggda-elRsRGMWf9tuBeU~XqANJJU2JCJnPE12RwnKADi-EukFxfKZFdaI6uWN0UKOwW8Z4v16XN00z2UdupzE~~uVOPnVHsCJ~KQeuWMZs2wylWO8mdRPUJckxAAaSFSAzteavFQLps6wV4-IAr6vuAymTGB2cIYH-CD66x4k7KUHIY2PauIKcIOvax2sA9nDS0l67Am1rozeXAIpsPbuEp2cYALdE96goaearfBBnjtmTQFlp2Ks-cXdi3ZhFadKkG3nFWJ6CzJWfwvY6RUtVzaARQBWfG2rjx8YOJD6cdaP08RlE95hodoXfe862S0k452DBUwgygA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            alt="reddit" className="custom-partner-logo-reddit" /></div>
                        <div className="col"><img
                            src="https://s3-alpha-sig.figma.com/img/9b3d/1bce/29eea1a4afb6e717243bc96076cc6750?Expires=1655078400&Signature=YNOPd~f5UoXt9ZnqUEkicyiNvv-y2~2LM8gZoYXC151WRMR21Zyg4PtYbHkuqPoPslUux1Se3IDw202zPpN6J4kJwI0RbZdOwjO2Q~jZ56crKff2hOkvUvI~loBSfkd7WQ7ImNp21D66klm924S8Pzj3eOHWq28qhK2somBbTptv-7T0etHTwsPPQCwla7VCaqMGVV6BrcjRJooAVlM37cVFgfzKUtpCJqyU0N5WWiwmZ6wriGX0jnt~-9hkyGv~PB3LpabrHlAtPxaUdPcMNUPr2H6BuqQUe5sx1BuF3~8tChKdEZM08o0b8A2~KZ6xx4GTpS6WAVugnftDVKQ9Dg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            alt="amazon" className="custom-partner-logo-amazon" /></div>
                        <div className="col custom-partner-logo-img"><img
                            src="https://s3-alpha-sig.figma.com/img/2607/51ed/f193c9a610ba070a7eab9958624aa513?Expires=1655078400&Signature=RI0~nvb7tJJc0UMMvvQ48FlhOLyY7H8Ke5p~cjmY7HtRadJb6rwmzBdvHVs~1~fhExzZiT6MhCoqG1ILZRoSbbVpTKwouSrkFQm0EGwucoxjbq-C2twYLHMdnFEbMXCMaeuzUBqm8KL0IWuiaLR-rasi9fTCJp4TXOGtgWScmWBGkHFywwLzo5OSO5~d9UR2fSZWs07jceCtzKA~4I1RMgnMq68u5wtvzqk3PQZmOmyGHbADQ1UGAeS0t~HJXpEfQaq9tQkXvgNXQkwjW1PAXcpYOTl7Y6c9jTy6fsQXOFY2cftiVzfwl~9VD4ym~IVneXp9C02gwgiyawcea~~SWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            alt="discord" className="custom-partner-logo-discord" /></div>
                        <div className="col custom-partner-logo-img"><img
                            src="https://s3-alpha-sig.figma.com/img/0b7c/a72d/624c77047ed5c2b5194caf5e5e1a00f2?Expires=1655078400&Signature=Y8D7z9xnclrx0lN-pt6v3ldlVZg-rkNtm2-yW-W3pwhWXrsfnSLzsjrBf-lulCuyxsDOneX1-cDk8HXM6X6nO4QhH1BA8Dsp~3tVb7letrZPvslC6qqLXiVk~bLiP4tekI2qU-kV9KB9V-vE0-lYGA-0nXk0h8p~IyDrBz5h4bGGD4FCf5N7KiijCmU3FNO~Jmlqg7bYGHJPNKjm1c0qpkgVrDVz8Ciik-te0Rg4edzIltZv2u8i4nBQ2m-vEGP8RQ~Ys0qm8aaa9s4lNcqSc-88n1BFJlujadpP2Wx7qEG0DTgcInuLMgSfdCIAVs3lIcD6Yjq-TeaJ4VWHbrzQ9Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                                    src="https://s3-alpha-sig.figma.com/img/7b52/c50d/64efec4c75c3e34f6408021730b20d9a?Expires=1655078400&Signature=HMmN8qXtMVy0q4LUjl7HiMXTYtVnIjw4s4x2kG-grHIFf1ZSqf7Qnn4C7q1H6sAjF56m0lhFXal1hiove~yeHgjpx1LhJlPoYOz~yBfwLsEjcbG5yn2LGMfPr5PE~6nrogcXHmSKG4HqS9gWy9yHGBgvuf1vxJI61QckOfXCDelyZkbTu6VWBHQHWAO4mrQsQWYPXSzyJ8fPuo4ZsXKh9YjySw7B0fkzSOoOf0YbrjNk2ocxdbhC2F9O9TMP~0O2KSovBherypes0JPvvL0oiLoV7nGus~AmKcT9sS-coxg-cDI4O0tzz-S~pBnpq2cZjS76qSce1lC5yvfpqb~z0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                                    src="https://s3-alpha-sig.figma.com/img/4efc/2b65/3098956f84b1822f2eb7e8ed84a31750?Expires=1655078400&Signature=ZQk5SGSmoJmHUmWnkAlOdMgandg1oSvVqAEEaeEexOvBU1s8AjxevylfHGSnrrY9oYtS5s6FPplD2ojF-lcuQCV22-fGJuus2uhVRrHipT7NwYvSYI56Fe7C4ReAOz~6It8qAodX03BX9h1zevug5xXjRNxrVcIYiRrR-oOoSm84QSfEI1aD1WqTdcyYiZtLXEfzh0IidOoyZ~vYR3GrIwfSZ168Fyc4QeAzygPnXX0q~GTtfFapEQyS~SCLhGOBFrA0R9HF1bI~F~cMExCQ~dEm1so59eU0IBvMMRSjc5SC95nYWyUG5l1VoQbI4RMOt1nV-ifrTMSUOAx8zEsfrA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                                    src="https://s3-alpha-sig.figma.com/img/b0e0/b9a7/2a3108aed3c607327c6c1eb79c47366c?Expires=1655078400&Signature=hCOkCNoUQOgAupph~gOHdS8lKfe4K~VhEk0G8~hewN5jqrrlEExJWuSMU9Um6NXbpF4GsCDpDSR0A9fFZgRCxk0uOdgnUIkOGipUVecHkphDfnEvahbcpfzX8ve3Aym5Iuu0VC-h~8bsV-80B-gK9NgaakOccdz2mGGnzulqJ4bt0S1k2vIoaqYdwpgvuMVO4JwI3oTp-MBUMO54QT5QHYHLXvrQEZkv7MVT-PWk0C9SqaDRXWGzUsUkxOglroiFdCDpndMVp-tJftJj4v3MWrqX106a9sBQwEcwbFML4IvoGyFPi4PHrhdnaZL~IyULFiZKwAQ2O8YWVo6EHRwd0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
