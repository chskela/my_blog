import { formatDate } from "@lib/formatDate";

import MuiCardDescription from "@components/MuiCardDescription/MuiCardDescription";

import classes from "./class.module.css";

export default function FeaturedArticle({ featuredPost }) {
  const { title, author, date, excerpt } = featuredPost;
  const postDate = formatDate(date);

  return (
    <section className={classes.wrapper}>
      <div className={classes.content}>
        <MuiCardDescription
          category="Избранная статья"
          title={title}
          autor={author.name}
          date={postDate}
          excerpt={excerpt}
        />
      </div>
    </section>
  );
}
