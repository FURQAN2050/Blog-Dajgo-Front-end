import "../css/front-styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.history);
    this.state = {
      loggedInUser: {},
      isActive: true,
    };
    this.render = this.render.bind(this);
    this.getloggedInUser = this.getloggedInUser.bind(this);
    this.getloggedInUser();
  }
  getloggedInUser() {
    const loggedInUser = JSON.parse(localStorage.getItem("login"));
    console.log(loggedInUser);
    const { login } = loggedInUser;
    if (login) this.setState({ isActive: true });
  }
  render() {
    return (
      <div>
        <div className="header">
          <div className="container">
            <div className="headWrap">
              <div className="headleft">
                <ul>
                  <li className="dropLinks">
                    <Link to="#" className="toggle">
                      <FontAwesomeIcon icon={faBars} />
                    </Link>
                    {this.state.isActive ? (
                      <ul className="dropdown" id="menu">
                        {/* <li> <Link to="#">Profile Info</Link> </li>
                                                <li> <Link to="#">Favorite Categories</Link> </li>
                                                <li> <Link to="#">Favorite Blogs</Link> </li>
                                                <li> <Link to="#">Favorite Author</Link> </li> */}
                        {/* <li> <Link to="#">My Posts</Link> </li> */}
                        <li>
                          <Link to="/newpost">New Posts</Link>{" "}
                        </li>
                      </ul>
                    ) : (
                      <p></p>
                    )}
                  </li>
                  <li>
                    <Link to="/">
                      <img
                        src={process.env.PUBLIC_URL + "/images/home-icon.png"}
                        alt={"icon"}
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="headcenter">
                <ul>
                  <li>
                    <Link to="#">categories</Link>
                  </li>
                  {/* <li>
                                        <Link to="#">authors</Link>
                                    </li>
                                    <li>
                                        <Link to="#">articles</Link>
                                    </li> */}
                </ul>
              </div>
              <div className="headright">
                <ul>
                  <li>
                    <Link to="">
                      <img
                        src={process.env.PUBLIC_URL + "/images/search-icon.png"}
                        alt={"icon"}
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="/authprofile">
                      <img
                        src={process.env.PUBLIC_URL + "/images/user-icon.png"}
                        alt={"icon"}
                        className="img-fluid"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
