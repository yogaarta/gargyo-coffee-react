import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Modal } from "react-bootstrap"
import './EditPromo.css'
//img import
import Camera from '../../assets/img/camera.png'
import axios from 'axios'
import { connect } from 'react-redux'
import withParams from '../../Helper/withParams'

class EditPromo extends Component {
  constructor() {
    super();
    this.state = {
      promo: [],
      name: "",
      price: "",
      description: "",
      category: "",
      discount: "",
      start: "",
      end: "",
      code: "",
      picture: null,
      file: null,
      isShow: false,
      isUpdated: false
    }
  }

  componentDidMount() {
    document.title = "Add New Promo"
    window.scrollTo(0, 0);
    const { params } = this.props
    axios
      .get(`${process.env.REACT_APP_BE_HOST}/promos/${params.id}`)
      .then(result => {
        this.setState({
          promo: result.data.data[0],
          name: result.data.data[0].name,
          price: result.data.data[0].normal_price,
          description: result.data.data[0].description,
          category: result.data.data[0].category_id === "coffee" ? "1" : result.data.data[0].category_id === "noncoffee" ? "2" : "4",
          discount: result.data.data[0].discount,
          start: result.data.data[0].start_date,
          end: result.data.data[0].end_date,
          code: result.data.data[0].code,

        })
        console.log(this.state.promo)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <main>
        <Header />
        <div className="new-global-container">
          <div className='new-title'><Link to={"/product"}>Promo </Link><span>{'>'} {this.state.promo.name}</span></div>
          <section className='new-main-container'>
            <div className='new-left-container'>
              <div className="new-promo-pict-default-container">
                {this.state.file ?
                  <img src={this.state.file} alt="promo" className='new-product-pict-preview' />
                  :
                  this.state.promo.picture ?
                    <img src={this.state.promo.picture} alt="" className='new-product-pict-preview' />
                    :
                    <div className="new-promo-pict-default">
                      <img src={Camera} alt="pict" className='new-promo-pict' />
                    </div>
                }
              </div>
              <div className="new-take-pict-button">Take a picture</div>
              <label htmlFor='image-upload' className="new-gallery-button">
                <input type="file" name='image-upload' id='image-upload' className='new-image-upload'
                  onChange={(e) => {
                    const file = e.target.files[0]
                    if (file) {
                      const reader = new FileReader()
                      reader.onload = () => {
                        this.setState({ file: reader.result, picture: file })
                      }
                      reader.readAsDataURL(file)
                    }
                  }}
                />
                Choose from gallery
              </label>
              <label htmlFor="discount" className='new-label'>Discount :</label>
              <input type="text" name='discount' id='discount' className='new-text-input' placeholder='Input discount'
                value={this.state.discount}
                onChange={(e) => {
                  this.setState({
                    discount: e.target.value
                  })
                }}
              />
              <div className="new-date">
                <div className="new-start-date">
                  <label htmlFor="start-date" className='new-label'>Start :</label>
                  <input type="date" name='start-date' id='start-date' className='new-date-input' placeholder='Input start-date'
                    value={this.state.start}
                    onChange={(e) => {
                      this.setState({
                        start: e.target.value
                      })
                    }}
                  />
                </div>
                <div className="new-start-date">
                  <label htmlFor="expire-date" className='new-label'>End :</label>
                  <input type="date" name='expire-date' id='expire-date' className='new-date-input' placeholder='Input expire-date'
                    value={this.state.end}
                    onChange={(e) => {
                      this.setState({
                        end: e.target.value
                      })
                    }}
                  />
                </div>
              </div>
              <label htmlFor="coupon-code" className='new-label'>Input Coupon Code :</label>
              <input type="text" name='coupon-code' id='coupon-code' className='new-text-input' placeholder='Input coupon-code'
                value={this.state.code}
                onChange={(e) => {
                  this.setState({
                    code: e.target.value
                  })
                }}
              />
            </div>
            <div className='new-right-container'>
              <div className="new-right-input">
                <label htmlFor="name" className='new-label'>Name :</label>
                <input type="text" name='name' id='name' className='new-text-input' placeholder='Input promo name'
                  value={this.state.name}
                  onChange={(e) => {
                    this.setState({
                      name: e.target.value
                    })
                  }}
                />
                <label htmlFor="price" className='new-label'>Normal Price :</label>
                <input type="text" name='price' id='price' className='new-text-input' placeholder='Input normal price'
                  value={this.state.price}
                  onChange={(e) => {
                    this.setState({
                      price: e.target.value
                    })
                  }}
                />
                <label htmlFor="description" className='new-label'>Description :</label>
                <input type="text" name='description' id='description' className='new-text-input' placeholder='Describe promo'
                  value={this.state.description}
                  onChange={(e) => {
                    this.setState({
                      description: e.target.value
                    })
                  }}
                />
                <div className="new-category-container">
                  <h4 className="new-category-title">Product Category :</h4>
                  <div className="new-category-button">
                    <label className="new-category-button-inactive">
                      <input type="radio" name="new-category-input" className='new-category-input' checked={this.state.category === "1" ? true : false} />
                      <span className="new-category-checkmark"
                        onClick={() => {
                          this.setState({ category: "1" })
                        }}
                      >Coffee</span>
                    </label>
                    <label className="new-category-button-inactive">
                      <input type="radio" name="new-category-input" className='new-category-input' checked={this.state.category === "2" ? true : false} />
                      <span className="new-category-checkmark"
                        onClick={() => {
                          this.setState({ category: "2" })
                        }}
                      >Non Coffee</span>
                    </label>
                    <label className="new-category-button-inactive">
                      <input type="radio" name="new-category-input" className='new-category-input' checked={this.state.category === "4" ? true : false} />
                      <span className="new-category-checkmark"
                        onClick={() => {
                          this.setState({ category: "4" })
                        }}
                      >Food</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="new-save-button"
                onClick={() => {
                  this.setState({ isShow: true })
                  const { name, price, description, category, discount, start, end, code, picture } = this.state
                  const body = new FormData();
                  body.append('name', name);
                  body.append('normal_price', price);
                  body.append('description', description);
                  body.append('category_id', category);
                  body.append('discount', discount);
                  body.append('start_date', start);
                  body.append('end_date', end);
                  body.append('code', code);
                  body.append('picture', picture);

                  const { token } = this.props.userInfo
                  const config = { headers: { Authorization: `Bearer ${token}`, "content-type": "multipart/form-data" } }
                  axios
                    .patch(`${process.env.REACT_APP_BE_HOST}/promos/${this.props.params.id}`, body, config)
                    .then(result => {
                      console.log(result.data.data)
                      this.setState({
                        isUpdated: true
                      })
                    })
                    .catch(error => {
                      console.log(error)
                    })
                }}
              >Save Promo</div>
              <div className="new-cancel-button">Cancel</div>
              {/* <div className="new-right-button">
              </div> */}
            </div>
          </section>
        </div>
        <Footer />
        <Modal
          show={this.state.isShow}
          onHide={() => {
            this.setState({ isUpdated: false, isShow: false },
            );
          }}
        >
          <Modal.Header>
            <Modal.Title className='profile-modal-title'>{this.state.isUpdated ? "Promo Updated" : "Processing, please wait.."}</Modal.Title>
          </Modal.Header>
          {/* {this.state.isUpdated ?
            <Modal.Body className='new-modal-body'>
              Name: {this.state.promo.name} <br />
              Normal Price: {this.state.promo.normal_price} <br />
              Discount: {`${this.state.promo.discount}%`} <br />
              Start: {this.state.promo.start_date} <br />
              End: {this.state.promo.end_date} <br />
              Promo Code: {this.state.promo.code} <br />
              Description: {this.state.promo.description} <br />
              Category: {this.state.promo.category_id === "1" ? "Coffee" : this.state.product.category_id === "2" ? "Non Coffee" : "Food"}
            </Modal.Body>
            : <></>} */}
          <Modal.Footer>
            {/* <Button></Button> */}
          </Modal.Footer>
        </Modal>
      </main>
    )
  }
}

const mapStateToProps = (reduxState) => {
  const { auth: { userInfo } } = reduxState
  return { userInfo }
}

export default connect(mapStateToProps)(withParams(EditPromo))