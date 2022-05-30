import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Link, Navigate } from 'react-router-dom'

import "./Profile.css"
// import img
import Profpic from "../../assets/img/profile photo.png"
import EditIcon from "../../assets/img/Vectoredit.png"
import axios from 'axios'


export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: localStorage.getItem("user-info") ? true : false,
            profile: [],
            email: "",
            mobile_number: "",
            display_name: "",
            first_name: "",
            last_name: "",
            address: "",
            birthday: "",
            gender: "",
            isUpdated: false
        }
    }

    componentDidMount() {
        document.title="Profile"
        const { token } = JSON.parse(localStorage.getItem("user-info"))

        const config = { headers: { Authorization: `Bearer ${token}` } }
        axios
            .get('http://localhost:8080/users', config)
            .then(result => {
                console.log(result.data.data)
                this.setState({
                    profile: result.data.data[0]
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidUpdate() {
        if (this.state.isUpdated) {
            const { token } = JSON.parse(localStorage.getItem("user-info"))

            const config = { headers: { Authorization: `Bearer ${token}` } }
            axios
                .get('http://localhost:8080/users', config)
                .then(result => {
                    console.log(result.data.data[0])
                    this.setState({
                        profile: result.data.data[0]
                    })
                })
                .catch(error => {
                    console.log(error)
                })

            this.setState({
                isUpdated: false
            })
        }
    }
    render() {
        if (this.state.isLoggedIn === false) {
            return <Navigate to="/" />
        }
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
                                <h4 className="profile-name">{this.state.profile.display_name ? this.state.profile.display_name : "Display Name"}</h4>
                                <p className="profile-name">{this.state.profile.email}</p>
                            </div>
                            <div className="choose-button">Choose photo</div>
                            <div className="remove-button">Remove photo</div>
                            <div className="editpass-button">Edit Password</div>
                            <div className="save-change-text">Do you want to save the change?</div>
                            <div className="save-change-button"
                                onClick={() => {
                                    const { email, mobile_number, display_name, first_name, last_name, address, birthday, gender } = this.state;
                                    const body = { email, mobile_number, display_name, first_name, last_name, address, birthday, gender };
                                    const { token } = JSON.parse(localStorage.getItem("user-info"))
                                    const config = { headers: { Authorization: `Bearer ${token}` } }
                                    axios
                                        .patch('http://localhost:8080/users', body, config)
                                        .then(result => {
                                            console.log(result)
                                            alert(result.data.msg)
                                            this.setState({
                                                isUpdated: true
                                            })
                                        })
                                        .catch(error => {
                                            console.log(error)
                                        })
                                }}
                            >Save Change</div>
                            <div className="cancel-change-button">Cancel</div>
                            <div className="logout-button">
                                <Link to="/"
                                    onClick={() => {
                                        localStorage.removeItem("user-info")
                                    }}
                                >
                                    Log Out
                                </Link>
                            </div>
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
                                        <input type="text" name="email" id="email" className="input-left profile-input"
                                            placeholder={this.state.profile.email ? this.state.profile.email : "Enter email address"}
                                            onChange={(e) => {
                                                this.setState({
                                                    email: e.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="label-input">
                                        <label for="phone">Mobile number:</label>
                                        <input type="text" name="phone" id="phone" className="input-right profile-input"
                                            // value={this.state.profile.mobile_number}
                                            placeholder={this.state.profile.mobile_number ? this.state.profile.mobile_number : "Enter number"}
                                            onChange={(e) => {
                                                this.setState({
                                                    mobile_number: e.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="label-input">
                                    <label for="address">Delivery Address:</label>
                                    <input type="text" name="address" id="address"
                                        className="input-left profile-input"
                                        placeholder={this.state.profile.address ? this.state.profile.address : "Enter delivery address"}
                                        onChange={(e) => {
                                            this.setState({
                                                address: e.target.value
                                            })
                                        }}
                                    />
                                </div>
                                <div>
                                    <h4 className="form-title">Details</h4>
                                </div>
                                <div className="form-row">
                                    <div className="label-input">
                                        <label for="display-name">Display Name:</label>
                                        <input type="text" name="display-name" id="display-name" className="input-left profile-input"
                                            // value={this.state.profile.display_name}
                                            placeholder={this.state.profile.display_name ? this.state.profile.display_name : "Enter display name"}
                                            onChange={(e) => {
                                                this.setState({
                                                    display_name: e.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="label-input">
                                        <label for="date">Birthday</label>
                                        <input type="date" name="date" id="date" className="input-right profile-input"
                                            placeholder={this.state.profile.birthday ? this.state.profile.birthday : "Enter birth date"}
                                            onChange={(e) => {
                                                this.setState({
                                                    birthday: e.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="label-input">
                                    <label for="first-name">First Name:</label>
                                    <input type="text" name="first-name" id="first-name" className="input-left profile-input"
                                        placeholder={this.state.profile.first_name ? this.state.profile.first_name : "Enter first name"}
                                        // value={this.state.profile.first_name}
                                        onChange={(e) => {
                                            this.setState({
                                                first_name: e.target.value
                                            })
                                        }}
                                    />
                                </div>
                                <div className="label-input">
                                    <label for="last-name">Last Name:</label>
                                    <input type="text" name="last-name" id="last-name" className="input-left profile-input"
                                        placeholder={this.state.profile.last_name ? this.state.profile.last_name : "Enter last name"}
                                        // value={this.state.profile.last_name}
                                        onChange={(e) => {
                                            this.setState({
                                                last_name: e.target.value
                                            })
                                        }}
                                    />
                                </div>
                                <div className="malefemale">
                                    <label className="radio-container">Male
                                        <input type="radio" name="radio"
                                            onChange={() => {
                                                this.setState({
                                                    gender: "male"
                                                })
                                            }}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-container">Female
                                        <input type="radio" name="radio" 
                                        onChange={() => {
                                            this.setState({
                                                gender: "female"
                                            })
                                        }}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </main >
                <Footer />
            </div >

        )
    }
}
