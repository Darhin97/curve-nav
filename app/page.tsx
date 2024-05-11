"use client";

import styles from "./page.module.css";
import LandingPage from "@/app/components/landing";
import { useEffect, useRef } from "react";
import Projects from "@/app/components/projects";
import Description from "@/app/components/description";

export default function Home() {
  // const refScrollContainer = useRef(null);

  useEffect(() => {
    (async () => {
      //@ts-ignore
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className={styles.main}>
      <LandingPage />
      <Description />
      <Projects />
    </main>
  );
}
