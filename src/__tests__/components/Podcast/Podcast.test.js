import React from "react";
import Podcast from "../../../components/Podcast";
import { shallow } from "enzyme";

describe("Podcast", () => {
  it("renders correctly", () => {
    expect(shallow(<Podcast />)).toMatchSnapshot();
  });
});
