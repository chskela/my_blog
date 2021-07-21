import Image from "next/image";
import ReactMarkdown from "react-markdown";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import html from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import materialOceanic from "react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic";

import classes from "./class.module.css";

SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("html", html);

export default function PostContent({ post }) {
  const { title, content, slug } = post;

  const customRenderers = {
    p: ({ node, ...props }) => {
      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={image.properties.src}
              alt={image.properties.alt}
              width={680}
              height={440}
            />
          </div>
        );
      }
      return <p {...props} />;
    },
    code: ({ node, ...props }) =>
      props?.className === "language-bash" ? (
        <SyntaxHighlighter language="bash" {...props} style={materialOceanic} />
      ) : (
        <p className={classes.inline} {...props} />
      ),
    a: ({ node, ...props }) => <a className={classes.link} {...props} />,
  };

  return (
    <article className={classes.content}>
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
}
