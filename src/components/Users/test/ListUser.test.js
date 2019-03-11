import React from "react";
import ListUser from "../ListUser";
import { shallow } from "enzyme";

jest.mock("axios", () => {
  const testUsers = {
    users: []
  };

  return {
    get: jest.fn(() => Promise.resolve(testUsers))
  };
});

const axios = require("axios");

it("Fetch registered Users #componentDidMount", done => {
  const wrapper = shallow(<ListUser />);
  wrapper.instance().componentDidMount();
  expect(axios.get).toHaveBeenCalled();
  expect(axios.get).toHaveBeenCalledWith(
    "https://events-apps.herokuapp.com/api/users/all"
  );
  expect(wrapper.state()).toMatchSnapshot("users", []);
  done();
});
