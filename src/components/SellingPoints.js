import React from "react";
import SellingPointsIcons from "./SellingPointsIcons.js";

import cubes2png from "../assets/img/icons/cubes-2.png";
import judges from "../assets/img/icons/judgesIcon.svg";
import cubes2webp from "../assets/img/icons/cubes-2.webp";
import mentors from "../assets/img/icons/mentorsIcon.svg";
import hackers from "../assets/img/icons/hackersIcon.svg";
import schools from "../assets/img/icons/schoolsIcon.svg";
import challenges from "../assets/img/icons/challengesIcon.svg";
import applications from "../assets/img/icons/applicationsIcon.svg";
import qhacksSellingPointOnejpg from "../assets/img/selling_points/qhacksSellingPointOne.jpg";
import qhacksSellingPointTwojpg from "../assets/img/selling_points/qhacksSellingPointTwo.jpg";
import qhacksSellingPointOnewebp from "../assets/img/selling_points/qhacksSellingPointOne.webp";
import qhacksSellingPointTwowebp from "../assets/img/selling_points/qhacksSellingPointTwo.webp";
import ContentWrapper from "./ContentWrapper";

const twoColumnStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  marginBottom: "48px"
};

const flexChildStyle = {
  flex: 1,
  textAlign: "center",
  minWidth: "300px",
  margin: "0 28px 32px 28px",
  maxWidth: "510px"
};

const blurbStyle = {
  margin: "32px auto",
  fontSize: "15px",
  lineHeight: "24px",
  maxWidth: "500px"
};

const imgStyle = {
  maxHeight: "320px",
  maxWidth: "475px",
  width: "100%"
};

const SellingPoints = () => (
  <div style={{ position: "relative" }}>
    <ContentWrapper>
      <div css={{ padding: "143px 0", margin: "0 -28px" }}>
        <div
          css={{
            ...twoColumnStyle,
            flexWrap: "wrap"
          }}
        >
          <div css={flexChildStyle}>
            <h1>Grow Your Network.</h1>
            <p css={blurbStyle}>
              QHacks was first held in 2016 with a mission to advocate and
              incubate the tech community at Queen&#39;s University and
              throughout Canada. Going into our third year we have been
              aggressively growing to become one of the highest quality and
              exciting hackathons in North America. Over the weekend, immerse
              yourself in the tech community and meet new people!
            </p>
            <SellingPointsIcons
              list={[
                {
                  icon: applications,
                  number: 1800,
                  text: "Applications"
                },
                {
                  icon: schools,
                  number: 25,
                  text: "Schools"
                },
                {
                  icon: hackers,
                  number: 500,
                  text: "Hackers"
                }
              ]}
            />
          </div>
          <div css={flexChildStyle}>
            <picture css={imgStyle}>
              <source srcset={qhacksSellingPointOnewebp} type="image/webp" />
              <source srcset={qhacksSellingPointOnejpg} type="image/jpg" />
              <img
                css={imgStyle}
                src={qhacksSellingPointOnejpg}
                alt="Hackers in a workshop"
              />
            </picture>
          </div>
        </div>
        <div
          css={{
            ...twoColumnStyle,
            flexWrap: "wrap-reverse",
            marginBottom: 0
          }}
        >
          <div css={flexChildStyle}>
            <picture css={imgStyle}>
              <source srcset={qhacksSellingPointTwowebp} type="image/webp" />
              <source srcset={qhacksSellingPointTwojpg} type="image/jpg" />
              <img
                css={imgStyle}
                src={qhacksSellingPointTwojpg}
                alt="Mentor judging a VR hack"
              />
            </picture>
          </div>
          <div css={flexChildStyle}>
            <h1>Showcase to Experts.</h1>
            <p css={blurbStyle}>
              This year, we have a colourful array of mentors, speakers,
              sponsors and other industry professionals. Chat one-on one with
              the likes of Microsoft, Telus, RBC and other big names with a
              sprinkling of those smaller tech startups we all love. Looking for
              some inspiration? Stuck on a roadblock? Did your stepper motor
              malfunction? Not to worry, there will always be a helping hand at
              the ready.
            </p>
            <SellingPointsIcons
              list={[
                {
                  icon: mentors,
                  number: 40,
                  text: "Mentors"
                },
                {
                  icon: judges,
                  number: 20,
                  text: "Judges"
                },
                {
                  icon: challenges,
                  number: 15,
                  text: "Challenges"
                }
              ]}
            />
          </div>
        </div>
        <picture
          css={{
            width: "588px",
            height: "361px",
            position: "absolute",
            bottom: "-220px",
            left: "-100px",
            zIndex: -1,
            "@media(max-width: 1200px)": {
              width: "358px",
              height: "220px",
              bottom: "-140px",
              left: "-45px"
            },
            "@media(max-width: 850px)": {
              display: "none"
            }
          }}
        >
          <source srcset={cubes2webp} type="image/webp" />
          <source srcset={cubes2png} type="image/png" />
          <img
            css={{
              "@media(max-width: 1200px)": {
                position: "relative",
                width: "358px",
                height: "220px"
              }
            }}
            src={cubes2png}
            alt="Floating cubes"
          />
        </picture>
      </div>
    </ContentWrapper>
  </div>
);

export default SellingPoints;
