import React, { Component } from "react"

export default class HideMe extends Component {
    constructor(props) {
        super(props);
        this.titleWasClicked = this.titleWasClicked.bind(this);
        this.toggleContent = this.toggleContent.bind(this);
        this.state = {
            showContent: true
        };
    }
    titleWasClicked(event) {
        event.preventDefault();
        const { dataCallback } = this.props;
        if (dataCallback !== undefined) {
            dataCallback("err");
        }
    }

    toggleContent(event) {
        event.preventDefault();
        this.setState({
            showContent: !this.state.showContent
        });
    }

    render() {
        const { post } = this.props;
        const { showContent } = this.state;
        return (
            <div>
                <h1 onClick={this.titleWasClicked}></h1>
                {showContent === true ? <h1>Where did I go?</h1> : ""}
                <button onClick={this.toggleContent}>Hide Me</button>

            </div>
        );
    }
}
