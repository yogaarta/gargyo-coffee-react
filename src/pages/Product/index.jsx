import axios from 'axios'
import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import withSearchParam from '../../Helper/withSearchParam'
import withLocation from '../../Helper/withLocation'
import { connect } from 'react-redux'
import { currencyFormatter } from '../../Helper/formater'
import moment from 'moment'


import "./Product.css"

import Check from "../../assets/img/Vectorcheck.png"
import { applyPromoAction } from '../../redux/actionCreator/addToCart'
// import Promo1 from "../../assets/img/promo1.png"
// import Promo2 from "../../assets/img/promo2.png"
// import Promo3 from "../../assets/img/promo3.png"


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      promo: [],
      promoApplied: "",
      categoryActive: "all",
      doAxios: false,
      sort: "category",
      order: "asc",
      page: 1,
      limit: "12",
      totalPage: "1",
      searchName: "",
      meta: null,
      pageActive: "product",
      setSearchParams: this.props.setSearchParams.bind(this),
      error: false,
      errMsg: ""

    };
  }

  setSearchName = (props) => {
    this.setState({
      searchName: props
    })
  }

  applyPromoHandler = (id) => {
    let promos = [...this.state.promo];
    let getPromo = promos.filter((promos) => promos.id === id)
    this.props.dispatch(applyPromoAction(id, getPromo[0].discount))

    // console.log(getPromo[0].discount)
  }

  componentDidMount() {
    document.title = "Product"
    this.state.setSearchParams('')
    axios
      .get(`${process.env.REACT_APP_BE_HOST}/products`)
      .then(result => {
        this.setState({
          product: result.data.data,
          totalPage: result.data.meta.totalPage
        });
      }).catch(error => {
        console.log(error)
      })
    axios
      .get(`${process.env.REACT_APP_BE_HOST}/promos/today`)
      .then(result => {
        console.log(result)
        this.setState({
          promo: result.data.data,
        });
      }).catch(error => {
        console.log(error)
      })
  }

  doAxios = () => {
    this.setState({
      doAxios: true
    })
  }

  dateFormatter = (date) => (
    new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date)
  )

  componentDidUpdate() {
    if (this.state.doAxios) {
      let params = ''
      let url = `${process.env.REACT_APP_BE_HOST}/products`
      if (this.state.categoryActive === "all") {
        url += `?page=${this.state.page}&limit=${this.state.limit}&`
        params += `page=${this.state.page}&limit=${this.state.limit}&`
      }
      if (this.state.categoryActive === "favorite") {
        url += `/favorite?`
        params += 'category=favorite&'
      }
      if (this.state.categoryActive !== "all" && this.state.categoryActive !== "favorite") {
        url += `?category=${this.state.categoryActive}&page=${this.state.page}&limit=${this.state.limit}&`
        params += `category=${this.state.categoryActive}&page=${this.state.page}&limit=${this.state.limit}&`
      }

      if (this.state.searchName !== '') {
        url += `name=${this.state.searchName}&`
        params += `name=${this.state.searchName}&`
      }
      url += `sort=${this.state.sort}&order=${this.state.order}`
      params += `sort=${this.state.sort}&order=${this.state.order}`
      this.state.setSearchParams(params)

      axios
        .get(url)
        .then(result => {
          this.setState({
            product: result.data.data,
            totalPage: !result.data.meta ? "1" : result.data.meta.totalPage,
            error: false,
            errMsg: ""
          });
        }).catch(error => {
          console.log(error)
          this.setState({
            error: true,
            errMsg: error.response.data.err
          })
        })
      this.setState({
        doAxios: false
      })
    }

  }

  render() {
    const { roles } = this.props
    return (
      <div>
        <Header setSearchName={this.setSearchName.bind(this)}
          doAxios={this.doAxios} pageActive={this.state.pageActive}
        />
        <main className="row custom-main-container">
          <aside className="col-4 custom-promo-column">
            <div className="custom-promo-title">
              <h3 className="custom-promo-title-head">Promo Today</h3>
              <p className="custom-promo-paragraph">Coupons will be updated every weeks. Check them out! </p>
            </div>
            <div className="p-promo-card-container">
              {this.state.promo.map((promo, index) => (
                this.state.promoApplied !== promo.id ?

                  <div className={`custom-promo-card row ${this.state.promoApplied === promo.id ? "custom-promo-card-selected" : null} ${index === 0 || index === 3 ? "mother-day-card" : index === 1 ? "sunday-morning-card" : "halloween-card"}`}
                    onClick={() => {
                      this.state.promoApplied === promo.id ?
                        this.setState({
                          promoApplied: ""
                        })
                        :
                        this.setState({
                          promoApplied: promo.id
                        })
                    }}
                  >
                    <div className="col-4 custom-promo-pict">
                      <img src={promo.picture} alt={promo.name} className="custom-promo-img" /></div>
                    <div className="col custom-card-text">
                      <p className="custom-card-info"><b>{promo.code}</b><br />{moment(promo.end_date).format('MMM Do YYYY')}</p>
                    </div>
                  </div>
                  :

                  <div className={`custom-promo-card-detail row ${index === 0 || index === 3 ? "mother-day-card" : index === 1 ? "sunday-morning-card" : "halloween-card"}`}
                  onClick={() => {
                    this.state.promoApplied === promo.id ?
                      this.setState({
                        promoApplied: ""
                      })
                      :
                      this.setState({
                        promoApplied: promo.id
                      })
                  }}
                  >
                    <div className="product-top-promo">
                      <div className="col-4 custom-promo-pict">
                        <img src={promo.picture} alt={promo.name} className="custom-promo-img" /></div>
                      <div className="col custom-card-text">
                        <div className="product-promo-code">{promo.code}</div>
                        <div className="custom-card-info">
                          <div className="product-promo-date">{moment(promo.end_date).format('MMM Do YYYY')}</div>
                          <div className="product-promo-discount">{promo.discount}</div>
                          {promo.description}</div>
                      </div>
                    </div>
                    <div className="product-bottom-promo"></div>
                  </div>
              ))}
              {/* <div className="custom-promo-card row sunday-morning-card">
                                <div className="col-4 custom-promo-pict">
                                    <img src={Promo2} alt="free-sunday-morning" className="custom-promo-img" /></div>
                                <div className="col custom-card-text">
                                    <p className="custom-card-info"><b>Get a cup of coffee for free on sunday morning</b><br />Only at 7 to 9
                                        AM
                                    </p>
                                </div>
                            </div>
                            <div className="custom-promo-card row mother-day-card">
                                <div className="col-4 custom-promo-pict">
                                    <img src={Promo1} alt="mother's-day-promo" className="custom-promo-img" /></div>
                                <div className="col custom-card-text">
                                    <p className="custom-card-info"><b>HAPPY MOTHER'S DAY!</b><br />Get one of our favorite menu for free!</p>
                                </div>
                            </div>
                            <div className="custom-promo-card row halloween-card">
                                <div className="col-4 custom-promo-pict">
                                    <img src={Promo3} alt="halloween-promo" className="custom-promo-img" /></div>
                                <div className="col custom-card-text">
                                    <p className="custom-card-info"><b>HAPPY HALLOWEEN!
                                    </b><br />Do you like chicken wings? Get 1 free only if you buy pinky promise</p>
                                </div>
                            </div> */}
              {roles !== "admin" ?
                <div className="custom-apply-button"
                onClick={()=> {
                  this.applyPromoHandler(this.state.promoApplied)
                }}
                >Apply Coupon</div>
                :
                <Link to={this.state.promoApplied !== "" ? `/promo/${this.state.promoApplied}` : "/product"}>
                  <div className="custom-apply-button">Edit Coupon</div>
                </Link>
              }
            </div>
            <div className="custom-term">
              <p className="custom-term-title">Terms and Condition</p>
              <p>1. You can only apply 1 coupon per day</p>
              <p>2. It only for dine in</p>
              <p>3. Buy 1 get 1 only for new user</p>
              <p>4. Should make member card to apply coupon</p>
            </div>
            {roles !== "admin" ? <></> :
              <Link to={"/promo/new"} className="p-link-button">
                <div className="p-add-promo-button">Add new promo</div>
              </Link>
            }
          </aside>
          <main className="col-8 custom-main-product-column">
            <nav className="custom-product-nav">
              <ul className="row">
                <li className="col-4">
                  <div className={this.state.categoryActive === "favorite" ? "custom-product-nav-active" : "custom-product-nav-inactive"}
                    onClick={
                      () => {
                        this.setState({
                          doAxios: true,
                          categoryActive: "favorite"
                        })
                      }
                    }
                  >Favorite {'&'} Promo</div>
                </li>
                <li className="col">
                  <div className={this.state.categoryActive === "coffee" ? "custom-product-nav-active" : "custom-product-nav-inactive"}
                    onClick={
                      () => {
                        this.setState({
                          page: 1,
                          doAxios: true,
                          categoryActive: "coffee"
                        })
                      }
                    }
                  >Coffee</div>
                </li>
                <li className="col-3">
                  <div className={this.state.categoryActive === "noncoffee" ? "custom-product-nav-active" : "custom-product-nav-inactive"}
                    onClick={() => {
                      this.setState({
                        page: 1,
                        doAxios: true,
                        categoryActive: "noncoffee"
                      })
                    }}
                  >Non Coffee</div>
                </li>
                <li className="col">
                  <div className={this.state.categoryActive === "food" ? "custom-product-nav-active" : "custom-product-nav-inactive"}
                    onClick={() => {
                      this.setState({
                        page: 1,
                        doAxios: true,
                        categoryActive: "food"
                      })
                    }}
                  >Foods</div>
                </li>
                <li className="col">
                  <div className={this.state.categoryActive === "all" ? "custom-product-nav-active" : "custom-product-nav-inactive"}
                    onClick={() => {
                      this.setState({
                        page: 1,
                        doAxios: true,
                        categoryActive: "all"
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
                  <option value="category">Category</option>
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="created_at">Release</option>
                </select>
                <select name="order-product" id="order-product"
                  onChange={(e) => {
                    this.setState({
                      order: e.target.value
                    })
                  }}
                >
                  <option value="asc">asc</option>
                  <option value="desc">desc</option>
                </select>
                <div className="confirm-button"
                  onClick={() => {
                    this.setState({
                      doAxios: true
                    })
                  }}
                ><img src={Check} alt="check" /></div>
              </div>
            </nav>
            <div className="custom-food-container">
              <div className="row row-cols-2 row-cols-md-4 g-4 custom-product-row">
                {this.state.error === true ? <div>DATA NOT FOUND</div> :
                  this.state.product.map((product) => (
                    <div key={product.id} className="col custom-product-card-container">
                      <div className="card custom-product-card">
                        <div className="custom-card-img-container">
                          <Link to={`/product/${product.id}`}>
                            <img src={`${product.picture}`} className="card-img-top" alt={product.name} />
                          </Link>
                        </div>
                        <div className="custom-product-promo">0%</div>
                        <div className="card-body custom-product-info">
                          <h5 className="card-title custom-product-name">
                            {product.name}
                          </h5>
                          <p className="card-text custom-product-price"> {currencyFormatter.format(product.price)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className='product-page-button-container'>
                <div>
                  {this.state.page === 1 ?
                    <div className='product-page-button-empty'></div> :
                    <div className="product-page-button-prev"
                      onClick={() => {
                        window.scroll(0, 0)
                        this.setState({
                          page: this.state.page - 1,
                          doAxios: true
                        })
                      }}
                    >Prev Page</div>}
                </div>
                <div className='product-page-number'>{this.state.page}</div>
                <div>
                  {this.state.page === Number(this.state.totalPage) ?
                    <div className='product-page-button-empty'></div> :
                    <div className="product-page-button-next"
                      onClick={() => {
                        window.scroll(0, 0)
                        this.setState({
                          page: this.state.page + 1,
                          doAxios: true
                        })
                      }}
                    >Next Page</div>}
                </div>
              </div>
              <div className="custom-notes">*the price has been cutted by discount appears</div>
            </div>
            {roles !== "admin" ? <></> :
              <Link to={"/product/new"} className="p-link-button">
                <div className="p-new-product-button">Add new product</div>
              </Link>
            }
          </main>
        </main>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  const { userData: { data: { roles } } } = reduxState
  return { roles }
}

export default connect(mapStateToProps)(withLocation(withSearchParam(Product)))