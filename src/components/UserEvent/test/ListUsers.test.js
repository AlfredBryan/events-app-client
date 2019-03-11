import React from "react";
import { shallow } from "enzyme";
import ListUsers from "../ListUsers";

jest.mock("axios", () => {
  const testUsers = {
    users: []
  };

  return {
    get: jest.fn(() => Promise.resolve(testUsers))
  };
});

const match = {
  params: {
    eventId: 678256526 //any id you want to set
  }
};

const axios = require("axios");

it("Fetch registered Users #componentDidMount", done => {
  const wrapper = shallow(<ListUsers match={match} />);
  wrapper.instance().componentDidMount();
  expect(axios.get).toHaveBeenCalled();
  expect(axios.get).toHaveBeenCalledWith(
    "https://events-apps.herokuapp.com/api/events/undefined"
  );
  expect(wrapper.state()).toMatchSnapshot("users", []);
  done();
});
