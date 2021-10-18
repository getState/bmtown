import React from "react";
import { BrowserRouter ,Route } from "react-router-dom";
import { Home, Town } from "./pages/index.js";
import {RecoilRoot} from 'recoil';
import './reset.css';

export default function App(){
  return (
      <RecoilRoot>
        <BrowserRouter>
          <Route exact path={["/", "/auth/callback"]} component={Home} />
          <Route path="/town" component={Town} /> 
        </BrowserRouter>
      </RecoilRoot>
    );
}
