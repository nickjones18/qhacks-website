import React from "react";
import Speakers from "../../../components/Speakers";
import { shallow } from "enzyme";

describe("Speakers", () => {
  it("renders correctly", () => {
    expect(shallow(<Speakers />)).toMatchSnapshot();
  });
});
