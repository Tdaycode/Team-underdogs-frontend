import React, { Fragment } from 'react'
import group from '../../assets/images/Contact/Group.png'
import path from '../../assets/images/Contact/path.png'
import pin from '../../assets/images/Contact/pin-3.png'
import email from '../../assets/images/Contact/email-83.png'
import phone from '../../assets/images/Contact/phone-call.png'
import './contact.css'

function Contact() {
  return (
    <Fragment>
      {/* Markup for Hero Section */}
      <section className='hero  fluid  '>
        <div className='overlay'></div>
        <div className='section__wordings'>
          <h3 className='section__wordings-secondary  section__wordings-secondary--mod text-white font-weight-normal'>
            HOME / CONTACT US
          </h3>
          <h1 className='section__wordings-primary text-white font-weight-bold'>
            24 / 7 Customer Support Including weekends
          </h1>
          <h3 className='section__wordings-secondary text-white font-weight-normal '>
            We're always there to help regardless the number of querries at hand
          </h3>
          <a className='section__wordings-cta' href='#bottom'>
            Message Us
          </a>
        </div>
        <div className='section__image image-fluid'>
          <img src={group} alt='Group__image' />
        </div>
        <div className='section__path'>
          <img src={path} alt='path' />
        </div>
      </section>
      {/* end of hero section */}

      {/*Markup For form section  */}
      <section className='form' id='form'>
        <div className='section-form-paragraph'>
          Please note that all messages will be replied within the next 12hours
        </div>
        <form action=''>
          <div className='input__wrapper'>
            <div className='section-name-email'>
              <input
                type='text'
                placeholder='Name *'
                className='section-input-1'
              />
              <input
                type='email'
                placeholder='Email *'
                className='section-input-2 '
              />
            </div>
            <textarea placeholder='Your Comment'></textarea>
            <br />
            <button className='section-publish'>PUBLISH</button>
          </div>
        </form>
      </section>
      {/* end of form section */}

      {/* markup for map section */}
      <section className='map__section'>
        <div className='overlay overlay--mod'></div>
        <div className='map__section__inner'>
          <div className='map__section__inner-detail'>
            <img src={pin} alt='' className='map__section__inner-detail-img' />
            <p className='map__section__inner-detail-p'>
              13 Sawyer Crescent Victoria Island Lagos Nigeria
            </p>
          </div>
          <div className='map__section__inner-detail'>
            <img
              src={phone}
              alt=''
              className='map__section__inner-detail-img'
            />
            <p className='map__section__inner-detail-p'>(+234) 137632128</p>
          </div>
          <div className='map__section__inner-detail'>
            <img
              src={email}
              alt=''
              className='map__section__inner-detail-img'
            />
            <p className='map__section__inner-detail-p'>Support@coinbase.com</p>
          </div>
        </div>
      </section>
      {/* end of of map section */}
    </Fragment>
  )
}

export default Contact
