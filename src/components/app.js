import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import moment from "moment";


import "./styles.scss";
import TimeContainer from "./time-container";
import FontSize from "./font-size";
import HideMe from "./hide-me"
import CountMe from "./count-me"
import PokeMe from "./poke-me"
import ColorChanger from "./color-changer"
import ClockTicker from "./clock-ticker"
import NavigationComponent from "./navigation-container"

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <NavigationComponent />
          <ClockTicker />


          <Switch>
            <Route path="/poke-me" component={PokeMe} />
            <Route exact path="/color-changer" component={ColorChanger} />
            <Route path="/hide-me" component={HideMe} />
            <Route path="/font-size" component={FontSize} />
            <Route path="/count-me" component={CountMe} />
          </Switch>

        </div>
      </div>

    );
  }
}