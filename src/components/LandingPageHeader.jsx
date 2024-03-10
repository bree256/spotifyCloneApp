import "./LandingPageHeader.css";
import { Logo } from "./Logo";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";
import React from "react";

function LandingPageHeader() {
  // const [showMenu, setMenu] = React.useState(false);
  // const toggleMenu = () => {
  //   setMenu(showMenu === false);
  return (
    <div className="header">
      <div className="logo">
        <Logo />
      </div>
      {/* <MenuIcon onClick={toggleMenu} fill="white" className="menuicon" />
      {showMenu && ( */}
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
            <a className="active" href="">
              Sign up
            </a>
          </li>
          <li>
            <a className="active" href="">
              Log in
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default LandingPageHeader;
