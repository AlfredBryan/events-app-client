import React from "react";
import { shallow } from "enzyme";
import UserEvent from "../UserEvent";

const match = {
  params: {
    eventId: 678256526 //any id you want to set
  }
};

describe("UserEvent Component", () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(<UserEvent match={match} />)
        .find("form.userevent")
        .exists()
    ).toMatchSnapshot();
  });
  it("renders Name input", () => {
    expect(
      shallow(<UserEvent match={match} />).find("#name").length
    ).toMatchSnapshot();
  });
  it("renders Address input", () => {
    expect(
      shallow(<UserEvent match={match} />).find("#address").length
    ).toMatchSnapshot();
  });
  it("renders Phone input", () => {
    expect(
      shallow(<UserEvent match={match} />).find("#phone").length
    ).toMatchSnapshot();
  });
  it("renders Location input", () => {
    expect(
      shallow(<UserEvent match={match} />).find("#location").length
    ).toMatchSnapshot();
  });
  it("renders Reason input", () => {
    expect(
      shallow(<UserEvent match={match} />).find("#reason").length
    ).toMatchSnapshot();
  });
});

describe("Name input", () => {
  it("should respond to change event and change the state of the UserEvent Component", () => {
    const wrapper = shallow(<UserEvent match={match} />);
    wrapper.find("#name").simulate("change", {
      target: { name: "name", value: "test name" }
    });

    expect(wrapper.state("name")).toMatchSnapshot("test name");
  });
});

describe("Address input", () => {
  it("should respond to change event and change the state of the UserEvent Component", () => {
    const wrapper = shallow(<UserEvent match={match} />);
    wrapper.find("#address").simulate("change", {
      target: { name: "address", value: "test address" }
    });

    expect(wrapper.state("address")).toMatchSnapshot("test address");
  });
});

describe("Phone input", () => {
  it("should respond to change event and change the state of the UserEvent Component", () => {
    const wrapper = shallow(<UserEvent match={match} />);
    wrapper.find("#phone").simulate("change", {
      target: { name: "phone", value: "2345556272" }
    });

    expect(wrapper.state("phone")).toMatchSnapshot("2345556272");
  });
});

describe("Location input", () => {
  it("should respond to change event and change the state of the UserEvent Component", () => {
    const wrapper = shallow(<UserEvent match={match} />);
    wrapper.find("#location").simulate("change", {
      target: { name: "location", value: "test location" }
    });

    expect(wrapper.state("location")).toMatchSnapshot("test location");
  });
});

describe("Reason input", () => {
  it("should respond to change event and change the state of the UserEvent Component", () => {
    const wrapper = shallow(<UserEvent match={match} />);
    wrapper.find("#reason").simulate("change", {
      target: { name: "reason", value: "for test units" }
    });

    expect(wrapper.state("reason")).toMatchSnapshot("for test units");
  });
});
