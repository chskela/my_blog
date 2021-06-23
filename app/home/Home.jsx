import { Fragment } from "react";

import Hero from "./Hero/Hero";
import EditorPick from "./EditorPick/EditorPick";
import RecentPosts from "./RecentPosts/RecentPosts";
import FeaturedArticle from "./FeaturedArticle/FeaturedArticle";

export default function Home({ heroPost, featuredPost }) {
  return (
    <Fragment>
      <Hero heroPost={heroPost} />
      <EditorPick />
      <FeaturedArticle featuredPost={featuredPost} />
      <RecentPosts />
    </Fragment>
  );
}
