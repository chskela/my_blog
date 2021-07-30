import classes from "./class.module.css";

import { useState, useEffect } from "react";

import { MuiSearch } from "@components/icons";
import MuiCard from "@components/MuiCard/MuiCard";
import MuiButton from "@components/MuiButton/MuiButton";
import MuiTextField from "@components/MuiTextField/MuiTextField";

export default function Tags({ tags, posts }) {
  const [searchValue, setSearchValue] = useState("");

  const tagsLowerCase = tags.map((tag) => tag.toLowerCase());

  const [filteredTags, setFilteredTags] = useState(tagsLowerCase);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    setFilteredTags(tagsLowerCase.filter((tag) => tag.includes(searchValue)));
    setFilteredPosts(
      posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchValue) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchValue))
      )
    );
  }, [searchValue]);

  function searcHandler(e) {
    setSearchValue(e.target.value);
  }

  function clickHandler(e) {
    e.preventDefault();
    const value = e.target.innerText.replace(/\#/, "");
    setSearchValue(value);
  }

  return (
    <div className={classes.content}>
      <MuiTextField
        type="text"
        value={searchValue}
        onChange={searcHandler}
        className={classes.search}
        icon={<MuiSearch size={30} />}
        placeholder="Найдите темы, которые вам интересны ..."
      />

      <div className={classes.tags_list}>
        {filteredTags.map((tag) => (
          <MuiButton
            key={tag}
            onClick={clickHandler}
            className={classes.tag}
            label={`#${tag}`}
          />
        ))}
      </div>

      <div className={classes.articles}>
        {filteredPosts.map((post, index) => (
          <MuiCard
            article={post}
            href="/"
            className={classes.small}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
