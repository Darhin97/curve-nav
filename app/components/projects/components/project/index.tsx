"use client";
import styles from "./style.module.scss";

interface ProjectProps {
  index: number;
  title: string;
  setModal: any;
}
const Project = ({ index, setModal, title }: ProjectProps) => {
  return (
    <div
      className={styles.project}
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => setModal({ active: false, index: index })}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
};

export default Project;
