import React from "react";
import { mount } from "enzyme";
import Spinner from "../Spinner";

describe("Spinner component", () => {
  it("render correctly Spinner Component", () => {
    const SpinnerComponent = mount(<Spinner />);
    expect(SpinnerComponent).toMatchSnapshot();
  });
});
