import React from "react";
import { BrowserRouter ,Route } from "react-router-dom";
import { Home, Town } from "./pages/index.js";
import './reset.css';

export default function App(){
  return (
      <BrowserRouter>
        <Route exact path={["/", "/register"]} component={Home} />
        <Route path="/town" component={Town} />
      </BrowserRouter>
    );
}
