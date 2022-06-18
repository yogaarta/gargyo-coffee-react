import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import withParams from '../../Helper/withParams'
import { Modal } from "react-bootstrap"
import './EditProduct.css'
import axios from 'axios'
//img import
import Camera from '../../assets/img/camera.png'
import { connect } from 'react-redux'

class EditProduct extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      page: "new product",
      category: "",
      name: "",
      price: "",
      description: "",
      picture: "",
      file: null,
      isUpdated: false
    }
  }

  componentDidMount() {
    document.title = "Edit Product"
    window.scrollTo(0, 0);
    const { params } = this.props
    axios
      .get(`${process.env.REACT_APP_BE_HOST}/products/${params.id}`)
      .then(result => {
        console.log(this.state.product)
        this.setState({
          product: result.data.data[0],
          name: result.data.data[0].name,
          price: result.data.data[0].price,
          description: result.data.data[0].description,
          category: result.data.data[0].category === "coffee" ? "1" : result.data.data[0].category === "noncoffee" ? "2" : "4"
        })
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
          <div className='new-title'><Link to="/product" className='new-link-title'> Products </Link>
            <span> {'>'} <Link to={`/product/${this.state.product.id}`}>{this.state.product.name}</Link></span>
          </div>
          <section className='new-main-container'>
            <div className='new-left-container'>
              <div className="new-pict-default-container">
                {this.state.file === null ?
                  this.state.product.picture ?
                    <img src={`http://localhost:8080${this.state.product.picture}`} alt={this.state.product.name} className="new-product-pict" />
                    : <div className="new-pict-default"><img src={Camera} alt="pict" className='new-pict' /></div>
                  : <img src={URL.createObjectURL(this.state.file)} alt="preview" className='new-product-pict' />
                }
              </div>
              <div className="new-take-pict-button">Take a picture</div>
              <label htmlFor='image-upload' className="new-gallery-button">
                <input type="file" name='image-upload' id='image-upload' className='new-image-upload'
                  onChange={(e) => {
                    console.log(e.target.files[0])
                    this.setState({
                      file: e.target.files[0],
                    })
                  }}
                />
                Choose from gallery</label>
              <div className="new-cancel-button"
                onClick={() => {
                  this.setState({
                    file: null,
                    name: this.state.product.name,
                    price: this.state.product.price,
                    description: this.state.product.description,
                  })
                }}
              >Cancel</div>
              <div className="new-save-button"
                onClick={() => {
                  const { name, price, description, category, file } = this.state
                  const body = new FormData();
                  body.append('name', name);
                  body.append('price', price);
                  body.append('description', description);
                  body.append('category_id', category);
                  body.append('picture', file)

                  const { token } = this.props.userInfo
                  const config = { headers: { Authorization: `Bearer ${token}`, "content-type": "multipart/form-data" } }
                  axios
                    .patch(`${process.env.REACT_APP_BE_HOST}/products/${this.state.product.id}`, body, config)
                    .then(result => {
                      console.log(result)
                      this.setState({
                        isUpdated: true
                      })
                    })
                    .catch(error => {
                      console.log(error)
                    })
                  console.log(body)
                }}
              >Save Product</div>
            </div>
            <div className='new-right-container'>
              <label htmlFor="name" className='new-label'>Name :</label>
              <input type="text" name='name' id='name' className='new-text-input' placeholder='Input product name'
                value={this.state.name}
                onChange={(e) => {
                  this.setState({
                    name: e.target.value
                  })
                }}
              />
              <label htmlFor="price" className='new-label'>Price :</label>
              <input type="text" name='price' id='price' className='new-text-input' placeholder='Input price'
                value={this.state.price}
                onChange={(e) => {
                  this.setState({
                    price: e.target.value
                  })
                }}
              />
              <label htmlFor="description" className='new-label'>Description :</label>
              <input type="text" name='description' id='description' className='new-text-input' placeholder='Describe product'
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
          show={this.state.isUpdated}
          onHide={() => {
            this.setState({ isUpdated: false },
            );
          }}
        >
          <Modal.Header>
            <Modal.Title className='profile-modal-title'>Update Success</Modal.Title>
          </Modal.Header>
          {/* <Modal.Body></Modal.Body> */}
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

export default connect(mapStateToProps)(withParams(EditProduct))