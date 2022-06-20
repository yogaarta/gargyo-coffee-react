import React, { Component } from 'react'
import { Modal } from "react-bootstrap"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Link, Navigate } from 'react-router-dom'
import 'bootstrap'

import "./Profile.css"
// import img
import Profpic from "../../assets/img/default-pict.jpg"
import EditIcon from "../../assets/img/Vectoredit.png"
import axios from 'axios'
import { connect } from 'react-redux'
import { logoutAction } from '../../redux/actionCreator/auth'
import { getUserDataAction } from '../../redux/actionCreator/userData'


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
      picture: null,
      file: null,
      doUpdate: false,
      isUpdated: false,
      isEdit: false,
      isShow: false,
    }
  }

  componentDidMount() {
    document.title = "Profile"
    const { token = null } = this.props.userInfo || {}
    const { isLoading, data } = this.props.userData
    // const config = { headers: { Authorization: `Bearer ${token}` } }
    // axios
    //     .get(`${process.env.REACT_APP_BE_HOST}/users`, config)
    //     .then(result => {
    //         this.setState({
    //             profile: result.data.data[0],
    //         })

    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    this.props.dispatch(getUserDataAction(token))
    if (!isLoading) {
      this.setState({
        profile: data,
        email: data.email,
        mobile_number: data.mobile_number,
        display_name: data.display_name,
        first_name: data.first_name,
        last_name: data.last_name,
        address: data.address,
        birthday: data.birthday,
        gender: data.gender
      })
    }



  }

  componentDidUpdate() {
    const { token } = this.props.userInfo || {}
    // const { isLoading, data } = this.props.userData
    if (this.state.doUpdate) {
      const config = { headers: { Authorization: `Bearer ${token}` } }
      axios
        .get(`${process.env.REACT_APP_BE_HOST}/users`, config)
        .then(result => {
          this.setState({
            profile: result.data.data[0]
          })
        })
        .catch(error => {
          console.log(error)
        })
      // this.props.dispatch(getUserDataAction(token))
      // if (!isLoading) {
      //     this.setState({
      //         profile: data
      //     })
      // }

      this.setState({
        doUpdate: false
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
              <div className='profile-picture-container'>
                <img src={this.state.file === null ?
                  this.state.profile.profile_picture ? `${this.state.profile.profile_picture
                    }` : Profpic : this.state.file} alt="profile_photo" className="profile-picture" />
              </div>
              <div className="profile-text">
                <h4 className="profile-name">{this.state.profile.display_name ? this.state.profile.display_name : "Display Name"}</h4>
                <p className="profile-name">{this.state.profile.email}</p>
              </div>
              <label htmlFor='image-upload' className="choose-button">
                <input type="file" name='image-upload' id='image-upload' className='profile-input-img'
                  onChange={(e) => {
                    console.log(e.target.files[0])
                    const file = e.target.files[0]
                    if (file) {
                      const reader = new FileReader()
                      reader.onload = () => {
                        this.setState({ file: reader.result, picture: file })
                      }
                      reader.readAsDataURL(file)
                    }
                    // console.log(e.target.files[0])
                    // this.setState({
                    //   file: e.target.files[0],
                    // })
                  }}
                />
                Choose photo</label>
              <div className="remove-button"
                onClick={() => {
                  this.setState({
                    file: null,
                    picture: null
                  })
                }}
              >Remove photo</div>
              <div className="editpass-button">Edit Password</div>
              <div className="save-change-text">Do you want to save the change?</div>
              <div className="save-change-button"
                // data-bs-toggle="modal" data-bs-target="#exampleModal"
                onClick={() => {
                  this.setState({ isShow: true })
                  const { email, mobile_number, display_name, first_name, last_name, address, birthday, gender } = this.state;

                  let body = new FormData()
                  body.append('profile_picture', this.state.picture);
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
                    .patch(`${process.env.REACT_APP_BE_HOST}/users`, body, config)
                    .then(result => {
                      console.log(result)
                      this.setState({
                        doUpdate: true,
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
                      value={this.state.profile.email}
                      disabled={true}
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
                      value={this.state.isEdit ? this.state.mobile_number : this.state.profile.mobile_number}
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
                    value={this.state.isEdit ? this.state.address : this.state.profile.address}
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
                      value={this.state.isEdit ? this.state.display_name : this.state.profile.display_name}
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
                      {this.state.isEdit ? this.state.birthday : this.state.profile.birthday}
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
                    value={this.state.isEdit ? this.state.first_name : this.state.profile.first_name}
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
                    value={this.state.isEdit ? false : this.state.profile.last_name}
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
                      checked={this.state.gender === "male" ? true : false}
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
                      checked={this.state.gender === "female" ? true : false}
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
        {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title profile-modal-title" id="exampleModalLabel">{isLoading ? "Processing, Please wait a moment" : "Update Success"}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-footer">
                {isLoading ? <></> :
                  <button type="button" className="btn btn-primary profile-btn-primary" data-bs-dismiss="modal"
                    onClick={() => {
                      this.setState({
                        isRegistered: true
                      })
                    }}
                  >Proceed</button>
                }
              </div>
            </div>
          </div>
        </div> */}
        <Modal
          show={this.state.isShow}
          onHide={() => {
            this.setState({ isUpdated: false, isShow: false },
            );
            // this.setState({
            //   isSuccess: true
            // })
          }}
        >
          <Modal.Header>
            <Modal.Title className='profile-modal-title'>{this.state.isUpdated ? "Update Profile Success" : "Processing, please wait.."}</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            {/* <Button></Button> */}
          </Modal.Footer>
        </Modal>
      </div >
    )
  }
}

const mapStateToProps = (reduxState) => {
  const { auth: { userInfo, isSuccess, isLoggedOut }, userData } = reduxState
  return { userInfo, isSuccess, isLoggedOut, userData }
}

export default connect(mapStateToProps)(Profile)