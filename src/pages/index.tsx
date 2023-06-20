
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/Components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import HwCard from "../Components/HwCard/HwCard"

type HomeworkData = {
  courseSubject: string;
  endDate: string;
  settlement: string;
  form: string;
  description: string;
};

export default function Home() {
   {/*
      // @ts-ignore */}
  const [homeworks, setHomeworks] = useState<HomeworkData>([]);

  const fetchAllHomeworks = async () => {
    const response = await axios.get("https://homeworkbg.onrender.com/homeworks");
    const { data } = response;
    console.log(data.homeworks);
    setHomeworks(data.homeworks);
  };

  useEffect(() => {
    fetchAllHomeworks();
  }, []);

  return (
    <>
    
      <Header />
      <div className={styles.container}>
      <div className={styles.cardsWrapper}>
         {/*
      // @ts-ignore */}
        {homeworks.map((homework) => (
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
}
