"use client";
import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ElementRef, useEffect, useRef } from "react";

type DataType = {
  title: string;
  src: string;
  color: string;
};

type ModalType = {
  active: boolean;
  index: number;
};

interface ModalProps {
  modal: ModalType;
  data: DataType[];
}

const scalingAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Modal = ({ modal, data }: ModalProps) => {
  const { active, index } = modal;
  const container = useRef<ElementRef<"div">>(null);
  const cursor = useRef<ElementRef<"div">>(null);
  const cursorLabel = useRef<ElementRef<"div">>(null);

  useGSAP(() => {
    // fix container moving with mouse
    //move container
    let moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    //move cursor
    let moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    //move cursor label
    let moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const project = document.getElementById("project");

    // container?.current?.addEventListener("mousemove", (ev) => {
    project?.addEventListener("mousemove", (ev) => {
      const { clientX, clientY } = ev;
      // console.log(clientY, clientX);
      moveContainerX(clientX);
      moveContainerY(clientY);
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveCursorLabelX(clientX);
      moveCursorLabelY(clientY);
    });
  });

  return (
    <>
      <motion.div
        ref={container}
        variants={scalingAnimation}
        animate={active ? "open" : "close"}
        // animate={true ? "open" : "close"}
        initial={"initial"}
        className={styles.modalContainer}
      >
        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
          {data.map((project, index) => (
            <div
              key={index}
              className={styles.modal}
              style={{ backgroundColor: project.color }}
            >
              <Image
                src={`/images/${project.src}`}
                width={300}
                height={0}
                alt={"Project Image"}
              />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        variants={scalingAnimation}
        animate={active ? "open" : "close"}
        initial={"initial"}
        className={styles.cursor}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        variants={scalingAnimation}
        animate={active ? "open" : "close"}
        initial={"initial"}
        className={styles.cursorLabel}
      >
        view
      </motion.div>
    </>
  );
};

export default Modal;
