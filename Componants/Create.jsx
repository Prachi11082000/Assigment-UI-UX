import React from 'react'
import "./Style.css"
import {Link}from"react-router-dom"
export default function Create() {
  return (
    <div>
          <div class='box1'>
 <img className='box1' src="data:image/jpeg;base64,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"></img>
    </div>
    <div className='box2'>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Work</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/services">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/clients">Clients</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/knowledge">Knowledge</Link>
        </li>
        <li class="nav-item">
         <button><Link class="nav-link" to="/contact">Contact </Link></button> 
        </li>
        </ul>
    </div>
  </div>
</nav>
      </div>
      <hr></hr>
    </div>
  )
}
