import { useEffect, useState } from 'react';
import axios from 'axios';
import HwCard from '../Components/HwCard/HwCard';
import Header from '../Components/Header/Header';
import styles from '../styles/Home.module.css';

type HomeworkData = {
  id: string;
  courseSubject: string;
  endDate: string;
  settlement: string;
  form: string;
  description: string;
};

type HomeProps = {
  homeworks: HomeworkData[];
};

export default function Home({ homeworks }: HomeProps) {
  const [homeworkList, setHomeworkList] = useState<HomeworkData[]>(homeworks);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.upTextWrapper}>
          <h3 className={styles.upText}>Visi Atsiskaitymai</h3>
        </div>
        <div className={styles.cardsWrapper}>
          {homeworkList.map((homework) => (
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

export async function getServerSideProps() {
  try {
    const response = await axios.get('https://homeworkbg.adaptable.app/homeworks');
    const { data } = response;
    return {
      props: {
        homeworks: data.homeworks,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        homeworks: [],
      },
    };
  }
}