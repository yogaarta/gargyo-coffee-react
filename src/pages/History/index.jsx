import React, { Component } from 'react'
import axios from 'axios'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import HistoryTransactionCard from '../../components/HistoryTransactionCard'


import 'react-bootstrap'
import './History.css'

// import img
// import Coldbrew from "../../assets/img/tomatomix.png"


export default class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transactions: []
        }
    }

    componentDidMount(){
        document.title="History"

        const { token } = JSON.parse(localStorage.getItem("user-info"))

        const config = { headers: { Authorization: `Bearer ${token}` } }
        axios
            .get('http://localhost:8080/transactions', config)
            .then(result => {
                console.log(result.data.data)
                this.setState({
                    transactions: result.data.data,
                })

            })
            .catch(error => {
                console.log(error)
            })
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
                        {/* <div className="col h-product-card-container">
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
                        </div> */}
                        {this.state.transactions.map((item) => (
                            <HistoryTransactionCard key={item.id} name={item.name} price={item.total_price}/>
                        ))}
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}
