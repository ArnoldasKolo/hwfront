import React, { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import Header from "@/Components/Header/Header";
import Form from "@/Components/Form/Form";

const Ikelti = () => {

  return (
    <div className={styles.Ikelti}>
      <Header />
      <Form/>
    </div>
  );
};


export default Ikelti;
