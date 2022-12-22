import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = () => (
  <nav className="nav-bar">
    <a className="nav-brand" href="#/">Bookstore CMS</a>
    <ul className="nav-links">
      <li>
        <NavLink to="/" className="nav-link " activeClassName="active-link" exact>BOOKS</NavLink>
      </li>
      <li>
        <NavLink to="/categories" className="nav-link " activeClassName="active-link" exact>CATEGORIES</NavLink>
      </li>
    </ul>
    <button className="icon-button" type="button">
      <span className="material-icons primary-color">
        <BsFillPersonFill />
      </span>

    </button>
  </nav>
);

export default Navbar;
