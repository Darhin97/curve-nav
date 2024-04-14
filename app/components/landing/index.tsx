"use client";
// @ts-ignore
import { ElementRef, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const LandingPage = () => {
  const firstText = useRef<ElementRef<"p">>(null);
  const secondText = useRef<ElementRef<"p">>(null);
  const slider = useRef<ElementRef<"div">>(null);

  let xPercent = 0;
  let direction = 1;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      //scroll trigger start from the top of the document
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e: any) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  });

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className={styles.landing}>
      <Image src={"/images/pic.jpeg"} alt={"background image"} fill />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Developer -</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
