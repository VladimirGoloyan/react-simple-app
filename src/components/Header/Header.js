import React from "react";

import NavLink from "../NavLink/NavLink";
import "./Header.scss";

const routerLinks = [
  {
    title: "UserList",
    to: "/",
  },
  {
    title: "ProductList",
    to: "/products",
  },
  {
    title: "CategoryList",
    to: "/categories",
  },
];

const Header = () => {
  return (
    <div className="app-header">
      <ul className="app-header__nav-list">
        {routerLinks.map((el, idx) => (
          <li key={idx} className="app-header__nav-list__item">
            <NavLink to={el.to}>{el.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
