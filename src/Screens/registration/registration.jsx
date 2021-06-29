import React, { Component } from "react";
import "./registration.css";
import { Link } from "react-router-dom";

export default class Registration extends Component {
  render() {
    return (
      <div id="contact-section">
        <div className="contact-contain">
          <div className="conatact-fom">
            <div className="form-container">
              <div className="headng-con">
                <h4 className="survey">
                  Survey <span className="tester">Testers</span>
                </h4>
              </div>
              <div className="lang-sele">
                <span>English</span> <span>|</span> <span>German</span>
              </div>
              <form onSubmit={() => alert("Hello")}>
                <input
                  className="input-con"
                  type="Email"
                  placeholder="Email"
                  required
                />
                <input
                  className="input-con"
                  type="password"
                  placeholder="Password"
                  required
                />
                <div className="forgot-pass">
                  <span>I forgot my password.</span>
                </div>
                <div className="checkbox-prop">
                  <div className="check">
                    <input type="checkbox" />
                  </div>
                  <div className="keepDiv">
                    <span>Keep me signed in.</span>
                  </div>
                </div>
                <Link to="/forgotPasword">
                  <button className="sub-mit-but">Sign In</button>
                </Link>
                <div style={{ margin: "20px" }}>
                  <span>Don't have an account yet?</span>
                </div>
                <div style={{ margin: "20px", marginBottom: "30px" }}>
                  <span>Start creating an account with us</span>
                </div>

                <div style={{ marginBottom: "30px" }}>
                  <button className="freeTrail">Free Trial</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
