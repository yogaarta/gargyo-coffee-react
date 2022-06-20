import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Modal } from "react-bootstrap"
import './NewProduct.css'
//img import
import Camera from '../../assets/img/camera.png'
import axios from 'axios'
import { connect } from 'react-redux'

class NewProduct extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      name: "",
      price: "",
      description: "",
      category: "",
      picture: null,
      file: null,
      isUpdated: false,
      isShow: false
    }
  }

  componentDidMount() {
    document.title = "Add New Product"
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <main>
        <Header />
        <div className="new-global-container">
          <div className='new-title'><Link to="/product" className='new-link-title'> Products</Link>
            <span>{'>'} Add New Product</span></div>
          <section className='new-main-container'>
            <div className='new-left-container'>
              <div className="new-pict-default-container">
                {this.state.file ?
                  <img src={this.state.file} alt="product-pict" className='new-product-pict-preview' />
                  :
                  <div className='new-pict-default'>
                    <img src={Camera} alt="pict" className='new-pict' />
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
              <div className="new-cancel-button"
                onClick={() => {
                  this.setState({
                    name: "",
                    price: "",
                    description: "",
                    category: "",
                    picture: "",
                    file: null
                  })
                }}
              >Cancel</div>
              <div className="new-save-button"
                onClick={() => {
                  this.setState({ isShow: true })
                  const { name, price, description, category, picture } = this.state
                  const body = new FormData();
                  body.append('name', name);
                  body.append('price', price);
                  body.append('description', description);
                  body.append('category_id', category);
                  body.append('picture', picture)

                  const { token } = this.props.userInfo
                  const config = { headers: { Authorization: `Bearer ${token}`, "content-type": "multipart/form-data" } }
                  axios
                    .post(`${process.env.REACT_APP_BE_HOST}/products`, body, config)
                    .then(result => {
                      console.log(result)
                      this.setState({
                        product: result.data.data,
                        isUpdated: true
                      })
                    })
                    .catch(error => {
                      console.log(error)
                    })
                }}
              >Save Product</div>
            </div>
            <div className='new-right-container'>
              <label htmlFor="name" className='new-label'>Name :</label>
              <input type="text" name='name' id='name' className='new-text-input' placeholder='Input product name'
                onChange={(e) => {
                  this.setState({
                    name: e.target.value
                  })
                }}
              />
              <label htmlFor="price" className='new-label'>Price :</label>
              <input type="text" name='price' id='price' className='new-text-input' placeholder='Input price'
                onChange={(e) => {
                  this.setState({
                    price: e.target.value
                  })
                }}
              />
              <label htmlFor="description" className='new-label'>Description :</label>
              <input type="text" name='description' id='description' className='new-text-input' placeholder='Describe product'
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
                    <input type="radio" name="new-category-input" className='new-category-input' />
                    <span className="new-category-checkmark"
                      onClick={() => {
                        this.setState({ category: "1" })
                      }}
                    >Coffee</span>
                  </label>
                  <label className="new-category-button-inactive">
                    <input type="radio" name="new-category-input" className='new-category-input' />
                    <span className="new-category-checkmark"
                      onClick={() => {
                        this.setState({ category: "2" })
                      }}
                    >Non Coffee</span>
                  </label>
                  <label className="new-category-button-inactive">
                    <input type="radio" name="new-category-input" className='new-category-input' />
                    <span className="new-category-checkmark"
                      onClick={() => {
                        this.setState({ category: "4" })
                      }}
                    >Food</span>
                  </label>
                </div>
              </div>
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
            <Modal.Title className='profile-modal-title'>{this.state.isUpdated ? "New Product Added" : "Processing, please wait.."}</Modal.Title>
          </Modal.Header>
          {this.state.isUpdated ?
            <Modal.Body className='new-modal-body'>
              Name: {this.state.product.name} <br />
              Price: {this.state.product.price} <br />
              Description: {this.state.product.description} <br />
              Category: {this.state.product.category_id === "1" ? "Coffee" : this.state.product.category_id === "2" ? "Non Coffee" : "Food"}
            </Modal.Body>
            : <></>}
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

export default connect(mapStateToProps)(NewProduct)