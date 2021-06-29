import React from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <React.Fragment>
      <div className="contact-contain">
        <div className="conatact-fom">
          <div className="form-cot">
            <form onSubmit={() => alert("Hello")}>
              <div className="heading-password">
                <p className="head">Password Recovery</p>
              </div>
              <div>
                <p
                  style={{
                    marginTop: "15px",
                    color: "whitesmoke",
                    fontStyle: "italic",
                    fontSize: "13px",
                  }}
                >
                  Please enter your email address. We will send you a link with
                  instruction to reset your password.
                </p>
              </div>
              <div className="input-Container">
                <input
                  className="input-cont"
                  type="Email"
                  placeholder="Email"
                  required
                />
              </div>
              <button className="sub-mit-but">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
