import ArticleDescription from "../ArticleDescription/ArticleDescription";

import classes from "./ArticlePreview.module.css";

export default function ArticlePreview({ article }) {
  return (
    <article className={classes.article}>
      <div>
        <img
          className={classes.img}
          src="/assets/images/hero.jpeg"
          alt="World’s Most Dangerous Technology Ever Made."
        />
      </div>
      <ArticleDescription
        category="ИЗБРАННАЯ СТАТЬЯ"
        title="World’s Most Dangerous Technology Ever Made."
        autor="Ralph Hawkins"
        date="May 7, 2019 (10 mins read)"
        excerpt=" Proident aliquip velit qui commodo officia qui consectetur dolor
            ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur.
            Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do
            enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla
            consequat velit magna."
      />
    </article>
  );
}
