import Link from "next/link";

import classes from "./class.module.css";

export default function TagsList({ tags }) {
  return (
    <div>
      <ul className={classes.tags__list}>
        {tags.map((tag, index) => (
          <li key={tag + index}>
            <Link href="/">{tag}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
