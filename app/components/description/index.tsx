"use client";
import styles from "./style.module.scss";
import { ElementRef, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { opacity, slideUp } from "@/app/components/description/anim";

const Description = () => {
  const container = useRef<ElementRef<"div">>(null);
  const isInView = useInView(container); // checks when container comes into view

  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef<ElementRef<"div">>(null);

  return (
    <div ref={container} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => (
            <span className={styles.mask} key={index}>
              <motion.span
                custom={index}
                variants={slideUp}
                initial={"initial"}
                animate={isInView ? "open" : "close"}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <motion.p
          variants={opacity}
          initial={"initial"}
          animate={isInView ? "open" : "close"}
        >
          The combination of my passion for design, code & interaction positions
          me in a unique place in the web design world.
        </motion.p>

        {/*want element to be observed by locomotive */}
        <div data-scroll data-scroll-speed={0.1}>
          <div className={styles.button}>
            <p>About me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
