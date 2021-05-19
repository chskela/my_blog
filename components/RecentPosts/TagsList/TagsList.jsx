import Link from "next/link";

import classes from "./TagsList.module.css";

export default function TagsList() {
  return (
    <div>
      <ul className={classes.tags__list}>
        <li>
          <Link href="/">Technology</Link>
        </li>
        <li>
          <Link href="/">JavaScript</Link>
        </li>
      </ul>
    </div>
  );
}
