import React from "react";
import ActionButton from "./ActionButton";

const SignUpForm = (props) => {
  const commonStyles = {
    fontSize: props.fontSize ? `${props.fontSize}px` : "16px",
    borderRadius: "4px",
    border: "none",
    margin: "8px",
    fontWeight: 500
  };

  const buttonStyles = {
    ...commonStyles,
    marginLeft: "4px"
  };

  const fixButtonAlignment = props.fontSize
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
        data-cy={props.dataCyInput}
        css={{
          ...commonStyles,
          marginRight: "4px",
          width: "300px",
          minWidth: "50%",
          paddingLeft: "16px",
          paddingRight: "16px",
          height: "48px"
        }}
      />
      <ActionButton
        backgroundColor={props.backgroundColor || "white"}
        foregroundColor={props.foregroundColor || "#00205b"}
        type="rect"
        style={{ buttonStyles, ...fixButtonAlignment }}
        dataCy={props.dataCyButton || "signup-button"}
      >
        Sign Up
      </ActionButton>
    </div>
  );
};

export default SignUpForm;
