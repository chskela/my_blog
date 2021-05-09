import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

import classes from "./MainItem.module.css";

export default function MenuItem({ link, title }) {
  const router = useRouter();
  const isCurrent = router.asPath === link;

  const menuItemClass = cn(classes.nav_list__item, {
    [classes.nav_list__item_active]: isCurrent,
  });
  return (
    <li className={menuItemClass}>
      <Link href={link}>{title}</Link>
    </li>
  );
}
