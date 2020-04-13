import React, { Component } from "react"
import moment from "moment";

export default class PortfolioContainer extends Component {
    render() {
        return (
            <div>
                <div>{moment().format(" h:mm:ss a")}</div>
            </div>
        )
    }
}