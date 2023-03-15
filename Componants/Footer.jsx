import React from 'react'
import "./Footer.css"
import {FiFacebook}from"react-icons/fi"
import {CiLinkedin}from"react-icons/ci"
import {MdOutlinePanoramaFishEye}from"react-icons/md"
import{CiBasketball}from"react-icons/ci"
import {CiTwitter}from"react-icons/ci"

import {Link}from "react-router-dom";
 function Footer() {
  return (
    <div>
      <div className='nn'>
        <div className='sr'>
      <h1>Leo9 studio<br></br>
       <h3 ><FiFacebook/>&nbsp;  <CiLinkedin/>&nbsp;<MdOutlinePanoramaFishEye/>&nbsp;<CiBasketball/>&nbsp;<CiTwitter/></h3></h1>
   
    {/* <div className='sr1'> */}
    &copy;Leo9Studio.<br></br>
All rights reserved 2020
</div>
    {/* </div> */}
    <div className='copyright'>
      <h2>Services</h2>
      <Link to="/desigen">Design</Link><br></br>
      <Link to="/tech">Technology</Link><br></br>
      <Link to="/neu">Neuromarketing</Link>
    </div>
    <div className='copy'>
      <h2>About</h2>
      <Link to="/about us">About us</Link><br></br>
      <Link to="/team">Team</Link><br></br>
      <Link to="carear">Carear</Link>
    </div>
    <div className='copy2'>
      <h2>Quike Links</h2>
      <Link to="work">Work</Link><br></br>
      <Link to="client">Clients</Link><br></br>
      <Link to="knowledge">Knowledge</Link><br></br>
      <Link to="/reach us">Reach us</Link>
    </div>
    <div className='copy3'>
      <h2>Quike Links</h2>
      <Link to="/privacy">Privacy  Policy</Link><br></br>
      <Link to="/terms">Terms of use</Link><br></br>
      <Link to="/site">Site Map</Link><br></br>
      <Link to="/refund">Refund Policy</Link>
    </div>
    </div>
   </div>
    
  )
}
export default Footer;
   