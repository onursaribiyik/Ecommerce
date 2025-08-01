import React from "react";
import arrow_icon from "../../assets/Frontend_Assets/breadcrum_arrow.png";

import styles from "./index.module.css";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className={styles["breadcrums"]}>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrums;
