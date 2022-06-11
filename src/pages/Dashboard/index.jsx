import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import "./Dashboard.css"

import Option from "../../assets/img/option.png"
import Admin from "../../assets/img/adminpict.png"

export default class Dashboard extends Component {
    render() {
        return (
            <>
                <Header />
                <main className='db-global-container'>
                    <div className="db-title">See how your store progress so far</div>
                    <div className="db-bullet-title-container">
                        <div className="db-inactive-bullet-title-container">
                            <div className="db-active-bullet"></div>
                            <div className="db-active-title">Daily</div>
                        </div>
                        <div className="db-inactive-bullet-title-container">
                            <div className="db-inactive-bullet"></div>
                            <div className="db-inactive-title">Weekly</div>
                        </div>
                        <div className="db-inactive-bullet-title-container">
                            <div className="db-inactive-bullet"></div>
                            <div className="db-inactive-title">Monthly</div>
                        </div>
                    </div>
                    <div className="db-main-card-container">
                        <div className="db-main-card">
                            <div className="db-main-title-container">
                                <div className="db-main-title">Monthly Report</div>
                                <div className="db-main-options"><img src={Option} alt="option" /></div>
                            </div>
                            <div className="db-main-subtitle">Last 7 Days</div>
                            <div className="db-chart-container">
                            </div>
                            <div className="db-main-note">
                                <div className="db-note"><div className="db-note-bullet-income"></div> Income</div>
                                <div className="db-note"><div className="db-note-bullet-outcome"></div> Outcome</div>
                            </div>
                        </div>
                        <div className="db-aside-card-container">
                            <div className="db-aside-card-top">
                                <div className="db-admin-profile">
                                    <div className="db-admin-pict-container"><img src={Admin} alt="admin" className='db-admin-pict' /></div>
                                    <div className="db-admin-name-container">
                                        <div className="db-admin-name">Cheryn Laurent <br />
                                            <span> Keep up the good work and spread love!</span></div>
                                    </div>
                                </div>
                                <div className="db-staff-performa">
                                    <div className="db-staff-performa-title">Best Staff of the Month</div>
                                    <div className="db-staff-performa-donut">80%</div>
                                    <div className="db-staff-performa-note">Achieved 3.5M of total 478 Customer</div>
                                </div>
                            </div>
                            <div className="db-aside-card-bottom">bawah</div>
                        </div>
                    </div>
                    <div className="db-button-container">
                        <div className="db-download-button"></div>
                        <div className="db-share-button"></div>
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}
