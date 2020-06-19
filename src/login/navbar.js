import React from 'react';
import { Link, withRouter } from "react-router-dom";

const Menu = (props) => {
  // Statefull: state, lifecycler, this
  // Stateless: props
  const jwt = localStorage.getItem("jwt");
  const logout = () => {
    localStorage.removeItem("jwt");
    props.history.push("/login");
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        {
          jwt ?
            <>
              <i class="fa fa-user-circle" aria-hidden="true"></i>
              <button className="btn" onClick={logout}>logout</button>
            </>
            : <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
            </ul>
        }
      </div>
    </nav>
  );
};

export default withRouter(Menu);