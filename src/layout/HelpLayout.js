import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div>
      <div className="help-layout">
        <h2>Website Help</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <nav>
          <NavLink to="faq">View the FAQ</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>

        <Outlet />
      </div>
    </div>
  );
}
