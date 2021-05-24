import ArticlePreview from "../Article/ArticlePreview/ArticlePreview";

import classes from "./RecentPosts.module.css";
import TagsList from "./TagsList/TagsList";

const article = {
  category: "ИЗБРАННАЯ СТАТЬЯ",
  title: "World’s Most Dangerous Technology Ever Made.",
  autor: "Ralph Hawkins",
  date: "May 7, 2019 (10 mins read)",
  excerpt:
    "Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. ",
  url: "/assets/images/hero.jpeg",
};

export default function RecentPosts() {
  return (
    <section className={classes.section}>
      <div className={classes.articles}>
        <ArticlePreview article={article} mini />
        <ArticlePreview article={article} mini />
        <ArticlePreview article={article} mini />
        <ArticlePreview article={article} mini />
        <ArticlePreview article={article} mini />
      </div>
      <div className={classes.tags}>
        <div>
          <h4 className={classes.tags__title}>tags.</h4>
        </div>
        <TagsList />
      </div>
    </section>
  );
}
