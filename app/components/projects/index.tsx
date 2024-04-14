"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import Project from "@/app/components/projects/components/project";
import Modal from "@/app/components/projects/components/modal";

type ProjectsType = {
  title: string;
  src: string;
  color: string;
};

type ModalType = {
  active: boolean;
  index: number;
};

const projects: ProjectsType[] = [
  {
    title: "Asphalt",
    src: "asphalt.jpeg",
    color: "#000000",
  },
  {
    title: "IceSkating",
    src: "iceskating.jpeg",
    color: "#8C8C8C",
  },
  {
    title: "MotorGP Racing",
    src: "motorgp.jpeg",
    color: "#EFE8D3",
  },
  {
    title: "Hiking Adventure",
    src: "hiking.jpeg",
    color: "#706D63",
  },
];
const Projects = () => {
  const [modal, setModal] = useState<ModalType>({ active: false, index: 0 });
  console.log({ modal });
  return (
    <div className={styles.projects}>
      <div className={styles.body} id={"project"}>
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            setModal={setModal}
          />
        ))}
      </div>
      <Modal modal={modal} data={projects} />
    </div>
  );
};

export default Projects;
