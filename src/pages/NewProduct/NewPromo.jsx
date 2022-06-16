import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './NewProduct.css'
//img import
import Camera from '../../assets/img/camera.png'

export default class NewPromo extends Component {
  constructor() {
    super();
    this.state = {
      page: "new promo"
    }
  }
  render() {
    return (
      <main>
        <Header />
        <div className="new-global-container">
          <div className='new-title'>Products <span>{'>'} Add New Promo</span></div>
          <section className='new-main-container'>
            <div className='new-left-container'>
              <div className="new-pict-default"><img src={Camera} alt="pict" className='new-pict' /></div>
              <div className="new-take-pict-button">Take a picture</div>
              <div className="new-gallery-button">Choose from gallery</div>
              <label htmlFor="discount" className='new-label'>Discount :</label>
              <input type="text" name='discount' id='discount' className='new-text-input' placeholder='Input discount' />
              <div className="new-date">
                <div className="new-start-date">
                  <label htmlFor="start-date" className='new-label'>Start :</label>
                  <input type="date" name='start-date' id='start-date' className='new-date-input' placeholder='Input start-date' />
                </div>
                <div className="new-start-date">
                  <label htmlFor="expire-date" className='new-label'>End :</label>
                  <input type="date" name='expire-date' id='expire-date' className='new-date-input' placeholder='Input expire-date' />
                </div>
              </div>
              <label htmlFor="coupon-code" className='new-label'>Input Coupon Code :</label>
              <input type="text" name='coupon-code' id='coupon-code' className='new-text-input' placeholder='Input coupon-code' />

            </div>
            <div className='new-right-container'>
              <div className="new-right-input">
                <label htmlFor="name" className='new-label'>Name :</label>
                <input type="text" name='name' id='name' className='new-text-input' placeholder='Type promo name' />
                <label htmlFor="price" className='new-label'>Normal Price :</label>
                <input type="text" name='price' id='price' className='new-text-input' placeholder='Type the normal price' />
                <label htmlFor="description" className='new-label'>Description :</label>
                <input type="text" name='description' id='description' className='new-text-input' placeholder='Describe the promo' />
                {/* <div className="new-choose-size">
                <h4 className="new-size-title">Choose Product Size</h4>
                <div className="new-size-container">
                  <label className="new-size-vector">R
                    <input type="radio" className='new-size-input' name='new-size-input'
                      onClick={() => {
                        this.setState({ size: "Regular" })
                      }
                      }
                    /><span className='new-size-checkmark'></span>
                  </label>
                  <label className="new-size-vector">L
                    <input type="radio" className='new-size-input' name='new-size-input'
                      onClick={() => {
                        this.setState({ size: "Large" })
                      }}
                    /><span className='new-size-checkmark'></span>
                  </label>
                  <label className="new-size-vector">XL
                    <input type="radio" className='new-size-input' name='new-size-input'
                      onClick={() => {
                        this.setState({ size: "Extra Large" })
                      }}
                    /><span className='new-size-checkmark'></span>
                  </label>
                </div>
              </div> */}
                <div className="new-category-container">
                  <h4 className="new-category-title">Product Category :</h4>
                  <div className="new-category-button">
                    <label className="new-category-button-inactive">
                      <input type="radio" name="new-category-input" className='new-category-input' />
                      <span className="new-category-checkmark"
                        onClick={() => {
                          this.setState({ category: "Dine In" })
                        }}
                      >Coffee</span>
                    </label>
                    <label className="new-category-button-inactive">
                      <input type="radio" name="new-category-input" className='new-category-input' />
                      <span className="new-category-checkmark"
                        onClick={() => {
                          this.setState({ category: "Door category" })
                        }}
                      >Non Coffee</span>
                    </label>
                    <label className="new-category-button-inactive">
                      <input type="radio" name="new-category-input" className='new-category-input' />
                      <span className="new-category-checkmark"
                        onClick={() => {
                          this.setState({ category: "Pick Up" })
                        }}
                      >Food</span>
                    </label>
                  </div>
                </div>
              </div>
                <div className="new-save-button">Save Promo</div>
                <div className="new-cancel-button">Cancel</div>
              <div className="new-right-button">
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    )
  }
}
