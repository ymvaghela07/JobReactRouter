import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis
        autem ipsam eum officiis repellendus mollitia repellat vero aliquam
        animi!
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}
