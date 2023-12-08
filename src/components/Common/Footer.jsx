import React from 'react'
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' w-full flex flex-col gap-5 items-center justify-center py-10 '>
      <div className=' flex gap-8 '>
        <ul className=' hover:text-secondary cursor-pointer '>
          <FaGithub className=' text-2xl ' />
        </ul>
        <ul className='hover:text-secondary cursor-pointer ' >
          <FaInstagram className=' text-2xl ' />
        </ul>
        <ul className='hover:text-secondary cursor-pointer '>
          <FaFacebook className=' text-2xl ' />
        </ul>
      </div>
      <div>
        Copyright © All rights reserved by : <span className=' text-secondary '>PhyoZ</span> 
      </div>
    </div>
  )
}

export default Footer