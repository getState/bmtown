import React, { Component } from "react";
import { BrowserRouter ,Route } from "react-router-dom";
import { Home, About } from "./pages/index.js";
import './reset.css';

export default function App(){
  return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </BrowserRouter>
    );
}
