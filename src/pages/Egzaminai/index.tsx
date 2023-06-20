import Header from "@/Components/Header/Header";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import HwCard from "../../Components/HwCard/HwCard";

type HomeworkData = {
  id: string;
  courseSubject: string;
  endDate: string;
  settlement: string;
  form: string;
  description: string;
};

const Egzaminai = () => {
  const [homeworks, setHomeworks] = useState<HomeworkData[]>([]);

  const fetchAllHomeworks = async () => {
    const response = await axios.get("https://homeworkbg.onrender.com/homeworks");
    const { data } = response;
    console.log(data.homeworks);
    setHomeworks(data.homeworks);
  };

  useEffect(() => {
    fetchAllHomeworks();
  }, []);

  const filteredHomeworks = homeworks.filter((homework) => homework.settlement === "Egzaminas");

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.cardsWrapper}>
          {filteredHomeworks.map((homework) => (
            <div key={homework.id}>
              <HwCard
                id={homework.id}
                courseSubject={homework.courseSubject}
                endDate={homework.endDate}
                settlement={homework.settlement}
                form={homework.form}
                description={homework.description}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Egzaminai;
