/* eslint-disable react-hooks/rules-of-hooks */
// import logo from "/images/university-logo.png"
import { Link } from "react-router-dom";
import React, { Component } from "react";
import CONSTANTS from "../Utilities/baseUrl";

class Login extends Component {
  constructor(props) {
    super(props);
    // console.log(props.history)
    this.state = {
      username: null,
      password: null,
      login: false,
      store: null,
    };
    this.render = this.render.bind(this);
    this.login = this.login.bind(this);
  }
  login() {
    // const history = useHistory();
    fetch(
      `${CONSTANTS.BASE_URL}${CONSTANTS.API_CONSTANTS.AUTHENTICATION.LOGIN}/`,
      {
        method: "POST",
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.access) {
          console.log(localStorage);
          const token = data.access;
          console.log(token);
          let finalData = JSON.parse(atob(data.access.split(".")[1]));
          localStorage.setItem(
            "login",
            JSON.stringify({
              login: true,
              token: finalData,
              access_refresh: data.refresh,
            })
          );
          localStorage.setItem("access_token", JSON.stringify(token));
          localStorage.setItem("access_refresh", JSON.stringify(data.refresh));
          console.log(localStorage);
          this.setState({ login: true });
          if (this.state.login) {
            this.props.history.push("/blogsmain");
          }
        } else {
          alert("Username or Password is incorrect.");
        }
      });
  }
  render() {
    return (
      <div className="loginWrap">
        <div className="container">
          <div className="header-wrap">
            <div className="row m-0">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="leftCol">
                  <div className="">
                    <p className="headingBox">blog Platform</p>
                    <p className="white-text">
                      A Common platform for Ub to speak their heart out!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6"></div>
            </div>
          </div>
          <div className="loginFields">
            <div className="row m-0">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="loginFormWrap">
                  {/* <form onSubmit={this.login}> */}
                  <div className="form-group row mb">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-2 col-form-label formlabels"
                    >
                      Username
                    </label>
                    <div className="col-md-7 col-lg-7">
                      <input
                        type="text"
                        onChange={(event) => {
                          this.setState({ username: event.target.value });
                        }}
                        className="form-control"
                        id="user"
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  <div className="form-group row mb">
                    <label
                      htmlFor="inputPassword"
                      className="col-sm-2 col-form-label formlabels"
                    >
                      Password
                    </label>
                    <div className="col-md-7 col-lg-7">
                      <input
                        type="password"
                        onChange={(event) => {
                          this.setState({ password: event.target.value });
                        }}
                        className="form-control"
                        id="inputPassword"
                        placeholder=""
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 col-lg-4">
                      <button className="cta-btn" onClick={this.login}>
                        Login
                      </button>
                    </div>
                  </div>
                  {/* </form> */}
                  <div className="row align-items-center">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 col-lg-4">
                      <Link to="/" className="cta-btn mb-2">
                        Forgot Password
                      </Link>
                    </div>
                    <div className="col-md-4 col-lg-4">
                      <Link to="/signup" className="labels">
                        NOT YET A MEMBER
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/images/university-logo.png"}
          alt=""
          className="img-fluid absPosition"
        />
      </div>
    );
  }
}

export default Login;
