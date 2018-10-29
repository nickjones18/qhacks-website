import React from "react";

import Header from "./Header";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import banner from "../assets/img/sponsors/mlh.svg";
import landingImg from "../assets/img/icons/landingImg.svg";
import logo from "../assets/img/logo/qhacksCrown-colored.svg";
import word from "../assets/img/logo/qhacksWordmark-colored.svg";
import backgroundCubes from "../assets/img/icons/backgroundCubes.svg";

const menuItems = [
  "about",
  "speakers",
  "schedule",
  "testimonials",
  "sponsors",
  "faq"
];

const loginButtonCSS = {
  margin: "24px 0 150px 0",
  "@media(max-width: 820px)": {
    margin: "24px auto"
  }
};

const Landing = () => (
  <div
    css={{
      width: "100%",
      height: "100vh",
      minHeight: "790px",
      maxHeight: "790px",
      background: `url(${backgroundCubes}) no-repeat center center`,
      backgroundSize: "cover",
      "@media(max-width: 600px)": {
        minHeight: "750px"
      }
    }}
  >
    <Header menuItems={menuItems} />
    <ContentWrapper>
      <section
        css={{
          display: "grid",
          paddingTop: "115px",
          gridTemplateColumns: "auto 1fr",
          "@media(max-width: 820px)": {
            textAlign: "center",
            display: "block"
          }
        }}
      >
        <div
          css={{
            "@media(min-width: 1200px)": {
              paddingRight: "50px"
            },
            "@media (min-width: 820px) and (max-width: 1200px)": {
              paddingRight: "50px"
            },
            "@media(min-width: 820px)": {
              paddingRight: "42px"
            }
          }}
        >
          <img
            data-cy="qhacks-crown"
            src={logo}
            width="170px"
            css={{ "@media(max-width: 820px)": { display: "none" } }}
            alt="QHacks Crown"
          />
          <img
            src={landingImg}
            css={{
              width: "75vw",
              maxWidth: "350px",
              "@media(min-width: 820px)": { display: "none" }
            }}
            alt="QHacks Illustration"
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
            alt="QHacks Wordmark"
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
            alt="MLH Logo"
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
            textAlign: "right",
            display: "flex",
            alignItems: "center",
            "@media(max-width: 820px)": {
              display: "none"
            }
          }}
        >
          <img
            src={landingImg}
            css={{
              width: "100%",
              maxWidth: "750px",
              display: "block"
            }}
            alt="QHacks Illustration"
          />
        </div>
      </section>
    </ContentWrapper>
  </div>
);

export default Landing;
