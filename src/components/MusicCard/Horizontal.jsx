import React from "react";
import { Link } from "react-router-dom";
import style from "../MusicCard/style.module.css";
export const HorizontalMusicCard = ({ music }) => {
  return (
    <Link className={style.horizontal} to={music.url}>
      <img src={music.image} alt={music.title} />
      <span>{music.title}</span>
    </Link>
  );
};
