"use client";

import styles from "./page.module.css";
import LandingPage from "@/app/components/landing";
import { useEffect } from "react";
import Projects from "@/app/components/projects";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className={styles.main}>
      <LandingPage />
      <Projects />
    </main>
  );
}
