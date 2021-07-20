import classes from "./class.module.css";

import TagsList from "./TagsList/TagsList";
import MuiCard from "@components/MuiCard/MuiCard";

export default function RecentPosts({ recentPosts, tags }) {
  return (
    <section className={classes.section}>
      <div className={classes.articles}>
        {recentPosts.map((post, index) => (
          <MuiCard
            article={post}
            href="/"
            className={classes.small}
            key={index}
          />
        ))}
      </div>
      <div className={classes.tags}>
        <div>
          <h4 className={classes.tags__title}>tags.</h4>
        </div>
        <TagsList tags={tags} />
      </div>
    </section>
  );
}
