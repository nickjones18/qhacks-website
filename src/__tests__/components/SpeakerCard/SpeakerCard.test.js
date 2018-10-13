import React from "react";
import SpeakerCard from "../../../components/SpeakerCard";
import { shallow } from "enzyme";

describe("SpeakerCard", () => {
  it("renders correctly", () => {
    const speaker = {
      name: "Matthew Zeiler",
      title: "Founder and CEO of Clarifai",
      description:
        "Matthew is a machine learning Ph.D. and thought leader pioneering the field of applied artificial intelligence (AI). Matt's groundbreaking research in computer vision has propelled the image recognition industry from theory to real-world application. Matthew is a machine learning Ph.D. and thought leader pioneering the field of applied artificial intelligence (AI). Matt's groundbreaking research in computer vision has propelled the image recognition industry from theory to real-world application. Matthew is a machine learning Ph.D. and thought leader pioneering the field of applied artificial intelligence (AI). Matt's groundbreaking research in computer vision has propelled the image recognition industry from theory to real-world application. Matthew is a machine learning Ph.D. and ya.",
      image: "coolpic.png"
    };
    expect(shallow(<SpeakerCard {...speaker} />)).toMatchSnapshot();
  });
});
