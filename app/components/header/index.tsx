"use client";

import styles from "./style.module.scss";
import { ElementRef, useRef, useState } from "react";
import Nav from "@/app/components/nav";
import { AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const burger = useRef<ElementRef<"div">>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    //animating burger icon onscroll trigger
    gsap.to(burger.current, {
      scrollTrigger: {
        trigger: burger.current,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(burger.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(burger.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  });

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <p className={styles.copyright}>©</p>
        <div className={styles.name}>
          <p className={styles.codeby}>Code By</p>
          <p className={styles.fn}>Frank</p>
          <p className={styles.ln}>Mountainday</p>
        </div>
      </div>

      <div className={styles.nav}>
        <div className={styles.el}>
          <a>Work</a>
          <div className={styles.indicator}></div>
        </div>

        <div className={styles.el}>
          <a>About</a>
          <div className={styles.indicator}></div>
        </div>

        <div className={styles.el}>
          <a>Contact</a>
          <div className={styles.indicator}></div>
        </div>
      </div>

      <div
        ref={burger}
        onClick={() => setIsActive(!isActive)}
        className={styles.headerButtonContainer}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>
      <AnimatePresence mode={"wait"}>{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
