import { Fragment } from "react";

import EditorPick from "./EditorPick/EditorPick";
import Hero from "./Hero/Hero";
import FeaturedArticle from "./FeaturedArticle/FeaturedArticle";
import RecentPosts from "./RecentPosts/RecentPosts";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <EditorPick />
      <FeaturedArticle />
      <RecentPosts />
    </Fragment>
  );
}
