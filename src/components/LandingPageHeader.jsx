import "./LandingPageHeader";
import "./LandingPageHeader.css";
import { Logo } from "./Logo";
function LandingPageHeader() {
  return (
    <div className="header">
      <div className="logo">
        <Logo />
      </div>
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
  );
}
export default LandingPageHeader;
