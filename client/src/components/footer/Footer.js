import React from 'react'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineMail, AiOutlineTwitter } from 'react-icons/ai';
import './Footer.scss'
import creaditCard from '../../assets/creaditcard image.png'
function Footer() {
  return (
    <footer className='Footer'>
      <div className="container">
        <div className="content">
          <div className="footer-left">
            <h3 className='title'>Follow us</h3>
            <ul className='follow'>
              <li className='hover-link center'>
                <AiOutlineInstagram />
              </li>
              <li className='hover-link center'>
              <AiOutlineFacebook /></li>
              <li className='hover-link center'>
              <AiOutlineMail /></li>
              <li className='hover-link center'>
              <AiOutlineTwitter />
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <h3 className='title'>company</h3>
            <ul className="company">
            <li className='hover-link'>Contact us</li>
            <li className='hover-link'>Privacy Policy</li>
            <li className='hover-link'>Return And Exchange Plocy</li>
            <li className='hover-link'>Shoping policy</li>
            <li className='hover-link'>Terms & Condition</li>
              
            </ul>
          </div>
        </div>
          <div className="subfooter center">
            <div className="creadit-card-img ">
              <img src={creaditCard} alt="" />
            </div>
            <p>Copyright {new Date().getFullYear()} c <strong>Posterz</strong></p>
          </div>
      </div>
    </footer>
  )
}

export default Footer
