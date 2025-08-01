import React from "react";

import exclusive_img from "../../assets/Frontend_Assets/exclusive_image.png";

import styles from "./index.module.css";

const Offers = () => {
  return (
    <div className={styles["offers"]}>
      <div className={styles["offers-left"]}>
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className={styles["offers-right"]}>
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  );
};

export default Offers;
