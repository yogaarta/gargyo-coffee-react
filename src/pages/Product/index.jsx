import axios from 'axios'
import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
// import { Routes, Route, Link } from 'react-router-dom'


import "./Product.css"
// import ProductsFavorite from '../../components/Product/ProductsFavorite'
// import ProductsAll from '../../components/Product/ProductAll'
// import ProductsCoffee from '../../components/Product/ProductCoffee'
// import ProductsNonCoffee from '../../components/Product/ProductNonCoffee'

// import ColdBrew from "../../assets/img/coldbrew.png"

export default class Product extends Component {
    constructor() {
        super();
        this.state = {
            product: [],
            isFavorite: false,
            isCoffee: false,
            isNonCoffee: false,
            isFood: false,
            isAll: false,
            sort: "",
            order: "asc",
            searchName: "",

        };
    }

    // setSearchName = (props) => {
    //     this.setState({
    //         searchName: props
    //     })
    // }

    componentDidMount() {
        document.title = "Product"
        axios
            .get('http://localhost:8080/products')
            .then(result => {
                this.setState({
                    product: result.data.data,
                });
                console.log(result)
            }).catch(error => {
                console.log(error)
            })
    }

    componentDidUpdate() {
        if (this.state.isAll) {
            let url = "http://localhost:8080/products"
            if (this.state.sort === "name") {
                url += `?sort=${this.state.sort}&order=${this.state.order}`
            }
            if (this.state.sort === "category") {
                url += `?sort=${this.state.sort}&order=${this.state.order}`
            }
            if (this.state.sort === "price") {
                url += `?sort=${this.state.sort}&order=${this.state.order}`
            }
            if (this.state.sort === "release") {
                url += `?sort=${this.state.sort}&order=${this.state.order}`
            }
            axios
                .get(url)
                .then(result => {
                    this.setState({
                        product: result.data.data,
                    });
                    
                }).catch(error => {
                    console.log(error)
                })

            this.setState({
                isAll: false
            })
        }
        if (this.state.isFavorite) {
            let url = "http://localhost:8080/products/favorite"
            if (this.state.sort === "name") {
                url += `?sort=${this.state.sort}&order=${this.state.order}`
            }
            if (this.state.sort === "category") {
                url += `?sort=${this.state.sort}&order=${this.state.order}`
            }
            if (this.state.sort === "price") {
                url += `?sort=${this.state.sort}&order=${this.state.order}`
            }
            if (this.state.sort === "release") {
                url += `?sort=${this.state.sort}&order=${this.state.order}`
            }
            axios
                .get(url)
                .then(result => {
                    this.setState({
                        product: result.data.data,
                    });
                    
                }).catch(error => {
                    console.log(error)
                })

            this.setState({
                isFavorite: false
            })
        }

        if (this.state.isCoffee) {
            let url = "http://localhost:8080/products?category=coffee"
            if (this.state.sort === "name") {
                url += `&sort=${this.state.sort}&order=${this.state.order}`
            }
            if (this.state.sort === "category") {
                url += `&sort=${this.state.sort}&order=${this.state.order}`
            }
            if (this.state.sort === "price") {
                url += `&sort=${this.state.sort}&order=${this.state.order}`
            }
            if (this.state.sort === "release") {
                url += `&sort=${this.state.sort}&order=${this.state.order}`
            }
            axios
                .get(url)
                .then(result => {
                    this.setState({
                        product: result.data.data,
                    });
                    
                }).catch(error => {
                    console.log(error)
                })

            this.setState({
                isCoffee: false
            })
        }

        if (this.state.isNonCoffee) {
            let url = "http://localhost:8080/products?category=noncoffee"
            if (this.state.sort === "name") {
                url += `&sort=${this.state.sort}&order=${this.state.order}`
            }
            if (this.state.sort === "category") {
                url += `&sort=${this.state.sort}&order=${this.state.order}`
            }
            if (this.state.sort === "price") {
                url += `&sort=${this.state.sort}&order=${this.state.order}`
            }
            if (this.state.sort === "release") {
                url += `&sort=${this.state.sort}&order=${this.state.order}`
            }
            axios
                .get(url)
                .then(result => {
                    this.setState({
                        product: result.data.data,
                    });
                    
                }).catch(error => {
                    console.log(error)
                })

            this.setState({
                isNonCoffee: false
            })
        }

        if (this.state.isFood) {
            let url = "http://localhost:8080/products?category=food"
            if (this.state.sort === "name") {
                url += `&sort=${this.state.sort}&order=${this.state.order}`
            }
            if (this.state.sort === "category") {
                url += `&sort=${this.state.sort}&order=${this.state.order}`
            }
            if (this.state.sort === "price") {
                url += `&sort=${this.state.sort}&order=${this.state.order}`
            }
            if (this.state.sort === "release") {
                url += `&sort=${this.state.sort}&order=${this.state.order}`
            }
            axios
                .get(url)
                .then(result => {
                    this.setState({
                        product: result.data.data,
                    });
                }).catch(error => {
                    console.log(error)
                })

            this.setState({
                isFood: false
            })
        }

        // if(this.state.searchName !== ''){
        //     axios
        //         .get(`http://localhost:8080/products?name=${this.state.searchName}`)
        //         .then(result=>{
        //             this.setState({
        //                 product: result.data.data
        //             })
        //             this.setState({
        //                 searchName: ''
        //             })
        //         })
        //         .catch(error=>{
        //             console.log(error)
        //         })
        // }
    }

