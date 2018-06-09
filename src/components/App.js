import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// components
import Header from './Header';
import Menu from './Menu';
import Home from './../pages/Home';
import Contact from "./../pages/Contact";

const App = () => (
  <BrowserRouter>

    <div>
      <Header />
      <Menu />
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </div>
    </div >
  </BrowserRouter>
);

export default App;
