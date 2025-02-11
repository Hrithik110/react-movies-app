import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
         <h2> React-Movies</h2>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/genres" className="nav-link ms-3">
                Genres
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/filter" className="nav-link ms-3">
                Filter Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/actors" className="nav-link ms-3">
                Actors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movietheatres" className="nav-link ms-3">
                Movie Theaters
              </NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to="/movies/create" className="nav-link ms-3">
                Create a movie
                </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
