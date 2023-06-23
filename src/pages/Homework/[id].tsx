import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Header from "@/Components/Header/Header";
import Link from "next/link";
import Image from "next/image";
import arrow from "../../images/arrow-left 1.png"

type HomeworkData = {
  courseSubject: string;
  endDate: string;
  settlement: string;
  form: string;
  description: string;
};

const Homework = () => {
  const [homework, setHomework] = useState<HomeworkData>();
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const fetchHomework = async () => {
    console.log(router.query.id);
    const response = await axios.get(
      `https://homeworkbg.onrender.com/homework/${router.query.id}`
    );

    const data = response.data.response[0];
    setHomework(data);
    console.log("response", response.data.response);
  };

  const deleteHomework = async () => {
    const response = await axios.delete(
      `https://homeworkbg.onrender.com/delete/${router.query.id}`
    );

    if (response.status === 200) {
      setSuccess(true);
      setTimeout(() => {
        // setSuccess(false);
        router.push("/");
      }, 1000);
    }
  };

  useEffect(() => {
    router.query.id && fetchHomework();
  }, [router.query.id]);

  return (
    <>
      <Header />
      <div className={styles.pageWrapper}>
        {homework && (
          <>
            <div className={styles.homework}>
              
              <div className={styles.courseSubjectWrapper}> <h1 className={styles.courseSubject}>{homework.courseSubject}</h1></div>
              <hr className={styles.line} />
              <p className={styles.endDate}>
                Atsiskaitymo data : {homework.endDate}
              </p>
              <p className={styles.settlement}>
                Atsiskaitymas : {homework.settlement}
              </p>
              <p className={styles.form}>Būdas : {homework.form}</p>
              <p className={styles.description}>
                Aprašymas - {homework.description}
              </p>
              <button onClick={deleteHomework} className={styles.delete}>
                DELETE
              </button>
              {success && (
                <div className={styles.deleteText}>HomeWork was deleted</div>
              )}
            </div>
          </>
        )}

      </div>
    </>
  );
};

export default Homework;
