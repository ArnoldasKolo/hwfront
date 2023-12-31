import Link from "next/link";
import React from "react";
import styles from "./card.module.css";

type HwCardProps = {
  id: string;
  courseSubject: string;
  endDate: string;
  settlement: string;
  form: string;
  description: string;
};


const HwCard: React.FC<HwCardProps> = ({id,courseSubject,endDate,settlement,form,description,}) => {
  return (
    <>
      <Link
        className={styles.link}
        href={`Homework/${id}`}
      >
        <div className={styles.homework}>
         <div className={styles.courseSubjectWrapper}> <h1 className={styles.courseSubject}>{courseSubject}</h1></div>
          <hr className={styles.line} />
          <p className={styles.endDate} >Atsiskaitymo data : {endDate}</p>
          <p className={styles.settlement} >Atsiskaitymas : {settlement}</p>
          <p className={styles.form} >Būdas : {form}</p>
          <p className={styles.description} >Aprašymas - {description} </p>
        </div>
      </Link>
    </>
  );
};

export default HwCard;
