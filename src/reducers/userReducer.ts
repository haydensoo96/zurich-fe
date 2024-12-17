const initialState = {
  id: null,
  name: "",
  email: "",
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        ...action.payload,
      };
    case "CLEAR_USER":
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
