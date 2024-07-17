import React from "react";
import "../styles/header.css";
import { LuListTodo } from "react-icons/lu";

const Header = () => {
  return (
    <header className="header-container">
      <p className="heading">
        <span className="logo">
          <LuListTodo />
        </span>
        <span className="heading-text">Todo Application</span>
      </p>
    </header>
  );
};

export default Header;
