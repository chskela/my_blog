import { MuiCard } from "@components";
import classes from "./class.module.css";
import React, { useState, useEffect } from "react";

export default function Search({ posts, query }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    setFilteredPosts(
      posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    );
  }, [query]);

  return (
    <div className={classes.content}>
      <div className={classes.articles}>
        {filteredPosts.map((post, index) => (
          <MuiCard
            href="/"
            key={index}
            article={post}
            className={classes.small}
          />
        ))}
      </div>
    </div>
  );
}
