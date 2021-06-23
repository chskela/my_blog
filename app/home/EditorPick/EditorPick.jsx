import MuiCard from "@components/MuiCard/MuiCard";

import classes from "./EditorPick.module.css";

export default function EditorPick() {
  const article = {
    category: "ИЗБРАННАЯ СТАТЬЯ",
    title: "World’s Most Dangerous Technology Ever Made.",
    autor: "Ralph Hawkins",
    date: "May 7, 2019 (10 mins read)",
    excerpt:
      "Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.",
    url: "/assets/images/hero.jpeg",
  };
  return (
    <section className={classes.editor}>
      <h2 className={classes.editor__title}>Editor’s Picks</h2>
      <div>
        <MuiCard article={article} href="/" />
        <MuiCard article={article} href="/" />
        <MuiCard article={article} href="/" />
      </div>
    </section>
  );
}
