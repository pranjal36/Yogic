import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
          <>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link style={{fontSize: "30px", color: "white"}} className="navbar-brand" to={"/sign-in"}>Stay Fit</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link style={{color: "white"}} className="nav-link" to={"/sign-in"}>Sign in</Link>
                  </li>
                  <li className="nav-item">
                    <Link style={{color: "white"}} className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="outer">
            <div className="inner">
            <form>
                <h3 style={{color: "#212529"}}>Register</h3>

                <div className="form-group">
                    <label style={{color: "#212529"}}>First name</label>
                    <input  type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label style={{color: "#212529"}}>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label style={{color: "#212529"}}>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label style={{color: "#212529"}}>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button style={{backgroundColor: "#0c0a2b"}} className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>
          </div>
        </div>
        </>
        );
    }
}
