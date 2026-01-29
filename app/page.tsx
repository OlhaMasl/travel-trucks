import Link from "next/link";
import css from "./page.module.css";

export default function Home() {
  return (
      <main className={css.mainPageWrp}>
        <div className={css.mainPageInfo}>
        <h1 className={css.mainPageTitle}>Campers of your dreams</h1>
        <p className={css.mainPageTxt}>You can find everything you want in our catalog</p>
        <Link  href="/catalog" className={css.mainPageBtn}>View Now</Link>
        </div>
      </main>
  );
}