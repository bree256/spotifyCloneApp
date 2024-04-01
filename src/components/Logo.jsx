import spotifywhite from "../assets/images/spotifywhite.svg";
import spotifyblack from "../assets/images/spotifyblack.svg";
import React from "react";

export function Logo(props) {
  const mylogo = props.useWhite ? spotifywhite : spotifyblack;
  return (
    <a href="/dashboard" className="logo">
      <img src={mylogo} />
    </a>
  );
}
export default Logo;
