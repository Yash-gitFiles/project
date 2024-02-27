import React from "react";
import Title from "../common/Title";
import styles from "../../styles/home/ourWork.module.css";

function OurWork() {
  return (
    <div>
      <div>
        <Title
          title="Our Work"
          subTitle="A collection of cars we've renovated with passion"
        />
      </div>
      <div className={styles.imgContainer}>
        <img src="/images/car01.jpg" alt="" />
        <img src="/images/car04.jpg" alt="" />
        <img src="/images/car08.jpg" alt="" />
        <img src="/images/car09.jpg" alt="" />
        <img src="/images/car07.jpg" alt="" />
        <img src="/images/car06.jpg" alt="" />
      </div>
    </div>
  );
}

export default OurWork;
