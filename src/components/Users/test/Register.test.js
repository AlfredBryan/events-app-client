import React from "react";
import { shallow } from "enzyme";
import Register from "../Register";
import { callApi } from "../../../api";
import axios from "axios";

describe("Register Component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(<Register />)
        .find("form.register")
        .exists()
    ).toMatchSnapshot();
  });
  it("renders a fullName input", () => {
    expect(shallow(<Register />).find("#fullName").length).toMatchSnapshot();
  });
  it("renders a email input", () => {
    expect(shallow(<Register />).find("#email").length).toMatchSnapshot();
  });
  it("renders a password input", () => {
    expect(shallow(<Register />).find("#password").length).toMatchSnapshot();
  });
});

describe("fullName input", () => {
  it("should respond to change event and change the state of the Register Component", () => {
    const wrapper = shallow(<Register />);
    wrapper.find("#fullName").simulate("change", {
      target: { name: "email", value: "test name" }
    });

    expect(wrapper.state("fullName")).toMatchSnapshot("test name");
  });
});

describe("Email input", () => {
  it("should respond to change event and change the state of the Register Component", () => {
    const wrapper = shallow(<Register />);
    wrapper.find("#email").simulate("change", {
      target: { name: "email", value: "test@gmail.com" }
    });

    expect(wrapper.state("email")).toMatchSnapshot("test@gmail.com");
  });
});

describe("Password input", () => {
  it("should respond to change event and change the state of the Register Component", () => {
    const wrapper = shallow(<Register />);
    wrapper.find("#password").simulate("change", {
      target: { name: "password", value: "testp" }
    });

    expect(wrapper.state("password")).toEqual("testp");
  });
});
