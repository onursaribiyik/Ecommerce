import footer_logo from "../../assets/Frontend_Assets/logo_big.png";
import instagram_icon from "../../assets/Frontend_Assets/instagram_icon.png";
import pintester_icon from "../../assets/Frontend_Assets/pintester_icon.png";
import whatsapp_icon from "../../assets/Frontend_Assets/whatsapp_icon.png";

import styles from "./index.module.css";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-logo"]}>
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className={styles["footer-links"]}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={styles["footer-social-icon"]}>
        <div className={styles["footer-icon-container"]}>
          <img src={instagram_icon} alt="" />
        </div>
        <div className={styles["footer-icon-container"]}>
          <img src={pintester_icon} alt="" />
        </div>
        <div className={styles["footer-icon-container"]}>
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className={styles["footer-copyright"]}>
        <hr />
        <p>Copyright @ 2026 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
