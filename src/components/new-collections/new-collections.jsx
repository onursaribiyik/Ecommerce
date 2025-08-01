import React from "react";
import { Item } from "../../components";
import new_collections from "../../assets/Frontend_Assets/new_collections";

import styles from "./index.module.css";

const NewCollections = () => {
  return (
    <div className={styles["new-collections"]}>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className={styles["collections"]}>
        {new_collections.map((item, i) => {
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

export default NewCollections;
