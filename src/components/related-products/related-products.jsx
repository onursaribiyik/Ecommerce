import React from "react";
import { Item } from "../../components";
import data_products from "../../assets/Frontend_Assets/data";

import styles from "./index.module.css";

const RelatedProducts = () => {
  return (
    <div className={styles["relatedproducts"]}>
      <h1>Related Products</h1>
      <hr />
      <div className={styles["relatedproducts-item"]}>
        {data_products.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
