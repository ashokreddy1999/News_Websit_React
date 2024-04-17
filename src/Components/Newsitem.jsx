import React from 'react'
import Newimg from '../assets/Newimg.jpg'

const Newsitem = ({title , description, src ,url}) => {
  return (
    
    <div className="card bg-dark text-light md-4 d-inline-block my-2 mx-2 py-3 px-3" style={{maxWidth:"345px"}}>
    <img src={src?src:Newimg} style={{height:"150px",width:"200px"}}className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90):"news to be"}</p>
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
  
  </div>
  
  )
}

export default Newsitem;
