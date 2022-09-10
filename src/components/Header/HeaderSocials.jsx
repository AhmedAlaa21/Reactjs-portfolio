import React from 'react'
import {BsLinkedin, BsGithub, BsTwitter,BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/ahmed-alaa-52b51518a/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/AhmedAlaa21" target='_blank' rel='noreferrer'><BsGithub/></a>
        <a href="https://twitter.com/AhmedMo47400200" target='_blank' rel='noreferrer'><BsTwitter/></a>
        <a href="https://www.facebook.com/ahmed.mohamed.alaa2016/" target='_blank' rel='noreferrer'><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials