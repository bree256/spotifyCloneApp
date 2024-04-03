import React from "react";
import style from "../Dashboard/main-dashboard.module.css";
import { HorizontalMusicCard } from "../MusicCard/Horizontal";
import { episodesApi, mostListenedToApi } from "../service/songs";
import { Link } from "react-router-dom";
import { SectionTitle } from "../SectionTitle";
import { MusicCard } from "../MusicCard";

export const MainDashboard = () => {
  const [mostListenedTo, setMostListenedTo] = React.useState([]);
  const [episodes, setEpisodes] = React.useState([]);

  React.useEffect(() => {
    mostListenedToApi().then((resp) => {
      setMostListenedTo(resp);
    });
    episodesApi().then((resp) => {
      setEpisodes(resp);
    });
  }, []); // empty dependency array to run the effect only once

  return (
    <section className={style.container}>
      <h1 className={style.h2}>Good Afternoon</h1>
      <div className={style.flex}>
        {mostListenedTo.map((music, index) => (
          <HorizontalMusicCard key={index} music={music} />
        ))}
      </div>
      <br />
      <br />
      <SectionTitle title={"Episodes for you"} showAllLink={"#"} />
      <br />
      <div className={style.flex}>
        {episodes.map((music, index) => (
          <MusicCard key={index} music={music} />
        ))}
      </div>
    </section>
  );
};
