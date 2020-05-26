import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = (props) => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to="/blog" activeClassName="nav-link-active">
          Blog
        </NavLink>
      </div>
    );
  };

  const handleSignOut = () => {
    axios
      .delete("https://api.devcamp.space/logout", { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch((error) => {
        console.log("Error signing out", error);
      });
  };

  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/poke-me" activeClassName="nav-link-active">
            Poke Me
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/hide-me" activeClassName="nav-link-active">
            Hide Me
          </NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/change-me" activeClassName="nav-link-active">
            change me
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/count-me" activeClassName="nav-link-active">
            count me
          </NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/color-changer" activeClassName="nav-link-active">
            color changer
          </NavLink>
        </div>
        <div className="nav-link-wrapper">
          <NavLink to="/font-size" activeClassName="nav-link-active">
            font size
          </NavLink>
        </div>

        {props.loggedInStatus === "LOGGED_IN"
          ? dynamicLink("/blog", "Blog")
          : null}
      </div>

      <div className="right-side">
        DALLIN HUMPHREY
        {props.loggedInStatus === "LOGGED_IN" ? (
          <a onClick={handleSignOut}>Sign Out</a>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
