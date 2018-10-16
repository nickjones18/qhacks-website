import React from "react";
import HackerTestimonials from "../../../components/HackerTestimonials";
import { shallow } from "enzyme";

describe("HackerTestimonials", () => {
  it("renders correctly", () => {
    expect(shallow(<HackerTestimonials />)).toMatchSnapshot();
  });
});
