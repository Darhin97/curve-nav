import styles from "./style.module.scss";
import NavLink from "@/app/components/nav/nav-link";
import { motion } from "framer-motion";
import { menuSlide } from "@/app/components/anim";
import Curve from "@/app/components/nav/curve";

type NavItemsType = {
  title: string;
  href: string;
};

const navItems: NavItemsType[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Nav = () => {
  return (
    <motion.div
      variants={menuSlide}
      animate={"enter"}
      exit={"exit"}
      initial={"initial"}
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => (
            <NavLink key={index} data={{ ...item, index }} />
          ))}
        </div>
        <div className={styles.footer}>
          <a>Awwwards</a>
          <a>Instagram</a>
          <a>Dribble</a>
          <a>LinkedIn</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Nav;
