import React from 'react'
import "./Contact.css"
import {Link}from"react-router-dom"
import {AiTwotoneStar}from"react-icons/ai"
export default function Contact() {
  return (
    <div>
      <div className='class1'>

    
      <h1>Let's<br></br>
Create<br></br>
Experiences!</h1>
<h6>Let's talk </h6>
</div>
<div className='class2'>
<form>
<label htmlFor="">Hi! i am</label>
<input type="text"placeholder='eg.Andy' /><br></br>
<label htmlFor="">Reach me At</label>
<input type="text"placeholder='eg.hello@gmail.com' /><br></br>
<label htmlFor="">Country</label>
<input type="text"placeholder='eg.india' /><br></br>
<label htmlFor="">Mobail</label>
<input type="number"placeholder='+91' /><br></br>
<label htmlFor="">Company Name</label>
<input type="text" placeholder='leo9studio'/><br></br>
</form>
</div>
<div className='span-contai'>
<div className='class3'>
 <Link> <h5>UX-UI</h5></Link>
</div>
<div className='class4'>
 <Link> <h5>Mobail App</h5></Link>
</div>
<div className='class5'>
 <Link> <h5>Web Tech</h5></Link>
</div>
</div>
<div className='ss'>
<div className='class6'>
 <Link> <h5>SEO</h5></Link>
</div>
<div className='class7'>
 <Link> <h5>SMM</h5></Link>
</div>
<div className='clas'>
 <Link> <h5>Branding</h5></Link>
</div>
<div className='class8'>
 <Link> <h5>Other</h5></Link>
</div>
</div>
<div className='app'>
<div className='apple'>
  <h1>Comments</h1>
  <h6>Send</h6>
</div>
<div className='app3'>
<p>REVIEWED ON <AiTwotoneStar/> <AiTwotoneStar/> <AiTwotoneStar/> </p>
<h3>Clutch</h3>  <p>Reviewed 21</p>
</div>
<h5> <Link>info@leo9studio.com</Link> <br></br>
IND: +91 99202 82736<br></br>
 +91 72081 49788<br></br>
USA:+1 (802) 347-3690<br></br>
Join The Team:   +91 99302 56369</h5>
    </div>
    <div className='aa6'>
    <div className='app4'>
     
   <h1> India </h1><img src="data:image/png;base64,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"></img><br></br>
   <p>Office No.202, 2nd Floor, Techno Park, Eksar, Link Road,<br></br>
Borivali (W), Mumbai: 400 092.<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<br></br>
<br></br>
44, 2nd floor, 2nd Main Road,3rd Cross Guru<br></br>
Raghavendra Nagar, JP Nagar 7th Phase Bangalore, Karnataka 560078</p>
</div>
<div className='ap'>
<h2>USA</h2>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTp-RetHdyOnotMolIIswb2XXCxF6bJK_6A&usqp=CAU"></img><br></br>
<p>16 Madison Ave, Lake Hiawatha, NJ 07034, United States</p>
</div>
    </div>
    </div>
  )
}
