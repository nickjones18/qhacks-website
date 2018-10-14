import React from "react";
import FAQs from "../../../components/FAQs";
import { shallow } from "enzyme";

describe("FAQs", () => {
  it("renders correctly", () => {
    expect(shallow(<FAQs />)).toMatchSnapshot();
  });
});
