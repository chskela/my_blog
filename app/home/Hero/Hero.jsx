import { formatDate } from "@lib/formatDate";

import MuiCardDescription from "@components/MuiCardDescription/MuiCardDescription";

import classes from "./Hero.module.css";

export default function Hero({ heroPost }) {
  const { title, author, date, excerpt } = heroPost;
  const postDate = formatDate(date);

  return (
    <section className={classes.hero}>
      <div className={classes.content}>
        <MuiCardDescription
          category="Последняя статья"
          title={title}
          autor={author.name}
          date={postDate}
          excerpt={excerpt}
        />
      </div>
    </section>
  );
}
