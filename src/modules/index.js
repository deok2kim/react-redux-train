// 리듀서가 여러개 있을 경우 루트 리듀서를 만들기
import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
