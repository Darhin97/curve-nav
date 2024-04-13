import Link from "next/link";
import style from "./style.module.scss";
import { motion } from "framer-motion";
import { slide } from "@/app/components/anim";

interface NavLinkProps {
  title: string;
  href: string;
  index: number;
}

type NavLinkType = {
  data: NavLinkProps;
};
const NavLink = ({ data }: NavLinkType) => {
  return (
    <motion.div
      custom={data.index}
      variants={slide}
      initial={"initial"}
      animate={"enter"}
      exit={"exit"}
      className={style.link}
    >
      <Link href={data.href}>{data.title}</Link>
    </motion.div>
  );
};

export default NavLink;
