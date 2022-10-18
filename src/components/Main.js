import React from "react";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import Auth from "../module/auth/auth";

function Main(props) {
  return (
    <Auth>
      <nav>
        <ul className="navigation__container">
          <li>
            <Link to="/">Cateogry</Link>
          </li>
          <li>
            <Link to="/client">Client</Link>
          </li>
          <li>
            <Link to="/boat">Boat</Link>
          </li>
          <li>
            <Link to="/message">Message</Link>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </Auth>
  );
}

export default Main;
