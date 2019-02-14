import React from "react";
import { NavLink } from "react-router-dom";

const FilterLink = ({ filter, children }) => {
  return (
    <NavLink
      to={filter === "all" ? "" : filter}
      activeStyle={{
        textDecoration: "none",
        color: "red"
      }}
    >
      {children}
    </NavLink>
  );
};

export default FilterLink;
