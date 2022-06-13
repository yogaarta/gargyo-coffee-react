import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Link, Navigate } from 'react-router-dom'
import 'bootstrap'

import "./Profile.css"
// import img
import Profpic from "../../assets/img/profile photo.png"
import EditIcon from "../../assets/img/Vectoredit.png"
import axios from 'axios'
import { connect } from 'react-redux'
import { logoutAction } from '../../redux/actionCreator/auth'


class Profile extends Component {
    constructor() {
        super();
        // const { isSuccess } = this.props
        this.state = {
            // isLoggedIn: isSuccess ? true : false,
            profile: [],
            getBirthday: "",
            email: "",
            mobile_number: "",
            display_name: "",
            first_name: "",
            last_name: "",
            address: "",
            birthday: "",
            gender: "",
            file: null,
            isUpdated: false,
            isEdit: false
        }
    }

    dateFormat = (date) => {
        const newDate = new Date(date);
        new Intl.DateTimeFormat(['ban', 'id']).format(newDate)
        return 
        // let date = new Date(this.state.profile.birthday)
        // let year = date.getFullYear()
        // let month = date.getMonth() + 1
        // if(month.length < 2) month = '0' + month.toString()
        // let day = date.getDate()
        // if(day.length < 2) day = '0' + day.toString()
        // let newDate = `${year}-${month}-${day}`
        // // let newDate = date.toISOString().split('T')[0]
        // return newDate
    }

    componentDidMount() {
        document.title = "Profile"
        const { token = null } = this.props.userInfo || {}
        console.log(this.props)
        const config = { headers: { Authorization: `Bearer ${token}` } }
        axios
            .get('http://localhost:8080/users', config)
            .then(result => {
                console.log(result.data.data[0])
                this.setState({
                    profile: result.data.data[0],
                })

            })
            .catch(error => {
                console.log(error)
            })



    }

