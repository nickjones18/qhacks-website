import React from "react";

import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import circuits from "../assets/img/backgrounds/circuitsGrey.png";
import podcastwebp from "../assets/img/icons/podcastIcon.webp";
import podcastpng from "../assets/img/icons/podcastIcon.png";

const Podcast = () => (
  <section>
    <div
      css={{
        paddingBottom: "133px",
        width: "100%",
        position: "relative"
      }}
    >
      <ContentWrapper>
        <div
          css={{
            position: "relative",
            padding: "60px 72px 60px 72px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "4px 9px 40px 2px rgba(7, 16, 75, 0.1)",
            border: "solid 1px #e8e8e8",
            display: "grid",
            gridTemplateColumns: "min-content auto",
            "@media (max-width: 1128px)": { display: "block" },
            padding: "40px 28px 40px 28px"
          }}
        >
          <div
            css={{
              paddingLeft: "72px",
              "@media (max-width: 1128px)": { textAlign: "center" }
            }}
          >
            <picture css={{
              "@media (max-width: 1128px)": {
                width: "100%"
              },
              maxWidth: "290px"
            }}>
              <source srcset={podcastwebp} type="image/webp" />
              <source srcset={podcastpng} type="image/png" />
              <img
                src={podcastpng}
                alt="Headphones connected to phone"
              />
            </picture>
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
            <h1 css={{ paddingBottom: "24px", paddingTop: "10px" }}>
              Listen to our podcast!
            </h1>
            <p
              css={{
                lineHeight: "1.5",
                paddingBottom: "40px",
                fontWeight: "500"
              }}
            >
              Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
              ullamcorper bibendum bibendum. Duis tincidunt urna non pretium
              porta. Nam condimentum vitae ligula vel ornare.
            </p>
            <ActionButton
              style={{
                "@media (max-width: 1128px)": {
                  margin: "0 auto"
                }
              }}
              type="rounded"
              foregroundColor="#00205b"
              backgroundColor="#ffffff"
              dataCy="listen-button"
            >
              Listen
            </ActionButton>
          </div>
        </div>
      </ContentWrapper>
    </div>
    <div
      css={{
        marginTop: "-315px",
        height: "315px",
        zIndex: "-1",
        position: "relative",
        background: `url(${circuits}) no-repeat center center`,
        backgroundSize: "cover",
        borderTop: "solid #dbdbdb 3px"
      }}
    />
  </section>
);

export default Podcast;
