import React, { Component } from "react";

export default class ClockTicker extends Component {
    constructor() {
        super();

        this.state = {
            time: new Date()
        };
    }

    tick = () => {
        this.setState({
            time: new Date()
        });
    };

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
            </div>
        );
    }
}
