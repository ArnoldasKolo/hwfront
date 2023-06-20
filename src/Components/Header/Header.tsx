import React, { useState } from "react";
import logo from "../../images/logo.jpg";
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import burger from "../../images/burgerMenu.png";

const DekstopMenu = () => {
  return (
    <>
      <div className={styles.menu}>
        <ul className={styles.nav}>
          <Link className={styles.navOptionLink} href={"/Ikelti"}>
            <li className={styles.navOption}>Ikelti atsiskaitymą</li>
          </Link>
          <Link className={styles.navOptionLink} href={"/NamuDarbai"}>
            <li className={styles.navOption}>Namu darbai</li>
          </Link>
          <Link className={styles.navOptionLink} href={"/Egzaminai"}>
            <li className={styles.navOption}>Egzaminai</li>
          </Link>
          <Link className={styles.navOptionLink} href={"/Kolokviumai"}>
            <li className={styles.navOption}>Kolokviumai</li>
          </Link>
        </ul>
      </div>
    </>
  );
};
/*// @ts-ignore */
const MobileNav = (props) => {

  console.log(props.active)
  return (
    <>
      <div
        className={`${
          props.active ? styles.mobileMenu : styles.menuClosed
        }`}
      >
        <ul className={styles.mobnav}>
          <Link className={styles.mobnavOptionLink} href={"/Ikelti"}>
            <li className={styles.mobnavOption}>Ikelti atsiskaitymą</li>
          </Link>
          <Link className={styles.mobnavOptionLink} href={"/NamuDarbai"}>
            <li className={styles.mobnavOption}>Namu darbai</li>
          </Link>
          <Link className={styles.mobnavOptionLink} href={"/Egzaminai"}>
            <li className={styles.mobnavOption}>Egzaminai</li>
          </Link>
          <Link className={styles.mobnavOptionLink} href={"/Kolokviumai"}>
            <li className={styles.mobnavOption}>Kolokviumai</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className={styles.headerWrapper}>
        <Link href={"/"}>
          <Image className={styles.navLogo} src={logo} alt="logo" />
        </Link>
        <DekstopMenu />
        <button
          className={styles.burgerButton}
          onClick={() => {
            setActive((prevState) => !prevState);
          }}
        >
          <Image className={styles.burger} src={burger} alt="" />
        </button>
      </div>
      <div className={styles.mobileMenuWrapper}>
        <MobileNav active={active} />
      </div>
    </>
  );
};

export default Header;
