import React from "react";
import style from "../SectionTitle/style.module.css";
import { Link } from "react-router-dom";
export const SectionTitle = ({ title, showAllLink }) => {
  return (
    <>
      <section className={style.section}>
        <h3 className={style.h3}>{title}</h3>
        {showAllLink && <Link to={showAllLink}>Show all</Link>}
      </section>
    </>
  );
};
