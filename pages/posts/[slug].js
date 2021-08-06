import Head from "next/head";
import React, { Fragment } from "react";

import PostContent from "@app/posts/PostContent";
import { getAllPostPaths, getPostData, fileNameToSlug } from "@lib/posts-util";

export default function PostDetailPage({ post }) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
}

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const post = getPostData(slug);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPostPaths().map((file) => ({
    params: { slug: fileNameToSlug(file) },
  }));
  return {
    paths,
    fallback: false,
  };
};
