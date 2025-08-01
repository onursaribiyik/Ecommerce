import arrow_icon from "../../assets/Frontend_Assets/arrow.png";
import hand_icon from "../../assets/Frontend_Assets/hand_icon.png";
import hero_image from "../../assets/Frontend_Assets/hero_image.png";

import styles from "./index.module.css";

const Hero = () => {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero-left"]}>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className={styles["hero-hand-icon"]}>
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className={styles["hero-latest-btn"]}>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className={styles["hero-right"]}>
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
