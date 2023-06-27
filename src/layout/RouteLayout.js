import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function RouteLayout() {
  return (
    <div className="route-layout">
      <header>
        <nav>
          <h1>JobRouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="careers">Careers</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
