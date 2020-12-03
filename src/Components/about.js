import React from 'react';
import CeBayed from './images/CeBayed.jpg';
import './about.css'




function About (props) {
  return(
      <div className="CardStyle">
      <img className="Gambar1" src={CeBayed}></img>
      <p className="Title">{props.name}</p>
      <p>{props.kampus}</p>
      </div>
      
  )
}

function NextAbout () {
  return(
    <div>
    <About name="Rahmandhika" kampus="UMN" />
    <p>Hello guys my name is Rahmandhika and i'm currently studying at Universitas Multimedia
       Nusantara. My Jurusan is Informatika. iam currently trying to learn ReactJS, and this
       website is made using ReactJS. I Hope you liked it !!.
    </p>
    </div>
  )
}





export default NextAbout;

