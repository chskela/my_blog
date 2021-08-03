import Head from "next/head";
import React, { Fragment } from "react";

import Tags from "@app/tags/Tags";
import { getAllTags, getAllPosts } from "@lib/posts-util";

export default function TagsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Nuntium</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tags {...props} />
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const tags = getAllTags();
  const posts = getAllPosts();
  return {
    props: { tags, posts },
  };
};
