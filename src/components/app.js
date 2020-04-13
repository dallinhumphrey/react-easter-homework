import React, { Component } from "react";
import moment from "moment";

import TimeContainer from "./time-container";
import FontSize from "./font-size";
import HideMe from "./hide-me"

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <h1> Easter's Revenge </h1>
          <TimeContainer />
          <FontSize />
          <HideMe />

        </div>
      </div>

    );
  }
}