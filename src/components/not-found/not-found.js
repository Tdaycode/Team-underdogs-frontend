import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './not-found.css'

class NotFound extends Component {
  render() {
    return (
      <div className='not-found mt-5'>
        <div className='alert alert-danger'>
          Page Not Found <Link to='/'>Home</Link>{' '}
        </div>
      </div>
    )
  }
}

export default NotFound
