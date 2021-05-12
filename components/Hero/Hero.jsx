import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.content}>
        <p className={classes.content__featured}>ИЗБРАННАЯ СТАТЬЯ</p>
        <h1 className={classes.content__title}>
          World’s Most Dangerous Technology Ever Made.
        </h1>
        <div className={classes.content__avatar}>
          <p className={classes.content__autor}>Ralph Hawkins</p>
          <time>May 7, 2019 (10 mins read)</time>
        </div>
        <p className={classes.content__excerpt}>
          Proident aliquip velit qui commodo officia qui consectetur dolor
          ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex
          laborum nostrud mollit sint consectetur Lorem amet aliqua do enim.
          Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat
          velit magna.
        </p>
      </div>
    </section>
  );
}
