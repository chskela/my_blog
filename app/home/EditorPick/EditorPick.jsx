import classes from "./class.module.css";

import MuiCard from "@components/MuiCard/MuiCard";

export default function EditorPick({ editorPick }) {
  return (
    <section className={classes.editor}>
      <h2 className={classes.editor__title}>Editor’s Picks</h2>
      <div>
        {editorPick.map((post, index) => (
          <MuiCard article={post} key={index} />
        ))}
      </div>
    </section>
  );
}
