import React, { Component } from "react";
import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <h1> Easter's Revenge </h1>
          <h1> Put something here </h1>
          <h1> Put something here </h1>

          <h1>Dallin's Homework</h1>
          <div>{moment().format(" h:mm:ss a")}</div>

          <div>
            <h2
              style={{
                fontSize: `${
                  this.state.count === 0 ? "normal" : this.state.count
                  }px`
              }}
            >
              {this.state.count}
            </h2>
            <button onClick={() => this.handleCrementer(1)}>Add</button>
            <button onClick={hide => this.handleCrementer(-1)}>Sub</button>
          </div>
        </div>
      </div>
    );
  }

  constructor(props) {
    super();
    this.state = {
      count: 20
    };
  }
  handleCrementer = increment => {
    this.setState({
      count: this.state.count + increment
    });
  };
}

