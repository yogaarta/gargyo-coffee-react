import React from 'react'

import Coldbrew from "../../assets/img/tomatomix.png"

export default function HistoryTransactionCard(props) {
    return (
        <div className="col h-product-card-container">
            <div className="h-product-card">
                <div className="h-product-img-container">
                    <img src={Coldbrew} alt="coldbrew" className='h-product-img' />
                </div>
                <div className="h-product-info">
                    <div className="h-product-name">{props.name}</div>
                    <div className="h-product-price-status-container">
                        <div className="h-product-price-status">
                            <div className="h-product-price">{props.price}</div>
                            <div className="h-product-status">Delivered</div>
                        </div>
                        <div className="h-product-checklist">
                            <input type="checkbox" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
