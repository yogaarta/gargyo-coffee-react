import React, { Component } from 'react'
import axios from 'axios'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import HistoryTransactionCard from '../../components/HistoryTransactionCard'


import 'react-bootstrap'
import './History.css'
import { connect } from 'react-redux'
import { headerAction } from '../../redux/actionCreator/header'

// import img
// import Coldbrew from "../../assets/img/tomatomix.png"


class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transactions: [],
            history: [],
            isDeleted: false
        }
    }

    componentDidMount() {
        document.title = "History"
        window.scrollTo(0, 0);
        this.props.dispatch(headerAction("history"))
        const { token = null } = this.props.userInfo || {}

        const config = { headers: { Authorization: `Bearer ${token}` } }
        axios
            .get(`${process.env.REACT_APP_BE_HOST}/transactions`, config)
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

    componentDidUpdate(){
        if(this.state.isDeleted === true){
            const { token = null } = this.props.userInfo || {}

        const config = { headers: { Authorization: `Bearer ${token}` } }
        axios
            .get(`${process.env.REACT_APP_BE_HOST}/transactions`, config)
            .then(result => {
                console.log(result.data.data)
                this.setState({
                    transactions: result.data.data,
                })

            })
            .catch(error => {
                console.log(error)
            })
            this.setState({isDeleted: false})
        }
    }

    addToDelete = (id) => {
        let newHistory = [...this.state.history]
        newHistory.includes(id) ? newHistory.filter(item => item !== id) : newHistory.push(id)
        this.setState({
            history: newHistory
        })
        console.log(this.state.history)
        console.log(newHistory)
    }

    deleteHistory = () => {
        const { token = null } = this.props.userInfo || {}

        const config = { headers: { Authorization: `Bearer ${token}` } }
        const body = { id: this.state.history }
        axios.patch(`${process.env.REACT_APP_BE_HOST}/transactions/user`, body, config)
            .then(result => {
                console.log(result)
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
                        <div className="h-select-all"
                        onClick={()=> {
                            this.deleteHistory()
                            this.setState({
                                isDeleted: true
                            })
                        }}
                        >Delete</div>
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
                            <HistoryTransactionCard key={item.id} name={item.name} price={item.total_price} picture={item.picture} id={item.id} addToDelete={this.addToDelete} />
                        ))}
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const { auth: { userInfo } } = reduxState
    return { userInfo }
}

export default connect(mapStateToProps)(History)