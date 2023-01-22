import React from "react";
import photo from "../assets/photo.png";
import emailIcon from "../assets/email-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";

export default function Info() {
  return (
    <>
      <img className="info--photo" src={photo} alt="girls photo" />
      <h1 className="info--title">Laura Smith</h1>
      <h2 className="info--subtitle">Frontend Developer</h2>
      <a href="#" className="info--website">
        laurasmith.website
      </a>
      <div className="info--buttons-wrapper">
        <button className="info--button">
          <img src={emailIcon} alt="" className="info--button-logo" />
          <a href="" className="info--button-link">
            Email
          </a>
        </button>
        <button className="info--button">
          <img src={linkedinIcon} alt="" className="info--button-logo" />
          <a href="" className="info--button-link">
            LinkedIn
          </a>
        </button>
      </div>
    </>
  );
}
