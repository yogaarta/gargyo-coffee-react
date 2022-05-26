import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import "./Profile.css"
// import img
import Profpic from "../../assets/img/profile photo.png"
import EditIcon from "../../assets/img/Vectoredit.png"


export default class Profile extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className="main">
                    <div>
                        <h3 className="user-profile">User Profile</h3>
                    </div>
                    <div className="main-card">
                        <div className="profile-card">
                            <div><img src={Profpic} alt="profile_photo" className="profile-picture" />
                            </div>
                            <div className="profile-text">
                                <h4 className="profile-name">Zulaikha</h4>
                                <p className="profile-name">zulaikha17@gmail.com</p>
                            </div>
                            <div className="choose-button">Choose photo</div>
                            <div className="remove-button">Remove photo</div>
                            <div className="editpass-button">Edit Password</div>
                            <div className="save-change-text">Do you want to save the change?</div>
                            <div className="save-change-button">Save Change</div>
                            <div className="cancel-change-button">Cancel</div>
                            <div className="logout-button">Log Out</div>
                        </div>
                        <div className="form-card">
                            <form>
                                <div className="form-top">
                                    <h4 className="form-title">Contacts</h4>
                                    <div className="edit-bullet"><img src={EditIcon} alt="edit" className="edit-bullet-img" /></div>
                                </div>
                                <div className="form-row">
                                    <div className="label-input">
                                        <label for="email">Email Address:</label>
                                        <input type="text" name="email" id="email" placeholder="Enter email address"
                                            className="input-left profile-input" />
                                    </div>
                                    <div className="label-input">
                                        <label for="phone">Mobile number:</label>
                                        <input type="text" name="phone" id="phone" placeholder="Enter number" className="input-right profile-input" />
                                    </div>
                                </div>
                                <div className="label-input">
                                    <label for="address">Delivery Address:</label>
                                    <input type="text" name="address" id="address" placeholder="Enter delivery address"
                                        className="input-left profile-input" />
                                </div>
                                <div>
                                    <h4 className="form-title">Details</h4>
                                </div>
                                <div className="form-row">
                                    <div className="label-input">
                                        <label for="display-name">Display Name:</label>
                                        <input type="text" name="display-name" id="display-name" placeholder="Enter display name"
                                            className="input-left profile-input" />
                                    </div>
                                    <div className="label-input">
                                        <label for="date">DD/MM/YY</label>
                                        <input type="date" name="date" id="date" placeholder="Enter birth date" className="input-right profile-input" />
                                    </div>
                                </div>
                                <div className="label-input">
                                    <label for="first-name">First Name:</label>
                                    <input type="text" name="first-name" id="first-name" placeholder="Enter first name"
                                        className="input-left profile-input" />
                                </div>
                                <div className="label-input">
                                    <label for="last-name">Last Name:</label>
                                    <input type="text" name="last-name" id="last-name" placeholder="Enter last name"
                                        className="input-left profile-input" />
                                </div>
                                <div className="malefemale">
                                    <label className="radio-container">Male
                                        <input type="radio" checked="checked" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-container">Female
                                        <input type="radio" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>

        )
    }
}
