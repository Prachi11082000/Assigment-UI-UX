import React,{useState,useEffect} from 'react'
import axios from"axios"
import "./Technology.css"
import {Link}from"react-router-dom"
export default function Resources() {
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
        <div className='ten'>
           <div className='ten1'>
        <img src="data:image/png;base64,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"></img><br></br>
        </div>
        <div className='ten2'>
         <Link><h6>Design Psychology</h6></Link> 
        <Link>  <h3>Top UX Design Tips for Making Your Website More Assciable</h3></Link> 
       <Link><p>Derived Your company into the ground by ignoring this.Here are the top UX design top for meking your website more accesibal</p></Link> 
        <Link>  <h5>jaunary 18,2023.4 min read</h5></Link> 
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
