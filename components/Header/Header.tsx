import Link from "next/link";
import Image from 'next/image';
import clsx from 'clsx';
import css from "./Header.module.css";


const Header = () => {
  return (
    <header className={css.header}>
        
      <Link href="/" className={css.logoLink}>
        <Image
          src="/TravelTrucks-logo.svg"
          alt="Logo"
          width={136}
          height={16}
        />
      </Link>

      <nav  className={css.headerNav}>
        <Link href="/" className={css.headerNavLink}>Home</Link>
        <Link href="/catalog" className={css.headerNavLink}>Catalog</Link>
      </nav>

    </header>
  )
};

export default Header;