import React from "react";
import { Link } from "react-router-dom";
import style from "../MusicCard/style.module.css";
export const MusicCard = ({ music }) => {
  return (
    <Link className={style.main} to={music.url}>
      <img src={music.image} alt={music.title} className={style.mainimg} />
      <span>{music.title}</span>
      <span className={style.description}>{music.description}</span>
    </Link>
  );
};
