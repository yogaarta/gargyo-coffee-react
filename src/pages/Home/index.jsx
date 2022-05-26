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
                            src="https://s3-alpha-sig.figma.com/img/8f54/38af/1614e4f251061e5ddda15a8106a888d0?Expires=1653868800&Signature=U0Fa1aJCLpx4Bnr1sclgCqltfE8NcBcr7qefWP2iw-lrcDFjcdPZX00g25LFo4cgHRoD9mLz67lV2vXmT~ryR1OzaCF8-6SKshQjqwVWHqe~XOwKGnccTvVim~xMqwq8FS9O~CdA5A~Al7zG42WNUxipy~rOok9LmVBOFx6H-oPC5D5UmIuLtgA560qWpwCgyPFn6z5ph856yZUYz-f-qJbCt~ZAOBp46h4jJq2mkEHioORm3Imm9NoSLFnQTtRbulOQJ4SAfLHX8QTfUL~4st254r89QlrdDXlQNWJntuTdUSRFfiEHnBUOyS6kNP54JxgJ80MCLKPhwMuBzu-~xw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                                    src="https://s3-alpha-sig.figma.com/img/b8f7/0e2a/0d98dd6a1ea259209e5b715734ee5a22?Expires=1653868800&Signature=MY~Ls5FR2QCHCNv4hF7wQaNTOvEjbXcV84ffnRwsbhlsaQyciHvFyV9FsLq415uH2x5B5JfzvCDIAIox9hqX5Gxd6iD9YgTRuxUZ6GPEFnfs-534pbe-yVei0uU44leTGQe4JrCtU~oMd2d5W4vqg-MOh-oMJMpCCDCluIOD4TY4~0sGaHJHeJ8STOzxGhvNWXqcxg3VmRjmswrlMjVla1Y0jepIqJemfnkXmBnmoXo6Sr87jnSbYhiX5MOHfp6X6Iv2J5vBsl2tg1cu8c1UqlX~kOwXY1LNQBESmzgO1yOEcO3N9xpitZ1~xcJn9XHMAQDo8RtobOC4M1RNlhIMcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                                    src="https://s3-alpha-sig.figma.com/img/1195/e3b7/a63f096d3edcb57b0bc937039acae071?Expires=1653868800&Signature=Zd~gwc-473VFDds9EFsYwEPK0j0DmZ0Gf6ORbB-hNu3fddLK2RMVGyN4kuY9qnwqYT7aKPm6zrO9SkMoM6H1AmAJm9H1Oz8eD9WCB8jjnobkQdkQBSeFeyHhCmDY78fn9HCrRSUWjQz854R8VDTg4mVUPR8ijRFgT3x8CL6PkbbjmZxgN4qu0U~qDnMmp1pd5DutO2J8KbQDhf3gUTrRtvn3oR68lFU9QV~ukF3FbQeJluoujthaWgx~lbuJamVCffXQ1kw2xm1pqsHjsTMakxHlP5vLtAmrrwnEfCUpXTa1QWIQhJDNcGBlqZxSuBegkyrUgeL-NUgpPyvIdwnBuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                                    src="https://s3-alpha-sig.figma.com/img/01c2/516d/130f4255d3fd6c5a42948d74ac2a14f4?Expires=1653868800&Signature=UVNXhvfL9gyOpKOCkpHG9uR~YgGw0mi~T8nBvb1h1qStaBbPEwUJA7sPzhr3-zdy1g4YRFkE9VaY62i68Jmyncih0yfKFVh1BvZh20VgR5W5TSTKk5xt8gCqoypfEWkUH4awbp-6iv45w~ABinwjPZ8jxmtO8hcN-RD5~VqBjJ9THLWhWqG~vE6Zip9a8lCuZEwfXrUdSKEcbglfxQnUFYfcRZLnkH2JTy2R9Nft~jDGheV9d9xOjbUnYPjiUjsIdD~iuW88a0gvLXbs8DIH21jLxG4uvrz6RLwNXwhO41L5zMrhGlLR4-d~wxjLpdZSGx8dCp~IMlflF-ZEZH5c2Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                            src="https://s3-alpha-sig.figma.com/img/fbb6/95dd/8c01553b064b0be13807f8af91e5941b?Expires=1653868800&Signature=ZpXP20WnLcPJyhQTJfK3gCf~tyhGDVHNVZW~Db3MqsmAK6Alkm35pBZ~j9yUkr19VXF7VbPmaa0JEbfP-T2RCzQDCzod3D8YNIvZZAKwCkkEncM5LKsqiprxLuFGv1i4Ad17275tE1cO3QhDa~x3sCaP90bxWb4U7bToomTpOGb1Ps6P1yxLEGA7KIevte2IzPLMHQcuOWOCJXbUu7dwj7nvl2a8DAxkiBpFI3hsvrMnvEBhn5Fw8MhlGl4H0G3ifOeMNf33jCVnuLurXibfBE233IAagR~DqF8KotxuXyEchs-cuay0Bizffzh4~LnxHFwbwZdKZsA0aNeWwF3IfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            alt="netflix" className="custom-partner-logo-netflix" /></div>
                        <div className="col custom-partner-logo-img"><img
                            src="https://s3-alpha-sig.figma.com/img/e7e9/7f2a/15a82cbac8fde655da7a0b48b4a0d093?Expires=1653868800&Signature=VHKVr5jJxjicv0ir95MhzQa0b3onwN0DSDimJmTIcDGIv0u-7ocwDvrEedRpYUPl0cymA7JGaNr2NsBpxwtJ7RXKglTL7mT6nN-bT1BN54YPHnpaC4dp3JF8Y2bXNMUyQo1HVthpPmrHjsnR~B245SOna-tWjvVFwNR3ON-NzyRATy1ldP19S~R0~ElvGmnMFmz7D4kD7awZu4JW3HsDmR0vXUdC4w8mgHvTjDgJ1UoTIkNlkgn9wjhySzhTkDs114W-p7SESM02L3ng0dDA50raltx9bb5MEn~Uju12cVBfPC3K9dtRzkTVu4qm4qbjP1bk3Z1Nzmqp96P9h33L2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            alt="reddit" className="custom-partner-logo-reddit" /></div>
                        <div className="col"><img
                            src="https://s3-alpha-sig.figma.com/img/9b3d/1bce/29eea1a4afb6e717243bc96076cc6750?Expires=1653868800&Signature=UJDvP098ZZMNWW58kNeI-jM4riD0wrpkQUA3pZJT17uAEF0jppWIb8KG6icuUD7X-CtFdUyZcfx6gcBuXNevPiRCpp1KsEeWByFaetGlTdXBCWGX7siOAgY4xBIlPt5~FCp6Mhk-QZZ37fPSI~AhnANYLfZiMeQy5lc4a5tPGkbrbVqB8FUtU-u1tBN-Y9IGE9hj1TFSeFyjPz-J5HcSXyysv1yNxn4-ltijTGeUt0UG44PyGhtgR1103yU57c00iwTwxH9LidNR64FMNWFIA6Sk8a6fdsYTDuc~xNeww97sUl0EjjYX4vD4WFhNyqEGh4iE33Qaxr1A2dF-M0exGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            alt="amazon" className="custom-partner-logo-amazon" /></div>
                        <div className="col custom-partner-logo-img"><img
                            src="https://s3-alpha-sig.figma.com/img/2607/51ed/f193c9a610ba070a7eab9958624aa513?Expires=1653868800&Signature=F5oQRskzbTSUmw7W5nCiYA36HmFdGJEd6H79NyuMFEkYqgQvuON0Hylcp4pm99DC4~z0rp4GFpZeLoJ5ZhBc-04zAGaZ5Q5w-q9dFpCcgChK-0xhDqnw5jx2i7cWmwvqkZ9fnExC8q~wlqjVGq-GcXBI6lvAvPYmAnTbkcvNdF9x~y4pGS0zlcTMYFrUhC8CahHFqaOFuxG4oWMen6nBeNrukVd1B7Thx4dH-XDerS9C5L6fLPJ22~IEz7sCUZmPdtR5JYOUxsCzVaCJPVpE77r6yakTZbvn0BIcqreWe1dxg41cigHtO6qaSVG3fEgJ9QbdDGY5D0ZofcIe3ahwZQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            alt="discord" className="custom-partner-logo-discord" /></div>
                        <div className="col custom-partner-logo-img"><img
                            src="https://s3-alpha-sig.figma.com/img/0b7c/a72d/624c77047ed5c2b5194caf5e5e1a00f2?Expires=1653868800&Signature=KUNgbumdaNdhAY7OdDphCCYl33EeGYgCsj~Tmq5JynHFNuOOD1nIHfdArd5WWFBJD0e3UbuOqriJ2YfUaojl8BYPKcufLv~ak1~2TzuY19KXlluAV2WyWjNWz8O08xVgC9wl-EYVCqB4FaoRMt6NNaov-MgqPJ4RZWLoU6yvk3iMwQlwr4OBGuZ36pc2sgFT~f~NuQ426FFEICZQ05ujVMb~B0qCsfLxJk6xH1BrpUk3-bROxF6fmT41ucKFcI9~9smI-ovYv4KEuptK-aLObA0GQn6i2sDqQPljPB4vwMa2YDBXqwGxy5eslIu9XVn0R1uHUMrof8UyYPLwf1woAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                                    src="https://s3-alpha-sig.figma.com/img/7b52/c50d/64efec4c75c3e34f6408021730b20d9a?Expires=1653868800&Signature=hh1vMBcO1O5K31CsTU61YSmDl1MWncu4SVy~r-qgoFP6MugXuyVkYz83bLlPx~uPSHxSuI-hvZRK1llvoGRGYF2aJ0LMFeDqYX~qJNuGe8sIZ3QdATeANSvfBEs5u6Ozmv~bk6GErC9mq~uc5MvCimlKxbwmtqmh7St1NBYXYv196hIF8aJZSByAr1FE~gz8uS8Ta~sSQynus0lKstUwwIKyA-7vMnmedpfih7xP5SM2ESmDW4WTQs68Q6cJVIDrF1TTIxhq~Z0rKsLQS8ovKHa5OxjaZWab0Wl9NcGAX~8ZRiY6mA-MvqoNDDHHrtVB-cygJiM8XHMUIno4udcQJw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                                    src="https://s3-alpha-sig.figma.com/img/4efc/2b65/3098956f84b1822f2eb7e8ed84a31750?Expires=1653868800&Signature=QAm0Vh6SoJnGaCMC3oPRebw89v8gT9girJGCIHItoOpFwF1MdfugpuRRShBRO6ANu6NeA4yvQayi~SMyUu7SOlRoOhaBClIaZpuiixtyhad0oFLy2XAgo30HYrMllkIbfpyeozS8Z2Yics7uyb26AY9kyaMOYXKbeZ3FTcGTJ7UUZYvlcgYmgFNQxX2FDmkumf83ARdcOtLfekDy9RwDqOXIiDcy9z1XaPeoukonNw16GJYj79DHYhRwBKYFLfEJycd5M46wu-MaL4g3LjkE0VK~FP~Q~U1PNNJ8U~YnZoVYaAMxr88UvFfivPBlyNdXavnLLNGGQelEtM-~QxlM6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
                                    src="https://s3-alpha-sig.figma.com/img/b0e0/b9a7/2a3108aed3c607327c6c1eb79c47366c?Expires=1653868800&Signature=biazz0F~UDDVdjykRn7taPrjRcF5UsNFEDJjtrDezJREsJHMIFDIMkkH9ru22ZHVCAX--mFA8RuGMbGDKjZfc2LjuMbwPWhoVZj2wnnliKwWv0M~Ol~9HfgepOxW3UJGYYGdRgfhQelh~AoH6hG53DFRG7XiHY4L5Lfa0iB56CWl3ZvB8cw-tNMY9M4q3RwBuWHXoZGGpBwMvgWrDk~pQFLtdzZibiOyhclSBF7iObq8QhYMs8rJ-LjaIV5Zob3BcJ5xnvHzA9zApjmN9hW1Xxg6gSvEIkunkQXByc2YHNxNf2FX-p2LUqr~fJUZX789Kz43UY95ZMn9ectxTGIQOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
