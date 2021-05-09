import Link from "next/link";

import classes from "./HeaderButton.module.css";

export default function HeaderButton() {
  return (
    <Link href="/login">
      <a className={classes.button}>Login</a>
    </Link>
  );
}
