import React from 'react';
import { NavLink } from 'react-router-dom';

/* add the navbar component */
const NavBar = () =>
  <div className="navbar">
    <NavLink to="/" exact>Home</NavLink>
    <NavLink to="/movies" exact>Movies</NavLink>
    <NavLink to="/directors" exact>Directors</NavLink>
    <NavLink to="/actors" exact>Actors</NavLink>
  </div>;

export default NavBar;
