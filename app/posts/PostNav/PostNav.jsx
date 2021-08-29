import React from "react";
import cn from "classnames";
import Link from "next/link";

import classes from "./class.module.css";
import { MuiChevron } from "@components/icons";

export default function PostNav({ prev, next }) {
  const PostLink = ({
    item,
    pointer = "Go back",
    rightClass = "",
    mirrorClass = "",
  }) => (
    <div className={cn(classes.left, rightClass)}>
      {item && (
        <Link href={`/posts/${item.slug}`}>
          <a className={cn(classes.left, rightClass)}>
            <div>
              <MuiChevron className={cn(classes.arrow, mirrorClass)} />
            </div>
            <div className={classes.link}>
              <p>
                {`${pointer}: `}
                <span className={classes.bold}>{item.title}</span>
              </p>
            </div>
          </a>
        </Link>
      )}
    </div>
  );

  return (
    <div className={classes.wrapper}>
      <PostLink item={prev} />
      <PostLink
        item={next}
        pointer="Next up"
        rightClass={classes.right}
        mirrorClass={classes.mirror}
      />
    </div>
  );
}
