import React, { Component } from 'react'

// Logo Import
import logoDark from '../../assets/images/common/logo-dark.svg'
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <img src={logoDark} alt='logo' />
      </div>
    )
  }
}

export default Footer
