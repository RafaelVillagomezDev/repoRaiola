import React from "react";
// @src/components/Layout.jsx
import { Link, Outlet } from "react-router-dom";

const  Layout = () => (
  <div>
    <ul>
      <li>
        <Link to="https://www.google.com/">Home</Link>
      </li>
      <li>
        <Link to="/other">Other</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);

export default Layout;