    render() {
        return (
            <div>
                <Header />
                <main className="row custom-main-container">
                    <aside className="col-4 custom-promo-column">
                        <div className="custom-promo-title">
                            <h3 className="custom-promo-title-head">Promo Today</h3>
                            <p className="custom-promo-paragraph">Coupons will be updated every weeks. Check them out! </p>
                        </div>
                        <div className="custom-promo-card row mother-day-card">
                            <div className="col-4 custom-promo-pict"><img
                                src="https://s3-alpha-sig.figma.com/img/5272/76a9/8d88c62a29339c6f83f29e8f40c20178?Expires=1654473600&Signature=TUEQjdAA87kU1ApBgKY2V0FaD4FWNpaQjMyDhuKbLnyDH9DYhBxDrJV-SvgEq~pwZarvV6mQab17UL5Xva-StgGbmHaVcdQ0~7s4i-VYb66f9yrEXaMVz07UIoqOI~gc-NUV0TZVbxpIYOLfcaD8Sx9P5RqiqrjA-heWLoxqB7mkVbUyiI0bBnHhJQD5m03B51dZYRLjm3HT~Sd3yteUjjopTH6Kv0-jDBLznj0AeNxxYvhOUV~26EFJgqUQMEh-hk748c2lbbOGJOIWfNyR6rnzux9ce0nYlJ1MSI25bZENllkaJwFDQFPaTsN2HJX~UUIhbKEUjCHWHwG0BT3Z0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                alt="mother's-day-promo" className="custom-promo-img" /></div>
                            <div className="col custom-card-text">
                                <p className="custom-card-info"><b>HAPPY MOTHER'S DAY!</b><br />Get one of our favorite menu for free!</p>
                            </div>
                        </div>
                        <div className="custom-promo-card row sunday-morning-card">
                            <div className="col-4 custom-promo-pict"><img
                                src="https://s3-alpha-sig.figma.com/img/ed87/b600/bcd624c9cdfab5f48a586cfe014785b0?Expires=1654473600&Signature=VgMpH8i1ujdkr0-GHAsvmHjvLuB8ByLAipCa4MgqaCMHvP7jjW0K49zCH0OIw4J9FAoOviSusT~blS-3LNfYJKC3pHauuFbjpV7jcNF5--4IvRaR7Dqw0xlDF5PNYXvGzSmotv-BMsKZpMRc2wixLWWplepKX3Q47CRJW7z5uLmM52wmVKDrT4cP5AAWybEoaKFHMNXykNZUQkmj68jtTehNjvctVjv04N-y2IiMbRCxYqGfcxU52hg68xyA8eD~Ix7i6meCHxtrFibC7bac2aMMs9cGnzCxxi8GlCpwcnNfyw~bI36Pu48mVOK23eUySOHYdu0VnKNdGNVf7GftzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                alt="free-sunday-morning" className="custom-promo-img" /></div>
                            <div className="col custom-card-text">
                                <p className="custom-card-info"><b>Get a cup of coffee for free on sunday morning</b><br />Only at 7 to 9
                                    AM
                                </p>
                            </div>
                        </div>
                        <div className="custom-promo-card row mother-day-card">
                            <div className="col-4 custom-promo-pict"><img
                                src="https://s3-alpha-sig.figma.com/img/5272/76a9/8d88c62a29339c6f83f29e8f40c20178?Expires=1654473600&Signature=TUEQjdAA87kU1ApBgKY2V0FaD4FWNpaQjMyDhuKbLnyDH9DYhBxDrJV-SvgEq~pwZarvV6mQab17UL5Xva-StgGbmHaVcdQ0~7s4i-VYb66f9yrEXaMVz07UIoqOI~gc-NUV0TZVbxpIYOLfcaD8Sx9P5RqiqrjA-heWLoxqB7mkVbUyiI0bBnHhJQD5m03B51dZYRLjm3HT~Sd3yteUjjopTH6Kv0-jDBLznj0AeNxxYvhOUV~26EFJgqUQMEh-hk748c2lbbOGJOIWfNyR6rnzux9ce0nYlJ1MSI25bZENllkaJwFDQFPaTsN2HJX~UUIhbKEUjCHWHwG0BT3Z0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                alt="mother's-day-promo" className="custom-promo-img" /></div>
                            <div className="col custom-card-text">
                                <p className="custom-card-info"><b>HAPPY MOTHER'S DAY!</b><br />Get one of our favorite menu for free!</p>
                            </div>
                        </div>
                        <div className="custom-promo-card row halloween-card">
                            <div className="col-4 custom-promo-pict"><img
                                src="https://s3-alpha-sig.figma.com/img/e25b/8a97/346f786692a9f23c7fc959db9981ae5c?Expires=1654473600&Signature=fgAWcrLTmjq9ftQX3iF552Pr1tRRcYDAniWJ7DiVMtsyQqSuhgSVLgiBP7bBrgItb1Np66Zfv0EsWIoj7zD6teZbiXFhw8PE2a9grc1aOnLBdkjW7tT01jLyUuC-hgVfmT7x2a-TT25sC71jBJQJ9dFgYr4SCp70PQE4k9mBLaw3XViIpZlOuh~9qWLv5G30YsBnc8uzOgaBs5S8ZAtiTvf3ngm4ecIabKKTbKfllTkFJd-mStMTGBmaRQo-TYZBSSHJ~iDHOO8sogjRvl08r-dKubkIZ1LaR1KZd5o2Vnpky40dnMo-3gxMmXUyWRRY66iL7j0lPu-0GGQ0QBBGJQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                                alt="halloween-promo" className="custom-promo-img" /></div>
                            <div className="col custom-card-text">
                                <p className="custom-card-info"><b>HAPPY HALLOWEEN!
                                </b><br />Do you like chicken wings? Get 1 free only if you buy pinky promise</p>
                            </div>
                        </div>
                        <div className="custom-apply-button">Apply Coupon</div>
                        <div className="custom-term">
                            <p className="custom-term-title">Terms and Condition</p>
                            <p>1. You can only apply 1 coupon per day</p>
                            <p>2. It only for dine in</p>
                            <p>3. Buy 1 get 1 only for new user</p>
                            <p>4. Should make member card to apply coupon</p>
                        </div>
                    </aside>
                    <main className="col-8 custom-main-product-column">
                        <nav className="custom-product-nav">
                            <ul className="row">
                                <li className="col-2">
                                    <div className="custom-product-nav-inactive"
                                        onClick={() => {
                                            this.setState({
                                                isFavorite: true,
                                            })
                                        }}
                                    >Favorite & Promo</div>
                                </li>
                                <li className="col">
                                    <div className="custom-product-nav-inactive"
                                        onClick={() => {
                                            this.setState({
                                                isCoffee: true,
                                            })
                                        }}
                                    >Coffee</div>
                                </li>
                                <li className="col">
                                    <div className="custom-product-nav-inactive"
                                        onClick={() => {
                                            this.setState({
                                                isNonCoffee: true,
                                            })
                                        }}
                                    >Non Coffee</div>
                                </li>
                                <li className="col">
                                    <div className="custom-product-nav-inactive"
                                        onClick={() => {
                                            this.setState({
                                                isFood: true,
                                            })
                                        }}
                                    >Foods</div>
                                </li>
                                <li className="col">
                                    <div className="custom-product-nav-inactive"
                                        onClick={() => {
                                            this.setState({
                                                isAll: true,
                                            })
                                        }}
                                    >All</div>
                                </li>
                            </ul>
                            <div className='dropdown-sort'>
                                <label htmlFor="sort-product">Sort by: </label>
                                <select name="sort-product" id="sort-product"
                                    onClick={(e) => {
                                        this.setState({
                                            sort: e.target.value
                                        })
                                    }}
                                >
                                    <option value="name"

                                    >Name</option>
                                    <option value="category">Category</option>
                                    <option value="price">Price</option>
                                    <option value="createdat">Release</option>
                                </select>
                                <select name="order-product" id="order-product"
                                    onClick={(e) => {
                                        this.setState({
                                            order: e.target.value
                                        })
                                    }}
                                >
                                    <option value="asc">asc</option>
                                    <option value="desc">desc</option>
                                </select>
                            </div>
                        </nav>
                        <div className="custom-food-container">
                            <div className="row row-cols-2 row-cols-md-4 g-4 custom-product-row">
                                {this.state.product.length === 0 ? <div>DATA NOT FOUND</div> :
                                    this.state.product.map((product) => (
                                        <div className="col custom-product-card-container">
                                            <div className="card custom-product-card">
                                                <div className="custom-card-img-container">
                                                    <Link to="/product/detail">
                                                        <img key={product.picture} src={`http://localhost:8080${product.picture}`} className="card-img-top" alt={product.name} />
                                                    </Link>
                                                </div>
                                                <div className="custom-product-promo">0%</div>
                                                <div className="card-body custom-product-info">
                                                    <h5 key={product.name} className="card-title custom-product-name">{product.name}</h5>
                                                    <p key={product.price} className="card-text custom-product-price">IDR. {product.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            <div className="custom-notes">*the price has been cutted by discount appears</div>
                        </div>
                    </main>
                </main>
                <Footer />
            </div>

        )
    }
}
