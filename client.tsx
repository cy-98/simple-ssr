import React from "react";
import App from './src/index';
import { hydrate } from "react-dom";

hydrate(<App />, document.getElementById('app'));