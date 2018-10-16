import React from "react";
import TestimonialsBlurb from "../../../components/TestimonialsBlurb";
import { shallow } from "enzyme";

describe("TestimonialsBlurb", () => {
  it("renders correctly", () => {
    expect(
      shallow(
        <TestimonialsBlurb firstTestimonial={true} lastTestimonial={false} />
      )
    ).toMatchSnapshot();
  });
});
