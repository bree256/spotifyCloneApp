import "./LandingPageHeader.css";
import { Logo } from "./Logo";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import React from "react";
import { Link } from "react-router-dom";

function LandingPageHeader() {
  return (
    <div className="header">
      <div className="logo">
        <Logo useWhite />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="">Premium</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Download</a>
          </li>
          <div className="line"></div>
          <li>
            <Link to="/signup" className="active">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className="active">
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default LandingPageHeader;
