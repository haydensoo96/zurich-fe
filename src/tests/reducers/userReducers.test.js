// filepath: /Users/haydensoo/Project/zurich-fe/src/tests/reducers/userReducers.test.js
import userReducer from "../../reducers/userReducer";

describe("userReducer", () => {
  const initialState = {
    id: null,
    name: "",
    email: "",
  };

  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_USER", () => {
    const action = {
      type: "SET_USER",
      payload: {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
      },
    };
    const expectedState = {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    };
    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle CLEAR_USER", () => {
    const action = {
      type: "CLEAR_USER",
    };
    const currentState = {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    };
    expect(userReducer(currentState, action)).toEqual(initialState);
  });
});
