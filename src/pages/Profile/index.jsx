import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

import "./Profile.css"

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Header />
                <main class="main">
                    <div>
                        <h3 class="user-profile">User Profile</h3>
                    </div>
                    <div class="main-card">
                        <div class="profile-card">
                            <div><img src="assets/images/profile photo.png" alt="profile_photo" class="profile-picture" />
                            </div>
                            <div class="profile-text">
                                <h4 class="profile-name">Zulaikha</h4>
                                <p class="profile-name">zulaikha17@gmail.com</p>
                            </div>
                            <div class="choose-button">Choose photo</div>
                            <div class="remove-button">Remove photo</div>
                            <div class="editpass-button">Edit Password</div>
                            <div class="save-change-text">Do you want to save the change?</div>
                            <div class="save-change-button">Save Change</div>
                            <div class="cancel-change-button">Cancel</div>
                            <div class="logout-button">Log Out</div>
                        </div>
                        <div class="form-card">
                            <form>
                                <div class="form-top">
                                    <h4 class="form-title">Contacts</h4>
                                    <div class="edit-bullet"><img src="assets/images/Vectoredit.png" alt="edit" class="edit-bullet-img" /></div>
                                </div>
                                <div class="form-row">
                                    <div class="label-input">
                                        <label for="email">Email Address:</label>
                                        <input type="text" name="email" id="email" placeholder="Enter email address"
                                            class="input-left profile-input" />
                                    </div>
                                    <div class="label-input">
                                        <label for="phone">Mobile number:</label>
                                        <input type="text" name="phone" id="phone" placeholder="Enter number" class="input-right profile-input" />
                                    </div>
                                </div>
                                <div class="label-input">
                                    <label for="address">Delivery Address:</label>
                                    <input type="text" name="address" id="address" placeholder="Enter delivery address"
                                        class="input-left profile-input" />
                                </div>
                                <div>
                                    <h4 class="form-title">Details</h4>
                                </div>
                                <div class="form-row">
                                    <div class="label-input">
                                        <label for="display-name">Display Name:</label>
                                        <input type="text" name="display-name" id="display-name" placeholder="Enter display name"
                                            class="input-left profile-input" />
                                    </div>
                                    <div class="label-input">
                                        <label for="date">DD/MM/YY</label>
                                        <input type="date" name="date" id="date" placeholder="Enter birth date" class="input-right profile-input" />
                                    </div>
                                </div>
                                <div class="label-input">
                                    <label for="first-name">First Name:</label>
                                    <input type="text" name="first-name" id="first-name" placeholder="Enter first name"
                                        class="input-left profile-input" />
                                </div>
                                <div class="label-input">
                                    <label for="last-name">Last Name:</label>
                                    <input type="text" name="last-name" id="last-name" placeholder="Enter last name"
                                        class="input-left profile-input" />
                                </div>
                                <div class="malefemale">
                                    <label class="radio-container">Male
                                        <input type="radio" checked="checked" name="radio" />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="radio-container">Female
                                        <input type="radio" name="radio" />
                                        <span class="checkmark"></span>
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
