import React, { Component } from "react";


export default class ColorChanger extends Component {
    constructor() {
        super()
        this.state = {
            userInput: "",
            color: "Black"
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            color: this.state.userInput,
            userInput: ""
        })
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="App">
                <h1 style={{ color: this.state.color }}>{this.state.color}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Enter HTML Color (plain text)"
                        type="text"
                        name="userInput"
                        value={this.state.userInput}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Change Color</button>
                </form>
            </div>
        );
    }
}