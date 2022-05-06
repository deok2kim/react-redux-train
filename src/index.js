import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 4. 스토어 만들기
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";

// 6. 리덕스 개발자도구
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools()); // 개발자도구 활성화
// console.log(store.getState()); // 상태 확인

const root = ReactDOM.createRoot(document.getElementById("root"));

// 프로바이더로 감싸면 모든 컴포넌트에서 리덕스 스토어에 접근할 수 있게 된다.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
