import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

    loginFunc = () => {
      this.props.login();
      this.props.nameChange(this.state.name);
    }

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

                <h3 style={{color: "#212529"}}>Log in</h3>

                <div className="form-group">
                    <label style={{color: "#212529"}}>Name</label>
                    <input type="text" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}} className="form-control" placeholder="Enter name" />
                </div>

                <div className="form-group">
                    <label style={{color: "#212529"}}>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label style={{color: "#212529"}} className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button style={{backgroundColor: "#0c0a2b"}} onClick={() => this.loginFunc()} className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
          </div>
        </div>
        </>
        );
    }
}
