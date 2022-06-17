import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import withParams from '../../Helper/withParams'
import './EditProduct.css'
//img import
import Camera from '../../assets/img/camera.png'

class EditProduct extends Component {
  constructor() {
    super();
    this.state = {
      page: "new product",
      category: ""
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
              <div className="new-pict-default"><img src={Camera} alt="pict" className='new-pict' /></div>
              <div className="new-take-pict-button">Take a picture</div>
              <div className="new-gallery-button">Choose from gallery</div>
              <div className="new-cancel-button">Cancel</div>
              <div className="new-save-button">Save Product</div>
            </div>
            <div className='new-right-container'>
              <label htmlFor="name" className='new-label'>Name :</label>
              <input type="text" name='name' id='name' className='new-text-input' placeholder='Input product name' />
              <label htmlFor="price" className='new-label'>Price :</label>
              <input type="text" name='price' id='price' className='new-text-input' placeholder='Input price' />
              <label htmlFor="description" className='new-label'>Description :</label>
              <input type="text" name='description' id='description' className='new-text-input' placeholder='Describe product' />
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
      </main>
    )
  }
}

export default withParams(EditProduct)