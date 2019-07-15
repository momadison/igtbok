import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import LoginBtn from "../../components/Auth/LoginBtn";

function Impact() {
  return (
    <main>
      <section className="container">
        <LoginBtn type='google' />
        <LoginBtn type='facebook' />
        <Link className="nav-link" to="/admin" data-hover="Admin">Admin Users Adjustments</Link>
        <LoginBtn type='logout' />
      </section>
    </main>
  )
}

export default Impact;
