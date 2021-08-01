import Image from "next/image";

import classes from "./class.module.css";

export default function PostHeader({ title, image, author, date, tags }) {
  return (
    <header className={classes.header}>
      <div className={classes.header__image}>
        <Image src={image} alt={title} width={1316} height={592} />
      </div>

      <h1 className={classes.header__title}>{title}</h1>
      <div className={classes.content}>
        <div className={classes.avatar}>
          <p>{author.name}</p>
          <time>{date}</time>
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
