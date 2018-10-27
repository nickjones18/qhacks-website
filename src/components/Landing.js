import React from "react";
import logo from "../assets/img/colored.svg";
import word from "../assets/img/wordmark.svg";
import banner from "../assets/img/mlhLogo.svg";
import backgroundCubes from "../assets/img/backgroundCubes.svg";
import landingImg from "../assets/img/landingImg.png";
import ActionButton from "./ActionButton";
import Header from "./Header";
import ContentWrapper from "./ContentWrapper";

const menuItems = [
  "about",
  "speakers",
  "schedule",
  "testimonials",
  "sponsors",
  "faq"
];

const loginButtonCSS = {
  marginTop: "24px"
};

const Landing = () => (
  <div
    css={{
      width: "100%",
      height: "100vh",
      minHeight: "700px",
      maxHeight: "850px",
      background: `url(${backgroundCubes}) no-repeat center center`,
      backgroundSize: "cover",
      "@media(max-width: 600px)": {
        minHeight: "750px"
      }
    }}
  >
    <Header menuItems={menuItems} />
    <ContentWrapper>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          "@media(max-width: 820px)": {
            textAlign: "center",
            display: "block"
          }
        }}
      >
        <div
          css={{
            "@media(min-width: 820px)": {
              marginLeft: "80px",
              paddingRight: "50px",
              paddingLeft: "0px"
            },
            paddingLeft: "42px",
            paddingRight: "42px",
            paddingTop: "110px"
          }}
        >
          <img
            data-cy="qhacks-crown"
            src={logo}
            width="170px"
            css={{ "@media(max-width: 820px)": { display: "none" } }}
          />
          <img
            src={landingImg}
            css={{
              width: "75vw",
              maxWidth: "350px",
              "@media(min-width: 820px)": { display: "none" }
            }}
          />
          <br />
          <img
            data-cy="qhacks-wordmark"
            src={word}
            css={{
              paddingTop: "72px",
              paddingBottom: "24px",
              width: "100vw",
              maxWidth: "300px",
              "@media(max-width: 820px)": {
                paddingTop: "12px",
                width: "192px",
                paddingBottom: "8px"
              }
            }}
          />
          <h2
            data-cy="qhacks-information"
            css={{
              color: "#00205b",
              fontWeight: 600,
              fontSize: "22px",
              paddingBottom: "40px",
              "@media(max-width: 820px)": {
                paddingBottom: "24px"
              }
            }}
          >
            Queen’s University • February 1-3, 2019
          </h2>
          <img
            data-cy="mlh-banner"
            src={banner}
            css={{
              width: "189px",
              "@media(max-width: 820px)": { width: "132px" }
            }}
          />
          <h2
            data-cy="qhacks-tagline"
            css={{
              paddingTop: "40px",
              color: "#575757",
              fontWeight: 500,
              lineHeight: "30px",
              "@media(max-width: 820px)": {
                paddingTop: "24px",
                fontSize: "15px",
                lineHeight: "1.6"
              }
            }}
          >
            Canada’s largest hardware hackathon. <br />
            Join us for an unforgettable experience.
          </h2>
          <ActionButton
            dataCy="login-button"
            backgroundColor="#ffffff"
            foregroundColor="#00205b"
            style={loginButtonCSS}
            type="rounded"
          >
            Login
          </ActionButton>
        </div>
        <div
          css={{
            position: "relative",
            paddingTop: "110px",
            textAlign: "right",
            marginRight: "80px"
          }}
        >
          <img
            src={landingImg}
            css={{
              width: "100%",
              maxWidth: "750px",
              "@media(max-width: 820px)": {
                display: "none"
              }
            }}
          />
        </div>
      </div>
    </ContentWrapper>
  </div>
);

export default Landing;
