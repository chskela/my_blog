import HeaderButton from "../HeaderButton/HeaderButton";
import SearchForm from "../SearchForm/SearchForm";
import classes from "./RightNav.module.css";

export default function RightNav() {
  return (
    <div className={classes.header__right}>
      <SearchForm />
      <HeaderButton />
    </div>
  );
}
