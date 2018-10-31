import React from "react";
import SpeakerSlider from "../../../components/SpeakerSlider";
import { shallow } from "enzyme";

const speakers = [
  {
    name: "Vinith Suriyakumar",
    title: "Founder and CEO of Clarifai",
    description:
      "Matthew is a machine learning Ph.D. and thought leader pioneering the field of applied artificial intelligence (AI). Matt's groundbreaking research in computer vision has propelled the image recognition industry from theory to real-world application. Matthew is a machine learning Ph.D. and thought leader pioneering the field of applied artificial intelligence (AI). Matt's groundbreaking research in computer vision has propelled the image recognition industry from theory to real-world application. Matthew is a machine learning Ph.D. and thought leader pioneering the field of applied artificial intelligence (AI). Matt's groundbreaking research in computer vision has propelled the image recognition industry from theory to real-world application. Matthew is a machine learning Ph.D. and ya.",
    image: "coolpic.png"
  },
  {
    name: "Noah Ifergan",
    title: "Founder and CEO of Clarifai",
    description:
      "Matthew is a machine learning Ph.D. and thought leader pioneering the field of applied artificial intelligence (AI). Matt's groundbreaking research in computer vision has propelled the image recognition industry from theory to real-world application. Matthew is a machine learning Ph.D. and thought leader pioneering the field of applied artificial intelligence (AI). Matt's groundbreaking research in computer vision has propelled the image recognition industry from theory to real-world application. Matthew is a machine learning Ph.D. and thought leader pioneering the field of applied artificial intelligence (AI). Matt's groundbreaking research in computer vision has propelled the image recognition industry from theory to real-world application. Matthew is a machine learning Ph.D. and ya.",
    image: "coolpic.png"
  }
];

describe("SpeakerSlider", () => {
  it("renders correctly", () => {
    expect(shallow(<SpeakerSlider speakers={speakers} />)).toMatchSnapshot();
  });
});
