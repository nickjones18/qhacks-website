import React from "react";

import Header from "./Header";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import banner from "../assets/img/sponsors/mlh.svg";
import landingImg from "../assets/img/icons/landingImg.svg";
import logo from "../assets/img/logo/qhacksCrown-colored.svg";
import word from "../assets/img/logo/qhacksWordmark-colored.svg";
import backgroundCubes from "../assets/img/backgrounds/backgroundCubes.svg";

const loginButtonCSS = {
  visibility: "hidden",
  margin: "24px 0 100px 0",
  "@media(max-width: 820px)": {
    margin: "45px auto"
  }
};

const Landing = () => (
  <div
    id=""
    css={{
      width: "100%",
      background: `url(${backgroundCubes}) no-repeat center center`,
      backgroundSize: "cover",
      "@media(max-width: 600px)": {
        minHeight: "600px"
      }
    }}
  >
    <Header standaloneVersion={false}/>
    <ContentWrapper>
      <section
        css={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          "@media(max-width: 820px)": {
            textAlign: "center",
            display: "block"
          }
        }}
      >
        <div
          css={{
            paddingTop: "115px",
            "@media(min-width: 1200px)": {
              paddingRight: "50px",
              paddingTop: "215px"
            },
            "@media (min-width: 821px) and (max-width: 1200px)": {
              paddingRight: "50px",
              paddingTop: "215px"
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
              "@media(min-width: 821px)": { display: "none" }
            }}
            alt="QHacks Illustration"
          />
          <br />
          <img
            data-cy="qhacks-wordmark"
            src={word}
            css={{
              paddingTop: "43px",
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
          {/* <a href="https://mlh.io" target="_blank" rel="external noopener">
            <img
              data-cy="mlh-banner"
              src={banner}
              css={{
                width: "189px",
                "@media(max-width: 820px)": { width: "132px" }
              }}
              alt="MLH Logo"
            />
          </a> */}
          <h2
            data-cy="qhacks-tagline"
            css={{
              paddingTop: "25px",
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
            Queen’s University’s annual hackathon.
            <br />
            Join us for an unforgettable experience!
          </h2>
          {/* <ActionButton
            disabled={true}
            dataCy="login-button"
            backgroundColor="#ffffff"
            foregroundColor="#00205b"
            style={loginButtonCSS}
            link="https://app.qhacks.io/apply"
            type="rounded"
          >
            Login
          </ActionButton> */}
          <div css={loginButtonCSS} />
        </div>
        <div
          css={{
            position: "relative",
            textAlign: "right",
            display: "flex",
            paddingTop: "84px",
            alignItems: "center",
            "@media(max-width: 820px)": {
              display: "none"
            }
          }}
        >
          <img
            src={landingImg}
            css={{
              width: "100%"
            }}
            alt="QHacks Illustration"
          />
        </div>
      </section>
    </ContentWrapper>
  </div>
);

export default Landing;
