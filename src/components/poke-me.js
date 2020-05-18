import React, { Component } from "react";

export default class PokeMe extends Component {
  constructor(props) {
    super(props);
    this.titleWasClicked = this.titleWasClicked.bind(this);
    this.toggleContent = this.toggleContent.bind(this);
    this.state = {
      showContent: true,
    };
  }
  titleWasClicked(event) {
    event.preventDefault();
    const { dataCallback } = this.props;
    if (dataCallback !== undefined) {
      dataCallback("hello world");
    }
  }

  toggleContent(event) {
    event.preventDefault();
    this.setState({
      showContent: !this.state.showContent,
    });
  }

  render() {
    const { post } = this.props;
    const { showContent } = this.state;
    return (
      <div>
        <h1 onClick={this.titleWasClicked}></h1>
        {showContent === true ? <h1>Poke</h1> : <h1>Me</h1>}
        <button onClick={this.toggleContent}>Poke Me</button>
      </div>
    );
  }
}
