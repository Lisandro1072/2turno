import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes as ReactRoutes,
} from "react-router-dom";

import Home from "./component/home";
import About from "./component/about";
import Header from "./component/header";
import Dashboard from "./component/dashboard";

const MyRoutes = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          {" "}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/header">Header</Link>
            </li>
          </ul>
        </nav>

        <ReactRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/header" element={<Header />} />
        </ReactRoutes>
      </div>
    </Router>
  );
};

export default MyRoutes;
