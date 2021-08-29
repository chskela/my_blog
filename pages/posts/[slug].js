import Head from "next/head";
import React, { Fragment } from "react";

import PostContent from "@app/posts/PostContent";
import {
  getAllPostPaths,
  getPostData,
  fileNameToSlug,
  getAllPosts,
} from "@lib/postsUtil";

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
  const allPosts = getAllPosts();
  const currentIndex = allPosts
    .map(({ title, slug }) => ({
      title,
      slug,
    }))
    .findIndex((i) => i.slug === slug);

  return {
    props: {
      post: {
        ...post,
        prev: allPosts[currentIndex + 1] ? allPosts[currentIndex + 1] : null,
        next: allPosts[currentIndex - 1] ? allPosts[currentIndex - 1] : null,
      },
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
