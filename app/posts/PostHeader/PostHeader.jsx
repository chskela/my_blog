import React from "react";
import Image from "next/image";

import classes from "./class.module.css";

import { formatDate } from "@lib/formatDate";

export default function PostHeader({ title, image, author, date, tags }) {
  const postDate = formatDate(date);
  return (
    <header className={classes.header}>
      <div className={classes.header__image}>
        <Image priority src={image} alt={title} width={1316} height={592} />
      </div>

      <h1 className={classes.header__title}>{title}</h1>
      <div className={classes.content}>
        <div className={classes.avatar}>
          <p>{author.name}</p>
          <time>{postDate}</time>
        </div>
        <div className={classes.tags}>
          {tags.map((tag) => (
            <p key={tag}>{`#${tag.toLowerCase()}`}</p>
          ))}
        </div>
      </div>
    </header>
  );
}
