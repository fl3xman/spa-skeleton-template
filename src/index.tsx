import "reflect-metadata";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "mobx-react";

import { provideBoot } from "./assembly/BootProvider";

import { Router } from "./components/router";

import "../assets/styles/main.scss";

ReactDOM.render(
    <Provider {...provideBoot()}>
        <Router />
    </Provider>,
    document.getElementById("root"),
);
