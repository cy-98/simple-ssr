import React from "react";
import { Page } from "./pages/index";
import { hydrate } from "react-dom";

hydrate(<Page />, document.getElementById("app"), () => {
  console.log("hydrate eaa   and");
});
