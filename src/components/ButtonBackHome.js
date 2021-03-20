import React from "react";
import { Link } from "react-router-dom";
export const ButtonBackHome = (props) => (
  <div>
    <Link style={{ margin: "20px" }} to="/" className="button is-info">
      Volver al Home
    </Link>
  </div>
);
