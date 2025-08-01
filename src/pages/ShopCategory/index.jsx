import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Item } from "../../components";

import dropdown_icon from "../../assets/Frontend_Assets/dropdown_icon.png";

import styles from "./index.module.css";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className={styles["shop-category"]}>
      <img
        className={styles["shopcategory-banner"]}
        src={props.banner}
        alt=""
      />
      <div className={styles["shopcategory-indexSort"]}>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className={styles["shopcategory-sort"]}>
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className={styles["shopcategory-products"]}>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className={styles["shopcategory-loadmore"]}>Explore More</div>
    </div>
  );
};

export default ShopCategory;
