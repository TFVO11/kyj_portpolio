import React from "react";
import { page } from "../../../type/page";
import { Link } from "react-router-dom";

function NavList() {
  const navArr = Array.key(page);

  return (
    <ul>
      {navArr.map((e) => {
        return <li><Link to={e.route}>{e.name}</Link></li>;
      })}
    </ul>
  );
}

export default NavList;
