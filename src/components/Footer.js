import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
const Footer = () => {
  return (
    <>
    <div className='bg-dark pb-4 pt-4'>
    <h4 className='text-center ' ><Link to='/' className='text-decoration-none text-white mb-3 mt-3'>© 2022 All rights reserved <Link to='/' className='text-decoration-none text-white lead fw-bolder'>< img src={logo} /></Link>
    </Link> </h4>
    </div>
    </>
  )
}

export default Footer