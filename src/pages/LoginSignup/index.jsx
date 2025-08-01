import React from "react";
import styles from "./index.module.css";

const LoginSignup = () => {
  return (
    <div className={styles["loginsignup"]}>
      <div className={styles["loginsignup-container"]}>
        <h1>Sign Up</h1>
        <div className={styles["loginsignup-fields"]}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="Password" placeholder="Password" />
          <button>Continue</button>
        </div>
        <p className={styles["loginsignup-login"]}>
          Already have an account? <span>Login Here</span>
        </p>
        <div className={styles["loginsignup-agree"]}>
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;
