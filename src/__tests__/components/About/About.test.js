import React from "react";
import About from "../../../components/About";
import { shallow } from "enzyme";

describe("About", () => {
  it("renders correctly", () => {
    expect(shallow(<About />)).toMatchSnapshot();
  });
});
