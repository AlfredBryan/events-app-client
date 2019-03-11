import React from "react";
import { shallow } from "enzyme";
import Home from "../Home";

jest.mock("axios", () => {
  const testEvents = {
    events: []
  };

  return {
    get: jest.fn(() => Promise.resolve(testEvents))
  };
});

const axios = require("axios");

it("Fetch registered Users #componentDidMount", done => {
  const wrapper = shallow(<Home />);
  wrapper.instance().componentDidMount();
  expect(axios.get).toHaveBeenCalled();
  expect(axios.get).toHaveBeenCalledWith(
    "https://events-apps.herokuapp.com/api/events/all"
  );
  expect(wrapper.state()).toMatchSnapshot("events", []);
  done();
});
