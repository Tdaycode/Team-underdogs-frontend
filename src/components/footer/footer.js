import React, { Component } from 'react'

// Logo Import
import logoDark from '../../assets/images/common/logo-dark.svg'
import googleSvg from '../../assets/images/common/Google+.svg'
import facebookSvg from '../../assets/images/common/Facebook.svg'
import twitterSvg from '../../assets/images/common/Twitter.svg'
import instagramSvg from '../../assets/images/common/Instagram.svg'
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className="container">
          <div className="row" style={{ paddingTop: '60px'}}>
            <div className="col-xs-12 col-sm-4 justify space__below">
              <div className="logo">
                <img src={logoDark} alt='logo' />
              </div>
              <div className="msg">
                <p> Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum</p>
              </div>
              <div className="social__media">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 social__links">
                      <img src={googleSvg} alt="google"/>
                      <img src={facebookSvg} alt="facebook"/>
                      <img src={twitterSvg} alt="twitter"/>
                      <img src={instagramSvg} alt="instagram"/>

                    </div>
                  </div>
                </div>
            </div>
            <div className="col-xs-12 col-sm-2 coinbase__nav justify space__below">
              <h2>CoinBase Links</h2>
              <div className="links">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/sell">Sell</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-2 coinbase__contact justify space__below">
              <h2>Contact Us</h2>
              <div className="mails">
                <p>(+234) 137632128</p>
                <p><a href="/">Coinbase@yahoo.com</a></p>
                <p>Address goes here</p>
              </div>
              <p>Download Our App</p>
            </div>
            <div className="col-xs-12 col-sm-4 coinbase__instagram justify space__below">
              <h2>CoinBase Instagram</h2>
              <div className="boxes">
                <div className="box"></div>
                <div className="box">+</div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <p>&#169; 2019  Designed by Cr8tiv_yemmy</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
