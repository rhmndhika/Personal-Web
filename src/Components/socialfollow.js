import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './socialfollow.css'
import {
    faFacebook,
    faInstagram,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Contact Me :</h3>
      <a href="https://www.facebook.com/rahman.dika.14/" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
        <a href="https://github.com/rhmndhika" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
        <a href="https://www.instagram.com/rhmndhika/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
       </a>
    </div>
  );
}

export default SocialFollow;