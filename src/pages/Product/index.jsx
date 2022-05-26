import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import "./Product.css"

export default class Product extends Component {
    render() {
        return (
            <div>
                <Header />
                <main class="row custom-main-container">
                    <aside class="col-4 custom-promo-column">
                        <div class="custom-promo-title">
                            <h3 class="custom-promo-title-head">Promo Today</h3>
                            <p class="custom-promo-paragraph">Coupons will be updated every weeks. Check them out! </p>
                        </div>
                        <div class="custom-promo-card row mother-day-card">
                            <div class="col-4 custom-promo-pict"><img
                                src="https://s3-alpha-sig.figma.com/img/5272/76a9/8d88c62a29339c6f83f29e8f40c20178?Expires=1654473600&Signature=TUEQjdAA87kU1ApBgKY2V0FaD4FWNpaQjMyDhuKbLnyDH9DYhBxDrJV-SvgEq~pwZarvV6mQab17UL5Xva-StgGbmHaVcdQ0~7s4i-VYb66f9yrEXaMVz07UIoqOI~gc-NUV0TZVbxpIYOLfcaD8Sx9P5RqiqrjA-heWLoxqB7mkVbUyiI0bBnHhJQD5m03B51dZYRLjm3HT~Sd3yteUjjopTH6Kv0-jDBLznj0AeNxxYvhOUV~26EFJgqUQMEh-hk748c2lbbOGJOIWfNyR6rnzux9ce0nYlJ1MSI25bZENllkaJwFDQFPaTsN2HJX~UUIhbKEUjCHWHwG0BT3Z0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                alt="mother's-day-promo" class="custom-promo-img" /></div>
                            <div class="col custom-card-text">
                                <p class="custom-card-info"><b>HAPPY MOTHER'S DAY!</b><br />Get one of our favorite menu for free!</p>
                            </div>
                        </div>
                        <div class="custom-promo-card row sunday-morning-card">
                            <div class="col-4 custom-promo-pict"><img
                                src="https://s3-alpha-sig.figma.com/img/ed87/b600/bcd624c9cdfab5f48a586cfe014785b0?Expires=1654473600&Signature=VgMpH8i1ujdkr0-GHAsvmHjvLuB8ByLAipCa4MgqaCMHvP7jjW0K49zCH0OIw4J9FAoOviSusT~blS-3LNfYJKC3pHauuFbjpV7jcNF5--4IvRaR7Dqw0xlDF5PNYXvGzSmotv-BMsKZpMRc2wixLWWplepKX3Q47CRJW7z5uLmM52wmVKDrT4cP5AAWybEoaKFHMNXykNZUQkmj68jtTehNjvctVjv04N-y2IiMbRCxYqGfcxU52hg68xyA8eD~Ix7i6meCHxtrFibC7bac2aMMs9cGnzCxxi8GlCpwcnNfyw~bI36Pu48mVOK23eUySOHYdu0VnKNdGNVf7GftzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                alt="free-sunday-morning" class="custom-promo-img" /></div>
                            <div class="col custom-card-text">
                                <p class="custom-card-info"><b>Get a cup of coffee for free on sunday morning</b><br />Only at 7 to 9
                                    AM
                                </p>
                            </div>
                        </div>
                        <div class="custom-promo-card row mother-day-card">
                            <div class="col-4 custom-promo-pict"><img
                                src="https://s3-alpha-sig.figma.com/img/5272/76a9/8d88c62a29339c6f83f29e8f40c20178?Expires=1654473600&Signature=TUEQjdAA87kU1ApBgKY2V0FaD4FWNpaQjMyDhuKbLnyDH9DYhBxDrJV-SvgEq~pwZarvV6mQab17UL5Xva-StgGbmHaVcdQ0~7s4i-VYb66f9yrEXaMVz07UIoqOI~gc-NUV0TZVbxpIYOLfcaD8Sx9P5RqiqrjA-heWLoxqB7mkVbUyiI0bBnHhJQD5m03B51dZYRLjm3HT~Sd3yteUjjopTH6Kv0-jDBLznj0AeNxxYvhOUV~26EFJgqUQMEh-hk748c2lbbOGJOIWfNyR6rnzux9ce0nYlJ1MSI25bZENllkaJwFDQFPaTsN2HJX~UUIhbKEUjCHWHwG0BT3Z0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                alt="mother's-day-promo" class="custom-promo-img" /></div>
                            <div class="col custom-card-text">
                                <p class="custom-card-info"><b>HAPPY MOTHER'S DAY!</b><br />Get one of our favorite menu for free!</p>
                            </div>
                        </div>
                        <div class="custom-promo-card row halloween-card">
                            <div class="col-4 custom-promo-pict"><img
                                src="https://s3-alpha-sig.figma.com/img/e25b/8a97/346f786692a9f23c7fc959db9981ae5c?Expires=1654473600&Signature=fgAWcrLTmjq9ftQX3iF552Pr1tRRcYDAniWJ7DiVMtsyQqSuhgSVLgiBP7bBrgItb1Np66Zfv0EsWIoj7zD6teZbiXFhw8PE2a9grc1aOnLBdkjW7tT01jLyUuC-hgVfmT7x2a-TT25sC71jBJQJ9dFgYr4SCp70PQE4k9mBLaw3XViIpZlOuh~9qWLv5G30YsBnc8uzOgaBs5S8ZAtiTvf3ngm4ecIabKKTbKfllTkFJd-mStMTGBmaRQo-TYZBSSHJ~iDHOO8sogjRvl08r-dKubkIZ1LaR1KZd5o2Vnpky40dnMo-3gxMmXUyWRRY66iL7j0lPu-0GGQ0QBBGJQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                alt="halloween-promo" class="custom-promo-img" /></div>
                            <div class="col custom-card-text">
                                <p class="custom-card-info"><b>HAPPY HALLOWEEN!
                                </b><br />Do you like chicken wings? Get 1 free only if you buy pinky promise</p>
                            </div>
                        </div>
                        <div class="custom-apply-button">Apply Coupon</div>
                        <div class="custom-term">
                            <p class="custom-term-title">Terms and Condition</p>
                            <p>1. You can only apply 1 coupon per day</p>
                            <p>2. It only for dine in</p>
                            <p>3. Buy 1 get 1 only for new user</p>
                            <p>4. Should make member card to apply coupon</p>
                        </div>
                    </aside>
                    <main class="col-8 custom-main-product-column">
                        <nav class="custom-product-nav">
                            <ul class="row">
                                <li class="col-3">
                                    <a href="#a" class="custom-product-nav-active">Favorite & Promo</a>
                                </li>
                                <li class="col">
                                    <a href="#a" class="custom-product-nav-inactive">Coffee</a>
                                </li>
                                <li class="col">
                                    <a href="#a" class="custom-product-nav-inactive">Non Coffee</a>
                                </li>
                                <li class="col">
                                    <a href="#a" class="custom-product-nav-inactive">Foods</a>
                                </li>
                                <li class="col">
                                    <a href="#a" class="custom-product-nav-inactive">Add-on</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="custom-food-container">
                            <div class="row row-cols-2 row-cols-md-4 g-4 custom-product-row">
                                <div class="col custom-product-card-container">
                                    <div class="card custom-product-card">
                                        <img src="assets/images/tomatomix.png" class="card-img-top" alt="veggie-tomato-mix" />
                                        <div class="custom-product-promo">10%</div>
                                        <div class="card-body custom-product-info">
                                            <h5 class="card-title custom-product-name">Veggie tomato mix</h5>
                                            <p class="card-text custom-product-price">IDR 34.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col custom-product-card-container">
                                    <div class="card custom-product-card">
                                        <img src="assets/images/hazelnutlatte.png" class="card-img-top" alt="hazelnut-latte" />
                                        <div class="card-body custom-product-info">
                                            <h5 class="card-title custom-product-name">Hazelnut Latte</h5>
                                            <p class="card-text custom-product-price">IDR 25.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col custom-product-card-container">
                                    <div class="card custom-product-card">
                                        <img src="assets/images/friedrice.png" class="card-img-top" alt="summer-fried-rice" />
                                        <div class="custom-product-promo">13%</div>
                                        <div class="card-body custom-product-info">
                                            <h5 class="card-title custom-product-name">Summer fried rice</h5>
                                            <p class="card-text custom-product-price">IDR 32.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col custom-product-card-container">
                                    <div class="card custom-product-card">
                                        <img src="assets/images/creamyice.png" class="card-img-top" alt="creamy-ice" />
                                        <div class="card-body custom-product-info">
                                            <h5 class="card-title custom-product-name">Creamy Ice Latte</h5>
                                            <p class="card-text custom-product-price">IDR 27.000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-cols-2 row-cols-md-4 g-4 custom-product-row">
                                <div class="col custom-product-card-container">
                                    <div class="card custom-product-card">
                                        <img src="assets/images/drumstick.png" class="card-img-top" alt="drum-sticks" />
                                        <div class="custom-product-promo">20%</div>
                                        <div class="card-body custom-product-info">
                                            <h5 class="card-title custom-product-name">Drum Sticks</h5>
                                            <p class="card-text custom-product-price">IDR 30.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col custom-product-card-container">
                                    <div class="card custom-product-card">
                                        <img src="assets/images/saltyrice.png" class="card-img-top" alt="salty-rice" />
                                        <div class="card-body custom-product-info">
                                            <h5 class="card-title custom-product-name">Salty Rice</h5>
                                            <p class="card-text custom-product-price">IDR 20.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col custom-product-card-container">
                                    <div class="card custom-product-card">
                                        <img src="assets/images/friedrice.png" class="card-img-top" alt="summer-fried-rice" />
                                        <div class="custom-product-promo">15%</div>
                                        <div class="card-body custom-product-info">
                                            <h5 class="card-title custom-product-name">Summer fried rice</h5>
                                            <p class="card-text custom-product-price">IDR 32.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col custom-product-card-container">
                                    <div class="card custom-product-card">
                                        <img src="assets/images/creamyice.png" class="card-img-top" alt="creamy-ice-latte" />
                                        <div class="card-body custom-product-info">
                                            <h5 class="card-title custom-product-name">Creamy Ice Latte</h5>
                                            <p class="card-text custom-product-price">IDR 27.000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row row-cols-2 row-cols-md-4 g-4 custom-product-row">
                                <div class="col custom-product-card-container">
                                    <div class="card custom-product-card">
                                        <img src="assets/images/tomatomix.png" class="card-img-top" alt="veggie-tomato-mix" />
                                        <div class="card-body custom-product-info">
                                            <h5 class="card-title custom-product-name">Veggie tomato mix</h5>
                                            <p class="card-text custom-product-price">IDR 34.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col custom-product-card-container">
                                    <div class="card custom-product-card">
                                        <img src="assets/images/hazelnutlatte.png" class="card-img-top" alt="hazelnut-latte" />
                                        <div class="custom-product-promo">22%</div>
                                        <div class="card-body custom-product-info">
                                            <h5 class="card-title custom-product-name">Hazelnut Latte</h5>
                                            <p class="card-text custom-product-price">IDR 25.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col custom-product-card-container">
                                    <div class="card custom-product-card">
                                        <img src="assets/images/friedrice.png" class="card-img-top" alt="summer-fried-rice" />
                                        <div class="card-body custom-product-info">
                                            <h5 class="card-title custom-product-name">Summer fried rice</h5>
                                            <p class="card-text custom-product-price">IDR 32.000</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col custom-product-card-container">
                                    <div class="card custom-product-card">
                                        <img src="assets/images/creamyice.png" class="card-img-top" alt="creamy-ice-latte" />
                                        <div class="custom-product-promo">10%</div>
                                        <div class="card-body custom-product-info">
                                            <h5 class="card-title custom-product-name">Creamy Ice Latte</h5>
                                            <p class="card-text custom-product-price">IDR 27.000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="custom-notes">*the price has been cutted by discount appears</div>
                        </div>
                    </main>
                </main>
                <Footer />
            </div>

        )
    }
}
