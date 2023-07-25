import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const NavLink = () => {
  return (
    <BrowserRouter>
      <Route path="/about">
        <div>About</div>
      </Route>
      <Route path="/login">
        <div>Login</div>
      </Route>
      <Route path="/">
        <div>Home</div>
      </Route>
    </BrowserRouter>
  );
};

export default NavLink;
