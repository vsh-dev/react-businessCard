import React from "react";
import twitter from "../assets/twitter-icon.svg";
import facebook from "../assets/facebook-icon.svg";
import instagram from "../assets/instagram-icon.svg";
import github from "../assets/github-icon.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="social--list">
        <li className="social--list-item">
          <a href="#" className="social--list-link">
            <img src={twitter} alt="" className="social--list-icon" />
          </a>
        </li>
        <li>
          <a href="#" className="social--list-link">
            <img src={facebook} alt="" className="social--list-icon" />
          </a>
        </li>
        <li>
          <a href="#" className="social--list-link">
            <img src={instagram} alt="" className="social--list-icon" />
          </a>
        </li>
        <li>
          <a href="#" className="social--list-link">
            <img src={github} alt="" className="social--list-icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
