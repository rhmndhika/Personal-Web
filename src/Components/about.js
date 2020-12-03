import React from 'react';
import CeBayed from './images/CeBayed.jpg';
import './about.css'




function About (props) {
  return(
      <div className="CardStyle">
      <img className="Gambar1" src={CeBayed} alt="description of image" ></img>
      <p className="Title">{props.name}</p>
      <p>{props.kampus}</p>
      </div>
      
  )
}

function NextAbout () {
  return(
    <div>
    <About name="Rahmandhika" kampus="UMN" />
    <p>Proses...
    </p>
    </div>
  )
}





export default NextAbout;

