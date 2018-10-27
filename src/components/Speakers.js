import React from "react";
import SpeakerCard from "./SpeakerCard";
import SpeakerSlider from "./SpeakerSlider";
import musk from "../assets/img/musk.png";
import cubes3 from "../assets/img/cubes-3.png";

//TODO: Update this with real speakers
const speakers = [
  {
    name: "Vinith Suriyakumar",
    title: "Founder and CEO of Clarifai",
    description:
      "Matthew is a machine learning Ph.D. and thought leader pioneering the field of applied artificial intelligence (AI). Matt's groundbreaking research in computer vision has propelled the image recognition industry from theory to real-world application. Matthew is a machine learning Ph.D. and thought leader pioneering the field of applied artificial intelligence (AI). Matt's groundbreaking research in computer vision has propelled the image recognition industry from theory to real-world application. Matthew is a machine learning Ph.D. and thought leader pioneering the field of applied artificial intelligence (AI). Matt's groundbreaking research in computer vision has propelled the image recognition industry from theory to real-world application. Matthew is a machine learning Ph.D. and ya.",
    image: musk
  },
  {
    name: "Noah Ifergan",
    title: "Founder and CEO of Clarifai",
    description:
      "Matthew is a machine learning Ph.D. and thought leader pioneering the field of applied artificial intelligence (AI). Matt's groundbreaking research in computer vision has propelled the image recognition industry from theory to real-world application. Matthew is a machine learning Ph.D. and thought leader pioneering the field of applied artificial intelligence (AI). Matt's groundbreaking research in computer vision has propelled the image recognition industry from theory to real-world application. Matthew is a machine learning Ph.D. and thought leader pioneering the field of applied artificial intelligence (AI). Matt's groundbreaking research in computer vision has propelled the image recognition industry from theory to real-world application. Matthew is a machine learning Ph.D. and ya.",
    image: musk
  }
];

const Speakers = () => (
  <div
    style={{
      backgroundColor: "#f8f8f8",
      position: "relative"
    }}
    id="speakers"
  >
    <h1
      css={{
        paddingTop: "112px",
        paddingBottom: "48px",
        textAlign: "center",
        position: "relative",
        zIndex: "3",
        "@media(max-width: 820px)": {
          paddingTop: "66px",
          paddingBottom: "24px"
        }
      }}
    >
      Fireside Chat Speakers
    </h1>
    {/* Desktop */}
    <div
      css={{
        display: "grid",
        position: "relative",
        zIndex: 3,
        maxWidth: speakers.length * 500,
        marginLeft: "auto",
        marginRight: "auto",
        gridTemplateColumns: speakers.map(() => "1fr ").reduce((a, b) => a + b),
        "@media(max-width: 820px)": {
          display: "none"
        }
      }}
    >
      {speakers.map((speaker) => (
        <SpeakerCard {...speaker} key={speaker.name} />
      ))}
    </div>
    {/* Mobile */}
    <div
      css={{
        paddingBottom: "30px",
        "@media(min-width: 820px)": { display: "none" }
      }}
    >
      <SpeakerSlider speakers={speakers} />
    </div>
    <img
      src={cubes3}
      style={{
        zIndex: "1",
        width: "235px",
        height: "289px",
        position: "relative",
        bottom: "-210px",
        right: "62px",
        display: "block"
      }}
    />
  </div>
);

export default Speakers;
