import React from 'react'
import footerlogo from '../assets/images/png/footer-logo.png'
import { Twitter } from "../components/IconImg";
import { Instagram } from "../components/IconImg";
import { Discord } from "../components/IconImg";

function Footer() {
  return (
    <div>
      <div className='footer-bg_img pb-4 pt-5 mb-2'>
        <div className='text-center pb-5'>
          <img src={footerlogo} alt='footerlogo' className='' />

          <div className='pt-3'>
            <a href=''>
              <Twitter/>
            </a>
            <a href=''>
              <Instagram/>
            </a>
            <a href=''>
              <Discord/>
            </a>
          </div>
        </div>
        <hr className='w-100 line'>
        </hr>
        <p className='text-white text-center fw-normal fs-16 ff_Montserrat pt-3'>© Cyber FPS 2022</p>
      </div>

    </div>
  )
}

export default Footer
