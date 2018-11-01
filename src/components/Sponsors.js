import React from "react";

import SponsorLink from "./SponsorLink";
import ActionButton from "./ActionButton";
import ContentWrapper from "./ContentWrapper";

import tdLogo from "../assets/img/sponsors/td.svg";
import qicLogo from "../assets/img/sponsors/qic.svg";
import eceLogo from "../assets/img/sponsors/ece.svg";
import iganLogo from "../assets/img/sponsors/igan.svg";
import mmieLogo from "../assets/img/sponsors/mmie.svg";
import mlhLogo from "../assets/img/sponsors/mlhText.svg";
import githubLogo from "../assets/img/sponsors/github.svg";
import sketchLogo from "../assets/img/sponsors/sketch.svg";
import ritualLogo from "../assets/img/sponsors/ritual.svg";
import loopioLogo from "../assets/img/sponsors/loopio.svg";
import tucowsLogo from "../assets/img/sponsors/tucows.svg";
import ratehubLogo from "../assets/img/sponsors/ratehub.svg";
import sunLifeLogo from "../assets/img/sponsors/sunlife.svg";
import wolframLogo from "../assets/img/sponsors/wolfram.svg";
import wakeupsLogo from "../assets/img/sponsors/wakeups.svg";
import balsamiqLogo from "../assets/img/sponsors/balsamiq.svg";
import bloombergLogo from "../assets/img/sponsors/bloomberg.svg";
import consensysLogo from "../assets/img/sponsors/consensys.svg";
import kdsLogo from "../assets/img/sponsors/kingsDistributed.svg";
import scotiabankLogo from "../assets/img/sponsors/scotiabank.svg";
import onePasswordLogo from "../assets/img/sponsors/1password.svg";
import stickermuleLogo from "../assets/img/sponsors/stickermule.svg";
import launchAcademyLogo from "../assets/img/sponsors/launchAcademy.svg";

