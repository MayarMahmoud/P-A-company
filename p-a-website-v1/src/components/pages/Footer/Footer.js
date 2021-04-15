import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
 
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import pzLogo from '../../../images/PZ.png'

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>How it works</Link>
            
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contactUs'>Contact</Link>
            {/* <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link> */}
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://instagram.com/pz_for_paper?igshid=1awzklq0g6ues'>Instagram</Link>
            <Link to='https://www.facebook.com/PZ-102467528638608/'>Facebook</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={pzLogo} className='navbar-icon' />
              P&Z
            </Link>
          </div>
          <small className='website-rights'> P&Z © 2020</small>
          <div className='social-icons'>
          <Link
              className='social-icon-link'
              to='https://instagram.com/pz_for_paper?igshid=1awzklq0g6ues'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to= 'https://www.facebook.com/PZ-102467528638608/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
           
            
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;