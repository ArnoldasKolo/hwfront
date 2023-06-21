import React from 'react'
import styles from "./styles.module.css"
const Spinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
        <div className={styles["lds-roller"]} ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Spinner