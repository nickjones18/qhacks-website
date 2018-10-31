import React, { Component } from "react";
import ActionButton from "./ActionButton";

import circleCheckWhite from "../assets/img/icons/circleSuccess-white.svg";
import circleTimesWhite from "../assets/img/icons/circleError-white.svg";
import circleCheck from "../assets/img/icons/circleSuccess-green.svg";
import circleTimes from "../assets/img/icons/circleError-red.svg";
import spinnerWhite from "../assets/img/icons/spinner-white.svg";
import spinner from "../assets/img/icons/spinner-black.svg";

class SignUpForm extends Component {
  state = {
    status: null,
    message: null,
    emailAddress: "",
    boldMessage: ""
  };

  setStatusFailure = (errorMsg) => {
    this.setState({
      status: "failure",
      boldMessage: errorMsg,
      message: ""
    });
    setTimeout(() => this.resetStatus(), 3500);
  };

  setStatusSuccess = (email) => {
    this.setState({
      status: "success",
      boldMessage: email,
      message: "has been added to our mailing list."
    });
    setTimeout(() => this.resetStatus(), 3500);
  };

  setStatusLoading = () => {
    this.setState({ status: "loading", message: "", boldMessage: "" });
  };

  resetStatus = () => {
    this.setState({ status: null, message: "", boldMessage: "" });
  };

  signUp() {
    const email = this.state.emailAddress;
    const baseUrl = "https://app.qhacks.io"; // local: "http://127.0.0.1:9000"
    this.setStatusLoading();
    fetch(`${baseUrl}/api/v1/subscribe`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        email: email,
        event: "qhacks-2018",
        name: "test-mailing-list"
      })
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.code || (response.code >= 200 && response.code <= 299)) {
          this.setStatusSuccess(email);
        } else {
          this.setStatusFailure(response.message);
        }
      })
      .catch(() => {
        this.setStatusFailure("Something went wrong – please try again later.");
      });
  }

  render() {
    let buttonContent = "";
    const whiteIcons =
      this.props.foregroundColor &&
      ["#fff", "#ffffff", "white"].includes(
        this.props.foregroundColor.toLowerCase()
      );
    switch (this.state.status) {
    case "loading": {
      buttonContent = (
        <img
          src={whiteIcons ? spinnerWhite : spinner}
          style={{
            animation: "spin 2s infinite linear"
          }}
          alt=""
        />
      );
      break;
    }
    case "success": {
      buttonContent = (
        <img src={whiteIcons ? circleCheckWhite : circleCheck} alt="" />
      );
      break;
    }
    case "failure": {
      buttonContent = (
        <img src={whiteIcons ? circleTimesWhite : circleTimes} alt="" />
      );
      break;
    }
    default: {
      buttonContent = "Sign Up";
      break;
    }
    }

    return (
      <div
        style={{
          maxWidth: "530px",
          margin: this.props.center ? "0 auto" : "12px 0 0 8px",
          width: "100%"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <input
            placeholder="Enter your email address"
            type="email"
            style={{
              flexGrow: 2,
              padding: "0 16px",
              height: "48px",
              lineHeight: "48px",
              borderRadius: "4px",
              border: "none",
              fontSize: this.props.fontSize || "16px",
              margin: "4px"
            }}
            data-cy={this.props.dataCyInput || "signup-input"}
            value={this.state.emailAddress}
            onChange={(e) => this.setState({ emailAddress: e.target.value })}
          />
          <ActionButton
            backgroundColor={this.props.backgroundColor || "white"}
            foregroundColor={this.props.foregroundColor || "black"}
            hoverBackgroundColor={this.props.hoverBackgroundColor} // can be null
            type="rect"
            onClick={() => this.signUp()}
            width="130px"
            style={{ margin: "4px" }}
            disabled={!!this.state.status}
            data-cy={this.props.dataCyButton || "signup-button"}
          >
            {buttonContent}
          </ActionButton>
        </div>
        <p
          style={{
            marginTop: "8px",
            height: "22px",
            fontWeight: "500",
            lineHeight: "22px"
          }}
        >
          {this.state.boldMessage ? (
            <strong>
              {this.state.boldMessage}
              &nbsp;
            </strong>
          ) : (
            ""
          )}
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default SignUpForm;
