import { appsettings, downloadApp } from "../../Utils/user";
import Logo from "../Logo";
import style from "../Sidebar/style.module.css";
import { mainMenus, topRecommended } from "./data";
import React from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const combineClasses = (...classes) => classes.filter(Boolean).join(" ");

export const Sidebar = () => {
  const settings = appsettings();
  return (
    <aside className={style.sidebar}>
      <Logo useWhite />
      <div className={style.menu}>
        {mainMenus.map((menu, index) => {
          return (
            <>
              <MenuItem key={index} {...menu} index={index} />
              {index % 3 === 2 && <br />}{" "}
              {/* Add a line break after every third MenuItem */}
            </>
          );
        })}
      </div>
      <div className={combineClasses(style.menu, style.divider)}>
        {topRecommended.map((recommendation) => {
          return (
            <Link
              className={combineClasses(style.item, style.regular)}
              to="/login"
            >
              {recommendation}
            </Link>
          );
        })}
        {!settings.hasInstalledApp && (
          <div className={style["app-install"]} onClick={downloadApp}>
            <FaRegArrowAltCircleDown />
            <span>Install App</span>
          </div>
        )}
      </div>
    </aside>
  );
};

export const MenuItem = ({ icon, name, index }) => {
  // const className = combineClasses(style.item);
  return (
    <Link
      to="/login"
      key={index}
      className={combineClasses(style.item, style.active)}
    >
      {icon} <span className={style.name}>{name}</span>
    </Link>
  );
};