    componentDidUpdate() {
        const { token } = this.props.userInfo
        if (this.state.isUpdated) {
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
        const { isLoggedOut } = this.props
        if (isLoggedOut === false) {
            return <Navigate to="/" />
        }
        return (
            <div>
                <Header profile_picture={this.state.profile.profile_picture} />
                <main className="main">
                    <div>
                        <h3 className="user-profile">User Profile</h3>
                    </div>
                    <div className="main-card">
                        <div className="profile-card">
                            <div className='profile-picture-container'><img src={this.state.profile.profile_picture ? `http://localhost:8080${this.state.profile.profile_picture}` : Profpic} alt="profile_photo" className="profile-picture" />
                            </div>
                            <div className="profile-text">
                                <h4 className="profile-name">{this.state.profile.display_name ? this.state.profile.display_name : "Display Name"}</h4>
                                <p className="profile-name">{this.state.profile.email}</p>
                            </div>
                            <label htmlFor='image-upload' className="choose-button">
                                <input type="file" name='image-upload' id='image-upload' className='profile-input-img'
                                    onChange={(e) => {
                                        console.log(e.target.files[0])
                                        this.setState({
                                            file: e.target.files[0],
                                        })
                                    }}
                                />
                                Choose photo</label>
                            <div className="remove-button">Remove photo</div>
                            <div className="editpass-button">Edit Password</div>
                            <div className="save-change-text">Do you want to save the change?</div>
                            <div className="save-change-button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                                onClick={() => {
                                    const { email, mobile_number, display_name, first_name, last_name, address, birthday, gender } = this.state;

                                    let body = new FormData()
                                    body.append('profile_picture', this.state.file);
                                    body.append('email', email);
                                    body.append('mobile_number', mobile_number);
                                    body.append('display_name', display_name);
                                    body.append('first_name', first_name);
                                    body.append('last_name', last_name);
                                    body.append('address', address);
                                    body.append('birthday', birthday);
                                    body.append('gender', gender);


                                    const { token } = this.props.userInfo
                                    const config = { headers: { Authorization: `Bearer ${token}`, "content-type": "multipart/form-data" } }
                                    axios
                                        .patch('http://localhost:8080/users', body, config)
                                        .then(result => {
                                            console.log(result)
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
                            <div className="logout-button" data-bs-toggle="modal" data-bs-target="#logoutModal">
                                Log Out
                            </div>
                        </div>
                        <div className="form-card">
                            <form>
                                <div className="form-top">
                                    <h4 className="form-title">Contacts</h4>
                                    <div className="edit-bullet"
                                        onClick={() => {
                                            // console.log(this.dateFormat())
                                            this.state.isEdit ?
                                                this.setState({
                                                    isEdit: false
                                                })
                                                :
                                                this.setState({
                                                    isEdit: true
                                                })
                                        }}
                                    ><img src={EditIcon} alt="edit" className="edit-bullet-img" /></div>
                                </div>
                                <div className="form-row">
                                    <div className="label-input">
                                        <label htmlFor="email">Email Address:</label>
                                        <input type="text" name="email" id="email" className="input-left profile-input"
                                            placeholder={"Enter email address"}
                                            value={this.state.isEdit ? null : this.state.profile.email}
                                            disabled={this.state.isEdit ? false : true}
                                            onChange={(e) => {
                                                this.setState({
                                                    email: e.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="label-input">
                                        <label htmlFor="phone">Mobile number:</label>
                                        <input type="text" name="phone" id="phone" className="input-right profile-input"
                                            placeholder={"Enter number"}
                                            value={this.state.isEdit ? null : this.state.profile.mobile_number}
                                            disabled={this.state.isEdit ? false : true}
                                            onChange={(e) => {
                                                this.setState({
                                                    mobile_number: e.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="label-input">
                                    <label htmlFor="address">Delivery Address:</label>
                                    <input type="text" name="address" id="address"
                                        className="input-left profile-input"
                                        placeholder={"Enter delivery address"}
                                        value={this.state.isEdit ? null : this.state.profile.address}
                                        disabled={this.state.isEdit ? false : true}
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
                                        <label htmlFor="display-name">Display Name:</label>
                                        <input type="text" name="display-name" id="display-name" className="input-left profile-input"
                                            value={this.state.isEdit ? null : this.state.profile.display_name}
                                            disabled={this.state.isEdit ? false : true}
                                            placeholder="Enter display name"
                                            onChange={(e) => {
                                                this.setState({
                                                    display_name: e.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                    <div className="label-input">
                                        <label htmlFor="date">Birthday</label>
                                        <input type="date" name="date" id="date" className="input-right profile-input"
                                            placeholder={"Enter birth date"}
                                            value=
                                            // {this.dateFormat(this.state.profile.birthday)}
                                            {this.state.isEdit ? null : this.state.profile.birthday}
                                            disabled={this.state.isEdit ? false : true}
                                            onChange={(e) => {
                                                this.setState({
                                                    birthday: e.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="label-input">
                                    <label htmlFor="first-name">First Name:</label>
                                    <input type="text" name="first-name" id="first-name" className="input-left profile-input"
                                        placeholder={"Enter first name"}
                                        value={this.state.isEdit ? null : this.state.profile.first_name}
                                        disabled={this.state.isEdit ? false : true}
                                        onChange={(e) => {
                                            this.setState({
                                                first_name: e.target.value
                                            })
                                        }}
                                    />
                                </div>
                                <div className="label-input">
                                    <label htmlFor="last-name">Last Name:</label>
                                    <input type="text" name="last-name" id="last-name" className="input-left profile-input"
                                        placeholder={"Enter last name"}
                                        value={this.state.isEdit ? null : this.state.profile.last_name}
                                        disabled={this.state.isEdit ? false : true}
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
                                            disabled={this.state.isEdit ? false : true}
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
                                            disabled={this.state.isEdit ? false : true}
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
                {/* LOGOUT MODAL */}
                <div className="modal fade" id="logoutModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title profile-modal-title" id="exampleModalLabel">Are You Sure?</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <Link to="/"
                                    onClick={() => {
                                        this.props.dispatch(logoutAction())
                                    }}
                                >
                                    <button type="button" className="btn btn-primary profile-btn-primary" data-bs-dismiss="modal">Log Out</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* UPDATE MODAL */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title profile-modal-title" id="exampleModalLabel">Update Success</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary profile-btn-primary" data-bs-dismiss="modal"
                                    onClick={() => {
                                        this.setState({
                                            isRegistered: true
                                        })
                                    }}
                                >Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (reduxState) => {
    const { auth: { userInfo, isSuccess, isLoggedOut } } = reduxState
    return { userInfo, isSuccess, isLoggedOut }
}

export default connect(mapStateToProps)(Profile)