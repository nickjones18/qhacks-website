import React from "react";
import logo from "../assets/img/colored.svg";
import word from "../assets/img/wordmark.svg";
import backgroundCubes from "../assets/img/backgroundCubes.svg";
import landingImg from "../assets/img/landingImg.png";
import ActionButton from "./ActionButton";
import Header from "./Header";

const menuItems = [
  "about",
  "speakers",
  "schedule",
  "testimonials",
  "sponsors",
  "faq"
];

const loginButtonCSS = {
  marginTop: "40px"
};

const Landing = () => (
  <div
    css={{
      width: "100%",
      height: "100vh",
      minHeight: "700px",
      maxHeight: "800px",
      background: `url(${backgroundCubes}) no-repeat center center`,
      backgroundSize: "cover",
      "@media(max-width: 400px)": {
        minHeight: "775px",
        maxHeight: "875px"
      }
    }}
  >
    <Header menuItems={menuItems} />
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "auto auto"
      }}
    >
      <div
        css={{
          paddingLeft: "110px",
          paddingRight: "50px",
          paddingTop: "142px",
          height: "100%",
          "@media(max-width: 1000px)": {
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "20px",
            paddingRight: "20px"
          }
        }}
      >
        <img src={logo} data-cy="qhacks-crown" width="200px" />
        <br />
        <img
          src={word}
          data-cy="qhacks-wordmark"
          css={{
            paddingTop: "72px",
            paddingBottom: "24px",
            width: "100vw",
            maxWidth: "300px"
          }}
        />
        <h2 data-cy="qhacks-information" css={{ color: "#00205b", fontWeight: 600 }}>
          Queen’s University • February 1-3, 2019
        </h2>
        <h2
          data-cy="qhacks-tagline"
          css={{
            paddingTop: "72px",
            color: "#575757",
            fontWeight: 500,
            lineHeight: "30px"
          }}
        >
          Canada’s largest hardware hackathon. <br />
          Join us for an unforgettable experience.
        </h2>
        <ActionButton
          backgroundColor="#ffffff"
          foregroundColor="#00205b"
          style={loginButtonCSS}
          type="rounded"
          dataCy="login-button"
        >
          Login
        </ActionButton>
      </div>
      <img
        src={landingImg}
        css={{
          height: "40vw",
          maxHeight: "600px",
          marginBottom: "64px",
          marginTop: "50px",
          "@media(max-width: 1000px)": {
            display: "none"
          }
        }}
      />
    </div>
  </div>
);

export default Landing;
