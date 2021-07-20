import { Fragment } from "react";

import Hero from "./Hero/Hero";
import EditorPick from "./EditorPick/EditorPick";
import RecentPosts from "./RecentPosts/RecentPosts";
import FeaturedArticle from "./FeaturedArticle/FeaturedArticle";
import MuiArticle from "../../components/MuiArticle/MuiArticle";

export default function Home({ heroPost, featuredPost }) {
  return (
    <Fragment>
      {/* <Hero heroPost={heroPost} /> */}
      <MuiArticle post={{ ...heroPost, category: "Последняя статья" }} />
      <EditorPick />
      <FeaturedArticle featuredPost={featuredPost} />
      <RecentPosts />
    </Fragment>
  );
}