const Sponsors = () => (
  <section
    id="sponsors"
    css={{
      backgroundColor: "#f8f8f8",
      " img": {
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
          paddingTop: "80px"
        }}
      >

        {/* Sponsors */}
        <div>
          <h1>Sponsors</h1>

          {/* Tera */}
          <div css={{
            marginTop: "70px",
            marginBottom: "80px"
          }}>

            {/* Tera Row 1 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr"
              }}
            >
              <SponsorLink url="https://tucows.com">
                <img
                  src={tucowsLogo}
                  css={{ width: "500px" }}
                  data-cy="test-sponsor-image"
                  alt="Tucows Logo"
                />
              </SponsorLink>
            </div>
          </div>

          {/* Giga */}
          <div css={{
            marginBottom: "80px"
          }}>

            {/* Giga Row 1 */}
            <div css={{
              display: "grid",
              gridTemplateColumns: "1fr",
              marginBottom: "40px"
            }}>
              <SponsorLink url="https://kingsds.network">
                <img css={{ width: "300px" }} src={kdsLogo} alt="Kings Distributed Systems Logo"
                />
              </SponsorLink>
            </div>


            {/* Giga Row 2 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr"
              }}
            >
              <SponsorLink url="https://sunlife.ca">
                <img css={{ width: "400px" }} src={sunLifeLogo} alt="Sun Life Financial Logo"
                />
              </SponsorLink>
              <SponsorLink url="http://www.iganpartners.com/">
                <img css={{ width: "400px", marginTop: "20px" }} src={iganLogo} alt="iGan Partners Logo" />
              </SponsorLink>
            </div>
          </div>

          {/* Mega */}
          <div css={{
            marginBottom: "80px"
          }}>

            {/* Mega Row 1 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginBottom: "40px"
              }}
            >
              <SponsorLink url="https://consensys.net/">
                <img src={consensysLogo} css={{ width: "300px" }} alt="Consensys Logo" />
              </SponsorLink>
              <SponsorLink url="https://td.ca">
                <img src={tdLogo} css={{ width: "100px" }} alt="TD Logo" />
              </SponsorLink>
              <SponsorLink url="https://ratehub.ca">
                <img src={ratehubLogo} css={{ width: "300px" }} alt="Ratehub Logo" />
              </SponsorLink>
            </div>

            {/* Mega Row 2 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginLeft: "auto",
                marginRight: "auto",
                width: "80%"
              }}
            >
              <SponsorLink url="https://scotiabank.ca">
                <img src={scotiabankLogo} css={{ width: "300px" }} alt="Scotiabank Logo" />
              </SponsorLink>
              <SponsorLink url="https://loopio.com">
                <img src={loopioLogo} css={{ width: "170px" }} alt="Loopio Logo" />
              </SponsorLink>
            </div>
          </div>

          {/* Startup */}
          <div>

            {/* Startup Row 1 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                marginBottom: "40px"
              }}
            >
              <SponsorLink url="https://balsamiq.com">
                <img src={balsamiqLogo} css={{ width: "150px" }} alt="Balsamiq Logo" />
              </SponsorLink>
              <SponsorLink url="https://wolfram.com/language/">
                <img src={wolframLogo} css={{ width: "150px" }} alt="Wolfram Logo" />
              </SponsorLink>
              <SponsorLink url="https://ritual.co">
                <img src={ritualLogo} css={{ width: "150px", marginTop: "5px" }} alt="Ritual Logo" />
              </SponsorLink>
              <SponsorLink url="https://1password.com/">
                <img src={onePasswordLogo} css={{ width: "170px", marginTop: "5px" }} alt="One Password Logo" />
              </SponsorLink>
            </div>

            {/* Startup Row 2 */}
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginLeft: "auto",
                marginRight: "auto",
                width: "80%"
              }}
            >
              <SponsorLink url="https://sketchapp.com">
                <img src={sketchLogo} css={{ width: "200px", marginTop: "20px" }} alt="Sketch Logo" />
              </SponsorLink>
              <SponsorLink url="https://wake-ups.com">
                <img src={wakeupsLogo} css={{ width: "100px" }} alt="Wakeups Logo" />
              </SponsorLink>
              <SponsorLink url="https://www.launchacademy.ca/">
                <img src={launchAcademyLogo} css={{ width: "200px", marginTop: "18px" }} alt="Launch Academy Logo" />
              </SponsorLink>
            </div>
          </div>
        </div>

        {/* Partners */}

        <div css={{ paddingTop: "100px", paddingBottom: "70px" }}>
          <h1 css={{ paddingBottom: "40px" }}>Our Partners</h1>
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
                fontSize: "16px",
                fontWeight: "bold"
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
        <div css={{
          marginBottom: "100px"
        }}>

          {/* School Row 1 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              marginBottom: "40px"
            }}
          >
            <SponsorLink url="https://smith.queensu.ca/grad_studies/mei/">
              <img src={mmieLogo} css={{ width: "400px" }} alt="MMIE Logo" />
            </SponsorLink>
            <SponsorLink url="https://queensu.ca/innovationcentre/">
              <img src={qicLogo} css={{ width: "400px", marginTop: "25px" }} alt="QIC Logo" />
            </SponsorLink>
          </div>

          {/* School Row 2 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              marginBottom: "40px"
            }}
          >
            <SponsorLink url="https://www.bloomberg.com/canada">
              <img src={bloombergLogo} css={{ width: "200px", marginTop: "30px" }} alt="Bloomberg Logo" />
            </SponsorLink>
            <SponsorLink url="https://www.stickermule.com/ca">
              <img src={stickermuleLogo} css={{ width: "150px" }} alt="Stickermule Logo" />
            </SponsorLink>
            <SponsorLink url="https://education.github.com/pack">
              <img src={githubLogo} css={{ width: "150px", marginTop: "25px"  }} alt="GitHub Logo" />
            </SponsorLink>
          </div>

          {/* School Row 3 */}
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr"
            }}
          >
            <SponsorLink url="https://mlh.io/">
              <img src={mlhLogo} css={{ width: "150px", marginTop: "25px" }} alt="MLH Logo" />
            </SponsorLink>
          </div>
        </div>
      </div>
    </ContentWrapper>
  </section>
);

export default Sponsors;
