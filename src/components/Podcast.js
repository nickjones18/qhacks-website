import React from "react";
import circuits from "../assets/img/circuitsGrey.png";
import podcast from "../assets/img/podcast.png";
import ActionButton from "./ActionButton";

const Podcast = () => (
  <div
    css={{
      paddingBottom: "133px",
      background: `url(${circuits}) no-repeat center 180px`,
      backgroundSize: "100%",
      marginBottom: "-300px",
      paddingLeft: "145px",
      paddingRight: "145px",
      "@media (max-width: 1128px)": {
        backgroundSize: "auto 100%",
        background: `url(${circuits}) no-repeat center 360px`
      },
      "@media (max-width: 780px)": {
        padding: "0px 16px 160px 16px"
      }
    }}
  >
    <div
      css={{
        padding: "60px 72px 60px 72px",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "4px 9px 40px 2px rgba(7, 16, 75, 0.1)",
        border: "solid 1px #e8e8e8",
        display: "grid",
        gridTemplateColumns: "min-content auto",
        "@media (max-width: 1128px)": { display: "block" },
        padding: "40px 28px 40px 28px",
        width: "100%"
      }}
    >
      <div css={{ "@media (max-width: 1128px)": { textAlign: "center" } }}>
        <img
          src={podcast}
          css={{
            "@media (max-width: 1128px)": {
              width: "100%"
            },
            maxWidth: "290px"
          }}
        />
      </div>
      <div
        css={{
          textAlign: "left",
          paddingLeft: "64px",
          "@media (max-width: 1128px)": {
            paddingLeft: "0px",
            paddingTop: "46px"
          }
        }}
      >
        <h1 css={{ paddingBottom: "24px" }}>Listen to our podcast!</h1>
        <p css={{ lineHeight: "1.5", paddingBottom: "40px" }}>
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
          ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
          Nam condimentum vitae ligula vel ornare.
        </p>
        <ActionButton
          type="rounded"
          foregroundColor="#00205b"
          backgroundColor="#ffffff"
        >
          Listen
        </ActionButton>
      </div>
    </div>
  </div>
);

export default Podcast;
