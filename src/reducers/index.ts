// filepath: /Users/haydensoo/Project/zurich-fe/src/reducers/index.ts
import { combineReducers } from "redux";
import userReducer from "./userReducer";
// import other reducers

const rootReducer = combineReducers({
  user: userReducer,
  // other reducers
});

export default rootReducer;
