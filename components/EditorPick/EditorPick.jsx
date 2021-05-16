import ArticlePreview from "../Article/ArticlePreview/ArticlePreview";

import classes from "./EditorPick.module.css";

export default function EditorPick() {
  return (
    <section className={classes.editor}>
      <h2 className={classes.editor__title}>Editor’s Picks</h2>
      <div>
        <ArticlePreview />
      </div>
    </section>
  );
}
