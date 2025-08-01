import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { menuList } from "../../utils/constant";

import logo from "../../assets/Frontend_Assets/logo.png";
import cart_icon from "../../assets/Frontend_Assets/cart_icon.png";

import styles from "./index.module.css";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");

  return (
    <div className={styles["navbar"]}>
      <Link
        to={"/"}
        onClick={() => {
          setMenu("shop");
        }}
        className={styles["nav-logo"]}
      >
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </Link>
      <ul className={styles["nav-menu"]}>
        {menuList.map((item) => (
          <li
            key={item.value}
            onClick={() => {
              setMenu(item.value);
            }}
          >
            <Link className={styles["text-d-none"]} to={item.to}>
              {item.name}
            </Link>
            {menu === item.value ? <hr /> : null}
          </li>
        ))}
      </ul>
      <div className={styles["nav-login-cart"]}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className={styles["nav-cart-count"]}>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
