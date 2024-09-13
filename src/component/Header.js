import React from "react";
import Search from "./Search";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#FF4000" }}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            HOME
          </Link>
          {isHomePage && <Search />}
        </div>
      </nav>
    </>
  );
};

export default Header;
