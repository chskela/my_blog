import classes from "./SearchForm.module.css";

export default function SearchForm() {
  return (
    <form className={classes.form}>
      <input type="text" className={classes.form__input} />
    </form>
  );
}
