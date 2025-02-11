import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from "./route-config";
import MoviesList from './movies/MoviesList';
import Button from './utils/Button';
import Menu from './Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexGenres from './Genres/IndexGenres';
import configureValidations from './Validations';
import 'leaflet/dist/leaflet.css';


function App() {

  configureValidations();
  
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className="container">
          <Routes>

            {routes.map(route=>(
              <Route key={route.path} path={route.path} element={<route.element/>}/>
            ))}
          </Routes>
        </div>
        <footer className='bd-footer py-5 mt-5 bg-light'>
            <div className='container'>
              React Movies {new Date().getFullYear().toString()}
            </div>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
