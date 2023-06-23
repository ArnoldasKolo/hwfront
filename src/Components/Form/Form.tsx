import React, { useState } from "react";
import styles from "./Form.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const Form = () => {
  const router = useRouter()
  const [courseName, setCourseName] = useState("");
  const [date, setDate] = useState("");
  const [settlement, setSettlement] = useState("");
  const [form, setForm] = useState("");
  const [comment, setComment] = useState("");

  const createHomework = async () => {
    const response = await axios.post("https://homeworkbg.onrender.com/homework", {
      courseSubject: courseName,
      endDate: date,
      settlement: settlement,
      form: form,
      description: comment,
    });
    if (response.status === 200) {
      router.push("/");
    }
    console.log("response", response);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Kurso dalykas"
            value={courseName}
            onChange={(event) => setCourseName(event.target.value)}
          />
          <input
            type="date"
            className={styles.input}
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <select id="atsiskaitymas"  onChange={(event) => setSettlement(event.target.value)}  className={styles.input}>
            <option  value="" >Pasirinkti atsiskaitymą</option>
            <option value="Egzaminas">Egzaminas</option>
            <option value="Kolokviumas">Kolokviumas</option>
            <option value="Namų darbai">Namų darbai</option>
          </select>
          <select id="budas" onChange={(event) => setForm(event.target.value)}  className={styles.input}>
            <option value="">Pasirinkti Būdą</option>
            <option value="Įkelti į moodle">Ikelti i moodle</option>
            <option value="Auditorijoje">Auditorijoje</option>
            <option value="Įkelti į moodle ir auditorijoje">Įkelti į moodle ir auditorijoje</option>
          </select>
          <form>
            <textarea
              name="comment"
              id="comment"
              cols={30}
              rows={10}
              /* @ts-ignore */
              type="text"
              placeholder="Komentaras"
              className={styles.comment}
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            ></textarea>
          </form>
          <button onClick={createHomework} className={styles.button}>
            UPLOAD
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
