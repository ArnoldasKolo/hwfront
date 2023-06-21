
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/Components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import HwCard from "../Components/HwCard/HwCard"
import Spinner from "@/Components/Spinner/Spinner";

type HomeworkData = {
  courseSubject: string;
  endDate: string;
  settlement: string;
  form: string;
  description: string;
};
{/*
      // @ts-ignore */}
export default function Home({ homeworks}) {
   {/*
      // @ts-ignore */}
  const [homework, setHomeworks] = useState<HomeworkData>(homeworks);

  

  return (
    <>
      
      <Header />
      <div className={styles.container}>
      <div className={styles.cardsWrapper}>
         {/*
      // @ts-ignore */}
        {homework.map((homework) => (
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
        {/*
      // @ts-ignore */}
        {!homework.length && <Spinner/>}
      </div>
      </div>
      
    </>
  );
}

{/*
      // @ts-ignore */}
export async function getServerSideProps(ctx) {
  console.log(ctx.query.id);
  try {
    const response = await axios.get("https://homeworkbg.onrender.com/homeworks");
    const { data } = response;

    return { props: { homeworks: data.homeworks } };
  } catch (err) {
    console.log(err);
  }
}