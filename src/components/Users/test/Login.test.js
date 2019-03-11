import React from "react";
import { shallow } from "enzyme";
import Login from "../Login";

describe("Login Component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(<Login />)
        .find("form.login")
        .exists()
    ).toMatchSnapshot();
  });
  it("renders a email input", () => {
    expect(shallow(<Login />).find("#email").length).toMatchSnapshot();
  });
  it("renders a password input", () => {
    expect(shallow(<Login />).find("#password").length).toMatchSnapshot();
  });
});

describe("Email input", () => {
  it("should respond to change event and change the state of the Login Component", () => {
    const wrapper = shallow(<Login />);
    wrapper.find("#email").simulate("change", {
      target: { name: "email", value: "test@gmail.com" }
    });

    expect(wrapper.state("email")).toMatchSnapshot("test@gmail.com");
  });
});

describe("Password input", () => {
  it("should respond to change event and change the state of the Login Component", () => {
    const wrapper = shallow(<Login />);
    wrapper.find("#password").simulate("change", {
      target: { name: "password", value: "testp" }
    });

    expect(wrapper.state("password")).toEqual("testp");
  });
});
