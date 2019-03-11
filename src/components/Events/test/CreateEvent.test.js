import React from "react";
import { shallow } from "enzyme";
import CreateEvent from "../CreateEvent";

describe("CreateEvent Component", () => {
  it("Name input", () => {
    expect(shallow(<CreateEvent />).find("#name").length).toMatchSnapshot();
  });

  it("Description input", () => {
    expect(
      shallow(<CreateEvent />).find("#description").length
    ).toMatchSnapshot();
  });

  it("Image input", () => {
    expect(shallow(<CreateEvent />).find("#image").length).toMatchSnapshot();
  });
});

describe("CreateEvent component", () => {
  it("should respond to change event and change the state of name", () => {
    const wrapper = shallow(<CreateEvent />);
    wrapper.find("#name").simulate("change", {
      target: { name: "name", value: "test name" }
    });
    expect(wrapper.state("name")).toMatchSnapshot("test name");
  });

  it("should respond to change event and change the state of description", () => {
    const wrapper = shallow(<CreateEvent />);
    wrapper.find("#description").simulate("change", {
      target: { name: "description", value: "test description" }
    });
    expect(wrapper.state("description")).toMatchSnapshot("test description");
  });
});
