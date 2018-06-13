import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducer";
import Root from "./component/Root";

const store = createStore(todoApp);

render(<Root store={store} />, document.getElementById("root"));
