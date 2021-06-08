import React from "react";
import Link from "next/link";

import useInput from "../../../hooks/useInput";

import MuiButton from "../../../components/MuiButton/MuiButton";

import classes from "./LoginForm.module.css";
import MuiTextField from "../../../components/MuiTextField/MuiTextField";

export default function LoginForm() {
  const email = useInput("");
  const password = useInput("");

  function handlerSubmite(e) {
    e.preventDefault();
    console.log(email.value);
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
          <MuiTextField
            type="text"
            name="emal"
            placeholder="Email"
            value={email.value}
            onChange={email.onChange}
            onBlur={email.onBlur}
            className={classes.form__control}
          />
          <MuiTextField
            type="password"
            name="password"
            placeholder="Password"
            value={password.value}
            onChange={password.onChange}
            onBlur={password.onBlur}
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
        <MuiButton label="Login" className={classes.form__btn} />
      </form>
    </div>
  );
}
