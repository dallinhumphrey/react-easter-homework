import React, { Component } from "react";

export default class FontSize extends Component {
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
    render() {
        return (
            <div className="App">
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
                    <button onClick={() => this.handleCrementer(-1)}>Sub</button>
                </div>
            </div>
        );
    }
}