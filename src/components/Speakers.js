import React from "react";
import SpeakerCard from "../components/SpeakerCard";
import musk from "../assets/img/musk.png";

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
    css={{
      backgroundColor: "#f8f8f8"
    }}
  >
    <h1
      css={{ paddingTop: "112px", paddingBottom: "48px", textAlign: "center" }}
    >
      Fireside Chat Speakers
    </h1>
    <div
      css={{
        display: "grid",
        gridTemplateColumns: speakers
          .map((_) => "1fr ")
          .reduce((a, b) => a + b),
        "@media(max-width: 920px)": {
          display: "block"
        }
      }}
    >
      {speakers.map((speaker) => (
        <SpeakerCard {...speaker} key={speaker.name} />
      ))}
    </div>
  </div>
);

export default Speakers;
