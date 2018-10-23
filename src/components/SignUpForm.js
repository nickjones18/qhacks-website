import React, { Component } from "react";
import ActionButton from "./ActionButton";

class SignUpForm extends Component {
  state = {
    status: null
  };

  signUp() {
    // Simulate a sign up request
    this.setState({ status: "loading" });
    const delay = Math.random() * 4000 + 2000;
    if (Math.random() >= 0.5) {
      setTimeout(() => this.setState({ status: "success" }), delay);
    } else {
      setTimeout(() => this.setState({ status: "failure" }), delay);
    }
  }

  render() {
    const commonStyles = {
      fontSize: this.props.fontSize ? `${this.props.fontSize}px` : "18px",
      borderRadius: "4px",
      border: "none",
      margin: "8px"
    };

    const buttonStyles = {
      ...commonStyles,
      marginLeft: "4px"
    };

    const fixButtonAlignment = this.props.fontSize
      ? {
        paddingBottom: "5px"
      }
      : {};

    return (
      <div
        css={{
          textAlign: "center"
        }}
      >
        <input
          placeholder="Enter your email address"
          type="text"
          css={{
            ...commonStyles,
            marginRight: "4px",
            width: "300px",
            minWidth: "50%",
            paddingLeft: "16px",
            paddingRight: "16px",
            height: "48px"
          }}
          data-cy={props.dataCyInput}
        />
        <ActionButton
          backgroundColor={this.props.backgroundColor || "white"}
          foregroundColor={this.props.foregroundColor || "#00205b"}
          type="rect"
          style={{ buttonStyles, ...fixButtonAlignment }}
          onClick={() => this.signUp()}
          dataCy={props.dataCyButton || "signup-button"}
        >
          {this.state.status || "Sign Up"}
        </ActionButton>
      </div>
    );
  }
}

export default SignUpForm;
