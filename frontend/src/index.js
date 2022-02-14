import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./RootRedux/index";
import NAVIGATION_ROUTES from './Navigation/index'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Routes goes here  */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
