import { useRouter } from "next/router";

import classes from "./class.module.css";

import { MuiSearch } from "@components/icons";
import MuiButton from "@components/MuiButton/MuiButton";
import MuiTextField from "@components/MuiTextField/MuiTextField";

export default function Tags({ tags }) {
  const router = useRouter();

  return (
    <div className={classes.content}>
      <div>
        <MuiTextField
          icon={<MuiSearch size={30} />}
          className={classes.search}
        />
      </div>
      <div className={classes.tags_list}>
        {tags.map((tag) => (
          <MuiButton
            label={`#${tag.toLowerCase()}`}
            key={tag}
            className={classes.tag}
          />
        ))}
      </div>
    </div>
  );
}
