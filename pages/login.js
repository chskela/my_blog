import Head from "next/head";
import React, { Fragment } from "react";

import LoginForm from "../app/login/LoginForm/LoginForm";

export default function Login() {
  return (
    <Fragment>
      <Head>
        <title>Nuntium Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginForm />
    </Fragment>
  );
}
