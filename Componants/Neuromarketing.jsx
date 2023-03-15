import React,{useState,useEffect} from 'react'
import "./Technology.css"
import axios from"axios"
import {Link}from"react-router-dom"
export default function Neuromarketing() {
  const [data, setdata] = useState([])
  const [email, setemail] = useState("")
  const userdata=()=>{
    axios.get("https://retoolapi.dev/HthESM/data").then((Response) => {
      if (Response.status >=200) {
        setdata(Response.data)
      }
    })
  }
  useEffect  (() => {
    userdata();
    // axios.get("https://retoolapi.dev/HthESM/data").then((Response) => {
    //   if (Response.status >= 200) {
    //     setdata(Response.data)
    //   }
    // })
  }, [])
  const save=(e)=>{
  e.preventDefault();
  let data={}
  data.email=email
  console.log(data)
  axios.post("https://retoolapi.dev/HthESM/data",data).then((Response)=>{
    if(Response.status >=200){
    userdata();
    }
  })
  }
  return (
    <div>
      <div className='pg2'>
       <div className='pg1'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNe5F0qcKxuTUrhr5DbNyeC5-n_lx4ySMcw&usqp=CAU"></img><br></br>
    </div>
    <div className='pg'>
    <h6>Genral </h6>
        <Link> <h3>Things to Learn From Apple Brands Experiance</h3></Link> 
        <Link>  <p>Bussiness willing to ahead to the curve must understand how to other companys oparate.lern form Apples brand Experiances!</p></Link>
          <Link>  <h5>Jaunary 25,2023.4 min Read</h5></Link> 
    </div>
    </div>
    <div className='design1'>
        <div className='design2'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9OwzGeYmqxdmf8jJ9nC-deCkHW8MaVnMZw&usqp=CAU"></img><br></br>
        </div>
        <div className='design3'>
            <h6>Genaral</h6>
            <h3>Refurbish your Online Presence With Website Building Services</h3>
            <h6>July 20,2023.3 min read</h6>
        </div>
    </div>
    <div className='web5'>
      <div className='web6'>
        <img src="data:image/jpeg;base64,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"></img><br></br>
      </div>
      <div className='web7'>
        <h6>Genral</h6>
        <h3>How To Build A Brand On Amazone</h3>
        <h5>Saptenber 26,2022.3 min read</h5>
      </div>
    </div>
    <div className='cont'>
        
        <div className='cont1'>
          <h1>Subscribe Now<br></br>
            to access this and much more…</h1>
    <form onSubmit={save}>
          <input type="email address" placeholder='Enter Email' onChange={(e)=>{setemail(e.target.value)}}/>
          <button type="submit"className='btn btn-danger m-3'>Subscribe</button>
          </form>
          </div>
        <img src="https://www.getillustrations.com/packs/pastel-illustrations-empty-state-scenes/scenes/_1x/web%20development%20_%20man,%20select,%20press,%20click_md.png"></img>
    </div>
    </div>
  )
}

