import { Fragment } from "react";

import classes from "./class.module.css";

import EditorPick from "./EditorPick/EditorPick";
import RecentPosts from "./RecentPosts/RecentPosts";
import MuiArticle from "../../components/MuiArticle/MuiArticle";

export default function Home({
  heroPost,
  featuredPost,
  recentPosts,
  editorPick,
  allTags,
}) {
  return (
    <Fragment>
      <MuiArticle post={{ ...heroPost, category: "Последняя статья" }} />
      <EditorPick editorPick={editorPick} />
      <MuiArticle
        post={{ ...featuredPost, category: "Избранная статья" }}
        classNames={{ wrapper: classes.wrapper, content: classes.content }}
      />
      <RecentPosts recentPosts={recentPosts} tags={allTags} />
    </Fragment>
  );
}
