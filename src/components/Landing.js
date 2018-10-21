import React from "react";
import logo from "../assets/img/colored.svg";
import word from "../assets/img/wordmark.svg";
import banner from "../assets/img/mlhBanner.png";
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
  marginTop: "24px"
};

const Landing = () => (
  <div
    css={{
      width: "100%",
      height: "100vh",
      minHeight: "700px",
      background: `url(${backgroundCubes}) no-repeat center center`,
      backgroundSize: "cover",
      "@media(max-width: 820px)": {
        paddingTop: "20px"
      },
      "@media(max-width: 400px)": {
        paddingTop: "40px"
      },
      "@media(max-width: 350px)": {
        paddingTop: "80px"
      }
    }}
  >
    <Header menuItems={menuItems} />
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
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          top: "50vh",
          transform: "translateY(-50%)",
          "@media(max-width: 1000px)": {
            paddingLeft: "20px",
            paddingRight: "20px"
          }
        }}
      >
        <img
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
          css={{
            color: "#00205b",
            fontWeight: 600,
            paddingBottom: "40px",
            "@media(max-width: 820px)": {
              paddingBottom: "24px"
            }
          }}
        >
          Queen’s University • February 1-3, 2019
        </h2>
        <img
          src={banner}
          css={{ "@media(max-width: 820px)": { width: "132px" } }}
        />
        <h2
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
          top: "50vh",
          transform: "translateY(-50%)",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center"
        }}
      >
        <img
          align="center"
          src={landingImg}
          css={{
            height: "40vw",
            paddingTop: "42px",
            maxHeight: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            "@media(max-width: 820px)": {
              display: "none"
            }
          }}
        />
      </div>
    </div>
  </div>
);

export default Landing;
