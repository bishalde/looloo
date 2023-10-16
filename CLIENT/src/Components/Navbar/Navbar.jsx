import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";

import "./Navbar.css";

const Navbar = () => {
  const [navclass, setNavclass] = useState("links");

  const navChange = () => {
    if (navclass === "links") {
      setNavclass("links navActive");
    } else {
      setNavclass("links");
    }
  };

  const navClick = () => {
    setNavclass("links");
  };

  return (
    <Fade left>
      <section className="navbar">
        <div className="logo">
          <Link to="/">
            <h1>
              Project <img src="/logos/rmlogo1.png" />
              Tree
            </h1>
          </Link>
        </div>

        <div className="hamberger" onClick={navChange}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={navclass}>
          <NavLink
          onClick={navClick}
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
          onClick={navClick}
            to="/projects"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "active" : ""
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="https://github.com/bishalde/ProjectTree"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "active" : ""
            }
          >
            Github
          </NavLink>

          <NavLink
            onClick={navClick}
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "active" : ""
            }
          >
            Login
          </NavLink>
        </div>
      </section>
    </Fade>
  );
};

export default Navbar;
