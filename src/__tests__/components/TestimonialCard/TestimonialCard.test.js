import React from "react";
import { shallow } from "enzyme";

import TestimonialCard from "../../../components/TestimonialCard";

import placeholderHeadshot from "../../../assets/img/testimonials/placeholderHeadshot.jpg";

describe("TestimonialCard0", () => {
  it("renders correctly", () => {
    expect(
      shallow(
        <TestimonialCard
          item={{
            name: "Ross Hill",
            project: "Dolores",
            image: placeholderHeadshot,
            text:
              "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
          }}
          index={0}
        />
      )
    ).toMatchSnapshot();
  });
});

describe("TestimonialCard1", () => {
  it("renders correctly", () => {
    expect(
      shallow(
        <TestimonialCard
          item={{
            name: "Abc Xyz",
            project: "Test1",
            image: placeholderHeadshot,
            text:
              "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring."
          }}
          index={1}
        />
      )
    ).toMatchSnapshot();
  });
});
