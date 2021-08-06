import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import materialOceanic from "react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic";

import classes from "./class.module.css";
import PostHeader from "./PostHeader/PostHeader";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("bash", bash);

export default function PostContent({ post }) {
  const { content, slug, url, title, author, date, tags } = post;
  const src = `/assets/blog/${slug}/${url}`;

  const customRenderers = {
    p: ({ node, ...props }) => {
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const src = `/assets/blog/${slug}/${image.properties.src}`;

        return (
          <div className={classes.image}>
            <Image
              src={src}
              alt={image.properties.alt}
              width={680}
              layout="responsive"
              height={440}
            />
          </div>
        );
      }
      return <p {...props} />;
    },

    code: ({ node, ...props }) => {
      if (props?.className === "language-bash") {
        return (
          <SyntaxHighlighter
            {...props}
            language="bash"
            style={materialOceanic}
          />
        );
      }

      if (props?.className === "language-js") {
        return (
          <SyntaxHighlighter {...props} language="js" style={materialOceanic} />
        );
      }

      const { inline, ...restProps } = props;
      return <code className={classes.inline_code} {...restProps} />;
    },

    a: ({ node, ...props }) => <a className={classes.link} {...props} />,
  };

  return (
    <article>
      <PostHeader
        title={title}
        image={src}
        author={author}
        date={date}
        tags={tags}
      />
      <div className={classes.content}>
        <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
      </div>
    </article>
  );
}
