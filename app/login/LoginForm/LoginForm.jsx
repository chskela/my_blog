import React from "react";
import Link from "next/link";

import useInput from "../../../hooks/useInput";

import MuiButton from "@components/MuiButton/MuiButton";
import MuiTextField from "@components/MuiTextField/MuiTextField";

import classes from "./LoginForm.module.css";

// import { useAuth } from "../../../state/context/auth-context";

export default function LoginForm() {
  const email = useInput("");
  const password = useInput("");
  // const { signin, currentUser } = useAuth();

  async function handlerSubmite(e) {
    e.preventDefault();
    try {
      // await signin(email.value, password.value);
    } catch (error) {}
  }

  return (
    <div className={classes.center}>
      <form className={classes.form}>
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
        <MuiButton
          label="Login"
          type="submite"
          className={classes.form__btn}
          onClick={handlerSubmite}
        />
      </form>
    </div>
  );
}
