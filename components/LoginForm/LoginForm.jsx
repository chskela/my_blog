import React from "react";
import Link from "next/link";

import classes from "./LoginForm.module.css";

export default function LoginForm() {
  function handlerSubmite(e) {
    e.preventDefault();
  }

  return (
    <div className={classes.center}>
      <form className={classes.form} onSubmit={handlerSubmite}>
        <div className={classes.form__header}>
          <h2 className={classes.form__title}>Welcome back!</h2>
          <p className={classes.form__description}>
            Sign in to get the most out of nuntium.
          </p>
        </div>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={classes.form__control}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={classes.form__control}
          />
          <div className={classes.form__check}>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <Link href="/">Forgot Password?</Link>
          </div>
        </div>
        <button type="submit" className={classes.form__btn}>
          Login
        </button>
      </form>
    </div>
  );
}
