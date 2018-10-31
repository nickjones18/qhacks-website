import React from "react";
import EventSchedule from "../../../components/EventSchedule";
import { shallow } from "enzyme";

describe("EventSchedule", () => {
  it("renders correctly", () => {
    expect(shallow(<EventSchedule />)).toMatchSnapshot();
  });
});
