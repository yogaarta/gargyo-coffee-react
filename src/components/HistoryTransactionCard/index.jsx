import React, { Component } from 'react'


export default class HistoryTransactionCard extends Component {
    constructor() {
        super();
        this.state = {
            history: []
        }
    }
    render() {
        return (
            <div className="col h-product-card-container">
                <label htmlFor={this.props.id} className="h-product-card"
                    onClick={() => this.props.addToDelete(this.props.id)}>
                    <div className="h-product-img-container">
                        <img src={`${process.env.REACT_APP_BE_HOST}${this.props.picture}`} alt={this.props.name} className='h-product-img' />
                    </div>
                    <div className="h-product-info">
                        <div className="h-product-name">{this.props.name}</div>
                        <div className="h-product-price-status-container">
                            <div className="h-product-price-status">
                                <div className="h-product-price">{this.props.price}</div>
                                <div className="h-product-status">
                                    Delivered
                                </div>
                            </div>
                            <div className="h-product-checklist">
                                <input type="checkbox" name={this.props.id} id={this.props.id} />
                            </div>
                        </div>
                    </div>
                </label>
            </div>
        )
    }
}


// export default function HistoryTransactionCard(props) {
//     return (
//         <div className="col h-product-card-container">
//             <label htmlFor={props.id} className="h-product-card">
//                 <div className="h-product-img-container">
//                     <img src={Coldbrew} alt="coldbrew" className='h-product-img' />
//                 </div>
//                 <div className="h-product-info">
//                     <div className="h-product-name">{props.name}</div>
//                     <div className="h-product-price-status-container">
//                         <div className="h-product-price-status">
//                             <div className="h-product-price">{props.price}</div>
//                             <div className="h-product-status">Delivered</div>
//                         </div>
//                         <div className="h-product-checklist">
//                             <input type="checkbox" name={props.id} />
//                         </div>
//                     </div>
//                 </div>
//             </label>
//         </div>
//     )
// }
