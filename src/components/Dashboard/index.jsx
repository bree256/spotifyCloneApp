import { Outlet } from "react-router-dom";
import style from "../Dashboard/style.module.css";
import { Sidebar } from "../Sidebar";
import React from "react";
import { MainDashboard } from "./MainDashboard";

export default function Dashboard() {
  return (
    <section className={style.container}>
      <section className={style["content-wrapper"]} role="content">
        <Sidebar />
        <main>
          <MainDashboard className={style.content}>
            <Outlet />
          </MainDashboard>
        </main>
      </section>
      <footer className={style.footer}>footer</footer>
    </section>
  );
}
