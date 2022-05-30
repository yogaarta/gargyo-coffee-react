import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import 'react-bootstrap'
import './History.css'

// import img
import Coldbrew from "../../assets/img/tomatomix.png"


export default class History extends Component {
    componentDidMount(){
        document.title="History"
    }
    render() {
        return (
            <div>
                <Header />
                <main className='h-main-container'>
                    <section className='h-title'>
                        <h1>Let's see what you have bought!</h1>
                        <p>Select item to delete</p>
                        <div className="h-select-all">Select All</div>
                    </section>
                    <section className='h-main-product-container row row-cols-sm-2 row-cols-md-3 row-cols-xs-1'>
                        <div className="col h-product-card-container">
                            <div className="h-product-card">
                                <div className="h-product-img-container">
                                    <img src={Coldbrew} alt="coldbrew" className='h-product-img' />
                                </div>
                                <div className="h-product-info">
                                    <div className="h-product-name">Veggie tomato mix</div>
                                    <div className="h-product-price-status-container">
                                        <div className="h-product-price-status">
                                            <div className="h-product-price">IDR 34.000</div>
                                            <div className="h-product-status">Delivered</div>
                                        </div>
                                        <div className="h-product-checklist">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col h-product-card-container">
                            <div className="h-product-card">
                                <div className="h-product-img-container">
                                    <img src={Coldbrew} alt="coldbrew" className='h-product-img' />
                                </div>
                                <div className="h-product-info">
                                    <div className="h-product-name">Veggie tomato mix</div>
                                    <div className="h-product-price-status-container">
                                        <div className="h-product-price-status">
                                            <div className="h-product-price">IDR 34.000</div>
                                            <div className="h-product-status">Delivered</div>
                                        </div>
                                        <div className="h-product-checklist">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col h-product-card-container">
                            <div className="h-product-card">
                                <div className="h-product-img-container">
                                    <img src={Coldbrew} alt="coldbrew" className='h-product-img' />
                                </div>
                                <div className="h-product-info">
                                    <div className="h-product-name">Veggie tomato mix</div>
                                    <div className="h-product-price-status-container">
                                        <div className="h-product-price-status">
                                            <div className="h-product-price">IDR 34.000</div>
                                            <div className="h-product-status">Delivered</div>
                                        </div>
                                        <div className="h-product-checklist">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col h-product-card-container">
                            <div className="h-product-card">
                                <div className="h-product-img-container">
                                    <img src={Coldbrew} alt="coldbrew" className='h-product-img' />
                                </div>
                                <div className="h-product-info">
                                    <div className="h-product-name">Veggie tomato mix</div>
                                    <div className="h-product-price-status-container">
                                        <div className="h-product-price-status">
                                            <div className="h-product-price">IDR 34.000</div>
                                            <div className="h-product-status">Delivered</div>
                                        </div>
                                        <div className="h-product-checklist">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col h-product-card-container">
                            <div className="h-product-card">
                                <div className="h-product-img-container">
                                    <img src={Coldbrew} alt="coldbrew" className='h-product-img' />
                                </div>
                                <div className="h-product-info">
                                    <div className="h-product-name">Veggie tomato mix</div>
                                    <div className="h-product-price-status-container">
                                        <div className="h-product-price-status">
                                            <div className="h-product-price">IDR 34.000</div>
                                            <div className="h-product-status">Delivered</div>
                                        </div>
                                        <div className="h-product-checklist">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col h-product-card-container">
                            <div className="h-product-card">
                                <div className="h-product-img-container">
                                    <img src={Coldbrew} alt="coldbrew" className='h-product-img' />
                                </div>
                                <div className="h-product-info">
                                    <div className="h-product-name">Veggie tomato mix</div>
                                    <div className="h-product-price-status-container">
                                        <div className="h-product-price-status">
                                            <div className="h-product-price">IDR 34.000</div>
                                            <div className="h-product-status">Delivered</div>
                                        </div>
                                        <div className="h-product-checklist">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col h-product-card-container">
                            <div className="h-product-card">
                                <div className="h-product-img-container">
                                    <img src={Coldbrew} alt="coldbrew" className='h-product-img' />
                                </div>
                                <div className="h-product-info">
                                    <div className="h-product-name">Veggie tomato mix</div>
                                    <div className="h-product-price-status-container">
                                        <div className="h-product-price-status">
                                            <div className="h-product-price">IDR 34.000</div>
                                            <div className="h-product-status">Delivered</div>
                                        </div>
                                        <div className="h-product-checklist">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col h-product-card-container">
                            <div className="h-product-card">
                                <div className="h-product-img-container">
                                    <img src={Coldbrew} alt="coldbrew" className='h-product-img' />
                                </div>
                                <div className="h-product-info">
                                    <div className="h-product-name">Veggie tomato mix</div>
                                    <div className="h-product-price-status-container">
                                        <div className="h-product-price-status">
                                            <div className="h-product-price">IDR 34.000</div>
                                            <div className="h-product-status">Delivered</div>
                                        </div>
                                        <div className="h-product-checklist">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col h-product-card-container">
                            <div className="h-product-card">
                                <div className="h-product-img-container">
                                    <img src={Coldbrew} alt="coldbrew" className='h-product-img' />
                                </div>
                                <div className="h-product-info">
                                    <div className="h-product-name">Veggie tomato mix</div>
                                    <div className="h-product-price-status-container">
                                        <div className="h-product-price-status">
                                            <div className="h-product-price">IDR 34.000</div>
                                            <div className="h-product-status">Delivered</div>
                                        </div>
                                        <div className="h-product-checklist">
                                            <input type="checkbox" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}
