import React from "react";

import SponsorLink from "./SponsorLink";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";
import launchAcademy from "../assets/img/sponsors/launchAcademy.svg";
import onepassword from "../assets/img/sponsors/1password.svg";
import scotiabank from "../assets/img/sponsors/scotiabank.svg";
import consensys from "../assets/img/sponsors/consensys.svg";
import balsamiq from "../assets/img/sponsors/balsamiq.svg";
import wakeups from "../assets/img/sponsors/wakeups.svg";
import wolfram from "../assets/img/sponsors/wolfram.svg";
import sunlife from "../assets/img/sponsors/sunlife.svg";
import ratehub from "../assets/img/sponsors/ratehub.svg";
import tucows from "../assets/img/sponsors/tucows.svg";
import loopio from "../assets/img/sponsors/loopio.svg";
import ritual from "../assets/img/sponsors/ritual.svg";
import sketch from "../assets/img/sponsors/sketch.svg";
import mmie from "../assets/img/sponsors/mmie.svg";
import igan from "../assets/img/sponsors/igan.svg";
import kds from "../assets/img/sponsors/kingsDistributed.svg";
import qic from "../assets/img/sponsors/qic.svg";
import td from "../assets/img/sponsors/td.svg";

const Sponsors = () => (
  <section
    id="sponsors"
    css={{
      backgroundColor: "#f8f8f8",
      " img": {
        padding: "20px",
        transition: "0.3s",
        ":hover": {
          transform: "scale(1.1)"
        }
      }
    }}
  >
    <ContentWrapper>
      <div
        css={{
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          paddingTop: "80px",
          "@media(max-width: 850px)": {
            " >div": {
              gridTemplateColumns: "1fr"
            }
          }
        }}
      >
        <h1>Sponsors</h1>
        {/* Terra */}
        <div
          css={{
            paddingTop: "56px",
            display: "block"
          }}
        >
          <SponsorLink url="https://tucows.com">
            <img
              src={tucows}
              css={{ width: "70%" }}
              data-cy="test-sponsor-image"
              alt="Tucows Logo"
            />
          </SponsorLink>
        </div>
        {/* Giga */}
        <div
          css={{
            paddingTop: "50px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr"
          }}
        >
          <SponsorLink url="https://kingsds.network">
            <img
              css={{ width: "80%" }}
              src={kds}
              alt="Kings Distributed Systems Logo"
            />
          </SponsorLink>
          <SponsorLink url="https://sunlife.ca">
            <div
              css={{
                position: "relative",
                padding: "20px"
              }}
            >
              <img
                css={{
                  width: "100%"
                }}
                src={sunlife}
                alt="SunLife Financial Logo"
              />
            </div>
          </SponsorLink>
        </div>
        <SponsorLink url="http://www.iganpartners.com/">
          <div
            css={{
              position: "relative"
            }}
          >
            <img
              css={{
                width: "70%",
                "@media(max-width: 850px)": {
                  width: "100%"
                }
              }}
              src={igan}
              alt="IGan Partners Logo"
            />
          </div>
        </SponsorLink>
        {/* Mega */}
        <div css={{ paddingTop: "75px" }}>
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              "@media(max-width: 850px)": {
                gridTemplateColumns: "1fr"
              }
            }}
          >
            <div css={{ width: "100%" }}>
              <SponsorLink url="https://consensys.net/">
                <img
                  src={consensys}
                  css={{ width: "100%" }}
                  alt="Consensys Logo"
                />
              </SponsorLink>
            </div>
            <SponsorLink url="https://td.ca">
              <img src={td} css={{ width: "45%" }} alt="TD Logo" />
            </SponsorLink>
            <div>
              <SponsorLink url="https://ratehub.ca">
                <img src={ratehub} css={{ width: "100%" }} alt="Ratehub Logo" />
              </SponsorLink>
            </div>
          </div>
        </div>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginLeft: "auto",
            marginRight: "auto",
            width: "80%",
            "@media(max-width: 850px)": {
              gridTemplateColumns: "1fr"
            }
          }}
        >
          <div>
            <SponsorLink url="https://scotiabank.ca">
              <img
                src={scotiabank}
                css={{ width: "100%" }}
                alt="Scotiabank Logo"
              />
            </SponsorLink>
          </div>
          <div css={{ " img": { width: "65%" } }}>
            <SponsorLink url="https://loopio.com">
              <img src={loopio} alt="Loopio Logo" />
            </SponsorLink>
          </div>
        </div>
        {/* Start-ups */}
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            paddingTop: "50px",
            "@media(max-width: 850px)": {
              width: "50%",
              marginLeft: "auto",
              marginRight: "auto"
            }
          }}
        >
          <SponsorLink url="https://balsamiq.com">
            <img src={balsamiq} css={{ width: "80%" }} alt="Balsamiq Logo" />
          </SponsorLink>
          <SponsorLink url="https://wolfram.com/language/">
            <img src={wolfram} css={{ width: "80%" }} alt="Wolfram Logo" />
          </SponsorLink>
          <SponsorLink url="https://ritual.co">
            <img src={ritual} css={{ width: "100%" }} alt="Ritual Logo" />
          </SponsorLink>
          <SponsorLink url="https://wake-ups.com">
            <img src={wakeups} css={{ width: "50%" }} alt="Wakeups Logo" />
          </SponsorLink>
        </div>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <SponsorLink url="https://sketchapp.com">
            <img src={sketch} css={{ width: "100%" }} alt="Sketch Logo" />
          </SponsorLink>
          <SponsorLink url="https://www.launchacademy.ca/">
            <img
              src={onepassword}
              css={{ width: "100%", marginTop: "7px" }}
              alt="OnePassword Logo"
            />
          </SponsorLink>
          <SponsorLink url="https://www.launchacademy.ca/">
            <img
              src={launchAcademy}
              css={{ width: "100%" }}
              alt="Launch Academy Logo"
            />
          </SponsorLink>
        </div>
        <div css={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <h1 css={{ paddingBottom: "48px" }}>Our Partners</h1>
          <p
            css={{
              fontWeight: "bold",
              color: "#c81c2e",
              paddingBottom: "24px",
              ">a": {
                color: "#c81c2e",
                textDecoration: "underline",
                ":hover": { textDecoration: "none" }
              }
            }}
          >
            Interested in partnering? Contact us at{" "}
            <a
              data-cy="partners-email-prompt"
              href="mailto:partnership@qhacks.io"
              css={{
                fontSize: "16px"
              }}
            >
              partnership@qhacks.io
            </a>
          </p>
          <ActionButton
            backgroundColor="#f8f8f8"
            foregroundColor="#c81c2e"
            type="rounded"
            link="https://qhacks.nyc3.cdn.digitaloceanspaces.com/documents/QHacksPartnershipPackage.pdf"
          >
            Partnership Package
          </ActionButton>
        </div>
        {/* School */}
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            paddingBottom: "100px"
          }}
        >
          <SponsorLink url="https://queensu.ca/innovationcentre/">
            <img src={qic} css={{ width: "100%" }} alt="QIC Logo" />
          </SponsorLink>
          <SponsorLink url="https://smith.queensu.ca/grad_studies/mei/">
            <img src={mmie} css={{ width: "100%" }} alt="MMIE Logo" />
          </SponsorLink>
        </div>
      </div>
    </ContentWrapper>
  </section>
);

export default Sponsors;
