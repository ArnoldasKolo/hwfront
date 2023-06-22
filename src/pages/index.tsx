
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
      </div>
      </div>
      
    </>
  );
}

{/*
      // @ts-ignore */}
      export async function getServerSideProps(ctx) {
        console.log(ctx.query.id);
      
        return new Promise(async (resolve, reject) => {
          try {
            const response = await axios.get("https://homeworkbg.onrender.com/homeworks");
            const { data } = response;
      
            resolve({ props: { homeworks: data.homeworks } });
          } catch (err) {
            console.log(err);
            reject(err);
          }
        });
      }