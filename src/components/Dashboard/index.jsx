import style from "../Dashboard/style.module.css";
import { Sidebar } from "../Sidebar";

export default function Dashboard() {
  return (
    <section className={style.container}>
      <section className={style["content-wrapper"]} role="content">
        <Sidebar />
        <main>main</main>
      </section>
      <footer className={style.footer}>footer</footer>
    </section>
  );
}
